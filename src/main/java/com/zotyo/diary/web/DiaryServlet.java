package com.zotyo.diary.web;

import java.io.IOException;
import java.io.InputStream;
import java.net.URL;
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
		request.setAttribute("eventsOfTheDay", 
							diary.getEventsForADay(df.newXMLGregorianCalendar(new GregorianCalendar())));
        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary.jsp");
        rd.forward(request, response);
	}

	@Override
	public void doPost(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		String action = request.getParameter("action");
		if ("add_day".equals(action)) {
			
		} else if ("add_event".equals(action)) {
			
		}
	}
}
