package com.zotyo.photos.service;

import java.util.List;

import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;

public interface PhotoService {
	void save(Photo photo, PhotoData photoData);
	void deleteByFilename(String filename);	
	void update(Photo photo);
	List<Photo> findByCategory(String category);
	List<Photo> findAll();
	Photo findByFilename(String filename);
	PhotoData getDataByFilename(String filename);
}
