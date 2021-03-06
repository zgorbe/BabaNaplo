package com.zotyo.diary.ws;

import java.util.Date;
import java.util.List;

import javax.jws.Oneway;
import javax.jws.WebMethod;
import javax.jws.WebResult;
import javax.jws.WebService;

import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

@WebService
public interface Diary {
	@WebMethod
	@WebResult(name = "Event")
	List<Event> getEventsForADay(Date theDay);

	@WebMethod
	@WebResult(name = "Day")
	List<Day> getDaysForAMonth(int year, int month);
	
	@WebMethod
	@WebResult(name = "Day")
	List<Day> getAllDaysInDiary();
	
	@WebMethod
	@WebResult(name = "Day")
	Day getDay(Date theDay);
	
	@WebMethod
	@WebResult(name = "Event")
	List<Event> getAllEvents();

	@WebMethod
	@WebResult(name = "Event")
	List<Event> searchEvents(String searchTerm);

	@WebMethod
	List<String> searchTerms(String term);
	
	@WebMethod
	@Oneway
	void addDay(Day day);
	
	@WebMethod
	@Oneway
	void addEvent(Date theDay, Event event);

}
