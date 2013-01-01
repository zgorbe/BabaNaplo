<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="org.springframework.mobile.device.DeviceUtils" %>
<%@page import="org.springframework.mobile.device.Device" %>
	
<%
	Device currentDevice = DeviceUtils.getCurrentDevice(request);
	if (currentDevice.isNormal()) {
		response.sendRedirect("/naplo");
	} else {
		response.sendRedirect("/m/naplo");
	}
%>