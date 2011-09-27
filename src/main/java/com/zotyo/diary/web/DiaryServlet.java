package com.zotyo.diary.web;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;
import javax.xml.namespace.QName;

import org.apache.log4j.Logger;

import com.zotyo.diary.client.Day;
import com.zotyo.diary.client.Event;
import com.zotyo.diary.client.Diary;
import com.zotyo.diary.client.DiaryImplService;

public class DiaryServlet extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryServlet.class); 
	
	private Diary diary;
	private DatatypeFactory df;
	
	public void init() throws ServletException {
		try {
			InputStream inputStream = ClassLoader.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);
			
			URL wsdlURL = new URL(props.getProperty("wsdlURL"));
			DiaryImplService diaryService = new DiaryImplService(wsdlURL, new QName("http://ws.diary.zotyo.com/", "DiaryImplService")); 
			diary = diaryService.getDiaryImplPort();
            df = DatatypeFactory.newInstance();
			
		} catch(IOException ioex) {
			ioex.printStackTrace();
		} catch (DatatypeConfigurationException dce) {
            throw new IllegalStateException("Exception while obtaining DatatypeFactory instance", dce);
		}
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
		String theDayString = request.getParameter("theDay");
		String command = request.getParameter("cmd");
		if ("addday".equals(command)) {
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/addday.jsp");
			rd.forward(request, response);
			
			return;
		}
		if ("addevent".equals(command)) {
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/addevent.jsp");
			rd.forward(request, response);
			
			return;
		}
		SimpleDateFormat format = new SimpleDateFormat("MM/dd/yyyy");
		if (theDayString != null && theDayString.length() > 0) {
			Date theDay = null;
			try {
				theDay = format.parse(request.getParameter("theDay"));
			} catch (ParseException e) {
				logger.error(e);
			}
			if (theDay == null) theDay = new Date();
			
			GregorianCalendar theDayCal = new GregorianCalendar();
			theDayCal.setTime(theDay);
			Day d = diary.getDay(df.newXMLGregorianCalendar(theDayCal));
			if (d != null) {
				request.setAttribute("eventsOfTheDay", d.getEventsOfTheDay());
				request.setAttribute("descriptionOfTheDay", d.getDescriptionOfTheDay());
			} else {
				request.setAttribute("eventsOfTheDay", new ArrayList<Event>());
			}
			request.setAttribute("theDay", theDayString);
			

			RequestDispatcher rd = getServletContext().getRequestDispatcher("/events.jsp");
			rd.forward(request, response);
		}
		else {
			Date theDay = new Date();
			GregorianCalendar theDayCal = new GregorianCalendar();
			theDayCal.setTime(theDay);
			Day d = diary.getDay(df.newXMLGregorianCalendar(theDayCal));
			if (d != null) {
				theDayString = format.format(new Date());
				request.setAttribute("theDay", theDayString);
				request.setAttribute("eventsOfTheDay", d.getEventsOfTheDay());
				request.setAttribute("descriptionOfTheDay", d.getDescriptionOfTheDay());
			} else {
				request.setAttribute("eventsOfTheDay", new ArrayList<Event>());
			}
			
	        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary.jsp");
	        rd.forward(request, response);
		}
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		String action = request.getParameter("action");
		
		String theDay = request.getParameter("theDay");
		String descriptionOfTheDay = request.getParameter("descriptionOfTheDay");
		String duration = request.getParameter("duration");
		String initialEvent = request.getParameter("initialEvent");
		String startDate = request.getParameter("startDate");
		
		if ("add_day".equals(action)) {
			if (theDay != null && theDay.length() > 0) {
				Day day = new Day();
				GregorianCalendar theDayCal = DiaryHelper.getDayCal(theDay);
				day.setTheDay(df.newXMLGregorianCalendar(theDayCal));
				day.setDescriptionOfTheDay(descriptionOfTheDay);
				
				Event event = new Event();
				event.setDescription(initialEvent);
				event.setDuration(DiaryHelper.getDuration(duration));
				GregorianCalendar startDateCal = DiaryHelper.getStartDateCal(startDate);
				event.setStartTime(df.newXMLGregorianCalendar(startDateCal));
				day.getEventsOfTheDay().add(event);
				diary.addDay(day);
			}
		} else if ("add_event".equals(action)) {
			GregorianCalendar theDayCal = DiaryHelper.getDayCal(theDay);
			Event event = new Event();
			event.setDescription(initialEvent);
			event.setDuration(DiaryHelper.getDuration(duration));
			GregorianCalendar startDateCal = DiaryHelper.getStartDateCal(startDate);
			event.setStartTime(df.newXMLGregorianCalendar(startDateCal));
			diary.addEvent(df.newXMLGregorianCalendar(theDayCal), event);
		}
		
		response.sendRedirect("/diaryweb");
	}
	
}
