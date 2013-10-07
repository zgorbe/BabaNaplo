package com.zotyo.diary.admin.persistence.mappers;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.zotyo.diary.pojos.Day;

public class DayMapper implements RowMapper<Day> {
    public Day mapRow(ResultSet rs, int rowNum) throws SQLException {
        Day day = new Day();
        day.setId(rs.getInt("id"));
        day.setDescriptionOfTheDay(rs.getString("text"));
        day.setTheDay(rs.getTimestamp("the_day"));
        return day;
    }
}
