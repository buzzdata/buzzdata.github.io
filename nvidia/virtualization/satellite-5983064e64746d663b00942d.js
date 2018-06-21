_satellite.pushAsyncScript(function(event, target, $variables){
  //Banner Tracking

//try {
	if (typeof jQuery != 'undefined' || typeof $ != 'undefined') {

		if (window.jQuery) {
			$(document).ready(function () {
				var items = {};
				$('.bannerTracking').each(function () {
          if(typeof($(this).attr('data-bannertype')) != 'undefined'){
					items[$(this).attr('data-bannertype')] = true;
             }
				}); 
				var result = new Array();
				for (var i in items) {
					bannerName_list = '';
					bannerType = '';
          bannerNameCount=0;
					$("[data-bannerType=" + i + "]").each(function (index) {
						bannerType = $(this).attr("data-bannertype");
						var bannerRegion = 'en_us'; //{{bannerRegion}};
						var bannerPosition = index + 1;
						//var bannerImageURL = $(this).children('img').attr("src");
						//var bannerLandingURL = $(this).attr("href");
						var action = 'Impression';
						var bannerName = '';
         
						if (typeof($(this).attr("data-bannername")) != 'undefined') {
							bannerName = $(this).attr("data-bannername");
              bannerNameCount=bannerNameCount+1;
						} else {
							bannerName = 'Not Set';//$(this).children('img').attr("alt");
						}
						var label = bannerName;
						var bannerPageURL = $(location).attr('href');
						var bannerImpressions = 1;
						var bannerClicks = 0;
							if(bannerName != 'Not Set')
            	bannerName_list = bannerName_list + bannerName + '|';
							// nvBannerTracker(action,label,bannerType,bannerRegion,bannerPosition,bannerImageURL,bannerLandingURL,bannerName_list,bannerPageURL,bannerImpressions,bannerClicks);
					});
          if(bannerName_list.indexOf('Not Set') <=-1 && bannerNameCount>0) {
					dtm_track('bannerListImpression', {bannerName: bannerName_list.replace(/\|$/, ''),bannerType: bannerType});         
          }
				}




				//imprOmniTrack(bannerName_list,bannerType);
				$(".bannerTracking").click(function (e) {
					var bannerType = '';
          if(typeof($(this).closest('article').find('div.bannerTracking').attr("data-bannertype")) != 'undefined')
          {
            bannerType = $(this).closest('article').find('div.bannerTracking').attr("data-bannertype");
          }else {
            bannerType = 'Not Set';
          }
					var bannerRegion = 'en_us'; //{{bannerRegion}};
					//var bannerPosition = $(this).closest('.bannerTracking').index('.bannerTracking') + 1;
					//var bannerImageURL = $(this).children('img').attr("src");
					//var bannerLandingURL = $(this).attr("href");
					var action = 'Click';
					var bannerName = '';
   
					if(typeof($(this).closest('article').find('div.bannerTracking').attr("data-bannername")) != 'undefined') {
						bannerName = $(this).closest('article').find('div.bannerTracking').attr("data-bannername");
					} else {
						bannerName = 'Not Set';//$(this).children('img').attr("alt");
					}
					var label = bannerName;
					//var bannerPageURL = $(location).attr('href');
					var bannerImpressions = 0;
					var bannerClicks = 1;
					try {
            if(bannerType != 'Not Set' && bannerName != 'Not Set'){
						dtm_track('bannerListClick', {bannerName: bannerName.replace(/\|$/, ''),bannerType: bannerType});
						//nvBannerTracker(action, label, bannerType, bannerRegion, bannerPosition, bannerImageURL, bannerLandingURL, bannerName, bannerPageURL, bannerImpressions, bannerClicks);
            }
					} catch (e) {}
				});

			});
		}
	}
//} catch (e) {}
});
