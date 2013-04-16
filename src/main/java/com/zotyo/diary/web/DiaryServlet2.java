package com.zotyo.diary.web;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;


public class DiaryServlet2 extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryServlet2.class); 
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
			
        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary2.jsp");
        rd.forward(request, response);
	}
}
