_satellite.pushAsyncScript(function(event, target, $variables){
  /*<!--
Event snippet for NV - Redirections - UK on http://www.nvidia.co.uk: Please do not remove.
Place this snippet on pages with events you're tracking. 
Creation date: 03/07/2018
-->*/


var url=window.location.href;

if(url.indexOf('www.nvidia.com/en-us')>-1){
 $('a[href^="http://redir.pricespider.com/redirect/"]').on('click',function(){
  gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'u1': '',
    'u2': '',
    'u3': '',
    'u4': '',
    'send_to': 'DC-8403527/nv-re0/nv-re00+standard'
  });
 })
}else if(url.indexOf('www.nvidia.co.uk')>-1||url.indexOf('www.geforce.co.uk')>-1)
{
  $('a[href^="http://gethatch.com/iceleads_rest/merch"]').on('click',function(){
     gtag('event', 'conversion', {
    'allow_custom_scripts': true,
    'u1': '',
    'u2': '',
    'u3': '',
    'u4': '',
    'send_to': 'DC-8403527/nv-re0/nv-re0+standard'
  });
  })
}





});
