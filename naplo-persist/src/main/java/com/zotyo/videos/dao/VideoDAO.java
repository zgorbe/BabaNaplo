package com.zotyo.videos.dao;

import org.springframework.data.repository.PagingAndSortingRepository;

import com.zotyo.videos.pojo.Video;

public interface VideoDAO extends PagingAndSortingRepository<Video, String>, VideoDAOCustom {

}
