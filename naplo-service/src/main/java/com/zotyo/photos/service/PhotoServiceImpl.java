package com.zotyo.photos.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import com.zotyo.photos.dao.PhotoDAO;
import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;
import com.zotyo.photos.util.PhotoDataEnum;

@Service
public class PhotoServiceImpl implements PhotoService {

	private static final String DIARY_CACHE = "diaryCache";

	@Autowired
	@Qualifier("PhotoDAO")
	private PhotoDAO photoDAO;

	@CacheEvict(value = DIARY_CACHE, allEntries = true)
	public void save(Photo photo, PhotoData photoData) {
		photoDAO.save(photo, photoData);
	}

	public void deleteByFilename(String filename) {
		photoDAO.deleteByFilename(filename);
	}

	public void update(Photo photo) {
		photoDAO.update(photo);
	}

	@Cacheable(value = DIARY_CACHE, key="'photos'")
	public List<Photo> findByCategory(String category) {
		List<Photo> photos = photoDAO.findByCategory(category);
		return photos;
	}

	@Cacheable(value = DIARY_CACHE, key="'photos:latests'")
	public List<Photo> findLatestsByCategory(String category, int count) {
		return photoDAO.findLatestsByCategory(category, count);
	}

	@Cacheable(value = DIARY_CACHE, key="'photos:map'")
	public Map<Integer, List<Photo>> findMapByCategory(String category) {
		Map<Integer, List<Photo>> photoMap = new LinkedHashMap<Integer, List<Photo>>();
		List<Photo> photos = photoDAO.findByCategory(category);
		for (Photo photo : photos) {
			Calendar calendar = new GregorianCalendar();
			calendar.setTime(photo.getCreatedate());
			int year = calendar.get(Calendar.YEAR);
			if (photoMap.containsKey(year)) {
				List<Photo> photoList = photoMap.get(year);
				photoList.add(photo);
			} else {
				List<Photo> photoList = new ArrayList<Photo>();
				photoList.add(photo);
				photoMap.put(year, photoList);
			}
		}
		return photoMap;
	}

	public List<Photo> findAll() {
		return photoDAO.findAll();
	}

	@Cacheable(value = DIARY_CACHE, key="'photos:' + #filename")
	public Photo findByFilename(String filename) {
		return photoDAO.findByFilename(filename);
	}

	@Cacheable(value = DIARY_CACHE, key="'photos:latests:' + #filename", condition="#cache")
	public PhotoData getDataByFilename(String filename, PhotoDataEnum dataFlag, boolean cache) {
		return photoDAO.getDataByFilename(filename, dataFlag);
	}

	public List<Photo> searchPhotos(String searchTerm) {
		return photoDAO.searchPhotos(searchTerm);
	}

	public List<String> searchKeywords(String term) {
		return photoDAO.searchKeywords(term);
	}

	@Cacheable(value = DIARY_CACHE, key="'photos:count'")
	public long count() {
		return photoDAO.count();
	}
}
