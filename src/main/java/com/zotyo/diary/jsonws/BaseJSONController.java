package com.zotyo.diary.jsonws;

import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

@Component
public abstract class BaseJSONController {
	
	protected String password;
	
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
