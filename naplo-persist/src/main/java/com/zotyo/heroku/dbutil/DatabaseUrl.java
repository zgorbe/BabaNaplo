package com.zotyo.heroku.dbutil;

import org.springframework.stereotype.Component;

@Component
public class DatabaseUrl {

	//format: postgres://user:password@hostname/path
	private String databaseUrl;
	
	public DatabaseUrl(String url) {
		databaseUrl = url;
		System.out.println("DATABASE_URL: " + databaseUrl);
	}
	
	public String getUrl() {
		return "jdbc:postgresql://" + 
			databaseUrl.split("@")[1];
	}
	
	public String getUsername() {
		int atIndex = databaseUrl.indexOf('@');
		int doublePerIndex = databaseUrl.indexOf("//");
		
		return databaseUrl.substring(doublePerIndex + 2, atIndex).split(":")[0];
	}
	
	public String getPassword() {
		int atIndex = databaseUrl.indexOf('@');
		int doublePerIndex = databaseUrl.indexOf("//");
		
		return databaseUrl.substring(doublePerIndex + 2, atIndex).split(":")[1];		
	}
	
	public static void main(String[] args) {
		DatabaseUrl d = new DatabaseUrl("postgres://user:password@hostname/path");
		System.out.println(d.getUrl() + " - " + d.getUsername() + " - " + d.getPassword());
	}
}
