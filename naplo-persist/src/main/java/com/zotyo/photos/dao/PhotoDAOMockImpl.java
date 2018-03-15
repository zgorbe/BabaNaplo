package com.zotyo.photos.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;
import com.zotyo.photos.util.PhotoDataEnum;

@Repository
@Qualifier("PhotoDAOMock")
public class PhotoDAOMockImpl implements PhotoDAO {

	@Override
	public void save(Photo photo, PhotoData photoData) {
		// TODO Auto-generated method stub

	}

	@Override
	public void deleteByFilename(String filename) {
		// TODO Auto-generated method stub

	}

	@Override
	public void update(Photo photo) {
		// TODO Auto-generated method stub

	}

	@Override
	public List<Photo> findByCategory(String category) {
		return new ArrayList<Photo>();
	}

	@Override
	public List<Photo> findLatestsByCategory(String category, int count) {
		return new ArrayList<Photo>();
	}

	@Override
	public List<Photo> findAll() {
		return new ArrayList<Photo>();
	}

	@Override
	public Photo findByFilename(String filename) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public PhotoData getDataByFilename(String filename, PhotoDataEnum dataFlag) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Photo> searchPhotos(String searchTerm) {
		return new ArrayList<Photo>();
	}

	@Override
	public List<String> searchKeywords(String term) {
		return new ArrayList<String>();
	}

	@Override
	public List<PhotoData> getAllThumbsByCategory(String category) {
		return new ArrayList<PhotoData>();
	}

	@Override
	public long count() {
		// TODO Auto-generated method stub
		return 0;
	}

}
