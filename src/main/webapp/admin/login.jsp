<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<title>Belépés</title>
	    <link href="<c:url value="/css/style.css" />" rel="stylesheet" type="text/css" media="screen" />
    	<link href="<c:url value="/css/table.css" />" rel="stylesheet" type="text/css" media="screen" />
    	<link href="<c:url value="/css/admin.css" />" rel="stylesheet" type="text/css" media="screen" />
	</head>
	<body>
		<div id="admin_login">
			<h3>
				<c:out value="${msg}" />	
			</h3>
			<form action="/diaryweb/admin" method="post" accept-charset="UTF-8">
				<table border="0" cellpadding="5" cellspacing="5">
					<tr>
						<td>Felhasználónév:</td>
						<td align="left">
							<input type="text" name="username" maxlength="12" value="" />
						</td>
					</tr>
					<tr>
						<td>Jelszó:</td>
						<td align="left">
							<input type="password" name="password" maxlength="15" value="" /></td>
					</tr>
					<tr>
						<td colspan="2" align="center">
							<button type="submit">Belépés</button>
						</td>
					</tr>
				</table>
				<input type="hidden" name="cmd" value="login" />
			</form>
			<font color="red">
			</font>
		</div>
	</body>
</html>
