package com.zotyo.diary.jsonws;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.zotyo.diary.persistence.DiaryDAO;
import com.zotyo.diary.service.DiaryService;
import com.zotyo.diary.web.DiaryHelper;

@Component
public abstract class BaseJSONController {
	
	protected String password;
	
	protected DiaryService diaryService;
	protected DiaryHelper diaryHelper;

	@Autowired
	public void setDiaryHelper(DiaryHelper diaryHelper) {
		this.diaryHelper = diaryHelper;
	}

	@Autowired
	public void setDiaryService(DiaryService diaryService) {
		this.diaryService = diaryService;
	}

	@PostConstruct
	public void init() {
		try {
			InputStream inputStream = ClassLoader
					.getSystemResourceAsStream("diary.properties");
			Properties props = new Properties();
			props.load(inputStream);

			password = props.getProperty("keyword");
		} catch (IOException ioex) {
			ioex.printStackTrace();
		}
	}
}
