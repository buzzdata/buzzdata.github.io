_satellite.pushAsyncScript(function(event, target, $variables){
  try{
if(document.URL.indexOf('/geforce/products/battlebox/')>-1){
$('.column-container .textcomp a').parents('.textcomp').siblings('.image').find('img.responsive-image').attr('alt')
$('.column-container .textcomp a').click(function(){var $this=$(this);var getVal=$this.text();ClickOmniTrack(this,'event10','link:section:battlebox ultimate:',getVal);});
$('#battlebox-essential .textcomp a').click(function(){var getVal=$(this).text();ClickOmniTrack(this,'event10','link:section:battlebox essential:',getVal);});
$('#battlebox-compare .responsive-table a').click(function(){var getVal=$(this).text();ClickOmniTrack(this,'event10','link:section:compare specs:',getVal);});
$('.container .column-container a.imageLink img').click(function(){var getVal=$(this).attr('alt');ClickOmniTrack(this,'event10','link:section:choose your system builder:',getVal);});}
if(document.URL.indexOf('en-us/geforce/products/destiny/')>-1){
$('.column-container .textcomp a').parents('.textcomp').siblings('.image').find('img.responsive-image').attr('alt')
$('.column-container .textcomp a').click(function(){var $this=$(this);var getVal=$this.text();ClickOmniTrack(this,'event10','link:section:battlebox ultimate:',getVal);});
$('#battlebox-essential .textcomp a').click(function(){var getVal=$(this).text();ClickOmniTrack(this,'event10','link:section:battlebox essential:',getVal);});
$('#battlebox-compare .responsive-table a').click(function(){var getVal=$(this).text();ClickOmniTrack(this,'event10','link:section:compare specs:',getVal);});
$('.container .column-container a.imageLink img').click(function(){var getVal=$(this).attr('alt');ClickOmniTrack(this,'event10','link:section:choose your system builder:',getVal);});}

}catch(e){}
});
