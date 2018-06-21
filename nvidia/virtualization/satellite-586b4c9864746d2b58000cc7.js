_satellite.pushAsyncScript(function(event, target, $variables){
  try{if (document.URL.indexOf('/shield/shop') < 0 && document.URL.indexOf('/shield/buy') < 0){$('.text-button .button div.btn').click(function(){var takeDotVal=$(this).text().toLowerCase();if($(this).text().toLowerCase()=='view all android games'||$(this).text().toLowerCase()=='view all pc games'){ClickOmniTrack(this,'event10','button:section:',takeDotVal)}});}
  setTimeout(function(){
    if (document.URL.indexOf('/foundation/') < 0 && document.URL.indexOf('/shield/') < 0 && document.URL.indexOf('/geforce/') < 0 && document.URL.indexOf('/design-visualization/') < 0 && document.URL.indexOf('/self-driving-cars/') < 0 && document.URL.indexOf('/gpu-cloud/') < 0 && document.URL.indexOf('/data-center/') < 0 && document.URL.indexOf('/deep-learning-ai/') < 0 && document.URL.indexOf('/titan/') < 0 && document.URL.indexOf('/autonomous-machines/') < 0 && document.URL.indexOf('/gtc/') < 0 && document.URL.indexOf('/contact/') < 0) {
  		$('.columnLayout .text-left a.regular-btn.brand-green.btn-manual.link-btn div.btn').click(function() {
  			var takeDotVal = $(this).text();
  			var takeHeading = $(this).parents('.column-2').find('.text-left h3.title, .text-left h2.title').text();
  			if (takeHeading.length > 4 && takeHeading.length < 20) {
  				ClickOmniTrack(this, 'event10', 'button:section:' + takeHeading + ':', takeDotVal)
  			} else {
  				ClickOmniTrack(this, 'event10', 'button:section:', takeDotVal)
  			}
  		});
  	}
     if (document.URL.indexOf('/shield/games/gamestream/') >-1) {
  		$('.columnLayout .text-left a.regular-btn.brand-green.btn-manual.link-btn div.btn').click(function() {
  			var takeDotVal = $(this).text();
  			var takeHeading = $(this).parents('.column-2').find('.text-left h3.title, .text-left h2.title').text();
  			if (takeHeading.length > 4 && takeHeading.length < 20) {
  				ClickOmniTrack(this, 'event10', 'button:section:' + takeHeading + ':', takeDotVal)
  			} else {
  				ClickOmniTrack(this, 'event10', 'button:section:', takeDotVal)
  			}
  		});
  	}
  	$('.specs-container .info-icon a.link-txt,.specs-container .package-icon a.link-txt').click(function() {
  		ClickOmniTrack(this, 'event10', 'link:section:specs:', $(this).text().trim())
  	});
  }, 2000);
  $('#tf3-copy-container .grid-4 a.white-box-bttn').click(function(){var takeDotVal=$(this).text().toLowerCase();if(takeDotVal=='view all android games'||takeDotVal=='view all pc games'){ClickOmniTrack(this,'event10','button:section:',takeDotVal)}});
  $('#features .tabs-wrapper ul.tabs li').click(function(){var takeDotVal=$(this).text();ClickOmniTrack(this,'event10','button:section:tabs:',takeDotVal)});
    if(document.URL.indexOf('/foundation/') < 0 && document.URL.indexOf('/csr/')<0 && document.URL.indexOf('/deep-learning-ai/industries/ai-innovators')<0 && document.URL.indexOf('/data-center/index-paraview-plugin/')<0 && document.URL.indexOf('/design-visualization/vmware/')<0 && document.URL.indexOf('/design-visualization/citrix/')<0){$('.videoComponent .watchvideo svg,.videoComponent .watchvideo .icon-text-pos').click(function(){ClickOmniTrack(this,'event10','button:section:','watch the video')});}
  $("img[title='SHIELD TABLET AMAZON']").click(function(){ClickOmniTrack(this,'event10,event15','img:section:shield tablet:','amazon')});
  $('.global-footer__links li a').click(function(){ClickOmniTrack(this,'event10','link:footer:',$(this).text().trim())});
  $('.global-footer__region a').click(function(){ClickOmniTrack(this,'event10','link:footer:','country-selector')});
}catch(e){}
});
