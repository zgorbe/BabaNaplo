<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>
  
<%@page import="com.zotyo.photos.pojo.Photo"%>  
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
  

<!DOCTYPE html> 
<html> 
	<head> 
		<title>Baba napló</title> 
		<meta name="viewport" content="width=device-width, initial-scale=1"> 
		<link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
		<script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
		<script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>
	</head> 
	<body> 
		<div data-role="page">
			<div data-role="header">
				<h1>Baba napló</h1>
			</div>
		
			<div data-role="content">	
				<p>Hello world</p>		
			</div>
		
		</div>
	</body>
</html>