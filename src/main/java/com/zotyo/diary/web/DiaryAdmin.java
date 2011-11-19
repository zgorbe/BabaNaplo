package com.zotyo.diary.web;

import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.util.Properties;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.zotyo.diary.admin.persistence.DiaryAdminDAO;

public class DiaryAdmin extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryAdmin.class); 
	
	@Autowired
	private DiaryAdminDAO diaryAdminDAO;
	
		
	public void init() throws ServletException {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		PrintWriter out = new PrintWriter(response.getOutputStream());
		out.println("Napok száma: " + diaryAdminDAO.getAllDays().size());
		out.close();
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
	}
}

