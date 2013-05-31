package com.zotyo.diary.jsonws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.pojos.CountsBean;
import com.zotyo.photos.service.PhotoService;
import com.zotyo.videos.dao.VideoDAO;

@Controller
@RequestMapping("/counts")
public class CountsJSONController extends BaseJSONController {

	@Autowired
	private DiaryDAO diaryDAO;
	
	@Autowired
	protected PhotoService photoService;

	@Autowired
	private VideoDAO videoDAO;
	
	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public CountsBean getCounts() {
		CountsBean cb = new CountsBean();
		cb.setEventCount(diaryDAO.getEventCount());
		cb.setPhotoCount(photoService.count());
		cb.setVideoCount(videoDAO.count());
		
		return cb;
	}
}
