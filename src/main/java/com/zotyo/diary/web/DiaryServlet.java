package com.zotyo.diary.web;

import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.GregorianCalendar;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.datatype.DatatypeConfigurationException;
import javax.xml.datatype.DatatypeFactory;

import org.apache.log4j.Logger;

import com.zotyo.diary.client.Diary;
import com.zotyo.diary.client.DiaryImplService;

public class DiaryServlet extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryServlet.class); 
	
	private Diary diary;
	private DatatypeFactory df;
	
	public void init() throws ServletException {
		String hostname = "";
		try {
			InetAddress localhost = InetAddress.getLocalHost();
			hostname = localhost.getHostName();
		} catch (UnknownHostException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		logger.info("***hostname:" + hostname);
		DiaryImplService diaryService = new DiaryImplService(); 
		diary = diaryService.getDiaryImplPort();
		
		try {
            df = DatatypeFactory.newInstance();
        } catch (DatatypeConfigurationException dce) {
            throw new IllegalStateException(
                "Exception while obtaining DatatypeFactory instance", dce);
        }
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		request.setAttribute("eventsOfTheDay", 
							diary.getEventsForADay(df.newXMLGregorianCalendar(new GregorianCalendar())));
        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary.jsp");
        rd.forward(request, response);
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
	}
}
