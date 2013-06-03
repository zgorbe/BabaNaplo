package com.zotyo.diary.web;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.CountsBean;
import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.service.PhotoService;
import com.zotyo.videos.dao.VideoDAO;


public class DiaryServlet2 extends HttpServlet {
	
	private static Logger logger = Logger.getLogger(DiaryServlet2.class); 
	
	@Autowired
	private DiaryDAO diaryDAO;
	
	@Autowired
	protected PhotoService photoService;

	@Autowired
	private VideoDAO videoDAO;
	
	public void init() throws ServletException {
		SpringBeanAutowiringSupport.processInjectionBasedOnCurrentContext(this);
	}
	
	@Override
	public void doGet(HttpServletRequest request, HttpServletResponse response) 
											throws ServletException, IOException {
		
		List<Photo> photos = photoService.findByCategory("baba");
		request.setAttribute("photos", photos);
			
		CountsBean cb = new CountsBean();
		cb.setEventCount(diaryDAO.getEventCount());
		cb.setPhotoCount(photoService.count());
		cb.setVideoCount(videoDAO.count());
		request.setAttribute("countsBean", cb);
		
        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary2.jsp");
        rd.forward(request, response);
	}
}
