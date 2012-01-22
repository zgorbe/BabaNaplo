package com.zotyo.photos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zotyo.photos.dao.PhotoDAO;
import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;

@Service
public class PhotoServiceImpl implements PhotoService {
	
	@Autowired
	private PhotoDAO photoDAO;
	
	@Override
	public void save(Photo photo, PhotoData photoData) {
		// TODO Auto-generated method stub
		photoDAO.save(photo, photoData);
	}


	@Override
	public void deleteByFilename(String filename) {
		// TODO Auto-generated method stub
		photoDAO.deleteByFilename(filename);
	}

	@Override
	public void update(Photo photo) {
		// TODO Auto-generated method stub
		photoDAO.update(photo);
		
	}

	@Override
	public List<Photo> findByCategory(String category) {
		// TODO Auto-generated method stub
		return photoDAO.findByCategory(category);
	}

	@Override
	public List<Photo> findAll() {
		// TODO Auto-generated method stub
		return photoDAO.findAll();
	}
	
	@Override
	public Photo findByFilename(String filename) {
		// TODO Auto-generated method stub
		return photoDAO.findByFilename(filename);
	}


	@Override
	public PhotoData getDataByFilename(String filename) {
		// TODO Auto-generated method stub
		return photoDAO.getDataByFilename(filename);
	}

}
