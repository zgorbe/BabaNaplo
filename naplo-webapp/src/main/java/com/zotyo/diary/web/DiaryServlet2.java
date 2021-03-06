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
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.SerializationFeature;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.context.support.SpringBeanAutowiringSupport;

import com.zotyo.diary.pojos.CountsBean;
import com.zotyo.diary.service.DiaryService;
import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.service.PhotoService;
import com.zotyo.videos.dao.VideoDAO;
import com.zotyo.videos.pojo.Video;


public class DiaryServlet2 extends HttpServlet {

	private static Logger logger = Logger.getLogger(DiaryServlet2.class);

	@Autowired
	private DiaryService diaryService;

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

		String jsMinifyParam = request.getParameter("js_minify");
		if ("false".equals(jsMinifyParam)) {
			request.setAttribute("js_minify", false);
		} else {
			InputStream inputStream = ClassLoader.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);

			boolean js_minify = Boolean.parseBoolean(props.getProperty("js_minify"));
			request.setAttribute("js_minify", js_minify);
			inputStream.close();
		}
		List<Photo> photos = photoService.findByCategory("baba");
		request.setAttribute("photos", photos);

		List<Photo> latestPhotos = photoService.findLatestsByCategory("baba", 6);
		ObjectMapper mapper = new ObjectMapper();

		mapper.configure(SerializationFeature.WRITE_DATES_AS_TIMESTAMPS,	false);

		try {
			request.setAttribute("latestPhotosJSON", mapper.writeValueAsString(latestPhotos));
		} catch (Exception e) {
			logger.error(e);
		}

		Video video = videoDAO.findNewest();
		if (video != null) {
			request.setAttribute("newestVideoId", video.getVideoId());
		}
		CountsBean cb = new CountsBean();
		cb.setDayCount(diaryService.getDayCount());
		cb.setEventCount(diaryService.getEventCount());
		cb.setPhotoCount(photoService.count());
		cb.setVideoCount(videoDAO.count());
		request.setAttribute("countsBean", cb);

        RequestDispatcher rd = getServletContext().getRequestDispatcher("/diary2.jsp");
        rd.forward(request, response);
	}
}
