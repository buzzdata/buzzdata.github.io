_satellite.pushAsyncScript(function(event, target, $variables){
  window.ClickOmniTrack=function(obj,eventVal,prefix,secName){  
  try
   { s.eVar42=s.prop42='';
      secName = prefix+secName+":"+s.pageName ;
     secName=secName.toLowerCase();
      s.events=eventVal;s.linkTrackEvents=eventVal;
      s.eVar10=s.prop10=secName;
      s.linkTrackVars='events,eVar10,prop10';
      s.tl(obj,'o',secName); 
	    s.linkTrackVars="None"
	    s.linkTrackEvents="None"
	 }catch(error){}}
window.ClickOmniPart=function(obj,eventVal,prefix,secName,partner){  
  try
   { s.eVar42=s.prop42='';
      secName = prefix+secName+":"+s.pageName ;
     secName=secName.toLowerCase();
      s.events=eventVal;s.linkTrackEvents=eventVal;
      s.eVar10=s.prop10=secName;
      s.eVar15=s.prop15=partner;
      s.linkTrackVars='events,eVar10,prop10,prop15,eVar15';
      s.tl(obj,'o',secName); 
	    s.linkTrackVars="None"
	    s.linkTrackEvents="None"
	 }catch(error){}}

window.ClickOmniTrackNav=function(obj,eventVal,prefix,secName){  
  try
   {  s.eVar42=s.prop42='';
     var secN=secName.lastIndexOf('/')+1;
      secName=secName.substring(secN);
      secName=secName.toLowerCase();
      secName=secName.replace(/\//g,':').replace('#','');
      s.eVar11=s.prop11=secName;
      secName = prefix+secName+":"+s.pageName;
      s.events=eventVal;s.linkTrackEvents=eventVal;
      s.eVar10=s.prop10=secName; 
      s.linkTrackVars='events,eVar10,prop10,prop11,eVar11';
      s.tl(obj,'o',secName); 
	    s.linkTrackVars="None"
	    s.linkTrackEvents="None"
	 }catch(error){}}


window.ClickOmniProd=function(obj,eventVal,prefix,secName,pVal){  
try
   {   s.eVar42=s.prop42='';
     var secN=secName.lastIndexOf('/')+1;
      secName=secName.substring(secN);
      secName=secName.toLowerCase();
      secName=secName.replace(/\//g,':').replace('#','');
      secName = prefix+secName+":"+s.pageName;
      s.events=eventVal;s.linkTrackEvents=eventVal;
      s.eVar10=s.prop10=secName; 
      s.products=";"+pVal;
      s.linkTrackVars='events,eVar10,prop10,products';
      s.tl(obj,'o',secName); 
	    s.linkTrackVars="None"
	    s.linkTrackEvents="None"
	  }catch(error){}}


});
