package com.zotyo.diary.persistence;

import java.util.Date;
import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

public interface DiaryDAO {
	List<Event> getEventsForADay(Date theDay);
	List<Day> getDaysForAMonth(int month);
	List<Day> getAllDaysInDiary();
	List<Event> getAllEvents();
	
	void addDay(Day day);
	void addEvent(Date theDay, Event event);
}
