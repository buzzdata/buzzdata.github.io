_satellite.pushAsyncScript(function(event, target, $variables){
  if(document.URL.indexOf('www.nvidia.com/')>-1){
  if(document.URL.indexOf('www.nvidia.com.tr/')>-1 || document.URL.indexOf('de-at/')>-1 || document.URL.indexOf('fr-be/')>-1 || document.URL.indexOf('de-ch/')>-1 || document.URL.indexOf('cs-cz/')>-1 || document.URL.indexOf('da-dk/')>-1 || document.URL.indexOf('fi-fi/')>-1 || document.URL.indexOf('nl-nl/')>-1 || document.URL.indexOf('nb-no/')>-1 || document.URL.indexOf('sv-se/')>-1){
  $('body').append('<script type="text/javascript">var google_conversion_id = 1041525299;var google_custom_params = window.google_tag_params;var google_remarketing_only = true;</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>');
  }else{}
}else{
  $('body').append('<script type="text/javascript">var google_conversion_id = 1041525299;var google_custom_params = window.google_tag_params;var google_remarketing_only = true;</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script>');
}
});
