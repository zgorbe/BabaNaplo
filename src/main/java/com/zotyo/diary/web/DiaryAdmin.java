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
import org.springframework.web.context.WebApplicationContext;
import org.springframework.web.context.support.WebApplicationContextUtils;

import com.zotyo.diary.persistence.DiaryDAO;

public class DiaryAdmin extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryAdmin.class); 
	
	private DiaryDAO diaryDAO;
	private DiaryHelper diaryHelper;
	private String keyword;
	
	
	
	public void init() throws ServletException {
		try {
			InputStream inputStream = ClassLoader.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);
			
			keyword = props.getProperty("keyword");

			WebApplicationContext webApplicationContext = WebApplicationContextUtils.getRequiredWebApplicationContext(this.getServletContext());
			diaryDAO = webApplicationContext.getAutowireCapableBeanFactory().getBean("diaryDAOMockImpl", DiaryDAO.class);		
			
		} catch(IOException ioex) {
			ioex.printStackTrace();
		}
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		PrintWriter out = new PrintWriter(response.getOutputStream());
		out.println("Napok száma: " + diaryDAO.getAllDaysInDiary().size());
		out.close();
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
	}
}

