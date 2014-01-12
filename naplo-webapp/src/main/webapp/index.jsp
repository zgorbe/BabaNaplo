<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@page import="org.springframework.mobile.device.DeviceUtils" %>
<%@page import="org.springframework.mobile.device.Device" %>
	
<%
	/*Device currentDevice = DeviceUtils.getCurrentDevice(request);
	if (currentDevice.isMobile()) {
		response.sendRedirect("/m/naplo");
	} else { */
		response.sendRedirect("/naplo2/");
	//}
%>