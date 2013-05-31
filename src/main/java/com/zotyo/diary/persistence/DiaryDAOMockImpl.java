package com.zotyo.diary.persistence;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

@Repository
public class DiaryDAOMockImpl implements DiaryDAO {

	private List<Day> diary;
	
	public DiaryDAOMockImpl() {
		diary = new ArrayList<Day>();
		//initMockDiary();
	}
	public DiaryDAOMockImpl(List<Day> daylist) {
		this.diary = daylist;
	}
	
	public int addDay(Day day) {
		diary.add(day);
		return 0;
	}

	public int addEvent(Date theDay, Event event) {
		return 0;
	}

	public List<Day> getAllDaysInDiary() {
		return diary;
	}

	public List<Event> getAllEvents() {
		List<Event> events = new ArrayList<Event>();
		for (Day d : diary) {
			events.addAll(d.getEventsOfTheDay());
		}
		return events;
	}

	public List<Day> getDaysForAMonth(int year, int month) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<Event> getEventsForADay(Date theDay) {
		// TODO Auto-generated method stub
		return null;
	}

	private void initMockDiary() {
		Calendar cal1 = Calendar.getInstance();
		cal1.set(2011, 8, 1, 8, 1, 1);
		
		Event event1 = new Event("Test event 1", cal1.getTime(), 1000 * 60 * 60);
		Day day1 = new Day(event1.getStartTime(), event1, "Test day 1");

		Calendar cal2 = Calendar.getInstance();
		cal2.set(2011, 8, 1, 10, 1, 1);
		
		Event event2 = new Event("Test event 2", cal2.getTime(), 1000 * 60 * 60 * 4);
		day1.addEvent(event2);
		
		Calendar cal3 = Calendar.getInstance();
		cal3.set(2011, 8, 1, 8, 1, 1);
		
		Event event3 = new Event("Test event 3", cal1.getTime(), 1000 * 60 * 30);
		Day day2 = new Day(event3.getStartTime(), event3, "Test day 2");
		
		diary.add(day1);
		diary.add(day2);
	}

	@Override
	public Day getDay(Date theDay) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<Event> searchEvents(String searchTerm) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public List<String> searchTerms(String term) {
		// TODO Auto-generated method stub
		return null;
	}
	@Override
	public long getEventCount() {
		// TODO Auto-generated method stub
		return 0;
	}
}
