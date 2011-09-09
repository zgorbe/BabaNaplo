package com.zotyo.diary.ws;

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
		// TODO Auto-generated method stub
		return null;
	}

	public List<Day> getDaysForAMonth(int month) {
		// TODO Auto-generated method stub
		return null;
	}
	
	public List<Day> getAllDaysInDiary() {
		return diaryDAO.getAllDaysInDiary();
	}

	public List<Event> getAllEvents() {
		return diaryDAO.getAllEvents();
	}

	public void addDay(Day day) {
		diaryDAO.addDay(day);
	}

	public void addEvent(Date theDay, Event event) {
		// TODO Auto-generated method stub
		
	}
}
