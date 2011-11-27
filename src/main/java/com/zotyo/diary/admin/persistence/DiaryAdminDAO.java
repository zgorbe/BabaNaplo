package com.zotyo.diary.admin.persistence;

import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

public interface DiaryAdminDAO {
	List<Day> getAllDays();
	Day getDayById(Integer dayId);
	void updateDay(Day d);
	List<Event> getEventsByDay(Integer dayId);
	void updateEvent(Event e);
	void deleteEvent(Integer eventId);
	void deleteDay(Integer dayId);
}