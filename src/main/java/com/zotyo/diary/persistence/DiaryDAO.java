package com.zotyo.diary.persistence;

import java.util.Date;
import java.util.List;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

public interface DiaryDAO {
	List<Event> getEventsForADay(Date theDay);
	List<Day> getDaysForAMonth(int year, int month);
	List<Day> getAllDaysInDiary();
	List<Event> getAllEvents();
	Day getDay(Date theDay);
	List<Event> searchEvents(String searchTerm);
	List<String> searchTerms(String term);
	
	void addDay(Day day);
	void addEvent(Date theDay, Event event);
}
