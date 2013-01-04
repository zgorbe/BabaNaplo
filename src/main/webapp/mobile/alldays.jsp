<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<%@page import="java.util.Date"%>
<%@page import="java.text.ParseException"%>
<%@page import="java.text.SimpleDateFormat"%>
<%@page import="com.zotyo.diary.client.Event"%>
<%@page import="com.zotyo.diary.client.Day"%>
<%@page import="com.zotyo.diary.web.DiaryHelper"%>

<% DiaryHelper diaryHelper = new DiaryHelper(); %>

<div data-role="fieldcontain">
    <fieldset data-role="controlgroup" data-type="horizontal">
        <label for="select-year">Year</label>
        <select class="alldays-filter" name="select-year" id="select-year" data-native-menu="false" data-mini="true">
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>                        
        </select>
        <label for="select-month">Month</label>
        <select class="alldays-filter" name="select-month" id="select-month" data-native-menu="false" data-mini="true">
            <option value="0">Január</option>
            <option value="1">Február</option>
            <option value="2">Március</option>
            <option value="3">Április</option>
            <option value="4">Május</option>
            <option value="5">Június</option>
            <option value="6">Július</option>
            <option value="7">Augusztus</option>
            <option value="8">Szeptember</option>
            <option value="9">Október</option>
            <option value="10">November</option>
            <option value="11">December</option>
        </select>
    </fieldset>
    <c:choose>  
        <c:when test="${fn:length(alldays) > 0}">
            <c:forEach items="${alldays}" var="day">
                <b><%= diaryHelper.formatDate((Day)pageContext.getAttribute("day")) %> - <c:out value="${day.descriptionOfTheDay}" /></b> <br />
                    <c:forEach items="${day.eventsOfTheDay}" var="event">
                        <div class="entry_item">
                            <c:out value="${event.description}" />
                            <c:if test="${event.duration > 0}">
                                <br />Időtartam (óra:perc):
                                <%= diaryHelper.getDurationInHHMM((Event)pageContext.getAttribute("event")) %>  
                            </c:if>
                        </div>
                    </c:forEach>
            </c:forEach>
        </c:when>
        <c:otherwise>
            A kiválasztott hónapra nincs nap a naplóban. 
        </c:otherwise>
    </c:choose>
    <script type="text/javascript">
        $(function(){
            $("#select-year").val(<c:out value="${year}" />);
            $("#select-month").val(<c:out value="${month}" />);
        });
    </script>
</div>