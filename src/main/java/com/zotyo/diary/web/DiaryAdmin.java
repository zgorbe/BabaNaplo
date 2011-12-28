package com.zotyo.diary.web;

import java.io.IOException;
import java.io.InputStream;
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
		RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin/login.jsp");
		rd.forward(request, response);
		return;
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
			String id = request.getParameter("id");
			Day day = diaryAdminDAO.getDayById(Integer.parseInt(id));

			request.setAttribute("day", day);

			RequestDispatcher rd = getServletContext().getRequestDispatcher("/admin/show.jsp");
			rd.forward(request, response);
			return;
			
		}
		
		/*
		List<Day> days = diaryAdminDAO.getAllDays();
		for(Day d : days) {
			out.println(d.getId() + ", " + d.getTheDay() + ", " + d.getDescriptionOfTheDay());
		}
		Day first = diaryAdminDAO.getDayById(1);*/

	}
}

