_satellite.pushAsyncScript(function(event, target, $variables){
  try{
  if(document.URL.indexOf('/gtc')<0 && document.URL.indexOf('/ja-jp/geforce/products/10series/laptops/max-q/')<0 && document.URL.indexOf('/en-us/geforce/products/10series/laptops/max-q/')<0){$('.subnav-container a.breadcrumb-link span, .subnav-container a.breadcrumb-page-link span').click(function(){var takeDotVal=$(this).parent('a.breadcrumb-link,a.breadcrumb-page-link').attr('href');var curr_href= window.location.href; if((curr_href.indexOf('max-q') > -1 && takeDotVal == '#shop')){ClickOmniTrackNav(this,'event10,event11,event14','button:header:sub-nav:','notify me');}else if(takeDotVal=='#buynow'||takeDotVal=='#shop'){ClickOmniTrackNav(this,'event10,event11,event2','button:header:sub-nav:','buy now');}else{ClickOmniTrackNav(this,'event10,event11','link:header:sub-nav:',takeDotVal);}});}
  $('.page-footer__links .page-footer-link-set__links li a').click(function(){var takeDotVal=$(this).text();ClickOmniTrack(this,'event10','link:footer:',takeDotVal)});
  $('.page-footer__subscribe .subscribe-container .button .btn,.page-footer__subscribe .subscribe-container .button-pascal .btn-pascal').click(function(){var takeDotVal=$(this).text();ClickOmniTrack(this,'event10','button:footer:',takeDotVal)});
}catch(e){}
});
