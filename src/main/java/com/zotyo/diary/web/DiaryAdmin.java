package com.zotyo.diary.web;

import java.io.IOException;
import java.io.InputStream;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.zotyo.diary.admin.persistence.DiaryAdminDAO;
import com.zotyo.diary.pojos.Day;
import com.zotyo.diary.pojos.Event;

public class DiaryAdmin extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryAdmin.class); 
	
	@Autowired
	private DiaryAdminDAO diaryAdminDAO;
	
	private DiaryHelper diaryHelper;
	private String keyword;
		
	public void init() throws ServletException {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
		try {
			InputStream inputStream = ClassLoader.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);
			
			keyword = props.getProperty("keyword");
			diaryHelper = new DiaryHelper();
		} catch(IOException ioex) {
			ioex.printStackTrace();
		}
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		response.sendRedirect("/admin/admin.jsp");
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		String command = request.getParameter("cmd");
		
		if ("login".equals(command)) {
			String password = request.getParameter("password");
			if (!diaryHelper.md5(password).equals(keyword)) {
				RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin/login.jsp");
				rd.forward(request, response);
				return;
			}
			
			List<Day> days = diaryAdminDAO.getAllDays();
			request.setAttribute("days", days);
			
			request.getSession().setAttribute("admin", true);

			RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin/admin.jsp");
			rd.forward(request, response);
			return;
		}
		
		if ("show".equals(command)) {
			String dayString = request.getParameter("day");
			Date theDay = null;
			SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd");
			if (dayString != null && dayString.length() > 0) {
				try {
					theDay = format.parse(dayString);
				} catch (ParseException e) {
					logger.error(e);
				}
			}
			if (theDay == null) theDay = new Date();
			
			Calendar cal=Calendar.getInstance();
			cal.setTime(theDay);
			cal.set(Calendar.HOUR_OF_DAY, 12);
			cal.set(Calendar.MINUTE, 0);
			cal.set(Calendar.SECOND, 0);
			
			Day day = diaryAdminDAO.getDayByDate(cal.getTime());
			if (day != null) {
				List<Event> events = diaryAdminDAO.getEventsByDay(day.getId());
				
				request.setAttribute("day", day);
				request.setAttribute("events", events);
			}
			request.setAttribute("dayString", dayString);
			RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin/edit.jsp");
			rd.forward(request, response);
			return;
		}
		
		if ("update_day".equals(command)) {
			String id = request.getParameter("id");
			String descriptionOfTheDay = request.getParameter("descriptionOfTheDay");
			Day d = new Day();
			d.setId(Integer.parseInt(id));
			d.setDescriptionOfTheDay(descriptionOfTheDay);
			boolean b = diaryAdminDAO.updateDay(d);
			if (b) {
				response.sendRedirect("/admin/admin.jsp");
				return;
			}
		}
	}
}

