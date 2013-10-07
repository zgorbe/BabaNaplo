package com.zotyo.videos.pojo;

import java.util.Date;

public class Video {
	private String id;
	private String description;
	private String videoId;
	private Date createDate;
	
	public Video() { }
	
	public Video(String description, String videoId, Date createDate) {
		this.description = description;
		this.videoId = videoId;
		this.createDate = createDate;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getVideoId() {
		return videoId;
	}
	public void setVideoId(String videoId) {
		this.videoId = videoId;
	}
	public Date getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Date createDate) {
		this.createDate = createDate;
	}
}
