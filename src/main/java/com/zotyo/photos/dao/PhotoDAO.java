package com.zotyo.photos.dao;

import java.util.List;

import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;
import com.zotyo.photos.util.PhotoDataEnum;

public interface PhotoDAO {
	void save(Photo photo, PhotoData photoData);
	void deleteByFilename(String filename);
	void update(Photo photo);
	List<Photo> findByCategory(String category);
	List<Photo> findAll();
	Photo findByFilename(String filename);
	PhotoData getDataByFilename(String filename, PhotoDataEnum dataFlag);
	List<Photo> searchPhotos(String searchTerm);
	List<String> searchKeywords(String term);
	List<PhotoData> getAllThumbsByCategory(String category);
	long count();
}
