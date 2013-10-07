package com.zotyo.videos.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;

import com.zotyo.videos.pojo.Video;

public class VideoDAOCustomImpl implements VideoDAOCustom {
	
	private MongoTemplate mongoTemplate;
	
	@Autowired
	public void setMongoTemplate(MongoTemplate mongoTemplate) {
		this.mongoTemplate = mongoTemplate;
	}
	
	@Override
	public Video findNewest() {
		Query query = new Query();
		query.limit(1).with(new Sort(Direction.DESC, "createDate"));
		return mongoTemplate.findOne(query, Video.class);
	}
}
