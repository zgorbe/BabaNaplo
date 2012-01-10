package com.zotyo.photos.pojo;

import java.util.Date;

public class Photo {
	private int id;
	private String description;
	private String filename;
	private String category;
	private String url;
	private Date createdate;
	private byte[] thumbdata;
	
	public Photo() {}
	
	public Photo(int id, String description, String filename, String category,
			String url, Date createdate, byte[] thumbdata) {
		this.id = id;
		this.description = description;
		this.filename = filename;
		this.category = category;
		this.url = url;
		this.createdate = createdate;
		this.thumbdata = thumbdata;
	}
	
	public Photo(String description, String filename, String category,
			String url, Date createdate, byte[] thumbdata) {
		this.description = description;
		this.filename = filename;
		this.category = category;
		this.url = url;
		this.createdate = createdate;
		this.thumbdata = thumbdata;
	}
	
	public Photo(int id, String description, String filename, String category,
			String url, Date createdate) {
		this.id = id;
		this.description = description;
		this.filename = filename;
		this.category = category;
		this.url = url;
		this.createdate = createdate;
	}
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
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
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Date getCreatedate() {
		return createdate;
	}
	public void setCreatedate(Date createdate) {
		this.createdate = createdate;
	}
	public byte[] getThumbdata() {
		return thumbdata;
	}
	public void setThumbdata(byte[] thumbdata) {
		this.thumbdata = thumbdata;
	}
	
	
}
