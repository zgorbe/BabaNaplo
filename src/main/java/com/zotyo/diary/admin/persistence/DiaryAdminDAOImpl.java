package com.zotyo.diary.admin.persistence;

import java.util.List;

import org.springframework.jdbc.core.simple.SimpleJdbcDaoSupport;
import org.springframework.stereotype.Repository;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

@Repository
public class DiaryAdminDAOImpl extends SimpleJdbcDaoSupport implements DiaryAdminDAO {

	@Override
	public List<Day> getAllDays() {
		return null;
	}

	@Override
	public Day getDayById(Integer dayId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateDay(Day d) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Event> getEventsByDay(Integer dayId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void updateEvent(Event e) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteEvent(Integer eventId) {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void deleteDay(Integer dayId) {
		// TODO Auto-generated method stub
		
	}

}
