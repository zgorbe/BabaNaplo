<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<form action="/diaryweb" method="POST" accept-charset="UTF-8">
    <p>
        <label for="theDay">A nap dátuma:</label>
        <input type="text" name="theDay" />
    </p>
    <p>
        <label for="name">Leírása:</label>
        <textarea name="descriptionOfTheDay" cols="30" rows="10" ></textarea>
    </p>
    
    <p>
        <label for="startDate">Az esemény kezdete:</label>
        <input type="text" name="startDate" />
    </p>
    <p>
        <label for="duration">Az esemény időtartama:</label>
        <input type="text" name="duration" />
    </p>
	<p>
        <label for="initialEvent">Az esemény:</label>
        <textarea name="initialEvent" cols="30" rows="10" ></textarea>
    </p>    
    <p><input type="submit" value="Küldés" /></p>
    <input type="hidden" name="action" value="add_day" />
</form>