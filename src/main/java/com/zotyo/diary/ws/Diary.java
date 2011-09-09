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
	@WebResult(partName = "Event")
	List<Event> getEventsForADay(Date theDay);

	@WebMethod
	@WebResult(partName = "Day")
	List<Day> getDaysForAMonth(int month);
	
	@WebMethod
	@WebResult(partName = "Day")
	List<Day> getAllDaysInDiary();
	
	@WebMethod
	@WebResult(partName = "Event")
	List<Event> getAllEvents();
	
	@WebMethod
	@Oneway
	void addDay(Day day);
	
	@WebMethod
	@Oneway
	void addEvent(Date theDay, Event event);

}
