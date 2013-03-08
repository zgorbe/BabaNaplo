package com.zotyo.diary.admin.persistence;

import java.util.Date;
import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

public interface DiaryAdminDAO {
	List<Day> getAllDays();
	List<Event> getAllEvents();
	Day getDayById(Integer dayId);
	Day getDayByDate(Date day);
	boolean updateDay(Day d);
	List<Event> getEventsByDay(Integer dayId);
	boolean updateEvent(Event e);
	void deleteEvent(Integer eventId);
	void deleteDay(Integer dayId);
}
