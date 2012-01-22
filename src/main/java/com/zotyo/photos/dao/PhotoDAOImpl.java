package com.zotyo.photos.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Order;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Repository;

import static org.springframework.data.mongodb.core.query.Criteria.*;

import com.zotyo.photos.pojo.Photo;
import com.zotyo.photos.pojo.PhotoData;

@Repository
public class PhotoDAOImpl implements PhotoDAO {

	@Autowired
	private MongoTemplate photoMongoTemplate;
	
	@Override
	public void save(Photo photo, PhotoData photoData) {
		photoMongoTemplate.insert(photoData);
		String data_id = photoData.getId();
		photo.setDataId(data_id);
		photoMongoTemplate.insert(photo);
	}


	@Override
	public void deleteByFilename(String filename) {
		Photo photo = photoMongoTemplate.findAndRemove(new Query(where("filename").is(filename)), Photo.class);
		if (photo != null) {
			String data_id = photo.getDataId();
			photoMongoTemplate.findAndRemove(new Query(where("id").is(data_id)), PhotoData.class);
		}
	}

	@Override
	public void update(Photo photo) {
		// TODO Auto-generated method stub
		photoMongoTemplate.updateFirst(new Query(where("filename").is(photo.getFilename())), Update.update("keywords", photo.getKeywords()), Photo.class);
		
	}

	@Override
	public List<Photo> findByCategory(String category) {
		Query query = new Query(where("category").is(category));
		query.sort().on("createdate", Order.DESCENDING);
		List<Photo> photos = photoMongoTemplate.find(query, Photo.class);
		return photos;
	}

	@Override
	public List<Photo> findAll() {
		List<Photo> photos = photoMongoTemplate.findAll(Photo.class);
		return photos;
	}
	
	@Override
	public Photo findByFilename(String filename) {
		Photo photo = photoMongoTemplate.findOne(new Query(where("filename").is(filename)), Photo.class);
		return photo;
	}

	@Override
	public PhotoData getDataByFilename(String filename) {
		Photo photo = photoMongoTemplate.findOne(new Query(where("filename").is(filename)), Photo.class);
		String data_id = photo.getDataId();
		PhotoData photoData = photoMongoTemplate.findById(data_id, PhotoData.class);
		return photoData;
	}
}
