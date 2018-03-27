package com.zotyo.diary.jsonws;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zotyo.diary.util.DateUtil;
import com.zotyo.videos.dao.VideoDAO;
import com.zotyo.videos.pojo.Video;

@Controller
@RequestMapping("/videos")
public class VideoJSONController extends BaseJSONController {

	@Autowired
	private VideoDAO videoDAO;

	@RequestMapping(value = "/form", method = RequestMethod.POST, consumes = "application/x-www-form-urlencoded")
	@ResponseBody
	public Video addVideoForm(@RequestParam String keyword,
			@RequestParam String theDay,
			@RequestParam String description,
			@RequestParam String videoId) {
		if (diaryHelper.md5(keyword).equals(password)) {
			Video video = new Video();
			video.setDescription(description);
			video.setVideoId(videoId);
			video.setCreateDate(DateUtil.resetHMS(diaryHelper.getDayCal(theDay).getTime()));

			videoDAO.save(video);
			return video;
		}
		return new Video();
	}

	@RequestMapping(method = RequestMethod.GET)
	@ResponseBody
	public Iterable<Video> getAllEvents() {
		return videoDAO.findAll(new Sort(Sort.Direction.DESC, "createDate"));
	}

	@RequestMapping(value = "/newest", method = RequestMethod.GET)
	@ResponseBody
	public Video getNewest() {
		return videoDAO.findNewest();
	}
}
