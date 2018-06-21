_satellite.pushAsyncScript(function(event, target, $variables){
  if(document.URL.indexOf('www.nvidia.com/')>-1){
  if(document.URL.indexOf('www.nvidia.com.tr/')>-1 || document.URL.indexOf('de-at/')>-1 || document.URL.indexOf('fr-be/')>-1 || document.URL.indexOf('de-ch/')>-1 || document.URL.indexOf('cs-cz/')>-1 || document.URL.indexOf('da-dk/')>-1 || document.URL.indexOf('fi-fi/')>-1 || document.URL.indexOf('nl-nl/')>-1 || document.URL.indexOf('nb-no/')>-1 || document.URL.indexOf('sv-se/')>-1){
  $('body').append('<script type="text/javascript">_linkedin_data_partner_id = "234962";</script><script type="text/javascript">(function(){var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})();</script>');
}else{}
}else{
	$('body').append('<script type="text/javascript">_linkedin_data_partner_id = "234962";</script><script type="text/javascript">(function(){var s = document.getElementsByTagName("script")[0];var b = document.createElement("script");b.type = "text/javascript";b.async = true;b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b, s);})();</script>');
}

});
