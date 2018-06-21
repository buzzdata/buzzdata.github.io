_satellite.pushBlockingScript(function(event, target, $variables){
  jQuery('a[href*="pricespider.com"]').each(function() {

	var url = new URL(window.location.href);
	var ncid = url.searchParams.get("ncid");
	var nvid = url.searchParams.get("nvid");

	if (ncid != null) {
		jQuery(this).attr('href', function() {
      var link= this.href;
      var utidlink = "";
      if(link.indexOf('utid')>-1)
      	utidlink=link.replace(/(utid=)[^\&]+/, '$1' + ncid);
      else
        utidlink=this.href+'&utid='+ncid;
			return utidlink 
		});
	} else if (nvid != null) {
		jQuery(this).attr('href', function() {
      var link= this.href;
      var utidlink = "";
      if(link.indexOf('utid')>-1)
      	utidlink=link.replace(/(utid=)[^\&]+/, '$1' + nvid);
      else
        utidlink=this.href+'&utid='+nvid;
			return utidlink;
		});
	} else {
	//Not needed
	}

});
});
