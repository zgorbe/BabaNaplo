<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<div data-role="fieldcontain">
    <fieldset data-role="controlgroup" data-type="horizontal">
        <legend>Év, hónap</legend>

        <label for="select-choice-year">Year</label>
        <select name="select-choice-year" id="select-choice-year">
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>                        
            <!-- etc. -->
        </select>
        <label for="select-choice-month">Month</label>
        <select name="select-choice-month" id="select-choice-month">
            <option value="jan">January</option>
            <!-- etc. -->
        </select>
    </fieldset>
</div>