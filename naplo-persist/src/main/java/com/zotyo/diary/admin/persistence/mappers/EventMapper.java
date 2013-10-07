package com.zotyo.diary.admin.persistence.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.zotyo.diary.pojos.Event;

public class EventMapper implements RowMapper<Event> {
    public Event mapRow(ResultSet rs, int rowNum) throws SQLException {
    	Event event = new Event();
    	event.setId(rs.getInt("id"));
    	event.setDescription(rs.getString("text"));
    	event.setDuration(rs.getLong("duration"));
    	event.setStartTime(rs.getTimestamp("starttime"));
        return event;
    }
}
