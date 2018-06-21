var NVIDIAGDC=NVIDIAGDC||{};
(function(e,d,a,g){var f=[],c=false;
NVIDIAGDC.Browser={os:"unknown",device:"unknown"};
if(/Android/i.test(navigator.userAgent)){f.push("os-android");
NVIDIAGDC.Browser.os="android"
}if(/iPhone/i.test(navigator.userAgent)){f.push("device-iphone");
c=true;
NVIDIAGDC.Browser.device="iphone"
}if(/iPod/i.test(navigator.userAgent)){f.push("device-ipod");
c=true;
NVIDIAGDC.Browser.device="ipod"
}if(/iPad/i.test(navigator.userAgent)){f.push("device-ipad");
c=true;
NVIDIAGDC.Browser.device="ipad"
}if(/MSIE 10.0/i.test(navigator.userAgent)){f.push("browser-ie10")
}if(c){f.push("os-ios");
NVIDIAGDC.Browser.os="ios"
}if(navigator.userAgent.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile/i)){f.push("device-tablet-mobile")
}else{f.push("device-desktop")
}var b=f.join(" ");
e("html").addClass(b);
NVIDIAGDC.Browser.isSupportedBrowser=function(i){var h=true;
if(typeof NVIDIAGDC.Browser!="undefined"){e.each(i,function(n,j){var m=e(this),l=j.os,k=j.devices;
if(NVIDIAGDC.Browser.os==l){if(typeof k=="object"){e.each(k,function(o,p){if(NVIDIAGDC.Browser.device==NVIDIAGDC.Browser.device){h=false;
return false
}})
}else{if(typeof k=="string"){if(k=="all"){h=false
}}}return false
}})
}return h
};
NVIDIAGDC.Browser.getViewport=function(){return d.getComputedStyle(a.body,":after").content.replace(/"/g,"")
};
NVIDIAGDC.Browser.getUrlParameter=function(m){var k=d.location.search.substring(1);
var j=k.split("&");
for(var h=0;
h<j.length;
h++){var l=j[h].split("=");
if(l[0]==m){return l[1]
}}}
})(jQuery,window,document);
$(document).ready(function(){if(document.location.href.match(/nvidiaGDClog/)){nvidiaGDClog=function(){console.log.apply(console,arguments)
};
for(var a=0;
a<nvidiaGDClogqueue.length;
a++){nvidiaGDClog.apply(nvidiaGDClog,nvidiaGDClogqueue[a])
}}});