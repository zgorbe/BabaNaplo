package com.zotyo.photos.service;

import java.util.List;
import java.util.Map;

import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;
import com.zotyo.photos.util.PhotoDataEnum;

public interface PhotoService {
	void save(Photo photo, PhotoData photoData);
	void deleteByFilename(String filename);	
	void update(Photo photo);
	List<Photo> findByCategory(String category);
	List<Photo> findLatestsByCategory(String category, int count);
	Map<Integer, List<Photo>> findMapByCategory(String category);
	List<Photo> findAll();
	Photo findByFilename(String filename);
	PhotoData getDataByFilename(String filename, PhotoDataEnum dataFlag, boolean cache);
	List<Photo> searchPhotos(String searchTerm);
	List<String> searchKeywords(String term);
	long count();
}
