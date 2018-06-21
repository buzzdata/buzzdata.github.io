_satellite.pushAsyncScript(function(event, target, $variables){
  try{
$('.nav-header a.nav-search-link').click(function(){ClickOmniTrack(true,'event10','img:header:','search');});
$('.brand-container a.brand-link').click(function(){ClickOmniTrack(true,'event10','logo:header:','nvidia')});
$('.brand-container a.dropdown-arrow').click(function(){ClickOmniTrack(true,'event10','link:header:nav:','nvidia-dropdown')});
$('.menu-container .global-nav-link').click(function() {var $this = $(this);var getCal = $this.children('img.global-nav-image');if (getCal.length > 0){ClickOmniTrackNav(true, 'event10,event11', 'img:header:nav:dropdown:'+$this.parents('.xl-8').find('.nav-section-title .body-text').text()+':', $this.children('.global-nav-title').text());}else {ClickOmniTrackNav(true, 'event10,event11', 'link:header:nav:dropdown:'+$this.parents('.xl-4').find('.nav-section-title .body-text').text()+':', $this.text());}});
$('.nav-tools-container a.nav-profile-link').click(function(){ClickOmniTrack(true,'event10','img:header:nav:','my account')});
$('.sub-brand-nav a.sub-brand-name #sub-brand-logo').click(function() {var getAttr=$(this).attr('src');var getVal=getAttr.substring(getAttr.lastIndexOf('/')+1).split('-Logo')[0];ClickOmniTrack(true, 'event10', 'logo:header:', getVal);});
  if(document.URL.indexOf('www.nvidiaaiconference.com')>-1){  
  $('.sub-brand-nav a.sub-brand-link,#sub-brand .sub-brand-name').click(function(){var getTxt=$(this).text().trim();ClickOmniTrackNav(true,'event10,event11','link:header:nav:',getTxt)})
  }
  }catch(e){}

});
