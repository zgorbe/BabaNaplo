<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%@taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 
<%@taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<section>
  <h3>Videók</h3>
  <p id="video_text">Kiságyban állós, kacagós :)</p>

  <iframe id="videoframe" onload="initVideos();" src="http://www.youtube.com/embed/XO2K6dlyvv4" allowfullscreen="1" width="560" frameborder="1" height="420"></iframe>
  
  <div id="tS2" class="jThumbnailScroller" style="height: 112px;">
    <div class="jTscrollerContainer">
      <div class="jTscroller">
        <a href="javascript:void(0);" onclick="showvideo('XO2K6dlyvv4','Kiságyban állós, kacagós :)');">
          <img src="http://img.youtube.com/vi/XO2K6dlyvv4/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('xbayBVMviQU','Enyém lesz a kocka!:');">
          <img src="http://img.youtube.com/vi/xbayBVMviQU/2.jpg">
        </a>
      	<a href="javascript:void(0);" onclick="showvideo('aUPrPxj3-r4','Tudtok szájról olvasni?:');">
          <img src="http://img.youtube.com/vi/aUPrPxj3-r4/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('DhzSbUxWV1s','Kúszó verseny a mobil ágyban:');">
          <img src="http://img.youtube.com/vi/DhzSbUxWV1s/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('nyRAONvirAM','Nehéz az ébredés hétvégén, még reggel 9-kor is:');">
          <img src="http://img.youtube.com/vi/nyRAONvirAM/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('s90rT9Ww_HI','Sikerült egy kis kacagásra is rávenni Timcsit :)');">
          <img src="http://img.youtube.com/vi/s90rT9Ww_HI/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('g0_JZQJeNeI','Timcsi első Karácsonyán már egész hangosan tudott magyarázni:');">
          <img src="http://img.youtube.com/vi/g0_JZQJeNeI/2.jpg">
        </a>
        <a href="javascript:void(0);" onclick="showvideo('IzkX0_pvcXU','Timcsi 11 hetesen:');">
          <img src="http://img.youtube.com/vi/IzkX0_pvcXU/2.jpg">
        </a>
      </div>
    </div>
  </div>
</section>