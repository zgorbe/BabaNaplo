package com.zotyo.photos.pojo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

public class Photo {
	private String id;
	private String description;
	private String filename;
	private String category;
	private Date createdate;
	private String data_id;
	private List<String> keywords;
	
	public Photo() {}
	
	public Photo(String description, String filename, String category, Date createdate, String data_id) {
		this.description = description;
		this.filename = filename;
		this.category = category;
		this.createdate = createdate;
		this.data_id = data_id;
		initKeywords();
	}
	
	public Photo(String description, String filename, String category, Date createdate) {
		this(description, filename, category, createdate, null);
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
		initKeywords();
	}
	public String getFilename() {
		return filename;
	}
	public void setFilename(String filename) {
		this.filename = filename;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public Date getCreatedate() {
		return createdate;
	}
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	public String getDataId() {
		return data_id;
	}
	public void setDataId(String data_id) {
		this.data_id = data_id;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}
	
	public List<String> getKeywords() {
		return keywords;
	}
	
	private void initKeywords() {
		keywords = new ArrayList<String>();
		String tmp[] = description.split(" ");
		for (String s : tmp) {
			String keyword = s.replaceAll("\\.", "").replaceAll(",","").replaceAll("!","").trim().toLowerCase();
			if (keyword.length() > 2) {
				keywords.add(keyword);
			}
		}
	}
}
