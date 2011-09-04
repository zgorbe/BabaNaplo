package com.zotyo.diary.ws;

import java.util.Date;
import java.util.List;

import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebService;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

@WebService
public interface Diary {
	@WebMethod
	List<Event> getEventsForADay(Date theDay);

	@WebMethod
	List<Day> getDaysForAMonth(int month);
	
	@WebMethod
	List<Day> getAllDaysInDiary();
	
	@WebMethod
	List<Event> getAllEvents();
	
	@WebMethod
	@Oneway
	void addDay(Day day);
	
	@WebMethod
	@Oneway
	void addEvent(Date theDay, Event event);

}
