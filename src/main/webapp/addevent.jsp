<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form action="/diaryweb" method="POST" accept-charset="UTF-8">
	<table class="box-table-a">
	    <tr>
	        <td><label for="theDay">A nap dátuma:</label></td>
	        <td><input id="theDayInput" type="text" name="theDay" readonly="readonly" /></td>
	    </tr>
	    <tr>
	        <td><label for="startDate">Az esemény kezdete:</label></td>
	        <td><input id="startDateInput" type="text" name="startDate" /></td>
	    </tr>
	    <tr>
	        <td><label for="duration">Az esemény időtartama:</label></td>
	        <td><input id="durationInput" type="text" name="duration" /></td>
	    </tr>
		<tr>
	        <td><label for="initialEvent">Az esemény:</label></td>
	        <td><textarea name="initialEvent" cols="56" rows="6" ></textarea></td>
	    </tr>    
	    <tr>
	    	<td><input type="submit" value="Küldés" /></td>
	    	<td><input type="button" value="Mégse" onclick="hide_add_div();" /></td>
	    </tr>
    </table>
    <input type="hidden" name="action" value="add_event" />
</form>
<script type="text/javascript">
	$(function(){
		$("#theDayInput").val(selectedDay);
		$('#startDateInput').datetimepicker();
		$('#durationInput').timepicker({});
	});
</script>