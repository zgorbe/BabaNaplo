package com.zotyo.diary.persistence;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.apache.log4j.Logger;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.DayEntity;
import com.zotyo.diary.pojos.Event;
import com.zotyo.diary.pojos.EventEntity;

@Transactional
@Repository
public class DiaryDAOJPAImpl implements DiaryDAO {

	private static Logger logger = Logger.getLogger(DiaryDAOJPAImpl.class);
	
    @PersistenceContext(unitName = "DiaryPU")
    private EntityManager em;
    
	public void addDay(Day day) {
		DayEntity de = PersistenceUtil.getDayEntity(day);
		em.persist(de);
	}

	public Day getDay(Date theDay) {
		Query query = em.createNamedQuery("DayEntity.findByTheDay");
		query.setParameter("theDay", theDay);
        List<DayEntity> result = (List<DayEntity>)query.getResultList();
        
        if (result.size() == 0) {
        	logger.warn("Date not found in database - " + theDay);
            return null;
        }
        DayEntity de = result.get(0);
        return PersistenceUtil.getDay(de);
	}
	
	public void addEvent(Date theDay, Event event) {
        Query query = em.createNamedQuery("DayEntity.findByTheDay");
        query.setParameter("theDay", theDay);
        List<DayEntity> result = (List<DayEntity>)query.getResultList();
        
        if (result.size() == 0) {
        	logger.warn("Date not found in database - " + theDay);
            return;
        }
        DayEntity de = result.get(0);
        EventEntity ee = PersistenceUtil.getEventEntity(event);
        ee.setTheDay(de);
        em.persist(ee);
	}

	public List<Day> getAllDaysInDiary() {
		List<DayEntity> result = (List<DayEntity>)em.createQuery("select object(o) from DayEntity as o").getResultList();
		List<Day> rv = new ArrayList<Day>();
		for (DayEntity de : result) {
			rv.add(PersistenceUtil.getDay(de));
		}
		return rv;
	}

	public List<Event> getAllEvents() {
		List<EventEntity> result = (List<EventEntity>)em.createQuery("select object(o) from EventEntity as o").getResultList();
		List<Event> rv = new ArrayList<Event>();
		for (EventEntity ee : result) {
			rv.add(PersistenceUtil.getEvent(ee));
		}
		return rv;
	}

	public List<Day> getDaysForAMonth(int year, int month) {
		List<Day> rv = new ArrayList<Day>();
		Calendar startDay = GregorianCalendar.getInstance();
		startDay.set(year, month, 1);
		
		Calendar endDay = GregorianCalendar.getInstance();
		endDay.set(year, month, 1);
		endDay.set(GregorianCalendar.DAY_OF_MONTH, endDay.getActualMaximum(GregorianCalendar.DAY_OF_MONTH));
		
		Query query = em.createNamedQuery("DayEntity.findByMonth");
        query.setParameter("startDay", startDay.getTime());
        query.setParameter("endDay", endDay.getTime());
        List<DayEntity> result = (List<DayEntity>)query.getResultList();
        
        for (DayEntity de : result) {
        	rv.add(PersistenceUtil.getDay(de));
        }
        
		return rv;
	}

	public List<Event> getEventsForADay(Date theDay) {
		List<Event> events = new ArrayList<Event>();
        Query query = em.createNamedQuery("DayEntity.findByTheDay");
        query.setParameter("theDay", theDay);
        List<DayEntity> result = query.getResultList();
        
        if (result.size() == 0) {
        	logger.warn("Date not found in database - " + theDay);
            return events;
        }
        
        for (EventEntity ee : result.get(0).getEventsOfTheDay()) {
        	events.add(PersistenceUtil.getEvent(ee));
        }
		return events;
	}

}
