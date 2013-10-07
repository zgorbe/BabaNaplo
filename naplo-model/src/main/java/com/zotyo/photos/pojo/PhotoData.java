package com.zotyo.photos.pojo;

import java.io.Serializable;

public class PhotoData implements Serializable {
	private String id;
	private byte[] data;
	private byte[] thumbdata;
	
	public PhotoData(byte[] data, byte[] thumbdata) {
		this.data = data;
		this.thumbdata = thumbdata;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public byte[] getData() {
		return data;
	}
	public void setData(byte[] data) {
		this.data = data;
	}
	public byte[] getThumbdata() {
		return thumbdata;
	}
	public void setThumbdata(byte[] thumbdata) {
		this.thumbdata = thumbdata;
	}
}
