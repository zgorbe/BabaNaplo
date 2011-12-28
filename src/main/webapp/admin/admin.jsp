<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.diary.pojos.Day"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>
  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    <link href="<c:url value="/css/style.css" />" rel="stylesheet" type="text/css" media="screen" />
    	<link href="<c:url value="/css/table.css" />" rel="stylesheet" type="text/css" media="screen" />
    	<link href="<c:url value="/css/admin.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" type="text/css" media="screen" />
	          
		<script type="text/javascript" src="<c:url value="/js/jquery-1.4.2.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.ui.datepicker-hu.js" />"></script>
		<title>Admin</title>
	</head>
	<body>
		<div id="admin_days">
			<table class="box-table-a" width="300px" border="1px solid">
				<c:forEach items="${days}" var="day">
					<tr onclick='adminGetDay(<c:out value="${day.id}" />);'>
						<td><c:out value="${day.id}" /></td>
						<td><c:out value="${day.descriptionOfTheDay}" /></td>
					</tr>
				</c:forEach>
			</table>
		</div>
		<div id="admin_day_details">
		</div>
	</body>
</html>
