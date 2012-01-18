<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="com.zotyo.photos.pojo.Photo"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

  <html xmlns="http://www.w3.org/1999/xhtml">
	<head>
	    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	    <link href="<c:url value="/css/photos.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/photostable.css" />" rel="stylesheet" type="text/css" media="screen" />
	    <link href="<c:url value="/css/jquery-ui-1.8.9.custom.css" />" rel="stylesheet" type="text/css" media="screen" />
	          
		<script type="text/javascript" src="<c:url value="/js/jquery-1.4.2.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-1.8.9.custom.min.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery-ui-timepicker-addon.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/main.js" />"></script>
		<script type="text/javascript" src="<c:url value="/js/jquery.ui.datepicker-hu.js" />"></script>
		<title>Képek</title>		
	</head>
	<body>
		<div id="container">
			<div id="content">
				<div id="header">
					<div id="title">
						<h3>Feltöltött képek</h3>
					</div>
					<div id="menu">
						<table cellspacing="6">
							<tr>
								<td><a href="/home" title="Frissítés"><img src="/images/refresh.png" /></a></td>
								<td><a href="javascript:void(0);" onclick="$('#new_form').toggle();" title="Hozzáadás"><img src="/images/plus.png" /></a></td>
							</tr>
						</table>
					</div>
				</div>
				<div style="clear: both;">	
					<div id="new_form" style="display: none;">
						<fieldset>
							<legend><b>Új kép feltöltés</b></legend>
							<form action="/photos" method="post" enctype="multipart/form-data" accept-charset="UTF-8">
								<table class="box-table-a">
									<tr>
										<td><label for="category">Kategória:</label></td>
										<td>
											<select name="category">
												<option value="baba">Baba</option>
												<option value="flat">Lakás</option>
												<option value="other">Egyéb</option>
											</select>
										</td>
									</tr>								
									<tr>
										<td><label for="file">Fájl:</label></td>
										<td><input type="file" name="file" id="file" size="40" /></td>
									</tr>
									<tr>
										<td><label for="description">Leírás:</label></td>
										<td><textarea rows="3" cols="42" name="description"></textarea></td>
									</tr>
									<tr>
										<td><label for="createdate">Dátum:</label></td>
										<td><input type="text" name="createdate" id="createdate" /></td>
									</tr>
									<tr>
										<td colspan="2" align="center"><input type="submit" value="Küldés" />&nbsp;<input type="button" value="Mégse" onclick="$('#new_form').toggle();" /></td>
									</tr>
								</table>
							</form>
						</fieldset>
					</div> 
					<c:if test="${not empty photos}">
						<form name="photos" action="/home" method="post">
							<table class="box-table-a">
								<tr>
									<th>Fájlnév</th>
									<th>Leírás</th>
									<th>Legutóbbi módosítás</th>
									<th>Előnézet</th>
									<th><a href="#" title="Törlés" onclick="if (confirm('Biztosan törlöd a képet?')) document.forms['photos'].submit();"><img src="/images/trash.png" /></a></th>
								</tr>
								<c:forEach items="${photos}" var="photo">
									<tr>
										<td><a target="_blank" href="/home?cmd=data&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>"><%= ((Photo)pageContext.getAttribute("photo")).getFilename() %></a></td>
										<td><%= ((Photo)pageContext.getAttribute("photo")).getDescription() %></td>
										<td><%= ((Photo)pageContext.getAttribute("photo")).getCreatedate() %></td>
										<td>
											<img src="/home?cmd=thumbdata&filename=<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" />
										</td>
										<td><input type="radio" name="file2delete" value="<%= ((Photo)pageContext.getAttribute("photo")).getFilename() %>" /></td>
									</tr>
								</c:forEach>
							</table>
							<input type="hidden" name="cmd" value="delete" />
						</form>
					</c:if>
				</div>
			</div>
		</div>	
		<script type="text/javascript">
			$(function(){
				$('#createdate').datetimepicker();			
			});
		</script>
	</body>
</html>
