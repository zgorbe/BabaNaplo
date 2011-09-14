package com.zotyo.diary.ws;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import javax.jws.WebService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;


@WebService(endpointInterface = "com.zotyo.diary.ws.Diary")
public class DiaryImpl extends SpringBeanAutowiringSupport implements Diary {

	@Autowired
	private DiaryDAO diaryDAO;
	
	public List<Event> getEventsForADay(Date theDay) {
		return diaryDAO.getEventsForADay(resetHMS(theDay));
	}

	public List<Day> getDaysForAMonth(int month) {
		return diaryDAO.getDaysForAMonth(month);
	}
	
	public List<Day> getAllDaysInDiary() {
		return diaryDAO.getAllDaysInDiary();
	}

	public List<Event> getAllEvents() {
		return diaryDAO.getAllEvents();
	}

	public void addDay(Day day) {
		day.setTheDay(resetHMS(day.getTheDay()));
		diaryDAO.addDay(day);
	}

	public void addEvent(Date theDay, Event event) {
		theDay = resetHMS(theDay);
		diaryDAO.addEvent(theDay, event);
	}
	
	private Date resetHMS(Date d) {
		//resetting hours:minutes:seconds to zero		
		Calendar cal=Calendar.getInstance();
		cal.setTime(d);
		cal.set(Calendar.HOUR_OF_DAY, 0);
		cal.set(Calendar.MINUTE, 0);
		cal.set(Calendar.SECOND, 0);
		return cal.getTime();
	}
}
