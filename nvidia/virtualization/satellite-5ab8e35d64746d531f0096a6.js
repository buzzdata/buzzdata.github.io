_satellite.pushBlockingScript(function(event, target, $variables){
  /*<!--
Event snippet for NV - GFE Download - US on http://www.nvidia.com: Please do not remove.
Place this snippet on pages with events you're tracking. 
Creation date: 03/07/2018
-->*/
$('a[href*="GeForce_Experience_"]').on('click',function(){
 var curr_href=$(this).attr('href');
  if(curr_href.indexOf('GFE/GFEClient')>-1 && curr_href.indexOf('GeForce_Experience_')>-1 && curr_href.indexOf('.exe')>-1){
var url=window.location.href;

if(url.indexOf('www.nvidia.com/en-us')>-1){
  gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': 'DC-8403527/nv-do0/nv-gf0+standard'
  });
}else if(url.indexOf('www.nvidia.co.uk')>-1)
{
   gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'send_to': 'DC-8403527/nv-do0/nv-gf00+standard'
  });
}
  }
})
});
