(function(G,O,c,p){var V="navigation",q=G(O).width(),P=O.devicePixelRatio,F=1025,u=768,I={};
var J=G(".sub-brand-item").length;
var z=false;
var e=false;
var U=G(c).width();
var L=[];
L.push(G("#sub-btn0").attr("href"));
G(".breadcrumb-link").each(function(){L.push(G(this).attr("href"))
});
var T=G(".scrollmenu-button").length;
var B=0,l=G(O).scrollTop(),n=false,w;
var g;
function x(aa,Z){this.element=aa;
this.$element=G(this.element);
this.options=G.extend({},I,Z);
this._defaults=I;
this._name=V;
this.init()
}x.prototype.init=function(){this.registerCallbacks();
this.handlePageLoadScroll()
};
x.prototype.registerCallbacks=function(){var aa=_.throttle(y,250);
var Z=_.throttle(C,250);
var ab=_.throttle(k,750);
this.$element.find(".dropdown-arrow").click(G.proxy(t,this));
this.$element.find(".nav-search-link, .search-abort").click(h);
this.$element.find(".ic-expand").click(G.proxy(E,this));
this.$element.find(".scrollmenu-button").click(G.proxy(E,this));
this.$element.find(".ic-menu").click(G.proxy(Q,this));
this.$element.find("#nv-login").click(X);
this.$element.find('.global-item[data-element-role="solutions"]').hover(G.proxy(R,this));
G(O).resize(G.proxy(aa,this));
G(O).scroll(G.proxy(Z,this));
G(".breadcrumb-link span, .subnav-category span, .scrollmenu-button span, .link-txt[data-href^='#'] .btn, .link-btn[data-href^='#'] .btn").click(D);
G(".model-popup").click(j);
this.$element.find(".back-to-top").click(m);
G(c).on("showCart",N);
y.apply(this);
if(this.$element.find(".search-research").length){this.$element.find("#searchform").on("submit",W)
}this.$element.find("#search-terms").keypress(o);
G(".search-abort").click(function(){G(".search-box-input").val("")
});
G(c).on("click scroll",ab)
};
x.prototype.handlePageLoadScroll=function(){var Z=NVIDIAGDC.Browser.getUrlParameter("section");
if(!!Z){setTimeout(function(){Z="#"+Z;
if(G(Z).offset()){if(G(".breadCrumbNav").length){var aa=G(".breadCrumbNav").find(".subnav-right").find("a[href='"+Z+"']");
if(!!aa){console.log(aa);
G(aa).find("span").trigger("click")
}else{M(Z)
}}else{M(Z)
}}},500)
}};
function M(Z){var ab=0;
var aa=G(Z).offset().top;
if(screenWidth<768){ab=aa-81
}else{if(screenWidth<1025){ab=aa-101
}else{ab=aa-135
}}G("html, body").animate({scrollTop:ab+"px"},1000,"swing")
}function k(){var aa=Cookies.get("nv.nvidmNoissesData");
if(aa){var Z=1/(24*3);
Cookies.remove("nv.nvidmNoissesData",{domain:"nvidia.com"});
Cookies.set("nv.nvidmNoissesData",aa,{domain:"nvidia.com",expires:Z})
}}function W(aa){aa.preventDefault();
var Z=G(".search-box-input").val();
O.location.href=G("#searchform").attr("action")+Z
}function h(Z){Z.preventDefault();
G(".search-outter-container").slideToggle();
G(".nav-search-link").slideToggle()
}function o(Z){if(Z.which==13){Z.stopPropagation()
}}function X(Z){Cookies.set("nv.buttonReferrer",""+JSON.stringify(JSON.stringify(G("anchor.target.parentElement"))+""),{domain:"nvidia.com"});
Cookies.set("nv.referrerHref",JSON.stringify(O.location),{domain:"nvidia.com"});
Cookies.set("nv.referrerId",Z.target.parentElement.id,{domain:"nvidia.com"})
}function m(){if(G(O).scrollTop()==0){return
}G("html, body").animate({scrollTop:0},500,"linear")
}function K(){G(".back-to-top").slideUp("500")
}function A(){G(".back-to-top").slideDown("500")
}function v(){if(G(c).width()<1025){G(".back-to-top").css("display","none");
return
}if(G(O).scrollTop()==0){K()
}else{A()
}}function d(Z){r();
if(!Z.hasClass("cta")){Z.parent().addClass("selected")
}}function r(){G(".breadcrumb-element").removeClass("selected")
}function D(ab){if(G(this.parentElement).attr("target")!=="overlay"){w=0;
ab.preventDefault();
ab.stopPropagation();
var ad,Z;
G(".subnav").data("auto-scrolling","yes");
if(ab.target.nodeName==="SPAN"){Z=G(this.parentElement);
ad=Z.attr("href");
a(G("#subnav-menu"))
}else{if(ab.target.nodeName==="DIV"){Z=G(this.parentElement);
ad=Z.data("href");
Z=G(".breadcrumb-element a[href='"+ad+"']")
}else{Z=G(this.parentElement);
ad=Z.attr("href")
}}var ac=G(ad);
if(ac.length===0){return
}var aa=G(ad).offset().top;
l=G(O).scrollTop();
if(aa==l){return
}b();
if(U<768){w=aa-81
}else{if(U<1025){w=aa-101
}else{w=aa-135
}}G("html, body").animate({scrollTop:w},500,"linear").promise().then(function(){setTimeout(function(){G(".subnav").data("auto-scrolling","no")
},100);
v();
d(Z)
});
return false
}}function H(aa){var ab,Z,ac;
if(g){Z=109
}else{Z=179
}for(i=0;
i<L.length;
i++){ac=G(L[i]);
if(ac.length!=0){ab=ac.height();
elementPosition=ac.offset().top;
if(elementPosition-Z<=aa&&aa<=elementPosition-Z+ab){d(G("#sub-btn"+i));
break
}else{r()
}}}}function C(){if(G(".subnav").data("auto-scrolling")=="yes"){return
}v();
U=G(c).width();
l=G(O).scrollTop();
if(U>1024){H(l)
}if(l<B){N();
g=false
}if(l<=50){return
}else{if(l>B){g=true;
b()
}}B=l
}function b(){G(".global-nav").addClass("pull-up");
G(".subnav").addClass("pull-up");
G("#page-content").addClass("pull-up");
if(!G(".global-menu-overlay").hasClass("hide")){G(".global-menu-overlay").animate({top:"66px",duration:500})
}G(".search-outter-container").slideUp("500");
G(".search-box-input").val("");
G(".nav-search-link").slideDown("500");
n=true
}function N(){G(".global-nav").removeClass("pull-up");
G(".subnav").removeClass("pull-up");
G("#page-content").removeClass("pull-up");
if(!G(".global-menu-overlay").hasClass("hide")){G(".global-menu-overlay").animate({top:"100px",duration:500})
}n=false
}function y(){S(G(".mobile-menu-container"));
f(this.options);
v()
}function f(aa){var ad=G(".brand-nav-left").width(),ac=G(".sub-brand-nav-container").width(),ae=G(".sub-brand-item").length,ab=0;
var Z=0;
G(".sub-brand-item").each(function(){Z+=G(this).outerWidth(true)
});
U=O.innerWidth;
if(aa.globalSite){while(U>1024&&Z-ab>ac-100){ab=ab+G(".sub-brand-item").eq(J-2).width();
G(".sub-brand-item").eq(J-2).addClass("hide");
G(".more-element").eq(J-3).removeClass("hide");
U=G(c).width();
ac=G(".sub-brand-nav-container").width();
J--
}}else{while(U>1024&&Z-ab>ac-250&&J>0){ab=ab+G(".sub-brand-item").eq(J-2).width();
G(".sub-brand-item").eq(J-2).addClass("hide");
G(".more-element").eq(J-2).removeClass("hide");
U=G(c).width();
ac=G(".sub-brand-nav-container").width();
J--;
z=true
}if(z){G(".sub-brand-item").last().removeClass("hide")
}}if(!e){G(".brand-nav-left").addClass("in")
}e=true
}function t(){var Z=this.$element.find(".global-menu-overlay");
if(Z.hasClass("hide")){Z.removeClass("hide").addClass("show");
Z.outerWidth();
Z.addClass("in");
G(c.body).addClass("noscroll");
this.$element.find(".dropdown-arrow").addClass("dropdown-expanded")
}else{Z.removeClass("in");
Z.removeClass("show").addClass("hide");
G(c.body).removeClass("noscroll");
this.$element.find(".dropdown-arrow").removeClass("dropdown-expanded")
}}function E(){var Z=this.$element.find("#subnav-menu");
if(Z.hasClass("hide")){Z.removeClass("hide").addClass("show");
this.$element.find(".subnav").css({height:"100vh",opacity:1});
this.$element.find(".ic-expand").addClass("ic-expand-green");
G(c.body).addClass("noscroll")
}else{a(Z)
}}function a(Z){Z.removeClass("in show").addClass("hide");
G(".subnav").removeAttr("style");
G(".ic-expand").removeClass("ic-expand-green");
G(c.body).removeClass("noscroll")
}function Q(){var Z=this.$element.find(".mobile-menu-container");
if(Z.hasClass("hide")){Z.removeClass("hide").addClass("show");
Z.outerWidth();
Z.addClass("in");
this.$element.find(".ic-menu").addClass("ic-menu-green");
G(c.body).addClass("noscroll")
}else{S(Z)
}}function S(Z){Z.removeClass("in");
Z.removeClass("show").addClass("hide");
G(".ic-menu").removeClass("ic-menu-green");
G(c.body).removeClass("noscroll")
}function R(){var Z=this.$element.find(".global-menu-overlay");
if(Z.hasClass("hide")){if(G("#page-content").hasClass("pull-up")){Z.css({transition:"none",top:"66px",left:"0"})
}else{Z.css({transition:"none",top:"100px",left:"0"})
}Z.removeClass("hide").addClass("show");
Z.outerWidth();
Z.addClass("in")
}else{Z.removeClass("in");
Z.removeClass("show").addClass("hide");
Z.removeAttr("style")
}}function j(ag){ag.preventDefault();
var ad=G(O).width();
var ab=G(this).attr("href");
console.log("imageURL"+ab);
var ac=false;
var aa=false;
var af=false;
if(ab.indexOf("youtube")!=-1){af=true;
var ae=Y("v",ab);
var Z=Y("list",ab);
if(ae!=null){ab="https://www.youtube.com/embed/"+ae;
if(Z!=null){ab=ab+"?list="+Z
}}}if(ab.indexOf("#")!=-1){ac=true
}else{aa=true
}defaultOptions={inline:ac,iframe:aa,width:"80%",maxHeight:"80%",href:ab};
if(ad<u){if(af){defaultOptions.height=ad*9/16
}else{defaultOptions.height="100%"
}defaultOptions.width="100%";
delete defaultOptions.maxHeight
}else{if(ac){defaultOptions.maxheight=G(ab).data("height").length?G(ab).data("height")+"px":"80%";
defaultOptions.width=G(ab).data("width").length?G(ab).data("width")+"px":"854px"
}else{if(af){defaultOptions.height="480px"
}else{defaultOptions.height="80%"
}defaultOptions.width="854px"
}}G.colorbox(defaultOptions)
}function Y(aa,Z){var ab=new RegExp("[?&]"+aa+"=([^&#]*)").exec(Z);
if(ab==null){return null
}else{return ab[1]||0
}}G.fn[V]=function(Z){return this.each(function(){if(!G.data(this,"plugin_"+V)){G.data(this,"plugin_"+V,new x(this,Z))
}})
}
})(jQuery,window,document);
(function(f,j,k,d){var h="imageComponent",b=f(j).width(),g=j.devicePixelRatio,c=1025,l=768,e={imageDesktopUrl:"",imageTabletUrl:"",imageMobileUrl:"",imageDesktopRetinaUrl:"",imageTabletRetinaUrl:"",imageMobileRetinaUrl:"",imageTarget:"",imageTargetURL:""};
function m(o,n){this.element=o;
this.$element=f(this.element);
this.options=f.extend({},e,n);
this._defaults=e;
this._name=h;
this.$imageLink=this.$element.find(".imageLink");
this.init()
}m.prototype.init=function(){if(this.options.imageTarget==="_modal"&&this.options.imageTargetURL.length>0){this.$imageLink.click(f.proxy(a,this))
}this.setImage();
this.setZoomIcon()
};
m.prototype.getUrlParam=function(o,n){var p=new RegExp("[?&]"+o+"=([^&#]*)").exec(n);
if(p==null){return null
}else{return p[1]||0
}};
m.prototype.setImage=function(){if(g>2){if(b<l){this.$element.find(".responsive-image").attr("src",this.options.imageMobileRetinaUrl)
}else{if(b>=l&&b<c){this.$element.find(".responsive-image").attr("src",this.options.imageTabletRetinaUrl)
}else{this.$element.find(".responsive-image").attr("src",this.options.imageDesktopRetinaUrl)
}}}else{if(b<l){this.$element.find(".responsive-image").attr("src",this.options.imageMobileUrl)
}else{if(b>=l&&b<c){this.$element.find(".responsive-image").attr("src",this.options.imageTabletUrl)
}else{this.$element.find(".responsive-image").attr("src",this.options.imageDesktopUrl)
}}}};
m.prototype.setValidImg=function(p,o,n){f.get(o).done(function(){p.attr("src",o)
}).fail(function(){p.attr("src",n)
})
};
m.prototype.setZoomIcon=function(){var o=this.$element.find(".responsive-image"),n=this.$element.find(".svg-cls");
setTimeout(function(){imgwidth=o.width();
n.css("width",imgwidth)
},2000)
};
function a(v){v.preventDefault();
var r=f(j).width();
var p=this.options.imageTargetURL;
var q=false;
var o=false;
var u=false;
if(p.indexOf("youtube")!=-1){u=true;
var t=this.getUrlParam("v",p);
var n=this.getUrlParam("list",p);
if(t!=null){p="https://www.youtube.com/embed/"+t;
if(n!=null){p=p+"?list="+n
}}}if(p.indexOf("#")!=-1){q=true
}else{o=true
}defaultOptions={inline:q,iframe:o,width:"80%",maxHeight:"80%",href:p};
if(r<l){if(u){defaultOptions.height=(r*9)/16
}else{defaultOptions.height="100%"
}defaultOptions.width="100%";
delete defaultOptions.maxHeight
}else{if(q){defaultOptions.maxheight=f(this.options.imageTargetURL).data("height").length?f(this.options.imageTargetURL).data("height")+"px":"80%";
defaultOptions.width=f(this.options.imageTargetURL).data("width").length?f(this.options.imageTargetURL).data("width")+"px":"854px"
}else{if(u){defaultOptions.height="480px"
}else{defaultOptions.height="80%"
}defaultOptions.width="854px"
}}f.colorbox(defaultOptions)
}f.fn[h]=function(n){return this.each(function(){if(!f.data(this,"plugin_"+h)){f.data(this,"plugin_"+h,new m(this,n))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="cookiemsg",f={cookiemsg:""};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var k=e("html").attr("lang");
Granite.I18n.setLocale(k);
var n=Granite.I18n.get("Close");
var h=this;
var j={};
var m=this.$element.find("#cookie-msg").html();
var l='<div id="cookiePolicy-layer" class="noSelection shadowBox-light"><div class="messageContainer fontSmall">'+m+'</div><div id="cookiePolicy-btn-close" class="green-box-bttn"><span>'+n+"</span></div></div>";
h.showLayer(l)
};
b.prototype.showLayer=function(h){if(!cookieHelpers.getCookie("CookiePolicy")){e("body").append(h);
e("#cookiePolicy-layer").delay(1000).fadeIn(300)
}e("#cookiePolicy-btn-close").on("click",function(j){e("#cookiePolicy-layer").fadeOut(300,function(){e(this).remove()
});
cookieHelpers.setCookie("CookiePolicy",1,{expires:365,path:"/"})
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
/*!

 handlebars v4.0.5

Copyright (C) 2011-2015 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
;
!function(d,c){"object"==typeof exports&&"object"==typeof module?module.exports=c():"function"==typeof define&&define.amd?define([],c):"object"==typeof exports?exports.Handlebars=c():d.Handlebars=c()
}(this,function(){return function(e){function d(b){if(f[b]){return f[b].exports
}var a=f[b]={exports:{},id:b,loaded:!1};
return e[b].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports
}var f={};
return d.m=e,d.c=f,d.p="",d(0)
}([function(L,K,J){function I(){var b=u();
return b.compile=function(a,d){return B.compile(a,d,b)
},b.precompile=function(a,d){return B.precompile(a,d,b)
},b.AST=D["default"],b.Compiler=B.Compiler,b.JavaScriptCompiler=z["default"],b.Parser=C.parser,b.parse=C.parse,b
}var H=J(1)["default"];
K.__esModule=!0;
var G=J(2),F=H(G),E=J(21),D=H(E),C=J(22),B=J(27),A=J(28),z=H(A),y=J(25),x=H(y),w=J(20),v=H(w),u=F["default"].create,t=I();
t.create=I,v["default"](t),t.Visitor=x["default"],t["default"]=t,K["default"]=t,L.exports=K["default"]
},function(d,c){c["default"]=function(b){return b&&b.__esModule?b:{"default":b}
},c.__esModule=!0
},function(L,K,J){function I(){var b=new E.HandlebarsEnvironment;
return y.extend(b,E),b.SafeString=C["default"],b.Exception=A["default"],b.Utils=y,b.escapeExpression=y.escapeExpression,b.VM=w,b.template=function(a){return w.template(a,b)
},b
}var H=J(3)["default"],G=J(1)["default"];
K.__esModule=!0;
var F=J(4),E=H(F),D=J(18),C=G(D),B=J(6),A=G(B),z=J(5),y=H(z),x=J(19),w=H(x),v=J(20),u=G(v),t=I();
t.create=I,u["default"](t),t["default"]=t,K["default"]=t,L.exports=K["default"]
},function(d,c){c["default"]=function(f){if(f&&f.__esModule){return f
}var e={};
if(null!=f){for(var g in f){Object.prototype.hasOwnProperty.call(f,g)&&(e[g]=f[g])
}}return e["default"]=f,e
},c.__esModule=!0
},function(I,H,G){function F(e,d,f){this.helpers=e||{},this.partials=d||{},this.decorators=f||{},A.registerDefaultHelpers(this),z.registerDefaultDecorators(this)
}var E=G(1)["default"];
H.__esModule=!0,H.HandlebarsEnvironment=F;
var D=G(5),C=G(6),B=E(C),A=G(7),z=G(15),y=G(17),x=E(y),w="4.0.5";
H.VERSION=w;
var v=7;
H.COMPILER_REVISION=v;
var u={1:"<= 1.0.rc.2",2:"== 1.0.0-rc.3",3:"== 1.0.0-rc.4",4:"== 1.x.x",5:"== 2.0.0-alpha.x",6:">= 2.0.0-beta.1",7:">= 4.0.0"};
H.REVISION_CHANGES=u;
var t="[object Object]";
F.prototype={constructor:F,logger:x["default"],log:x["default"].log,registerHelper:function(d,c){if(D.toString.call(d)===t){if(c){throw new B["default"]("Arg not supported with multiple helpers")
}D.extend(this.helpers,d)
}else{this.helpers[d]=c
}},unregisterHelper:function(b){delete this.helpers[b]
},registerPartial:function(d,c){if(D.toString.call(d)===t){D.extend(this.partials,d)
}else{if("undefined"==typeof c){throw new B["default"]('Attempting to register a partial called "'+d+'" as undefined')
}this.partials[d]=c
}},unregisterPartial:function(b){delete this.partials[b]
},registerDecorator:function(d,c){if(D.toString.call(d)===t){if(c){throw new B["default"]("Arg not supported with multiple decorators")
}D.extend(this.decorators,d)
}else{this.decorators[d]=c
}},unregisterDecorator:function(b){delete this.decorators[b]
}};
var r=x["default"].log;
H.log=r,H.createFrame=D.createFrame,H.logger=x["default"]
},function(G,F){function E(b){return w[b]
}function D(e){for(var d=1;
d<arguments.length;
d++){for(var f in arguments[d]){Object.prototype.hasOwnProperty.call(arguments[d],f)&&(e[f]=arguments[d][f])
}}return e
}function C(f,e){for(var h=0,g=f.length;
g>h;
h++){if(f[h]===e){return h
}}return -1
}function B(b){if("string"!=typeof b){if(b&&b.toHTML){return b.toHTML()
}if(null==b){return""
}if(!b){return b+""
}b=""+b
}return u.test(b)?b.replace(v,E):b
}function A(b){return b||0===b?q(b)&&0===b.length?!0:!1:!0
}function z(d){var c=D({},d);
return c._parent=d,c
}function y(d,c){return d.path=c,d
}function x(d,c){return(d?d+".":"")+c
}F.__esModule=!0,F.extend=D,F.indexOf=C,F.escapeExpression=B,F.isEmpty=A,F.createFrame=z,F.blockParams=y,F.appendContextPath=x;
var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;","=":"&#x3D;"},v=/[&<>"'`=]/g,u=/[&<>"'`=]/,t=Object.prototype.toString;
F.toString=t;
var r=function(b){return"function"==typeof b
};
r(/x/)&&(F.isFunction=r=function(b){return"function"==typeof b&&"[object Function]"===t.call(b)
}),F.isFunction=r;
var q=Array.isArray||function(b){return b&&"object"==typeof b?"[object Array]"===t.call(b):!1
};
F.isArray=q
},function(f,e){function h(d,c){var n=c&&c.loc,m=void 0,l=void 0;
n&&(m=n.start.line,l=n.start.column,d+=" - "+m+":"+l);
for(var k=Error.prototype.constructor.call(this,d),j=0;
j<g.length;
j++){this[g[j]]=k[g[j]]
}Error.captureStackTrace&&Error.captureStackTrace(this,h),n&&(this.lineNumber=m,this.column=l)
}e.__esModule=!0;
var g=["description","fileName","lineNumber","message","name","number","stack"];
h.prototype=new Error,e["default"]=h,f.exports=e["default"]
},function(L,K,J){function I(b){F["default"](b),D["default"](b),B["default"](b),z["default"](b),x["default"](b),v["default"](b),t["default"](b)
}var H=J(1)["default"];
K.__esModule=!0,K.registerDefaultHelpers=I;
var G=J(8),F=H(G),E=J(9),D=H(E),C=J(10),B=H(C),A=J(11),z=H(A),y=J(12),x=H(y),w=J(13),v=H(w),u=J(14),t=H(u)
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("blockHelperMissing",function(a,l){var k=l.inverse,j=l.fn;
if(a===!0){return j(this)
}if(a===!1||null==a){return k(this)
}if(g.isArray(a)){return a.length>0?(l.ids&&(l.ids=[l.name]),b.helpers.each(a,l)):k(this)
}if(l.data&&l.ids){var d=g.createFrame(l.data);
d.contextPath=g.appendContextPath(l.data.contextPath,l.name),l={data:d}
}return j(a,l)
})
},f.exports=e["default"]
},function(j,h,o){var n=o(1)["default"];
h.__esModule=!0;
var m=o(5),l=o(6),k=n(l);
h["default"]=function(b){b.registerHelper("each",function(z,y){function x(a,A,d){r&&(r.key=a,r.index=A,r.first=0===A,r.last=!!d,q&&(r.contextPath=q+a)),t+=w(z[a],{data:r,blockParams:m.blockParams([z[a],a],[q+a,null])})
}if(!y){throw new k["default"]("Must pass iterator to #each")
}var w=y.fn,v=y.inverse,u=0,t="",r=void 0,q=void 0;
if(y.data&&y.ids&&(q=m.appendContextPath(y.data.contextPath,y.ids[0])+"."),m.isFunction(z)&&(z=z.call(this)),y.data&&(r=m.createFrame(y.data)),z&&"object"==typeof z){if(m.isArray(z)){for(var p=z.length;
p>u;
u++){u in z&&x(u,u,u===z.length-1)
}}else{var g=void 0;
for(var e in z){z.hasOwnProperty(e)&&(void 0!==g&&x(g,u-1),g=e,u++)
}void 0!==g&&x(g,u-1,!0)
}}return 0===u&&(t=v(this)),t
})
},j.exports=h["default"]
},function(h,g,m){var l=m(1)["default"];
g.__esModule=!0;
var k=m(6),j=l(k);
g["default"]=function(b){b.registerHelper("helperMissing",function(){if(1!==arguments.length){throw new j["default"]('Missing helper: "'+arguments[arguments.length-1].name+'"')
}})
},h.exports=g["default"]
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("if",function(d,c){return g.isFunction(d)&&(d=d.call(this)),!c.hash.includeZero&&!d||g.isEmpty(d)?c.inverse(this):c.fn(this)
}),b.registerHelper("unless",function(a,d){return b.helpers["if"].call(this,a,{fn:d.inverse,inverse:d.fn,hash:d.hash})
})
},f.exports=e["default"]
},function(d,c){c.__esModule=!0,c["default"]=function(b){b.registerHelper("log",function(){for(var a=[void 0],h=arguments[arguments.length-1],g=0;
g<arguments.length-1;
g++){a.push(arguments[g])
}var f=1;
null!=h.hash.level?f=h.hash.level:h.data&&null!=h.data.level&&(f=h.data.level),a[0]=f,b.log.apply(b,a)
})
},d.exports=c["default"]
},function(d,c){c.__esModule=!0,c["default"]=function(b){b.registerHelper("lookup",function(f,e){return f&&f[e]
})
},d.exports=c["default"]
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerHelper("with",function(j,d){g.isFunction(j)&&(j=j.call(this));
var l=d.fn;
if(g.isEmpty(j)){return d.inverse(this)
}var k=d.data;
return d.data&&d.ids&&(k=g.createFrame(d.data),k.contextPath=g.appendContextPath(d.data.contextPath,d.ids[0])),l(j,{data:k,blockParams:g.blockParams([j],[k&&k.contextPath])})
})
},f.exports=e["default"]
},function(j,h,o){function n(b){k["default"](b)
}var m=o(1)["default"];
h.__esModule=!0,h.registerDefaultDecorators=n;
var l=o(16),k=m(l)
},function(f,e,h){e.__esModule=!0;
var g=h(5);
e["default"]=function(b){b.registerDecorator("inline",function(j,d,m,l){var k=j;
return d.partials||(d.partials={},k=function(o,n){var c=m.partials;
m.partials=g.extend({},c,d.partials);
var a=j(o,n);
return m.partials=c,a
}),d.partials[l.args[0]]=l.fn,k
})
},f.exports=e["default"]
},function(g,f,k){f.__esModule=!0;
var j=k(5),h={methodMap:["debug","info","warn","error"],level:"info",lookupLevel:function(d){if("string"==typeof d){var c=j.indexOf(h.methodMap,d.toLowerCase());
d=c>=0?c:parseInt(d,10)
}return d
},log:function(l){if(l=h.lookupLevel(l),"undefined"!=typeof console&&h.lookupLevel(h.level)<=l){var e=h.methodMap[l];
console[e]||(e="log");
for(var o=arguments.length,n=Array(o>1?o-1:0),m=1;
o>m;
m++){n[m-1]=arguments[m]
}console[e].apply(console,n)
}}};
f["default"]=h,g.exports=f["default"]
},function(e,d){function f(b){this.string=b
}d.__esModule=!0,f.prototype.toString=f.prototype.toHTML=function(){return""+this.string
},d["default"]=f,e.exports=d["default"]
},function(K,J,I){function H(g){var f=g&&g[0]||1,k=t.COMPILER_REVISION;
if(f!==k){if(k>f){var j=t.REVISION_CHANGES[k],h=t.REVISION_CHANGES[f];
throw new u["default"]("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version ("+j+") or downgrade your runtime to an older version ("+h+").")
}throw new u["default"]("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version ("+g[1]+").")
}}function G(g,f){function k(p,o,n){n.hash&&(o=w.extend({},o,n.hash),n.ids&&(n.ids[0]=!0)),p=f.VM.resolvePartial.call(this,p,o,n);
var m=f.VM.invokePartial.call(this,p,o,n);
if(null==m&&f.compile&&(n.partials[n.name]=f.compile(p,g.compilerOptions,f),m=n.partials[n.name](o,n)),null!=m){if(n.indent){for(var l=m.split("\n"),b=0,a=l.length;
a>b&&(l[b]||b+1!==a);
b++){l[b]=n.indent+l[b]
}m=l.join("\n")
}return m
}throw new u["default"]("The partial "+n.name+" could not be compiled when running in runtime-only mode")
}function j(a){function n(c){return""+g.main(h,c,h.helpers,h.partials,l,d,e)
}var m=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],l=m.data;
j._setup(m),!m.partial&&g.useData&&(l=B(a,l));
var e=void 0,d=g.useBlockParams?[]:void 0;
return g.useDepths&&(e=m.depths?a!==m.depths[0]?[a].concat(m.depths):m.depths:[a]),(n=A(g.main,n,h,m.depths||[],l,d))(a,m)
}if(!f){throw new u["default"]("No environment passed to template")
}if(!g||!g.main){throw new u["default"]("Unknown template object: "+typeof g)
}g.main.decorator=g.main_d,f.VM.checkRevision(g.compiler);
var h={strict:function(d,c){if(!(c in d)){throw new u["default"]('"'+c+'" not defined in '+d)
}return d[c]
},lookup:function(l,e){for(var n=l.length,m=0;
n>m;
m++){if(l[m]&&null!=l[m][e]){return l[m][e]
}}},lambda:function(d,c){return"function"==typeof d?d.call(c):d
},escapeExpression:w.escapeExpression,invokePartial:k,fn:function(a){var d=g[a];
return d.decorator=g[a+"_d"],d
},programs:[],program:function(m,l,r,q,p){var o=this.programs[m],n=this.fn(m);
return l||p||q||r?o=F(this,m,n,l,r,q,p):o||(o=this.programs[m]=F(this,m,n)),o
},data:function(d,c){for(;
d&&c--;
){d=d._parent
}return d
},merge:function(e,d){var l=e||d;
return e&&d&&e!==d&&(l=w.extend({},d,e)),l
},noop:f.VM.noop,compilerInfo:g.compiler};
return j.isTop=!0,j._setup=function(a){a.partial?(h.helpers=a.helpers,h.partials=a.partials,h.decorators=a.decorators):(h.helpers=h.merge(a.helpers,f.helpers),g.usePartial&&(h.partials=h.merge(a.partials,f.partials)),(g.usePartial||g.useDecorators)&&(h.decorators=h.merge(a.decorators,f.decorators)))
},j._child=function(a,m,l,e){if(g.useBlockParams&&!l){throw new u["default"]("must pass block params")
}if(g.useDepths&&!e){throw new u["default"]("must pass parent depths")
}return F(h,a,g[a],m,0,l,e)
},j
}function F(k,j,q,p,o,n,m){function l(a){var d=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],c=m;
return m&&a!==m[0]&&(c=[a].concat(m)),q(k,a,k.helpers,k.partials,d.data||p,n&&[d.blockParams].concat(n),c)
}return l=A(q,l,k,m,p,n),l.program=j,l.depth=m?m.length:0,l.blockParams=o||0,l
}function E(e,d,f){return e?e.call||f.name||(f.name=e,e=f.partials[e]):e="@partial-block"===f.name?f.data["partial-block"]:f.partials[f.name],e
}function D(f,e,h){h.partial=!0,h.ids&&(h.data.contextPath=h.ids[0]||h.data.contextPath);
var g=void 0;
if(h.fn&&h.fn!==C&&(h.data=t.createFrame(h.data),g=h.data["partial-block"]=h.fn,g.partials&&(h.partials=w.extend({},h.partials,g.partials))),void 0===f&&g&&(f=g),void 0===f){throw new u["default"]("The partial "+h.name+" could not be found")
}return f instanceof Function?f(e,h):void 0
}function C(){return""
}function B(d,c){return c&&"root" in c||(c=c?t.createFrame(c):{},c.root=d),c
}function A(j,h,o,n,m,l){if(j.decorator){var k={};
h=j.decorator(h,k,o,n&&n[0],m,l,n),w.extend(h,k)
}return h
}var z=I(3)["default"],y=I(1)["default"];
J.__esModule=!0,J.checkRevision=H,J.template=G,J.wrapProgram=F,J.resolvePartial=E,J.invokePartial=D,J.noop=C;
var x=I(5),w=z(x),v=I(6),u=y(v),t=I(4)
},function(d,c){(function(a){c.__esModule=!0,c["default"]=function(f){var e="undefined"!=typeof a?a:window,g=e.Handlebars;
f.noConflict=function(){return e.Handlebars===f&&(e.Handlebars=g),f
}
},d.exports=c["default"]
}).call(c,function(){return this
}())
},function(e,d){d.__esModule=!0;
var f={helpers:{helperExpression:function(b){return"SubExpression"===b.type||("MustacheStatement"===b.type||"BlockStatement"===b.type)&&!!(b.params&&b.params.length||b.hash)
},scopedId:function(b){return/^\.|this\b/.test(b.original)
},simpleId:function(b){return 1===b.parts.length&&!f.helpers.scopedId(b)&&!b.depth
}}};
d["default"]=f,e.exports=d["default"]
},function(C,B,A){function z(e,d){if("Program"===e.type){return e
}v["default"].yy=o,o.locInfo=function(b){return new o.SourceLocation(d&&d.srcName,b)
};
var f=new t["default"](d);
return f.accept(v["default"].parse(e))
}var y=A(1)["default"],x=A(3)["default"];
B.__esModule=!0,B.parse=z;
var w=A(23),v=y(w),u=A(24),t=y(u),r=A(26),q=x(r),p=A(5);
B.parser=v["default"];
var o={};
p.extend(o,q)
},function(e,d){var f=function(){function h(){this.yy={}
}var g={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,program_repetition0:6,statement:7,mustache:8,block:9,rawBlock:10,partial:11,partialBlock:12,content:13,COMMENT:14,CONTENT:15,openRawBlock:16,rawBlock_repetition_plus0:17,END_RAW_BLOCK:18,OPEN_RAW_BLOCK:19,helperName:20,openRawBlock_repetition0:21,openRawBlock_option0:22,CLOSE_RAW_BLOCK:23,openBlock:24,block_option0:25,closeBlock:26,openInverse:27,block_option1:28,OPEN_BLOCK:29,openBlock_repetition0:30,openBlock_option0:31,openBlock_option1:32,CLOSE:33,OPEN_INVERSE:34,openInverse_repetition0:35,openInverse_option0:36,openInverse_option1:37,openInverseChain:38,OPEN_INVERSE_CHAIN:39,openInverseChain_repetition0:40,openInverseChain_option0:41,openInverseChain_option1:42,inverseAndProgram:43,INVERSE:44,inverseChain:45,inverseChain_option0:46,OPEN_ENDBLOCK:47,OPEN:48,mustache_repetition0:49,mustache_option0:50,OPEN_UNESCAPED:51,mustache_repetition1:52,mustache_option1:53,CLOSE_UNESCAPED:54,OPEN_PARTIAL:55,partialName:56,partial_repetition0:57,partial_option0:58,openPartialBlock:59,OPEN_PARTIAL_BLOCK:60,openPartialBlock_repetition0:61,openPartialBlock_option0:62,param:63,sexpr:64,OPEN_SEXPR:65,sexpr_repetition0:66,sexpr_option0:67,CLOSE_SEXPR:68,hash:69,hash_repetition_plus0:70,hashSegment:71,ID:72,EQUALS:73,blockParams:74,OPEN_BLOCK_PARAMS:75,blockParams_repetition_plus0:76,CLOSE_BLOCK_PARAMS:77,path:78,dataName:79,STRING:80,NUMBER:81,BOOLEAN:82,UNDEFINED:83,NULL:84,DATA:85,pathSegments:86,SEP:87,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"COMMENT",15:"CONTENT",18:"END_RAW_BLOCK",19:"OPEN_RAW_BLOCK",23:"CLOSE_RAW_BLOCK",29:"OPEN_BLOCK",33:"CLOSE",34:"OPEN_INVERSE",39:"OPEN_INVERSE_CHAIN",44:"INVERSE",47:"OPEN_ENDBLOCK",48:"OPEN",51:"OPEN_UNESCAPED",54:"CLOSE_UNESCAPED",55:"OPEN_PARTIAL",60:"OPEN_PARTIAL_BLOCK",65:"OPEN_SEXPR",68:"CLOSE_SEXPR",72:"ID",73:"EQUALS",75:"OPEN_BLOCK_PARAMS",77:"CLOSE_BLOCK_PARAMS",80:"STRING",81:"NUMBER",82:"BOOLEAN",83:"UNDEFINED",84:"NULL",85:"DATA",87:"SEP"},productions_:[0,[3,2],[4,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[7,1],[13,1],[10,3],[16,5],[9,4],[9,4],[24,6],[27,6],[38,6],[43,2],[45,3],[45,1],[26,3],[8,5],[8,5],[11,5],[12,3],[59,5],[63,1],[63,1],[64,5],[69,1],[71,3],[74,3],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[20,1],[56,1],[56,1],[79,2],[78,1],[86,3],[86,1],[6,0],[6,2],[17,1],[17,2],[21,0],[21,2],[22,0],[22,1],[25,0],[25,1],[28,0],[28,1],[30,0],[30,2],[31,0],[31,1],[32,0],[32,1],[35,0],[35,2],[36,0],[36,1],[37,0],[37,1],[40,0],[40,2],[41,0],[41,1],[42,0],[42,1],[46,0],[46,1],[49,0],[49,2],[50,0],[50,1],[52,0],[52,2],[53,0],[53,1],[57,0],[57,2],[58,0],[58,1],[61,0],[61,2],[62,0],[62,1],[66,0],[66,2],[67,0],[67,1],[70,1],[70,2],[76,1],[76,2]],performAction:function(u,t,r,q,p,o,n){var m=o.length-1;
switch(p){case 1:return o[m-1];
case 2:this.$=q.prepareProgram(o[m]);
break;
case 3:this.$=o[m];
break;
case 4:this.$=o[m];
break;
case 5:this.$=o[m];
break;
case 6:this.$=o[m];
break;
case 7:this.$=o[m];
break;
case 8:this.$=o[m];
break;
case 9:this.$={type:"CommentStatement",value:q.stripComment(o[m]),strip:q.stripFlags(o[m],o[m]),loc:q.locInfo(this._$)};
break;
case 10:this.$={type:"ContentStatement",original:o[m],value:o[m],loc:q.locInfo(this._$)};
break;
case 11:this.$=q.prepareRawBlock(o[m-2],o[m-1],o[m],this._$);
break;
case 12:this.$={path:o[m-3],params:o[m-2],hash:o[m-1]};
break;
case 13:this.$=q.prepareBlock(o[m-3],o[m-2],o[m-1],o[m],!1,this._$);
break;
case 14:this.$=q.prepareBlock(o[m-3],o[m-2],o[m-1],o[m],!0,this._$);
break;
case 15:this.$={open:o[m-5],path:o[m-4],params:o[m-3],hash:o[m-2],blockParams:o[m-1],strip:q.stripFlags(o[m-5],o[m])};
break;
case 16:this.$={path:o[m-4],params:o[m-3],hash:o[m-2],blockParams:o[m-1],strip:q.stripFlags(o[m-5],o[m])};
break;
case 17:this.$={path:o[m-4],params:o[m-3],hash:o[m-2],blockParams:o[m-1],strip:q.stripFlags(o[m-5],o[m])};
break;
case 18:this.$={strip:q.stripFlags(o[m-1],o[m-1]),program:o[m]};
break;
case 19:var l=q.prepareBlock(o[m-2],o[m-1],o[m],o[m],!1,this._$),k=q.prepareProgram([l],o[m-1].loc);
k.chained=!0,this.$={strip:o[m-2].strip,program:k,chain:!0};
break;
case 20:this.$=o[m];
break;
case 21:this.$={path:o[m-1],strip:q.stripFlags(o[m-2],o[m])};
break;
case 22:this.$=q.prepareMustache(o[m-3],o[m-2],o[m-1],o[m-4],q.stripFlags(o[m-4],o[m]),this._$);
break;
case 23:this.$=q.prepareMustache(o[m-3],o[m-2],o[m-1],o[m-4],q.stripFlags(o[m-4],o[m]),this._$);
break;
case 24:this.$={type:"PartialStatement",name:o[m-3],params:o[m-2],hash:o[m-1],indent:"",strip:q.stripFlags(o[m-4],o[m]),loc:q.locInfo(this._$)};
break;
case 25:this.$=q.preparePartialBlock(o[m-2],o[m-1],o[m],this._$);
break;
case 26:this.$={path:o[m-3],params:o[m-2],hash:o[m-1],strip:q.stripFlags(o[m-4],o[m])};
break;
case 27:this.$=o[m];
break;
case 28:this.$=o[m];
break;
case 29:this.$={type:"SubExpression",path:o[m-3],params:o[m-2],hash:o[m-1],loc:q.locInfo(this._$)};
break;
case 30:this.$={type:"Hash",pairs:o[m],loc:q.locInfo(this._$)};
break;
case 31:this.$={type:"HashPair",key:q.id(o[m-2]),value:o[m],loc:q.locInfo(this._$)};
break;
case 32:this.$=q.id(o[m-1]);
break;
case 33:this.$=o[m];
break;
case 34:this.$=o[m];
break;
case 35:this.$={type:"StringLiteral",value:o[m],original:o[m],loc:q.locInfo(this._$)};
break;
case 36:this.$={type:"NumberLiteral",value:Number(o[m]),original:Number(o[m]),loc:q.locInfo(this._$)};
break;
case 37:this.$={type:"BooleanLiteral",value:"true"===o[m],original:"true"===o[m],loc:q.locInfo(this._$)};
break;
case 38:this.$={type:"UndefinedLiteral",original:void 0,value:void 0,loc:q.locInfo(this._$)};
break;
case 39:this.$={type:"NullLiteral",original:null,value:null,loc:q.locInfo(this._$)};
break;
case 40:this.$=o[m];
break;
case 41:this.$=o[m];
break;
case 42:this.$=q.preparePath(!0,o[m],this._$);
break;
case 43:this.$=q.preparePath(!1,o[m],this._$);
break;
case 44:o[m-2].push({part:q.id(o[m]),original:o[m],separator:o[m-1]}),this.$=o[m-2];
break;
case 45:this.$=[{part:q.id(o[m]),original:o[m]}];
break;
case 46:this.$=[];
break;
case 47:o[m-1].push(o[m]);
break;
case 48:this.$=[o[m]];
break;
case 49:o[m-1].push(o[m]);
break;
case 50:this.$=[];
break;
case 51:o[m-1].push(o[m]);
break;
case 58:this.$=[];
break;
case 59:o[m-1].push(o[m]);
break;
case 64:this.$=[];
break;
case 65:o[m-1].push(o[m]);
break;
case 70:this.$=[];
break;
case 71:o[m-1].push(o[m]);
break;
case 78:this.$=[];
break;
case 79:o[m-1].push(o[m]);
break;
case 82:this.$=[];
break;
case 83:o[m-1].push(o[m]);
break;
case 86:this.$=[];
break;
case 87:o[m-1].push(o[m]);
break;
case 90:this.$=[];
break;
case 91:o[m-1].push(o[m]);
break;
case 94:this.$=[];
break;
case 95:o[m-1].push(o[m]);
break;
case 98:this.$=[o[m]];
break;
case 99:o[m-1].push(o[m]);
break;
case 100:this.$=[o[m]];
break;
case 101:o[m-1].push(o[m])
}},table:[{3:1,4:2,5:[2,46],6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{1:[3]},{5:[1,4]},{5:[2,2],7:5,8:6,9:7,10:8,11:9,12:10,13:11,14:[1,12],15:[1,20],16:17,19:[1,23],24:15,27:16,29:[1,21],34:[1,22],39:[2,2],44:[2,2],47:[2,2],48:[1,13],51:[1,14],55:[1,18],59:19,60:[1,24]},{1:[2,1]},{5:[2,47],14:[2,47],15:[2,47],19:[2,47],29:[2,47],34:[2,47],39:[2,47],44:[2,47],47:[2,47],48:[2,47],51:[2,47],55:[2,47],60:[2,47]},{5:[2,3],14:[2,3],15:[2,3],19:[2,3],29:[2,3],34:[2,3],39:[2,3],44:[2,3],47:[2,3],48:[2,3],51:[2,3],55:[2,3],60:[2,3]},{5:[2,4],14:[2,4],15:[2,4],19:[2,4],29:[2,4],34:[2,4],39:[2,4],44:[2,4],47:[2,4],48:[2,4],51:[2,4],55:[2,4],60:[2,4]},{5:[2,5],14:[2,5],15:[2,5],19:[2,5],29:[2,5],34:[2,5],39:[2,5],44:[2,5],47:[2,5],48:[2,5],51:[2,5],55:[2,5],60:[2,5]},{5:[2,6],14:[2,6],15:[2,6],19:[2,6],29:[2,6],34:[2,6],39:[2,6],44:[2,6],47:[2,6],48:[2,6],51:[2,6],55:[2,6],60:[2,6]},{5:[2,7],14:[2,7],15:[2,7],19:[2,7],29:[2,7],34:[2,7],39:[2,7],44:[2,7],47:[2,7],48:[2,7],51:[2,7],55:[2,7],60:[2,7]},{5:[2,8],14:[2,8],15:[2,8],19:[2,8],29:[2,8],34:[2,8],39:[2,8],44:[2,8],47:[2,8],48:[2,8],51:[2,8],55:[2,8],60:[2,8]},{5:[2,9],14:[2,9],15:[2,9],19:[2,9],29:[2,9],34:[2,9],39:[2,9],44:[2,9],47:[2,9],48:[2,9],51:[2,9],55:[2,9],60:[2,9]},{20:25,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:36,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:37,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{4:38,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{13:40,15:[1,20],17:39},{20:42,56:41,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:45,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{5:[2,10],14:[2,10],15:[2,10],18:[2,10],19:[2,10],29:[2,10],34:[2,10],39:[2,10],44:[2,10],47:[2,10],48:[2,10],51:[2,10],55:[2,10],60:[2,10]},{20:46,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:47,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:48,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:42,56:49,64:43,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[2,78],49:50,65:[2,78],72:[2,78],80:[2,78],81:[2,78],82:[2,78],83:[2,78],84:[2,78],85:[2,78]},{23:[2,33],33:[2,33],54:[2,33],65:[2,33],68:[2,33],72:[2,33],75:[2,33],80:[2,33],81:[2,33],82:[2,33],83:[2,33],84:[2,33],85:[2,33]},{23:[2,34],33:[2,34],54:[2,34],65:[2,34],68:[2,34],72:[2,34],75:[2,34],80:[2,34],81:[2,34],82:[2,34],83:[2,34],84:[2,34],85:[2,34]},{23:[2,35],33:[2,35],54:[2,35],65:[2,35],68:[2,35],72:[2,35],75:[2,35],80:[2,35],81:[2,35],82:[2,35],83:[2,35],84:[2,35],85:[2,35]},{23:[2,36],33:[2,36],54:[2,36],65:[2,36],68:[2,36],72:[2,36],75:[2,36],80:[2,36],81:[2,36],82:[2,36],83:[2,36],84:[2,36],85:[2,36]},{23:[2,37],33:[2,37],54:[2,37],65:[2,37],68:[2,37],72:[2,37],75:[2,37],80:[2,37],81:[2,37],82:[2,37],83:[2,37],84:[2,37],85:[2,37]},{23:[2,38],33:[2,38],54:[2,38],65:[2,38],68:[2,38],72:[2,38],75:[2,38],80:[2,38],81:[2,38],82:[2,38],83:[2,38],84:[2,38],85:[2,38]},{23:[2,39],33:[2,39],54:[2,39],65:[2,39],68:[2,39],72:[2,39],75:[2,39],80:[2,39],81:[2,39],82:[2,39],83:[2,39],84:[2,39],85:[2,39]},{23:[2,43],33:[2,43],54:[2,43],65:[2,43],68:[2,43],72:[2,43],75:[2,43],80:[2,43],81:[2,43],82:[2,43],83:[2,43],84:[2,43],85:[2,43],87:[1,51]},{72:[1,35],86:52},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{52:53,54:[2,82],65:[2,82],72:[2,82],80:[2,82],81:[2,82],82:[2,82],83:[2,82],84:[2,82],85:[2,82]},{25:54,38:56,39:[1,58],43:57,44:[1,59],45:55,47:[2,54]},{28:60,43:61,44:[1,59],47:[2,56]},{13:63,15:[1,20],18:[1,62]},{15:[2,48],18:[2,48]},{33:[2,86],57:64,65:[2,86],72:[2,86],80:[2,86],81:[2,86],82:[2,86],83:[2,86],84:[2,86],85:[2,86]},{33:[2,40],65:[2,40],72:[2,40],80:[2,40],81:[2,40],82:[2,40],83:[2,40],84:[2,40],85:[2,40]},{33:[2,41],65:[2,41],72:[2,41],80:[2,41],81:[2,41],82:[2,41],83:[2,41],84:[2,41],85:[2,41]},{20:65,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:66,47:[1,67]},{30:68,33:[2,58],65:[2,58],72:[2,58],75:[2,58],80:[2,58],81:[2,58],82:[2,58],83:[2,58],84:[2,58],85:[2,58]},{33:[2,64],35:69,65:[2,64],72:[2,64],75:[2,64],80:[2,64],81:[2,64],82:[2,64],83:[2,64],84:[2,64],85:[2,64]},{21:70,23:[2,50],65:[2,50],72:[2,50],80:[2,50],81:[2,50],82:[2,50],83:[2,50],84:[2,50],85:[2,50]},{33:[2,90],61:71,65:[2,90],72:[2,90],80:[2,90],81:[2,90],82:[2,90],83:[2,90],84:[2,90],85:[2,90]},{20:75,33:[2,80],50:72,63:73,64:76,65:[1,44],69:74,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{72:[1,80]},{23:[2,42],33:[2,42],54:[2,42],65:[2,42],68:[2,42],72:[2,42],75:[2,42],80:[2,42],81:[2,42],82:[2,42],83:[2,42],84:[2,42],85:[2,42],87:[1,51]},{20:75,53:81,54:[2,84],63:82,64:76,65:[1,44],69:83,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{26:84,47:[1,67]},{47:[2,55]},{4:85,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],39:[2,46],44:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{47:[2,20]},{20:86,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{4:87,6:3,14:[2,46],15:[2,46],19:[2,46],29:[2,46],34:[2,46],47:[2,46],48:[2,46],51:[2,46],55:[2,46],60:[2,46]},{26:88,47:[1,67]},{47:[2,57]},{5:[2,11],14:[2,11],15:[2,11],19:[2,11],29:[2,11],34:[2,11],39:[2,11],44:[2,11],47:[2,11],48:[2,11],51:[2,11],55:[2,11],60:[2,11]},{15:[2,49],18:[2,49]},{20:75,33:[2,88],58:89,63:90,64:76,65:[1,44],69:91,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{65:[2,94],66:92,68:[2,94],72:[2,94],80:[2,94],81:[2,94],82:[2,94],83:[2,94],84:[2,94],85:[2,94]},{5:[2,25],14:[2,25],15:[2,25],19:[2,25],29:[2,25],34:[2,25],39:[2,25],44:[2,25],47:[2,25],48:[2,25],51:[2,25],55:[2,25],60:[2,25]},{20:93,72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,31:94,33:[2,60],63:95,64:76,65:[1,44],69:96,70:77,71:78,72:[1,79],75:[2,60],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,66],36:97,63:98,64:76,65:[1,44],69:99,70:77,71:78,72:[1,79],75:[2,66],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,22:100,23:[2,52],63:101,64:76,65:[1,44],69:102,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{20:75,33:[2,92],62:103,63:104,64:76,65:[1,44],69:105,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,106]},{33:[2,79],65:[2,79],72:[2,79],80:[2,79],81:[2,79],82:[2,79],83:[2,79],84:[2,79],85:[2,79]},{33:[2,81]},{23:[2,27],33:[2,27],54:[2,27],65:[2,27],68:[2,27],72:[2,27],75:[2,27],80:[2,27],81:[2,27],82:[2,27],83:[2,27],84:[2,27],85:[2,27]},{23:[2,28],33:[2,28],54:[2,28],65:[2,28],68:[2,28],72:[2,28],75:[2,28],80:[2,28],81:[2,28],82:[2,28],83:[2,28],84:[2,28],85:[2,28]},{23:[2,30],33:[2,30],54:[2,30],68:[2,30],71:107,72:[1,108],75:[2,30]},{23:[2,98],33:[2,98],54:[2,98],68:[2,98],72:[2,98],75:[2,98]},{23:[2,45],33:[2,45],54:[2,45],65:[2,45],68:[2,45],72:[2,45],73:[1,109],75:[2,45],80:[2,45],81:[2,45],82:[2,45],83:[2,45],84:[2,45],85:[2,45],87:[2,45]},{23:[2,44],33:[2,44],54:[2,44],65:[2,44],68:[2,44],72:[2,44],75:[2,44],80:[2,44],81:[2,44],82:[2,44],83:[2,44],84:[2,44],85:[2,44],87:[2,44]},{54:[1,110]},{54:[2,83],65:[2,83],72:[2,83],80:[2,83],81:[2,83],82:[2,83],83:[2,83],84:[2,83],85:[2,83]},{54:[2,85]},{5:[2,13],14:[2,13],15:[2,13],19:[2,13],29:[2,13],34:[2,13],39:[2,13],44:[2,13],47:[2,13],48:[2,13],51:[2,13],55:[2,13],60:[2,13]},{38:56,39:[1,58],43:57,44:[1,59],45:112,46:111,47:[2,76]},{33:[2,70],40:113,65:[2,70],72:[2,70],75:[2,70],80:[2,70],81:[2,70],82:[2,70],83:[2,70],84:[2,70],85:[2,70]},{47:[2,18]},{5:[2,14],14:[2,14],15:[2,14],19:[2,14],29:[2,14],34:[2,14],39:[2,14],44:[2,14],47:[2,14],48:[2,14],51:[2,14],55:[2,14],60:[2,14]},{33:[1,114]},{33:[2,87],65:[2,87],72:[2,87],80:[2,87],81:[2,87],82:[2,87],83:[2,87],84:[2,87],85:[2,87]},{33:[2,89]},{20:75,63:116,64:76,65:[1,44],67:115,68:[2,96],69:117,70:77,71:78,72:[1,79],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{33:[1,118]},{32:119,33:[2,62],74:120,75:[1,121]},{33:[2,59],65:[2,59],72:[2,59],75:[2,59],80:[2,59],81:[2,59],82:[2,59],83:[2,59],84:[2,59],85:[2,59]},{33:[2,61],75:[2,61]},{33:[2,68],37:122,74:123,75:[1,121]},{33:[2,65],65:[2,65],72:[2,65],75:[2,65],80:[2,65],81:[2,65],82:[2,65],83:[2,65],84:[2,65],85:[2,65]},{33:[2,67],75:[2,67]},{23:[1,124]},{23:[2,51],65:[2,51],72:[2,51],80:[2,51],81:[2,51],82:[2,51],83:[2,51],84:[2,51],85:[2,51]},{23:[2,53]},{33:[1,125]},{33:[2,91],65:[2,91],72:[2,91],80:[2,91],81:[2,91],82:[2,91],83:[2,91],84:[2,91],85:[2,91]},{33:[2,93]},{5:[2,22],14:[2,22],15:[2,22],19:[2,22],29:[2,22],34:[2,22],39:[2,22],44:[2,22],47:[2,22],48:[2,22],51:[2,22],55:[2,22],60:[2,22]},{23:[2,99],33:[2,99],54:[2,99],68:[2,99],72:[2,99],75:[2,99]},{73:[1,109]},{20:75,63:126,64:76,65:[1,44],72:[1,35],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,23],14:[2,23],15:[2,23],19:[2,23],29:[2,23],34:[2,23],39:[2,23],44:[2,23],47:[2,23],48:[2,23],51:[2,23],55:[2,23],60:[2,23]},{47:[2,19]},{47:[2,77]},{20:75,33:[2,72],41:127,63:128,64:76,65:[1,44],69:129,70:77,71:78,72:[1,79],75:[2,72],78:26,79:27,80:[1,28],81:[1,29],82:[1,30],83:[1,31],84:[1,32],85:[1,34],86:33},{5:[2,24],14:[2,24],15:[2,24],19:[2,24],29:[2,24],34:[2,24],39:[2,24],44:[2,24],47:[2,24],48:[2,24],51:[2,24],55:[2,24],60:[2,24]},{68:[1,130]},{65:[2,95],68:[2,95],72:[2,95],80:[2,95],81:[2,95],82:[2,95],83:[2,95],84:[2,95],85:[2,95]},{68:[2,97]},{5:[2,21],14:[2,21],15:[2,21],19:[2,21],29:[2,21],34:[2,21],39:[2,21],44:[2,21],47:[2,21],48:[2,21],51:[2,21],55:[2,21],60:[2,21]},{33:[1,131]},{33:[2,63]},{72:[1,133],76:132},{33:[1,134]},{33:[2,69]},{15:[2,12]},{14:[2,26],15:[2,26],19:[2,26],29:[2,26],34:[2,26],47:[2,26],48:[2,26],51:[2,26],55:[2,26],60:[2,26]},{23:[2,31],33:[2,31],54:[2,31],68:[2,31],72:[2,31],75:[2,31]},{33:[2,74],42:135,74:136,75:[1,121]},{33:[2,71],65:[2,71],72:[2,71],75:[2,71],80:[2,71],81:[2,71],82:[2,71],83:[2,71],84:[2,71],85:[2,71]},{33:[2,73],75:[2,73]},{23:[2,29],33:[2,29],54:[2,29],65:[2,29],68:[2,29],72:[2,29],75:[2,29],80:[2,29],81:[2,29],82:[2,29],83:[2,29],84:[2,29],85:[2,29]},{14:[2,15],15:[2,15],19:[2,15],29:[2,15],34:[2,15],39:[2,15],44:[2,15],47:[2,15],48:[2,15],51:[2,15],55:[2,15],60:[2,15]},{72:[1,138],77:[1,137]},{72:[2,100],77:[2,100]},{14:[2,16],15:[2,16],19:[2,16],29:[2,16],34:[2,16],44:[2,16],47:[2,16],48:[2,16],51:[2,16],55:[2,16],60:[2,16]},{33:[1,139]},{33:[2,75]},{33:[2,32]},{72:[2,101],77:[2,101]},{14:[2,17],15:[2,17],19:[2,17],29:[2,17],34:[2,17],39:[2,17],44:[2,17],47:[2,17],48:[2,17],51:[2,17],55:[2,17],60:[2,17]}],defaultActions:{4:[2,1],55:[2,55],57:[2,20],61:[2,57],74:[2,81],83:[2,85],87:[2,18],91:[2,89],102:[2,53],105:[2,93],111:[2,19],112:[2,77],117:[2,97],120:[2,63],123:[2,69],124:[2,12],136:[2,75],137:[2,32]},parseError:function(k,c){throw new Error(k)
},parse:function(V){function U(){var b;
return b=T.lexer.lex()||1,"number"!=typeof b&&(b=T.symbols_[b]||b),b
}var T=this,S=[0],R=[null],Q=[],P=this.table,O="",N=0,M=0,L=0;
this.lexer.setInput(V),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,this.yy.parser=this,"undefined"==typeof this.lexer.yylloc&&(this.lexer.yylloc={});
var K=this.lexer.yylloc;
Q.push(K);
var J=this.lexer.options&&this.lexer.options.ranges;
"function"==typeof this.yy.parseError&&(this.parseError=this.yy.parseError);
for(var I,H,G,F,E,D,C,B,A,z={};
;
){if(G=S[S.length-1],this.defaultActions[G]?F=this.defaultActions[G]:((null===I||"undefined"==typeof I)&&(I=U()),F=P[G]&&P[G][I]),"undefined"==typeof F||!F.length||!F[0]){var y="";
if(!L){A=[];
for(D in P[G]){this.terminals_[D]&&D>2&&A.push("'"+this.terminals_[D]+"'")
}y=this.lexer.showPosition?"Parse error on line "+(N+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+A.join(", ")+", got '"+(this.terminals_[I]||I)+"'":"Parse error on line "+(N+1)+": Unexpected "+(1==I?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(y,{text:this.lexer.match,token:this.terminals_[I]||I,line:this.lexer.yylineno,loc:K,expected:A})
}}if(F[0] instanceof Array&&F.length>1){throw new Error("Parse Error: multiple actions possible at state: "+G+", token: "+I)
}switch(F[0]){case 1:S.push(I),R.push(this.lexer.yytext),Q.push(this.lexer.yylloc),S.push(F[1]),I=null,H?(I=H,H=null):(M=this.lexer.yyleng,O=this.lexer.yytext,N=this.lexer.yylineno,K=this.lexer.yylloc,L>0&&L--);
break;
case 2:if(C=this.productions_[F[1]][1],z.$=R[R.length-C],z._$={first_line:Q[Q.length-(C||1)].first_line,last_line:Q[Q.length-1].last_line,first_column:Q[Q.length-(C||1)].first_column,last_column:Q[Q.length-1].last_column},J&&(z._$.range=[Q[Q.length-(C||1)].range[0],Q[Q.length-1].range[1]]),E=this.performAction.call(z,O,M,N,this.yy,F[1],R,Q),"undefined"!=typeof E){return E
}C&&(S=S.slice(0,-1*C*2),R=R.slice(0,-1*C),Q=Q.slice(0,-1*C)),S.push(this.productions_[F[1]][0]),R.push(z.$),Q.push(z._$),B=P[S[S.length-2]][S[S.length-1]],S.push(B);
break;
case 3:return !0
}}return !0
}},j=function(){var b={EOF:1,parseError:function(k,c){if(!this.yy.parser){throw new Error(k)
}this.yy.parser.parseError(k,c)
},setInput:function(c){return this._input=c,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this
},input:function(){var k=this._input[0];
this.yytext+=k,this.yyleng++,this.offset++,this.match+=k,this.matched+=k;
var c=k.match(/(?:\r\n?|\n).*/g);
return c?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),k
},unput:function(l){var k=l.length,o=l.split(/(?:\r\n?|\n)/g);
this._input=l+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-k-1),this.offset-=k;
var n=this.match.split(/(?:\r\n?|\n)/g);
this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),o.length-1&&(this.yylineno-=o.length-1);
var m=this.yylloc.range;
return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:o?(o.length===n.length?this.yylloc.first_column:0)+n[n.length-o.length].length-o[0].length:this.yylloc.first_column-k},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-k]),this
},more:function(){return this._more=!0,this
},less:function(c){this.unput(this.match.slice(c))
},pastInput:function(){var c=this.matched.substr(0,this.matched.length-this.match.length);
return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")
},upcomingInput:function(){var c=this.match;
return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")
},showPosition:function(){var k=this.pastInput(),c=new Array(k.length+1).join("-");
return k+this.upcomingInput()+"\n"+c+"^"
},next:function(){if(this.done){return this.EOF
}this._input||(this.done=!0);
var l,k,q,p,o;
this._more||(this.yytext="",this.match="");
for(var n=this._currentRules(),m=0;
m<n.length&&(q=this._input.match(this.rules[n[m]]),!q||k&&!(q[0].length>k[0].length)||(k=q,p=m,this.options.flex));
m++){}return k?(o=k[0].match(/(?:\r\n?|\n).*/g),o&&(this.yylineno+=o.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:o?o[o.length-1].length-o[o.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+k[0].length},this.yytext+=k[0],this.match+=k[0],this.matches=k,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._input=this._input.slice(k[0].length),this.matched+=k[0],l=this.performAction.call(this,this.yy,this,n[p],this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),l?l:void 0):""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})
},lex:function(){var c=this.next();
return"undefined"!=typeof c?c:this.lex()
},begin:function(c){this.conditionStack.push(c)
},popState:function(){return this.conditionStack.pop()
},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules
},topState:function(){return this.conditionStack[this.conditionStack.length-2]
},pushState:function(c){this.begin(c)
}};
return b.options={},b.performAction=function(l,k,o,n){function m(p,q){return k.yytext=k.yytext.substr(p,k.yyleng-q)
}switch(o){case 0:if("\\\\"===k.yytext.slice(-2)?(m(0,1),this.begin("mu")):"\\"===k.yytext.slice(-1)?(m(0,1),this.begin("emu")):this.begin("mu"),k.yytext){return 15
}break;
case 1:return 15;
case 2:return this.popState(),15;
case 3:return this.begin("raw"),15;
case 4:return this.popState(),"raw"===this.conditionStack[this.conditionStack.length-1]?15:(k.yytext=k.yytext.substr(5,k.yyleng-9),"END_RAW_BLOCK");
case 5:return 15;
case 6:return this.popState(),14;
case 7:return 65;
case 8:return 68;
case 9:return 19;
case 10:return this.popState(),this.begin("raw"),23;
case 11:return 55;
case 12:return 60;
case 13:return 29;
case 14:return 47;
case 15:return this.popState(),44;
case 16:return this.popState(),44;
case 17:return 34;
case 18:return 39;
case 19:return 51;
case 20:return 48;
case 21:this.unput(k.yytext),this.popState(),this.begin("com");
break;
case 22:return this.popState(),14;
case 23:return 48;
case 24:return 73;
case 25:return 72;
case 26:return 72;
case 27:return 87;
case 28:break;
case 29:return this.popState(),54;
case 30:return this.popState(),33;
case 31:return k.yytext=m(1,2).replace(/\\"/g,'"'),80;
case 32:return k.yytext=m(1,2).replace(/\\'/g,"'"),80;
case 33:return 85;
case 34:return 82;
case 35:return 82;
case 36:return 83;
case 37:return 84;
case 38:return 81;
case 39:return 75;
case 40:return 77;
case 41:return 72;
case 42:return k.yytext=k.yytext.replace(/\\([\\\]])/g,"$1"),72;
case 43:return"INVALID";
case 44:return 5
}},b.rules=[/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:\{\{\{\{(?=[^\/]))/,/^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/,/^(?:[^\x00]*?(?=(\{\{\{\{)))/,/^(?:[\s\S]*?--(~)?\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{\{\{)/,/^(?:\}\}\}\})/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#>)/,/^(?:\{\{(~)?#\*?)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^\s*(~)?\}\})/,/^(?:\{\{(~)?\s*else\s*(~)?\}\})/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{(~)?!--)/,/^(?:\{\{(~)?![\s\S]*?\}\})/,/^(?:\{\{(~)?\*?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)|])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:undefined(?=([~}\s)])))/,/^(?:null(?=([~}\s)])))/,/^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/,/^(?:as\s+\|)/,/^(?:\|)/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/,/^(?:\[(\\\]|[^\]])*\])/,/^(?:.)/,/^(?:$)/],b.conditions={mu:{rules:[7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44],inclusive:!1},emu:{rules:[2],inclusive:!1},com:{rules:[6],inclusive:!1},raw:{rules:[3,4,5],inclusive:!1},INITIAL:{rules:[0,1,44],inclusive:!0}},b
}();
return g.lexer=j,h.prototype=g,g.Parser=h,new h
}();
d.__esModule=!0,d["default"]=f
},function(w,v,u){function t(){var b=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];
this.options=b
}function r(g,f,k){void 0===f&&(f=g.length);
var j=g[f-1],h=g[f-2];
return j?"ContentStatement"===j.type?(h||!k?/\r?\n\s*?$/:/(^|\r?\n)\s*?$/).test(j.original):void 0:k
}function q(g,f,k){void 0===f&&(f=-1);
var j=g[f+1],h=g[f+2];
return j?"ContentStatement"===j.type?(h||!k?/^\s*?\r?\n/:/^\s*?(\r?\n|$)/).test(j.original):void 0:k
}function p(g,f,k){var j=g[null==f?0:f+1];
if(j&&"ContentStatement"===j.type&&(k||!j.rightStripped)){var h=j.value;
j.value=j.value.replace(k?/^\s+/:/^[ \t]*\r?\n?/,""),j.rightStripped=j.value!==h
}}function o(g,f,k){var j=g[null==f?g.length-1:f-1];
if(j&&"ContentStatement"===j.type&&(k||!j.leftStripped)){var h=j.value;
return j.value=j.value.replace(k?/\s+$/:/[ \t]+$/,""),j.leftStripped=j.value!==h,j.leftStripped
}}var n=u(1)["default"];
v.__esModule=!0;
var m=u(25),l=n(m);
t.prototype=new l["default"],t.prototype.Program=function(F){var E=!this.options.ignoreStandalone,D=!this.isRootSeen;
this.isRootSeen=!0;
for(var C=F.body,B=0,A=C.length;
A>B;
B++){var z=C[B],y=this.accept(z);
if(y){var x=r(C,B,D),h=q(C,B,D),g=y.openStandalone&&x,f=y.closeStandalone&&h,e=y.inlineStandalone&&x&&h;
y.close&&p(C,B,!0),y.open&&o(C,B,!0),E&&e&&(p(C,B),o(C,B)&&"PartialStatement"===z.type&&(z.indent=/([ \t]+$)/.exec(C[B-1].original)[1])),E&&g&&(p((z.program||z.inverse).body),o(C,B)),E&&f&&(p(C,B),o((z.inverse||z.program).body))
}}return F
},t.prototype.BlockStatement=t.prototype.DecoratorBlock=t.prototype.PartialBlockStatement=function(f){this.accept(f.program),this.accept(f.inverse);
var e=f.program||f.inverse,z=f.program&&f.inverse,y=z,x=z;
if(z&&z.chained){for(y=z.body[0].program;
x.chained;
){x=x.body[x.body.length-1].program
}}var h={open:f.openStrip.open,close:f.closeStrip.close,openStandalone:q(e.body),closeStandalone:r((y||e).body)};
if(f.openStrip.close&&p(e.body,null,!0),z){var g=f.inverseStrip;
g.open&&o(e.body,null,!0),g.close&&p(y.body,null,!0),f.closeStrip.open&&o(x.body,null,!0),!this.options.ignoreStandalone&&r(e.body)&&q(y.body)&&(o(e.body),p(y.body))
}else{f.closeStrip.open&&o(e.body,null,!0)
}return h
},t.prototype.Decorator=t.prototype.MustacheStatement=function(b){return b.strip
},t.prototype.PartialStatement=t.prototype.CommentStatement=function(d){var c=d.strip||{};
return{inlineStandalone:!0,open:c.open,close:c.close}
},v["default"]=t,w.exports=v["default"]
},function(u,t,r){function q(){this.parents=[]
}function p(b){this.acceptRequired(b,"path"),this.acceptArray(b.params),this.acceptKey(b,"hash")
}function o(b){p.call(this,b),this.acceptKey(b,"program"),this.acceptKey(b,"inverse")
}function n(b){this.acceptRequired(b,"name"),this.acceptArray(b.params),this.acceptKey(b,"hash")
}var m=r(1)["default"];
t.__esModule=!0;
var l=r(6),k=m(l);
q.prototype={constructor:q,mutating:!1,acceptKey:function(e,d){var f=this.accept(e[d]);
if(this.mutating){if(f&&!q.prototype[f.type]){throw new k["default"]('Unexpected node type "'+f.type+'" found when accepting '+d+" on "+e.type)
}e[d]=f
}},acceptRequired:function(d,c){if(this.acceptKey(d,c),!d[c]){throw new k["default"](d.type+" requires "+c)
}},acceptArray:function(e){for(var d=0,f=e.length;
f>d;
d++){this.acceptKey(e,d),e[d]||(e.splice(d,1),d--,f--)
}},accept:function(d){if(d){if(!this[d.type]){throw new k["default"]("Unknown type: "+d.type,d)
}this.current&&this.parents.unshift(this.current),this.current=d;
var c=this[d.type](d);
return this.current=this.parents.shift(),!this.mutating||c?c:c!==!1?d:void 0
}},Program:function(b){this.acceptArray(b.body)
},MustacheStatement:p,Decorator:p,BlockStatement:o,DecoratorBlock:o,PartialStatement:n,PartialBlockStatement:function(b){n.call(this,b),this.acceptKey(b,"program")
},ContentStatement:function(){},CommentStatement:function(){},SubExpression:p,PathExpression:function(){},StringLiteral:function(){},NumberLiteral:function(){},BooleanLiteral:function(){},UndefinedLiteral:function(){},NullLiteral:function(){},Hash:function(b){this.acceptArray(b.pairs)
},HashPair:function(b){this.acceptRequired(b,"value")
}},t["default"]=q,u.exports=t["default"]
},function(I,H,G){function F(e,d){if(d=d.path?d.path.original:d,e.path.original!==d){var f={loc:e.path.loc};
throw new r["default"](e.path.original+" doesn't match "+d,f)
}}function E(d,c){this.source=d,this.start={line:c.first_line,column:c.first_column},this.end={line:c.last_line,column:c.last_column}
}function D(b){return/^\[.*\]$/.test(b)?b.substr(1,b.length-2):b
}function C(d,c){return{open:"~"===d.charAt(2),close:"~"===c.charAt(c.length-3)}
}function B(b){return b.replace(/^\{\{~?\!-?-?/,"").replace(/-?-?~?\}\}$/,"")
}function A(N,M,L){L=this.locInfo(L);
for(var K=N?"@":"",J=[],q=0,p="",o=0,n=M.length;
n>o;
o++){var m=M[o].part,l=M[o].original!==m;
if(K+=(M[o].separator||"")+m,l||".."!==m&&"."!==m&&"this"!==m){J.push(m)
}else{if(J.length>0){throw new r["default"]("Invalid path: "+K,{loc:L})
}".."===m&&(q++,p+="../")
}}return{type:"PathExpression",data:N,depth:q,parts:J,original:K,loc:L}
}function z(J,q,p,o,n,m){var l=o.charAt(3)||o.charAt(2),k="{"!==l&&"&"!==l,j=/\*/.test(o);
return{type:j?"Decorator":"MustacheStatement",path:J,params:q,hash:p,escaped:k,strip:n,loc:this.locInfo(m)}
}function y(g,d,k,j){F(g,k),j=this.locInfo(j);
var h={type:"Program",body:d,strip:{},loc:j};
return{type:"BlockStatement",path:g.path,params:g.params,hash:g.hash,program:h,openStrip:{},inverseStrip:{},closeStrip:{},loc:j}
}function x(J,q,p,o,n,m){o&&o.path&&F(J,o);
var l=/\*/.test(J.open);
q.blockParams=J.blockParams;
var k=void 0,d=void 0;
if(p){if(l){throw new r["default"]("Unexpected inverse block on decorator",p)
}p.chain&&(p.program.body[0].closeStrip=o.strip),d=p.strip,k=p.program
}return n&&(n=k,k=q,q=n),{type:l?"DecoratorBlock":"BlockStatement",path:J.path,params:J.params,hash:J.hash,program:q,inverse:k,openStrip:J.strip,inverseStrip:d,closeStrip:o&&o.strip,loc:this.locInfo(m)}
}function w(f,e){if(!e&&f.length){var h=f[0].loc,g=f[f.length-1].loc;
h&&g&&(e={source:h.source,start:{line:h.start.line,column:h.start.column},end:{line:g.end.line,column:g.end.column}})
}return{type:"Program",body:f,strip:{},loc:e}
}function v(f,d,h,g){return F(f,h),{type:"PartialBlockStatement",name:f.path,params:f.params,hash:f.hash,program:d,openStrip:f.strip,closeStrip:h&&h.strip,loc:this.locInfo(g)}
}var u=G(1)["default"];
H.__esModule=!0,H.SourceLocation=E,H.id=D,H.stripFlags=C,H.stripComment=B,H.preparePath=A,H.prepareMustache=z,H.prepareRawBlock=y,H.prepareBlock=x,H.prepareProgram=w,H.preparePartialBlock=v;
var t=G(6),r=u(t)
},function(E,D,C){function B(){}function A(g,f,k){if(null==g||"string"!=typeof g&&"Program"!==g.type){throw new u["default"]("You must pass a string or Handlebars AST to Handlebars.precompile. You passed "+g)
}f=f||{},"data" in f||(f.data=!0),f.compat&&(f.useDepths=!0);
var j=k.parse(g,f),h=(new k.Compiler).compile(j,f);
return(new k.JavaScriptCompiler).compile(h,f)
}function z(h,g,m){function l(){var c=m.parse(h,g),b=(new m.Compiler).compile(c,g),a=(new m.JavaScriptCompiler).compile(b,g,void 0,!0);
return m.template(a)
}function k(d,c){return j||(j=l()),j.call(this,d,c)
}if(void 0===g&&(g={}),null==h||"string"!=typeof h&&"Program"!==h.type){throw new u["default"]("You must pass a string or Handlebars AST to Handlebars.compile. You passed "+h)
}"data" in g||(g.data=!0),g.compat&&(g.useDepths=!0);
var j=void 0;
return k._setup=function(b){return j||(j=l()),j._setup(b)
},k._child=function(f,d,o,n){return j||(j=l()),j._child(f,d,o,n)
},k
}function y(e,d){if(e===d){return !0
}if(t.isArray(e)&&t.isArray(d)&&e.length===d.length){for(var f=0;
f<e.length;
f++){if(!y(e[f],d[f])){return !1
}}return !0
}}function x(d){if(!d.path.parts){var c=d.path;
d.path={type:"PathExpression",data:!1,depth:0,parts:[c.original+""],original:c.original+"",loc:c.loc}
}}var w=C(1)["default"];
D.__esModule=!0,D.Compiler=B,D.precompile=A,D.compile=z;
var v=C(6),u=w(v),t=C(5),r=C(21),q=w(r),p=[].slice;
B.prototype={compiler:B,equals:function(g){var f=this.opcodes.length;
if(g.opcodes.length!==f){return !1
}for(var k=0;
f>k;
k++){var j=this.opcodes[k],h=g.opcodes[k];
if(j.opcode!==h.opcode||!y(j.args,h.args)){return !1
}}f=this.children.length;
for(var k=0;
f>k;
k++){if(!this.children[k].equals(g.children[k])){return !1
}}return !0
},guid:0,compile:function(f,e){this.sourceNode=[],this.opcodes=[],this.children=[],this.options=e,this.stringParams=e.stringParams,this.trackIds=e.trackIds,e.blockParams=e.blockParams||[];
var h=e.knownHelpers;
if(e.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0,lookup:!0},h){for(var g in h){g in h&&(e.knownHelpers[g]=h[g])
}}return this.accept(f)
},compileProgram:function(f){var e=new this.compiler,h=e.compile(f,this.options),g=this.guid++;
return this.usePartial=this.usePartial||h.usePartial,this.children[g]=h,this.useDepths=this.useDepths||h.useDepths,g
},accept:function(d){if(!this[d.type]){throw new u["default"]("Unknown type: "+d.type,d)
}this.sourceNode.unshift(d);
var c=this[d.type](d);
return this.sourceNode.shift(),c
},Program:function(f){this.options.blockParams.unshift(f.blockParams);
for(var e=f.body,h=e.length,g=0;
h>g;
g++){this.accept(e[g])
}return this.options.blockParams.shift(),this.isSimple=1===h,this.blockParams=f.blockParams?f.blockParams.length:0,this
},BlockStatement:function(f){x(f);
var e=f.program,h=f.inverse;
e=e&&this.compileProgram(e),h=h&&this.compileProgram(h);
var g=this.classifySexpr(f);
"helper"===g?this.helperSexpr(f,e,h):"simple"===g?(this.simpleSexpr(f),this.opcode("pushProgram",e),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("blockValue",f.path.original)):(this.ambiguousSexpr(f,e,h),this.opcode("pushProgram",e),this.opcode("pushProgram",h),this.opcode("emptyHash"),this.opcode("ambiguousBlockValue")),this.opcode("append")
},DecoratorBlock:function(f){var e=f.program&&this.compileProgram(f.program),h=this.setupFullMustacheParams(f,e,void 0),g=f.path;
this.useDecorators=!0,this.opcode("registerDecorator",h.length,g.original)
},PartialStatement:function(h){this.usePartial=!0;
var g=h.program;
g&&(g=this.compileProgram(h.program));
var m=h.params;
if(m.length>1){throw new u["default"]("Unsupported number of partial arguments: "+m.length,h)
}m.length||(this.options.explicitPartialContext?this.opcode("pushLiteral","undefined"):m.push({type:"PathExpression",parts:[],depth:0}));
var l=h.name.original,k="SubExpression"===h.name.type;
k&&this.accept(h.name),this.setupFullMustacheParams(h,g,void 0,!0);
var j=h.indent||"";
this.options.preventIndent&&j&&(this.opcode("appendContent",j),j=""),this.opcode("invokePartial",k,l,j),this.opcode("append")
},PartialBlockStatement:function(b){this.PartialStatement(b)
},MustacheStatement:function(b){this.SubExpression(b),b.escaped&&!this.options.noEscape?this.opcode("appendEscaped"):this.opcode("append")
},Decorator:function(b){this.DecoratorBlock(b)
},ContentStatement:function(b){b.value&&this.opcode("appendContent",b.value)
},CommentStatement:function(){},SubExpression:function(d){x(d);
var c=this.classifySexpr(d);
"simple"===c?this.simpleSexpr(d):"helper"===c?this.helperSexpr(d):this.ambiguousSexpr(d)
},ambiguousSexpr:function(h,g,m){var l=h.path,k=l.parts[0],j=null!=g||null!=m;
this.opcode("getContext",l.depth),this.opcode("pushProgram",g),this.opcode("pushProgram",m),l.strict=!0,this.accept(l),this.opcode("invokeAmbiguous",k,j)
},simpleSexpr:function(d){var c=d.path;
c.strict=!0,this.accept(c),this.opcode("resolvePossibleLambda")
},helperSexpr:function(h,g,m){var l=this.setupFullMustacheParams(h,g,m),k=h.path,j=k.parts[0];
if(this.options.knownHelpers[j]){this.opcode("invokeKnownHelper",l.length,j)
}else{if(this.options.knownHelpersOnly){throw new u["default"]("You specified knownHelpersOnly, but used the unknown helper "+j,h)
}k.strict=!0,k.falsy=!0,this.accept(k),this.opcode("invokeHelper",l.length,k.original,q["default"].helpers.simpleId(k))
}},PathExpression:function(f){this.addDepth(f.depth),this.opcode("getContext",f.depth);
var e=f.parts[0],h=q["default"].helpers.scopedId(f),g=!f.depth&&!h&&this.blockParamIndex(e);
g?this.opcode("lookupBlockParam",g,f.parts):e?f.data?(this.options.data=!0,this.opcode("lookupData",f.depth,f.parts,f.strict)):this.opcode("lookupOnContext",f.parts,f.falsy,f.strict,h):this.opcode("pushContext")
},StringLiteral:function(b){this.opcode("pushString",b.value)
},NumberLiteral:function(b){this.opcode("pushLiteral",b.value)
},BooleanLiteral:function(b){this.opcode("pushLiteral",b.value)
},UndefinedLiteral:function(){this.opcode("pushLiteral","undefined")
},NullLiteral:function(){this.opcode("pushLiteral","null")
},Hash:function(f){var e=f.pairs,h=0,g=e.length;
for(this.opcode("pushHash");
g>h;
h++){this.pushParam(e[h].value)
}for(;
h--;
){this.opcode("assignToHash",e[h].key)
}this.opcode("popHash")
},opcode:function(b){this.opcodes.push({opcode:b,args:p.call(arguments,1),loc:this.sourceNode[0].loc})
},addDepth:function(b){b&&(this.useDepths=!0)
},classifySexpr:function(j){var h=q["default"].helpers.simpleId(j.path),o=h&&!!this.blockParamIndex(j.path.parts[0]),n=!o&&q["default"].helpers.helperExpression(j),m=!o&&(n||h);
if(m&&!n){var l=j.path.parts[0],k=this.options;
k.knownHelpers[l]?n=!0:k.knownHelpersOnly&&(m=!1)
}return n?"helper":m?"ambiguous":"simple"
},pushParams:function(e){for(var d=0,f=e.length;
f>d;
d++){this.pushParam(e[d])
}},pushParam:function(f){var e=null!=f.value?f.value:f.original||"";
if(this.stringParams){e.replace&&(e=e.replace(/^(\.?\.\/)*/g,"").replace(/\//g,".")),f.depth&&this.addDepth(f.depth),this.opcode("getContext",f.depth||0),this.opcode("pushStringParam",e,f.type),"SubExpression"===f.type&&this.accept(f)
}else{if(this.trackIds){var h=void 0;
if(!f.parts||q["default"].helpers.scopedId(f)||f.depth||(h=this.blockParamIndex(f.parts[0])),h){var g=f.parts.slice(1).join(".");
this.opcode("pushId","BlockParam",h,g)
}else{e=f.original||e,e.replace&&(e=e.replace(/^this(?:\.|$)/,"").replace(/^\.\//,"").replace(/^\.$/,"")),this.opcode("pushId",f.type,e)
}}this.accept(f)
}},setupFullMustacheParams:function(g,f,k,j){var h=g.params;
return this.pushParams(h),this.opcode("pushProgram",f),this.opcode("pushProgram",k),g.hash?this.accept(g.hash):this.opcode("emptyHash",j),h
},blockParamIndex:function(g){for(var f=0,k=this.options.blockParams.length;
k>f;
f++){var j=this.options.blockParams[f],h=j&&t.indexOf(j,g);
if(j&&h>=0){return[f,h]
}}}}
},function(A,z,y){function x(b){this.value=b
}function w(){}function v(j,h,C,B){var m=h.popStack(),l=0,k=C.length;
for(j&&k--;
k>l;
l++){m=h.nameLookup(m,C[l],B)
}return j?[h.aliasable("container.strict"),"(",m,", ",h.quotedString(C[l]),")"]:m
}var u=y(1)["default"];
z.__esModule=!0;
var t=y(4),r=y(6),q=u(r),p=y(5),o=y(29),n=u(o);
w.prototype={nameLookup:function(d,c){return w.isValidJavaScriptVariableName(c)?[d,".",c]:[d,"[",JSON.stringify(c),"]"]
},depthedLookup:function(b){return[this.aliasable("container.lookup"),'(depths, "',b,'")']
},compilerInfo:function(){var d=t.COMPILER_REVISION,c=t.REVISION_CHANGES[d];
return[d,c]
},appendToBuffer:function(e,d,f){return p.isArray(e)||(e=[e]),e=this.source.wrap(e,d),this.environment.isSimple?["return ",e,";"]:f?["buffer += ",e,";"]:(e.appendToBuffer=!0,e)
},initializeBuffer:function(){return this.quotedString("")
},compile:function(N,M,L,K){this.environment=N,this.options=M,this.stringParams=this.options.stringParams,this.trackIds=this.options.trackIds,this.precompile=!K,this.name=this.environment.name,this.isChild=!!L,this.context=L||{decorators:[],programs:[],environments:[]},this.preamble(),this.stackSlot=0,this.stackVars=[],this.aliases={},this.registers={list:[]},this.hashes=[],this.compileStack=[],this.inlineStack=[],this.blockParams=[],this.compileChildren(N,M),this.useDepths=this.useDepths||N.useDepths||N.useDecorators||this.options.compat,this.useBlockParams=this.useBlockParams||N.useBlockParams;
var J=N.opcodes,I=void 0,H=void 0,G=void 0,F=void 0;
for(G=0,F=J.length;
F>G;
G++){I=J[G],this.source.currentLocation=I.loc,H=H||I.loc,this[I.opcode].apply(this,I.args)
}if(this.source.currentLocation=H,this.pushSource(""),this.stackSlot||this.inlineStack.length||this.compileStack.length){throw new q["default"]("Compile completed with content left on stack")
}this.decorators.isEmpty()?this.decorators=void 0:(this.useDecorators=!0,this.decorators.prepend("var decorators = container.decorators;\n"),this.decorators.push("return fn;"),K?this.decorators=Function.apply(this,["fn","props","container","depth0","data","blockParams","depths",this.decorators.merge()]):(this.decorators.prepend("function(fn, props, container, depth0, data, blockParams, depths) {\n"),this.decorators.push("}\n"),this.decorators=this.decorators.merge()));
var E=this.createFunctionContext(K);
if(this.isChild){return E
}var D={compiler:this.compilerInfo(),main:E};
this.decorators&&(D.main_d=this.decorators,D.useDecorators=!0);
var C=this.context,B=C.programs,j=C.decorators;
for(G=0,F=B.length;
F>G;
G++){B[G]&&(D[G]=B[G],j[G]&&(D[G+"_d"]=j[G],D.useDecorators=!0))
}return this.environment.usePartial&&(D.usePartial=!0),this.options.data&&(D.useData=!0),this.useDepths&&(D.useDepths=!0),this.useBlockParams&&(D.useBlockParams=!0),this.options.compat&&(D.compat=!0),K?D.compilerOptions=this.options:(D.compiler=JSON.stringify(D.compiler),this.source.currentLocation={start:{line:1,column:0}},D=this.objectLiteral(D),M.srcName?(D=D.toStringWithSourceMap({file:M.destName}),D.map=D.map&&D.map.toString()):D=D.toString()),D
},preamble:function(){this.lastContext=0,this.source=new n["default"](this.options.srcName),this.decorators=new n["default"](this.options.srcName)
},createFunctionContext:function(k){var j="",E=this.stackVars.concat(this.registers.list);
E.length>0&&(j+=", "+E.join(", "));
var D=0;
for(var C in this.aliases){var B=this.aliases[C];
this.aliases.hasOwnProperty(C)&&B.children&&B.referenceCount>1&&(j+=", alias"+ ++D+"="+C,B.children[0]="alias"+D)
}var m=["container","depth0","helpers","partials","data"];
(this.useBlockParams||this.useDepths)&&m.push("blockParams"),this.useDepths&&m.push("depths");
var l=this.mergeSource(j);
return k?(m.push(l),Function.apply(this,m)):this.source.wrap(["function(",m.join(","),") {\n  ",l,"}"])
},mergeSource:function(j){var h=this.environment.isSimple,C=!this.forceBuffer,B=void 0,m=void 0,l=void 0,k=void 0;
return this.source.each(function(b){b.appendToBuffer?(l?b.prepend("  + "):l=b,k=b):(l&&(m?l.prepend("buffer += "):B=!0,k.add(";"),l=k=void 0),m=!0,h||(C=!1))
}),C?l?(l.prepend("return "),k.add(";")):m||this.source.push('return "";'):(j+=", buffer = "+(B?"":this.initializeBuffer()),l?(l.prepend("return buffer + "),k.add(";")):this.source.push("return buffer;")),j&&this.source.prepend("var "+j.substring(2)+(B?"":";\n")),this.source.merge()
},blockValue:function(f){var e=this.aliasable("helpers.blockHelperMissing"),h=[this.contextName(0)];
this.setupHelperArgs(f,0,h);
var g=this.popStack();
h.splice(1,0,g),this.push(this.source.functionCall(e,"call",h))
},ambiguousBlockValue:function(){var e=this.aliasable("helpers.blockHelperMissing"),d=[this.contextName(0)];
this.setupHelperArgs("",0,d,!0),this.flushInline();
var f=this.topStack();
d.splice(1,0,f),this.pushSource(["if (!",this.lastHelper,") { ",f," = ",this.source.functionCall(e,"call",d),"}"])
},appendContent:function(b){this.pendingContent?b=this.pendingContent+b:this.pendingLocation=this.source.currentLocation,this.pendingContent=b
},append:function(){if(this.isInline()){this.replaceStack(function(c){return[" != null ? ",c,' : ""']
}),this.pushSource(this.appendToBuffer(this.popStack()))
}else{var b=this.popStack();
this.pushSource(["if (",b," != null) { ",this.appendToBuffer(b,void 0,!0)," }"]),this.environment.isSimple&&this.pushSource(["else { ",this.appendToBuffer("''",void 0,!0)," }"])
}},appendEscaped:function(){this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"),"(",this.popStack(),")"]))
},getContext:function(b){this.lastContext=b
},pushContext:function(){this.pushStackLiteral(this.contextName(this.lastContext))
},lookupOnContext:function(g,f,k,j){var h=0;
j||!this.options.compat||this.lastContext?this.pushContext():this.push(this.depthedLookup(g[h++])),this.resolvePath("context",g,h,f,k)
},lookupBlockParam:function(d,c){this.useBlockParams=!0,this.push(["blockParams[",d[0],"][",d[1],"]"]),this.resolvePath("context",c,1)
},lookupData:function(e,d,f){e?this.pushStackLiteral("container.data(data, "+e+")"):this.pushStackLiteral("data"),this.resolvePath("data",d,0,!0,f)
},resolvePath:function(j,f,C,B,m){var l=this;
if(this.options.strict||this.options.assumeObjects){return void this.push(v(this.options.strict&&m,this,f,j))
}for(var k=f.length;
k>C;
C++){this.replaceStack(function(b){var a=l.nameLookup(b,f[C],j);
return B?[" && ",a]:[" != null ? ",a," : ",b]
})
}},resolvePossibleLambda:function(){this.push([this.aliasable("container.lambda"),"(",this.popStack(),", ",this.contextName(0),")"])
},pushStringParam:function(d,c){this.pushContext(),this.pushString(c),"SubExpression"!==c&&("string"==typeof d?this.pushString(d):this.pushStackLiteral(d))
},emptyHash:function(b){this.trackIds&&this.push("{}"),this.stringParams&&(this.push("{}"),this.push("{}")),this.pushStackLiteral(b?"undefined":"{}")
},pushHash:function(){this.hash&&this.hashes.push(this.hash),this.hash={values:[],types:[],contexts:[],ids:[]}
},popHash:function(){var b=this.hash;
this.hash=this.hashes.pop(),this.trackIds&&this.push(this.objectLiteral(b.ids)),this.stringParams&&(this.push(this.objectLiteral(b.contexts)),this.push(this.objectLiteral(b.types))),this.push(this.objectLiteral(b.values))
},pushString:function(b){this.pushStackLiteral(this.quotedString(b))
},pushLiteral:function(b){this.pushStackLiteral(b)
},pushProgram:function(b){null!=b?this.pushStackLiteral(this.programExpression(b)):this.pushStackLiteral(null)
},registerDecorator:function(f,e){var h=this.nameLookup("decorators",e,"decorator"),g=this.setupHelperArgs(e,f);
this.decorators.push(["fn = ",this.decorators.functionCall(h,"",["fn","props","container",g])," || fn;"])
},invokeHelper:function(j,h,C){var B=this.popStack(),m=this.setupHelper(j,h),l=C?[m.name," || "]:"",k=["("].concat(l,B);
this.options.strict||k.push(" || ",this.aliasable("helpers.helperMissing")),k.push(")"),this.push(this.source.functionCall(k,"call",m.callParams))
},invokeKnownHelper:function(e,d){var f=this.setupHelper(e,d);
this.push(this.source.functionCall(f.name,"call",f.callParams))
},invokeAmbiguous:function(h,g){this.useRegister("helper");
var m=this.popStack();
this.emptyHash();
var l=this.setupHelper(0,h,g),k=this.lastHelper=this.nameLookup("helpers",h,"helper"),j=["(","(helper = ",k," || ",m,")"];
this.options.strict||(j[0]="(helper = ",j.push(" != null ? helper : ",this.aliasable("helpers.helperMissing"))),this.push(["(",j,l.paramsInit?["),(",l.paramsInit]:[],"),","(typeof helper === ",this.aliasable('"function"')," ? ",this.source.functionCall("helper","call",l.callParams)," : helper))"])
},invokePartial:function(g,f,k){var j=[],h=this.setupParams(f,1,j);
g&&(f=this.popStack(),delete h.name),k&&(h.indent=JSON.stringify(k)),h.helpers="helpers",h.partials="partials",h.decorators="container.decorators",g?j.unshift(f):j.unshift(this.nameLookup("partials",f,"partial")),this.options.compat&&(h.depths="depths"),h=this.objectLiteral(h),j.push(h),this.push(this.source.functionCall("container.invokePartial","",j))
},assignToHash:function(h){var g=this.popStack(),m=void 0,l=void 0,k=void 0;
this.trackIds&&(k=this.popStack()),this.stringParams&&(l=this.popStack(),m=this.popStack());
var j=this.hash;
m&&(j.contexts[h]=m),l&&(j.types[h]=l),k&&(j.ids[h]=k),j.values[h]=g
},pushId:function(e,d,f){"BlockParam"===e?this.pushStackLiteral("blockParams["+d[0]+"].path["+d[1]+"]"+(f?" + "+JSON.stringify("."+f):"")):"PathExpression"===e?this.pushString(d):"SubExpression"===e?this.pushStackLiteral("true"):this.pushStackLiteral("null")
},compiler:w,compileChildren:function(k,j){for(var E=k.children,D=void 0,C=void 0,B=0,m=E.length;
m>B;
B++){D=E[B],C=new this.compiler;
var l=this.matchExistingProgram(D);
null==l?(this.context.programs.push(""),l=this.context.programs.length,D.index=l,D.name="program"+l,this.context.programs[l]=C.compile(D,j,this.context,!this.precompile),this.context.decorators[l]=C.decorators,this.context.environments[l]=D,this.useDepths=this.useDepths||C.useDepths,this.useBlockParams=this.useBlockParams||C.useBlockParams):(D.index=l,D.name="program"+l,this.useDepths=this.useDepths||D.useDepths,this.useBlockParams=this.useBlockParams||D.useBlockParams)
}},matchExistingProgram:function(f){for(var e=0,h=this.context.environments.length;
h>e;
e++){var g=this.context.environments[e];
if(g&&g.equals(f)){return e
}}},programExpression:function(e){var d=this.environment.children[e],f=[d.index,"data",d.blockParams];
return(this.useBlockParams||this.useDepths)&&f.push("blockParams"),this.useDepths&&f.push("depths"),"container.program("+f.join(", ")+")"
},useRegister:function(b){this.registers[b]||(this.registers[b]=!0,this.registers.list.push(b))
},push:function(b){return b instanceof x||(b=this.source.wrap(b)),this.inlineStack.push(b),b
},pushStackLiteral:function(b){this.push(new x(b))
},pushSource:function(b){this.pendingContent&&(this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent),this.pendingLocation)),this.pendingContent=void 0),b&&this.source.push(b)
},replaceStack:function(j){var d=["("],D=void 0,C=void 0,B=void 0;
if(!this.isInline()){throw new q["default"]("replaceStack on non-inline")
}var m=this.popStack(!0);
if(m instanceof x){D=[m.value],d=["(",D],B=!0
}else{C=!0;
var l=this.incrStack();
d=["((",this.push(l)," = ",m,")"],D=this.topStack()
}var k=j.call(this,D);
B||this.popStack(),C&&this.stackSlot--,this.push(d.concat(k,")"))
},incrStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),this.topStackName()
},topStackName:function(){return"stack"+this.stackSlot
},flushInline:function(){var g=this.inlineStack;
this.inlineStack=[];
for(var d=0,k=g.length;
k>d;
d++){var j=g[d];
if(j instanceof x){this.compileStack.push(j)
}else{var h=this.incrStack();
this.pushSource([h," = ",j,";"]),this.compileStack.push(h)
}}},isInline:function(){return this.inlineStack.length
},popStack:function(e){var d=this.isInline(),f=(d?this.inlineStack:this.compileStack).pop();
if(!e&&f instanceof x){return f.value
}if(!d){if(!this.stackSlot){throw new q["default"]("Invalid stack pop")
}this.stackSlot--
}return f
},topStack:function(){var d=this.isInline()?this.inlineStack:this.compileStack,c=d[d.length-1];
return c instanceof x?c.value:c
},contextName:function(b){return this.useDepths&&b?"depths["+b+"]":"depth"+b
},quotedString:function(b){return this.source.quotedString(b)
},objectLiteral:function(b){return this.source.objectLiteral(b)
},aliasable:function(d){var c=this.aliases[d];
return c?(c.referenceCount++,c):(c=this.aliases[d]=this.source.wrap(d),c.aliasable=!0,c.referenceCount=1,c)
},setupHelper:function(j,h,C){var B=[],m=this.setupHelperArgs(h,j,B,C),l=this.nameLookup("helpers",h,"helper"),k=this.aliasable(this.contextName(0)+" != null ? "+this.contextName(0)+" : {}");
return{params:B,paramsInit:m,name:l,callParams:[k].concat(B)}
},setupParams:function(L,K,J){var I={},H=[],G=[],F=[],E=!J,D=void 0;
E&&(J=[]),I.name=this.quotedString(L),I.hash=this.popStack(),this.trackIds&&(I.hashIds=this.popStack()),this.stringParams&&(I.hashTypes=this.popStack(),I.hashContexts=this.popStack());
var C=this.popStack(),B=this.popStack();
(B||C)&&(I.fn=B||"container.noop",I.inverse=C||"container.noop");
for(var m=K;
m--;
){D=this.popStack(),J[m]=D,this.trackIds&&(F[m]=this.popStack()),this.stringParams&&(G[m]=this.popStack(),H[m]=this.popStack())
}return E&&(I.args=this.source.generateArray(J)),this.trackIds&&(I.ids=this.source.generateArray(F)),this.stringParams&&(I.types=this.source.generateArray(G),I.contexts=this.source.generateArray(H)),this.options.data&&(I.data="data"),this.useBlockParams&&(I.blockParams="blockParams"),I
},setupHelperArgs:function(g,f,k,j){var h=this.setupParams(g,f,k);
return h=this.objectLiteral(h),j?(this.useRegister("options"),k.push("options"),["options=",h]):k?(k.push(h),""):h
}},function(){for(var f="break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "),e=w.RESERVED_WORDS={},h=0,g=f.length;
g>h;
h++){e[f[h]]=!0
}}(),w.isValidJavaScriptVariableName=function(b){return !w.RESERVED_WORDS[b]&&/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(b)
},z["default"]=w,A.exports=z["default"]
},function(k,j,q){function p(h,f,v){if(n.isArray(h)){for(var u=[],t=0,r=h.length;
r>t;
t++){u.push(f.wrap(h[t],v))
}return u
}return"boolean"==typeof h||"number"==typeof h?h+"":h
}function o(b){this.srcFile=b,this.source=[]
}j.__esModule=!0;
var n=q(5),m=void 0;
try{}catch(l){}m||(m=function(f,e,h,g){this.src="",g&&this.add(g)
},m.prototype={add:function(b){n.isArray(b)&&(b=b.join("")),this.src+=b
},prepend:function(b){n.isArray(b)&&(b=b.join("")),this.src=b+this.src
},toStringWithSourceMap:function(){return{code:this.toString()}
},toString:function(){return this.src
}}),o.prototype={isEmpty:function(){return !this.source.length
},prepend:function(d,c){this.source.unshift(this.wrap(d,c))
},push:function(d,c){this.source.push(this.wrap(d,c))
},merge:function(){var b=this.empty();
return this.each(function(a){b.add(["  ",a,"\n"])
}),b
},each:function(e){for(var d=0,f=this.source.length;
f>d;
d++){e(this.source[d])
}},empty:function(){var b=this.currentLocation||{start:{}};
return new m(b.start.line,b.start.column,this.srcFile)
},wrap:function(d){var c=arguments.length<=1||void 0===arguments[1]?this.currentLocation||{start:{}}:arguments[1];
return d instanceof m?d:(d=p(d,this,c),new m(c.start.line,c.start.column,this.srcFile,d))
},functionCall:function(e,d,f){return f=this.generateList(f),this.wrap([e,d?"."+d+"(":"(",f,")"])
},quotedString:function(b){return'"'+(b+"").replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")+'"'
},objectLiteral:function(g){var d=[];
for(var t in g){if(g.hasOwnProperty(t)){var r=p(g[t],this);
"undefined"!==r&&d.push([this.quotedString(t),":",r])
}}var h=this.generateList(d);
return h.prepend("{"),h.add("}"),h
},generateList:function(f){for(var d=this.empty(),h=0,g=f.length;
g>h;
h++){h&&d.add(","),d.add(p(f[h],this))
}return d
},generateArray:function(d){var c=this.generateList(d);
return c.prepend("["),c.add("]"),c
}},j["default"]=o,k.exports=j["default"]
}])
});
!function(a,b){"object"==typeof exports&&"object"==typeof module?module.exports=b():"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?exports.Redux=b():a.Redux=b()
}(this,function(){return function(a){function b(d){if(c[d]){return c[d].exports
}var e=c[d]={exports:{},id:d,loaded:!1};
return a[d].call(e.exports,e,e.exports,b),e.loaded=!0,e.exports
}var c={};
return b.m=a,b.c=c,b.p="",b(0)
}([function(C,v,j){function b(a){return a&&a.__esModule?a:{"default":a}
}v.__esModule=!0,v.compose=v.applyMiddleware=v.bindActionCreators=v.combineReducers=v.createStore=void 0;
var h=j(2),m=b(h),B=j(7),x=b(B),A=j(6),q=b(A),w=j(5),D=b(w),k=j(1),g=b(k),z=j(3);
b(z);
v.createStore=m["default"],v.combineReducers=x["default"],v.bindActionCreators=q["default"],v.applyMiddleware=D["default"],v.compose=g["default"]
},function(a,b){function c(){for(var d=arguments.length,f=Array(d),g=0;
d>g;
g++){f[g]=arguments[g]
}return function(){if(0===f.length){return arguments.length>0?arguments[0]:void 0
}var e=f[f.length-1],h=f.slice(0,-1);
return h.reduceRight(function(j,k){return k(j)
},e.apply(void 0,arguments))
}
}b.__esModule=!0,b["default"]=c
},function(d,g,k){function f(c){return c&&c.__esModule?c:{"default":c}
}function h(C,x,o){function c(){A===m&&(A=m.slice())
}function u(){return q
}function B(l){if("function"!=typeof l){throw Error("Expected listener to be a function.")
}var n=!0;
return c(),A.push(l),function(){if(n){n=!1,c();
var e=A.indexOf(l);
A.splice(e,1)
}}
}function w(l){if(!(0,a["default"])(l)){throw Error("Actions must be plain objects. Use custom middleware for async actions.")
}if(void 0===l.type){throw Error('Actions may not have an undefined "type" property. Have you misspelled a constant?')
}if(v){throw Error("Reducers may not dispatch actions.")
}try{v=!0,q=D(q,l)
}finally{v=!1
}for(var p=m=A,r=0;
p.length>r;
r++){p[r]()
}return l
}function z(e){if("function"!=typeof e){throw Error("Expected the nextReducer to be a function.")
}D=e,w({type:j.INIT})
}if("function"==typeof x&&void 0===o&&(o=x,x=void 0),void 0!==o){if("function"!=typeof o){throw Error("Expected the enhancer to be a function.")
}return o(h)(C,x)
}if("function"!=typeof C){throw Error("Expected the reducer to be a function.")
}var D=C,q=x,m=[],A=m,v=!1;
return w({type:j.INIT}),{dispatch:w,subscribe:B,getState:u,replaceReducer:z}
}g.__esModule=!0,g.ActionTypes=void 0,g["default"]=h;
var b=k(4),a=f(b),j=g.ActionTypes={INIT:"@@redux/INIT"}
},function(a,b){function c(d){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(d);
try{throw Error(d)
}catch(f){}}b.__esModule=!0,b["default"]=c
},function(y,p,h){function b(a){if(!x(a)||j.call(a)!=v||k(a)){return !1
}var c=g(a);
if(null===c){return !0
}var d=q.call(c,"constructor")&&c.constructor;
return"function"==typeof d&&d instanceof d&&m.call(d)==z
}var g=h(8),k=h(9),x=h(10),v="[object Object]",w=Object.prototype,m=Function.prototype.toString,q=w.hasOwnProperty,z=m.call(Object),j=w.toString;
y.exports=b
},function(d,g,k){function f(c){return c&&c.__esModule?c:{"default":c}
}function h(){for(var c=arguments.length,l=Array(c),m=0;
c>m;
m++){l[m]=arguments[m]
}return function(e){return function(y,t,x){var q=e(y,t,x),p=q.dispatch,v=[],w={getState:q.getState,dispatch:function(n){return p(n)
}};
return v=l.map(function(n){return n(w)
}),p=j["default"].apply(void 0,v)(q.dispatch),b({},q,{dispatch:p})
}
}
}g.__esModule=!0;
var b=Object.assign||function(c){for(var m=1;
arguments.length>m;
m++){var o=arguments[m];
for(var l in o){Object.prototype.hasOwnProperty.call(o,l)&&(c[l]=o[l])
}}return c
};
g["default"]=h;
var a=k(1),j=f(a)
},function(a,c){function d(f,g){return function(){return g(f.apply(void 0,arguments))
}
}function b(h,k){if("function"==typeof h){return d(h,k)
}if("object"!=typeof h||null===h){throw Error("bindActionCreators expected an object or a function, instead received "+(null===h?"null":typeof h)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?')
}for(var j=Object.keys(h),l={},g=0;
j.length>g;
g++){var f=j[g],m=h[f];
"function"==typeof m&&(l[f]=d(m,k))
}return l
}c.__esModule=!0,c["default"]=b
},function(q,k,g){function b(a){return a&&a.__esModule?a:{"default":a}
}function d(a,f){var o=f&&f.type,c=o&&'"'+o+'"'||"an action";
return"Given action "+c+', reducer "'+a+'" returned undefined. To ignore an action, you must explicitly return the previous state.'
}function h(a){Object.keys(a).forEach(function(f){var u=a[f],c=u(void 0,{type:l.ActionTypes.INIT});
if(void 0===c){throw Error('Reducer "'+f+'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.')
}var t="@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".");
if(void 0===u(void 0,{type:t})){throw Error('Reducer "'+f+'" returned undefined when probed with a random type. '+("Don't try to handle "+l.ActionTypes.INIT+' or other actions in "redux/*" ')+"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
}})
}function p(w){for(var z=Object.keys(w),B={},x=0;
z.length>x;
x++){var v=z[x];
"function"==typeof w[v]&&(B[v]=w[v])
}var A,o=Object.keys(B);
try{h(B)
}catch(y){A=y
}return function(){var H=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},E=arguments[1];
if(A){throw A
}for(var a=!1,C={},G=0;
o.length>G;
G++){var D=o[G],F=B[D],I=H[D],n=F(I,E);
if(void 0===n){var c=d(D,E);
throw Error(c)
}C[D]=n,a=a||n!==I
}return a?C:H
}
}k.__esModule=!0,k["default"]=p;
var l=g(2),m=g(4),j=(b(m),g(3));
b(j)
},function(a,c){function d(e){return b(Object(e))
}var b=Object.getPrototypeOf;
a.exports=d
},function(a,b){function c(d){var f=!1;
if(null!=d&&"function"!=typeof d.toString){try{f=!!(d+"")
}catch(g){}}return f
}a.exports=c
},function(a,b){function c(d){return !!d&&"object"==typeof d
}a.exports=c
}])
});
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.7/LICENSE
 */
(function(a,b){if(typeof define==="function"&&define.amd){define(b)
}else{if(typeof exports==="object"){module.exports=b()
}else{a.returnExports=b()
}}})(this,function(){var bT=Array;
var bW=bT.prototype;
var cg=Object;
var b1=cg.prototype;
var ca=Function;
var cl=ca.prototype;
var b0=String;
var cf=b0.prototype;
var bS=Number;
var b6=bS.prototype;
var bV=bW.slice;
var cj=bW.splice;
var bR=bW.push;
var cc=bW.unshift;
var bY=bW.concat;
var bM=bW.join;
var ci=cl.call;
var cd=cl.apply;
var bQ=Math.max;
var ck=Math.min;
var cA=b1.toString;
var b3=typeof Symbol==="function"&&typeof Symbol.toStringTag==="symbol";
var cY;
var bO=Function.prototype.toString,cB=/^\s*class /,cJ=function ap(d){try{var f=bO.call(d);
var g=f.replace(/\/\/.*\n/g,"");
var h=g.replace(/\/\*[.\s\S]*\*\//g,"");
var c=h.replace(/\n/gm," ").replace(/ {2}/g," ");
return cB.test(c)
}catch(b){return false
}},cW=function bm(a){try{if(cJ(a)){return false
}bO.call(a);
return true
}catch(b){return false
}},b8="[object Function]",cR="[object GeneratorFunction]",cY=function a1(a){if(!a){return false
}if(typeof a!=="function"&&typeof a!=="object"){return false
}if(b3){return cW(a)
}if(cJ(a)){return false
}var b=cA.call(a);
return b===b8||b===cR
};
var cM;
var cz=RegExp.prototype.exec,cU=function aK(a){try{cz.call(a);
return true
}catch(b){return false
}},cL="[object RegExp]";
cM=function ay(a){if(typeof a!=="object"){return false
}return b3?cU(a):cA.call(a)===cL
};
var c0;
var b7=String.prototype.valueOf,cD=function ab(a){try{b7.call(a);
return true
}catch(b){return false
}},c2="[object String]";
c0=function cE(a){if(typeof a==="string"){return true
}if(typeof a!=="object"){return false
}return b3?cD(a):cA.call(a)===c2
};
var cH=cg.defineProperty&&function(){try{var a={};
cg.defineProperty(a,"x",{enumerable:false,value:a});
for(var b in a){return false
}return a.x===a
}catch(c){return false
}}();
var dg=function(b){var c;
if(cH){c=function(e,f,g,d){if(!d&&f in e){return
}cg.defineProperty(e,f,{configurable:true,enumerable:false,writable:true,value:g})
}
}else{c=function(d,f,g,h){if(!h&&f in d){return
}d[f]=g
}
}return function a(g,h,f){for(var d in h){if(b.call(h,d)){c(g,d,h[d],f)
}}}
}(b1.hasOwnProperty);
var cQ=function dc(a){var b=typeof a;
return a===null||b!=="object"&&b!=="function"
};
var cs=bS.isNaN||function(a){return a!==a
};
var cp={ToInteger:function bL(a){var b=+a;
if(cs(b)){b=0
}else{if(b!==0&&b!==1/0&&b!==-(1/0)){b=(b>0||-1)*Math.floor(Math.abs(b))
}}return b
},ToPrimitive:function c6(a){var b,c,d;
if(cQ(a)){return a
}c=a.valueOf;
if(cY(c)){b=c.call(a);
if(cQ(b)){return b
}}d=a.toString;
if(cY(d)){b=d.call(a);
if(cQ(b)){return b
}}throw new TypeError
},ToObject:function(a){if(a==null){throw new TypeError("can't convert "+a+" to object")
}return cg(a)
},ToUint32:function bv(a){return a>>>0
}};
var bK=function bb(){};
dg(cl,{bind:function bA(e){var g=this;
if(!cY(g)){throw new TypeError("Function.prototype.bind called on incompatible "+g)
}var k=bV.call(arguments,1);
var c;
var j=function(){if(this instanceof c){var a=cd.call(g,this,bY.call(k,bV.call(arguments)));
if(cg(a)===a){return a
}return this
}else{return cd.call(g,e,bY.call(k,bV.call(arguments)))
}};
var h=bQ(0,g.length-k.length);
var d=[];
for(var b=0;
b<h;
b++){bR.call(d,"$"+b)
}c=ca("binder","return function ("+bM.call(d,",")+"){ return binder.apply(this, arguments); }")(j);
if(g.prototype){bK.prototype=g.prototype;
c.prototype=new bK;
bK.prototype=null
}return c
}});
var cT=ci.bind(b1.hasOwnProperty);
var c1=ci.bind(b1.toString);
var cS=ci.bind(bV);
var cw=cd.bind(bV);
var cO=ci.bind(cf.slice);
var cv=ci.bind(cf.split);
var bX=ci.bind(cf.indexOf);
var cP=ci.bind(bR);
var cF=ci.bind(b1.propertyIsEnumerable);
var cx=ci.bind(bW.sort);
var cm=bT.isArray||function bk(a){return c1(a)==="[object Array]"
};
var aT=[].unshift(0)!==1;
dg(bW,{unshift:function(){cc.apply(this,arguments);
return this.length
}},aT);
dg(bT,{isArray:cm});
var bj=cg("a");
var bo=bj[0]!=="a"||!(0 in bj);
var cK=function c4(b){var c=true;
var d=true;
var f=false;
if(b){try{b.call("foo",function(g,h,j){if(typeof j!=="object"){c=false
}});
b.call([1],function(){d=typeof this==="string"
},"x")
}catch(a){f=true
}}return !!b&&!f&&c&&d
};
dg(bW,{forEach:function bf(d){var f=cp.ToObject(this);
var g=bo&&c0(this)?cv(this,""):f;
var h=-1;
var c=cp.ToUint32(g.length);
var b;
if(arguments.length>1){b=arguments[1]
}if(!cY(d)){throw new TypeError("Array.prototype.forEach callback must be a function")
}while(++h<c){if(h in g){if(typeof b==="undefined"){d(g[h],h,f)
}else{d.call(b,g[h],h,f)
}}}}},!cK(bW.forEach));
dg(bW,{map:function a3(d){var h=cp.ToObject(this);
var k=bo&&c0(this)?cv(this,""):h;
var c=cp.ToUint32(k.length);
var b=bT(c);
var j;
if(arguments.length>1){j=arguments[1]
}if(!cY(d)){throw new TypeError("Array.prototype.map callback must be a function")
}for(var g=0;
g<c;
g++){if(g in k){if(typeof j==="undefined"){b[g]=d(k[g],g,h)
}else{b[g]=d.call(j,k[g],g,h)
}}}return b
}},!cK(bW.map));
dg(bW,{filter:function bq(d){var g=cp.ToObject(this);
var j=bo&&c0(this)?cv(this,""):g;
var l=cp.ToUint32(j.length);
var c=[];
var b;
var k;
if(arguments.length>1){k=arguments[1]
}if(!cY(d)){throw new TypeError("Array.prototype.filter callback must be a function")
}for(var h=0;
h<l;
h++){if(h in j){b=j[h];
if(typeof k==="undefined"?d(b,h,g):d.call(k,b,h,g)){cP(c,b)
}}}return c
}},!cK(bW.filter));
dg(bW,{every:function av(d){var f=cp.ToObject(this);
var g=bo&&c0(this)?cv(this,""):f;
var h=cp.ToUint32(g.length);
var c;
if(arguments.length>1){c=arguments[1]
}if(!cY(d)){throw new TypeError("Array.prototype.every callback must be a function")
}for(var b=0;
b<h;
b++){if(b in g&&!(typeof c==="undefined"?d(g[b],b,f):d.call(c,g[b],b,f))){return false
}}return true
}},!cK(bW.every));
dg(bW,{some:function aY(d){var f=cp.ToObject(this);
var g=bo&&c0(this)?cv(this,""):f;
var h=cp.ToUint32(g.length);
var c;
if(arguments.length>1){c=arguments[1]
}if(!cY(d)){throw new TypeError("Array.prototype.some callback must be a function")
}for(var b=0;
b<h;
b++){if(b in g&&(typeof c==="undefined"?d(g[b],b,f):d.call(c,g[b],b,f))){return true
}}return false
}},!cK(bW.some));
var aF=false;
if(bW.reduce){aF=typeof bW.reduce.call("es5",function(a,b,c,d){return d
})==="object"
}dg(bW,{reduce:function cb(d){var f=cp.ToObject(this);
var g=bo&&c0(this)?cv(this,""):f;
var h=cp.ToUint32(g.length);
if(!cY(d)){throw new TypeError("Array.prototype.reduce callback must be a function")
}if(h===0&&arguments.length===1){throw new TypeError("reduce of empty array with no initial value")
}var c=0;
var b;
if(arguments.length>=2){b=arguments[1]
}else{do{if(c in g){b=g[c++];
break
}if(++c>=h){throw new TypeError("reduce of empty array with no initial value")
}}while(true)
}for(;
c<h;
c++){if(c in g){b=d(b,g[c],c,f)
}}return b
}},!aF);
var c3=false;
if(bW.reduceRight){c3=typeof bW.reduceRight.call("es5",function(a,b,c,d){return d
})==="object"
}dg(bW,{reduceRight:function db(d){var f=cp.ToObject(this);
var g=bo&&c0(this)?cv(this,""):f;
var h=cp.ToUint32(g.length);
if(!cY(d)){throw new TypeError("Array.prototype.reduceRight callback must be a function")
}if(h===0&&arguments.length===1){throw new TypeError("reduceRight of empty array with no initial value")
}var c;
var b=h-1;
if(arguments.length>=2){c=arguments[1]
}else{do{if(b in g){c=g[b--];
break
}if(--b<0){throw new TypeError("reduceRight of empty array with no initial value")
}}while(true)
}if(b<0){return c
}do{if(b in g){c=d(c,g[b],b,f)
}}while(b--);
return c
}},!c3);
var b2=bW.indexOf&&[0,1].indexOf(1,2)!==-1;
dg(bW,{indexOf:function dk(a){var b=bo&&c0(this)?cv(this,""):cp.ToObject(this);
var c=cp.ToUint32(b.length);
if(c===0){return -1
}var d=0;
if(arguments.length>1){d=cp.ToInteger(arguments[1])
}d=d>=0?d:bQ(0,c+d);
for(;
d<c;
d++){if(d in b&&b[d]===a){return d
}}return -1
}},b2);
var bd=bW.lastIndexOf&&[0,1].lastIndexOf(0,-3)!==-1;
dg(bW,{lastIndexOf:function dv(a){var b=bo&&c0(this)?cv(this,""):cp.ToObject(this);
var c=cp.ToUint32(b.length);
if(c===0){return -1
}var d=c-1;
if(arguments.length>1){d=ck(d,cp.ToInteger(arguments[1]))
}d=d>=0?d:c-Math.abs(d);
for(;
d>=0;
d--){if(d in b&&a===b[d]){return d
}}return -1
}},bd);
var aI=function(){var a=[1,2];
var b=a.splice();
return a.length===2&&cm(b)&&b.length===0
}();
dg(bW,{splice:function b9(a,b){if(arguments.length===0){return[]
}else{return cj.apply(this,arguments)
}}},!aI);
var dm=function(){var a={};
bW.splice.call(a,0,0,1);
return a.length===1
}();
dg(bW,{splice:function b9(a,b){if(arguments.length===0){return[]
}var c=arguments;
this.length=bQ(cp.ToInteger(this.length),0);
if(arguments.length>0&&typeof b!=="number"){c=cS(arguments);
if(c.length<2){cP(c,this.length-a)
}else{c[1]=cp.ToInteger(b)
}}return cj.apply(this,c)
}},!dm);
var a7=function(){var a=new bT(100000);
a[8]="x";
a.splice(1,1);
return a.indexOf("x")===7
}();
var bN=function(){var a=256;
var b=[];
b[a]="a";
b.splice(a+1,0,"b");
return b[a]==="a"
}();
dg(bW,{splice:function b9(E,b){var w=cp.ToObject(this);
var j=[];
var m=cp.ToUint32(w.length);
var B=cp.ToInteger(E);
var q=B<0?bQ(m+B,0):ck(B,m);
var D=ck(bQ(cp.ToInteger(b),0),m-q);
var k=0;
var F;
while(k<D){F=b0(q+k);
if(cT(w,F)){j[k]=w[F]
}k+=1
}var z=cS(arguments,2);
var C=z.length;
var o;
if(C<D){k=q;
var g=m-D;
while(k<g){F=b0(k+D);
o=b0(k+C);
if(cT(w,F)){w[o]=w[F]
}else{delete w[o]
}k+=1
}k=m;
var A=m-D+C;
while(k>A){delete w[k-1];
k-=1
}}else{if(C>D){k=m-D;
while(k>q){F=b0(k+D-1);
o=b0(k+C-1);
if(cT(w,F)){w[o]=w[F]
}else{delete w[o]
}k-=1
}}}k=q;
for(var x=0;
x<z.length;
++x){w[k]=z[x];
k+=1
}w.length=m-D+C;
return j
}},!a7||!bN);
var az=bW.join;
var aN;
try{aN=Array.prototype.join.call("123",",")!=="1,2,3"
}catch(bD){aN=true
}if(aN){dg(bW,{join:function bH(a){var b=typeof a==="undefined"?",":a;
return az.call(c0(this)?cv(this,""):this,b)
}},aN)
}var df=[1,2].join(undefined)!=="1,2";
if(df){dg(bW,{join:function bH(a){var b=typeof a==="undefined"?",":a;
return az.call(this,b)
}},df)
}var bx=function aq(a){var b=cp.ToObject(this);
var c=cp.ToUint32(b.length);
var d=0;
while(d<arguments.length){b[c+d]=arguments[d];
d+=1
}b.length=c+d;
return c+d
};
var a2=function(){var a={};
var b=Array.prototype.push.call(a,undefined);
return b!==1||a.length!==1||typeof a[0]!=="undefined"||!cT(a,0)
}();
dg(bW,{push:function aq(a){if(cm(this)){return bR.apply(this,arguments)
}return bx.apply(this,arguments)
}},a2);
var aj=function(){var a=[];
var b=a.push(undefined);
return b!==1||a.length!==1||typeof a[0]!=="undefined"||!cT(a,0)
}();
dg(bW,{push:bx},aj);
dg(bW,{slice:function(a,b){var c=c0(this)?cv(this,""):this;
return cw(c,arguments)
}},bo);
var cq=function(){try{[1,2].sort(null);
[1,2].sort({});
return true
}catch(a){}return false
}();
var dd=function(){try{[1,2].sort(/a/);
return false
}catch(a){}return true
}();
var c8=function(){try{[1,2].sort(undefined);
return true
}catch(a){}return false
}();
dg(bW,{sort:function c9(a){if(typeof a==="undefined"){return cx(this)
}if(!cY(a)){throw new TypeError("Array.prototype.sort callback must be a function")
}return cx(this,a)
}},cq||!c8||!dd);
var aD=!{toString:null}.propertyIsEnumerable("toString");
var ds=function(){}.propertyIsEnumerable("prototype");
var dp=!cT("x","0");
var aR=function(a){var b=a.constructor;
return b&&b.prototype===a
};
var al={$window:true,$console:true,$parent:true,$self:true,$frame:true,$frames:true,$frameElement:true,$webkitIndexedDB:true,$webkitStorageInfo:true,$external:true};
var an=function(){if(typeof window==="undefined"){return false
}for(var a in window){try{if(!al["$"+a]&&cT(window,a)&&window[a]!==null&&typeof window[a]==="object"){aR(window[a])
}}catch(b){return true
}}return false
}();
var cG=function(a){if(typeof window==="undefined"||!an){return aR(a)
}try{return aR(a)
}catch(b){return false
}};
var bg=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];
var cV=bg.length;
var ac=function aP(a){return c1(a)==="[object Arguments]"
};
var a5=function aP(a){return a!==null&&typeof a==="object"&&typeof a.length==="number"&&a.length>=0&&!cm(a)&&cY(a.callee)
};
var aL=ac(arguments)?ac:a5;
dg(cg,{keys:function bI(w){var b=cY(w);
var k=aL(w);
var d=w!==null&&typeof w==="object";
var h=d&&c0(w);
if(!d&&!b&&!k){throw new TypeError("Object.keys called on a non-object")
}var o=[];
var j=ds&&b;
if(h&&dp||k){for(var q=0;
q<w.length;
++q){cP(o,b0(q))
}}if(!k){for(var g in w){if(!(j&&g==="prototype")&&cT(w,g)){cP(o,b0(g))
}}}if(aD){var x=cG(w);
for(var m=0;
m<cV;
m++){var p=bg[m];
if(!(x&&p==="constructor")&&cT(w,p)){cP(o,p)
}}}return o
}});
var ae=cg.keys&&function(){return cg.keys(arguments).length===2
}(1,2);
var ah=cg.keys&&function(){var a=cg.keys(arguments);
return arguments.length!==1||a.length!==1||a[0]!==1
}(1);
var bc=cg.keys;
dg(cg,{keys:function bI(a){if(aL(a)){return bc(cS(a))
}else{return bc(a)
}}},!ae||ah);
var aH=new Date(-3509827329600292).getUTCMonth()!==0;
var cC=new Date(-1509842289600292);
var bZ=new Date(1449662400000);
var bn=cC.toUTCString()!=="Mon, 01 Jan -45875 11:59:59 GMT";
var a9;
var cZ;
var dl=cC.getTimezoneOffset();
if(dl<-720){a9=cC.toDateString()!=="Tue Jan 02 -45875";
cZ=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(bZ.toString())
}else{a9=cC.toDateString()!=="Mon Jan 01 -45875";
cZ=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(bZ.toString())
}var a0=ci.bind(Date.prototype.getFullYear);
var c7=ci.bind(Date.prototype.getMonth);
var bG=ci.bind(Date.prototype.getDate);
var bs=ci.bind(Date.prototype.getUTCFullYear);
var bw=ci.bind(Date.prototype.getUTCMonth);
var bu=ci.bind(Date.prototype.getUTCDate);
var bC=ci.bind(Date.prototype.getUTCDay);
var ax=ci.bind(Date.prototype.getUTCHours);
var ch=ci.bind(Date.prototype.getUTCMinutes);
var aa=ci.bind(Date.prototype.getUTCSeconds);
var aW=ci.bind(Date.prototype.getUTCMilliseconds);
var bl=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
var bp=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
var cN=function co(a,b){return bG(new Date(b,a,0))
};
dg(Date.prototype,{getFullYear:function aQ(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=a0(this);
if(a<0&&c7(this)>11){return a+1
}return a
},getMonth:function aU(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=a0(this);
var b=c7(this);
if(a<0&&b>11){return 0
}return b
},getDate:function ce(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=a0(this);
var b=c7(this);
var c=bG(this);
if(a<0&&b>11){if(b===12){return c
}var d=cN(0,a+1);
return d-c+1
}return c
},getUTCFullYear:function aX(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=bs(this);
if(a<0&&bw(this)>11){return a+1
}return a
},getUTCMonth:function ba(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=bs(this);
var b=bw(this);
if(a<0&&b>11){return 0
}return b
},getUTCDate:function bz(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=bs(this);
var b=bw(this);
var c=bu(this);
if(a<0&&b>11){if(b===12){return c
}var d=cN(0,a+1);
return d-c+1
}return c
}},aH);
dg(Date.prototype,{toUTCString:function aC(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var d=bC(this);
var f=bu(this);
var g=bw(this);
var j=bs(this);
var c=ax(this);
var b=ch(this);
var h=aa(this);
return bl[d]+", "+(f<10?"0"+f:f)+" "+bp[g]+" "+j+" "+(c<10?"0"+c:c)+":"+(b<10?"0"+b:b)+":"+(h<10?"0"+h:h)+" GMT"
}},aH||bn);
dg(Date.prototype,{toDateString:function aZ(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var a=this.getDay();
var b=this.getDate();
var c=this.getMonth();
var d=this.getFullYear();
return bl[a]+" "+bp[c]+" "+(b<10?"0"+b:b)+" "+d
}},aH||a9);
if(aH||cZ){Date.prototype.toString=function au(){if(!this||!(this instanceof Date)){throw new TypeError("this is not a Date object.")
}var q=this.getDay();
var b=this.getDate();
var k=this.getMonth();
var d=this.getFullYear();
var h=this.getHours();
var m=this.getMinutes();
var c=this.getSeconds();
var j=this.getTimezoneOffset();
var p=Math.floor(Math.abs(j)/60);
var g=Math.floor(Math.abs(j)%60);
return bl[q]+" "+bp[k]+" "+(b<10?"0"+b:b)+" "+d+" "+(h<10?"0"+h:h)+":"+(m<10?"0"+m:m)+":"+(c<10?"0"+c:c)+" GMT"+(j>0?"-":"+")+(p<10?"0"+p:p)+(g<10?"0"+g:g)
};
if(cH){cg.defineProperty(Date.prototype,"toString",{configurable:true,enumerable:false,writable:true})
}}var aG=-62198755200000;
var c5="-000001";
var b5=Date.prototype.toISOString&&new Date(aG).toISOString().indexOf(c5)===-1;
var be=Date.prototype.toISOString&&new Date(-1).toISOString()!=="1969-12-31T23:59:59.999Z";
var aJ=ci.bind(Date.prototype.getTime);
dg(Date.prototype,{toISOString:function b4(){if(!isFinite(this)||!isFinite(aJ(this))){throw new RangeError("Date.prototype.toISOString called on non-finite value.")
}var a=bs(this);
var b=bw(this);
a+=Math.floor(b/12);
b=(b%12+12)%12;
var c=[b+1,bu(this),ax(this),ch(this),aa(this)];
a=(a<0?"-":a>9999?"+":"")+cO("00000"+Math.abs(a),0<=a&&a<=9999?-4:-6);
for(var d=0;
d<c.length;
++d){c[d]=cO("00"+c[d],-2)
}return a+"-"+cS(c,0,2).join("-")+"T"+cS(c,2).join(":")+"."+cO("000"+aW(this),-3)+"Z"
}},b5||be);
var dn=function(){try{return Date.prototype.toJSON&&new Date(NaN).toJSON()===null&&new Date(aG).toJSON().indexOf(c5)!==-1&&Date.prototype.toJSON.call({toISOString:function(){return true
}})
}catch(a){return false
}}();
if(!dn){Date.prototype.toJSON=function cy(b){var c=cg(this);
var d=cp.ToPrimitive(c);
if(typeof d==="number"&&!isFinite(d)){return null
}var a=c.toISOString;
if(!cY(a)){throw new TypeError("toISOString property is not callable")
}return a.call(c)
}
}var a8=Date.parse("+033658-09-27T01:46:40.000Z")===1000000000000000;
var bP=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));
var aA=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
if(aA||bP||!a8){var aO=Math.pow(2,31)-1;
var bE=cs(new Date(1970,0,1,0,0,0,aO+1).getTime());
Date=function(u){var b=function o(B,t,x,E,A,G,w){var H=arguments.length;
var C;
if(this instanceof u){var F=G;
var z=w;
if(bE&&H>=7&&w>aO){var r=Math.floor(w/aO)*aO;
var D=Math.floor(r/1000);
F+=D;
z-=D*1000
}C=H===1&&b0(B)===B?new u(b.parse(B)):H>=7?new u(B,t,x,E,A,F,z):H>=6?new u(B,t,x,E,A,F):H>=5?new u(B,t,x,E,A):H>=4?new u(B,t,x,E):H>=3?new u(B,t,x):H>=2?new u(B,t):H>=1?new u(B instanceof u?+B:B):new u
}else{C=u.apply(this,arguments)
}if(!cQ(C)){dg(C,{constructor:b},true)
}return C
};
var m=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$");
var c=[0,31,59,90,120,151,181,212,243,273,304,334,365];
var j=function p(a,f){var l=f>1?1:0;
return c[f]+Math.floor((a-1969+l)/4)-Math.floor((a-1901+l)/100)+Math.floor((a-1601+l)/400)+365*(a-1970)
};
var q=function g(t){var v=0;
var w=t;
if(bE&&w>aO){var l=Math.floor(w/aO)*aO;
var f=Math.floor(l/1000);
v+=f;
w-=f*1000
}return bS(new u(1970,0,1,0,0,v,w))
};
for(var k in u){if(cT(u,k)){b[k]=u[k]
}}dg(b,{now:u.now,UTC:u.UTC},true);
b.prototype=u.prototype;
dg(b.prototype,{constructor:b},true);
var d=function h(a){var x=m.exec(a);
if(x){var t=bS(x[1]),C=bS(x[2]||1)-1,z=bS(x[3]||1)-1,J=bS(x[4]||0),E=bS(x[5]||0),I=bS(x[6]||0),A=Math.floor(bS(x[7]||0)*1000),e=Boolean(x[4]&&!x[8]),G=x[9]==="-"?1:-1,D=bS(x[10]||0),B=bS(x[11]||0),H;
var F=E>0||I>0||A>0;
if(J<(F?24:25)&&E<60&&I<60&&A<1000&&C>-1&&C<12&&D<24&&B<60&&z>-1&&z<j(t,C+1)-j(t,C)){H=((j(t,C)+z)*24+J+D*G)*60;
H=((H+E+B*G)*60+I)*1000+A;
if(e){H=q(H)
}if(-8640000000000000<=H&&H<=8640000000000000){return H
}}return NaN
}return u.parse.apply(this,arguments)
};
dg(b,{parse:d});
return b
}(Date)
}if(!Date.now){Date.now=function bU(){return(new Date).getTime()
}
}var di=b6.toFixed&&((0.00008).toFixed(3)!=="0.000"||(0.9).toFixed(0)!=="1"||(1.255).toFixed(2)!=="1.25"||(1000000000000000100).toFixed(0)!=="1000000000000000128");
var by={base:10000000,size:6,data:[0,0,0,0,0,0],multiply:function dj(a,b){var c=-1;
var d=b;
while(++c<by.size){d+=a*by.data[c];
by.data[c]=d%by.base;
d=Math.floor(d/by.base)
}},divide:function dh(a){var b=by.size;
var c=0;
while(--b>=0){c+=by.data[b];
by.data[b]=Math.floor(c/a);
c=c%a*by.base
}},numToString:function aB(){var a=by.size;
var b="";
while(--a>=0){if(b!==""||a===0||by.data[a]!==0){var c=b0(by.data[a]);
if(b===""){b=c
}else{b+=cO("0000000",0,7-c.length)+c
}}}return b
},pow:function bJ(a,b,c){return b===0?c:b%2===1?bJ(a,b-1,c*a):bJ(a*a,b/2,c)
},log:function cn(a){var b=0;
var c=a;
while(c>=4096){b+=12;
c/=4096
}while(c>=2){b+=1;
c/=2
}return b
}};
var a4=function bh(m){var b,j,c,g,k,h,d,o;
b=bS(m);
b=cs(b)?0:Math.floor(b);
if(b<0||b>20){throw new RangeError("Number.toFixed called with invalid number of decimals")
}j=bS(this);
if(cs(j)){return"NaN"
}if(j<=-1e+21||j>=1e+21){return b0(j)
}c="";
if(j<0){c="-";
j=-j
}g="0";
if(j>1e-21){k=by.log(j*by.pow(2,69,1))-69;
h=k<0?j*by.pow(2,-k,1):j/by.pow(2,k,1);
h*=4503599627370496;
k=52-k;
if(k>0){by.multiply(0,h);
d=b;
while(d>=7){by.multiply(10000000,0);
d-=7
}by.multiply(by.pow(10,d,1),0);
d=k-1;
while(d>=23){by.divide(1<<23);
d-=23
}by.divide(1<<d);
by.multiply(1,1);
by.divide(2);
g=by.numToString()
}else{by.multiply(0,h);
by.multiply(1<<-k,0);
g=by.numToString()+cO("0.00000000000000000000",2,2+b)
}}if(b>0){o=g.length;
if(o<=b){g=c+cO("0.0000000000000000000",0,b-o+2)+g
}else{g=c+cO(g,0,o-b)+"."+cO(g,o-b)
}}else{g=c+g
}return g
};
dg(b6,{toFixed:a4},di);
var ak=function(){try{return (1).toPrecision(undefined)==="1"
}catch(a){return true
}}();
var cu=b6.toPrecision;
dg(b6,{toPrecision:function aw(a){return typeof a==="undefined"?cu.call(this):cu.call(this,a)
}},ak);
if("ab".split(/(?:ab)*/).length!==2||".".split(/(.?)(.?)/).length!==4||"tesst".split(/(s)*/)[1]==="t"||"test".split(/(?:)/,-1).length!==4||"".split(/.?/).length||".".split(/()()/).length>1){(function(){var a=typeof/()??/.exec("")[1]==="undefined";
var b=Math.pow(2,32)-1;
cf.split=function(t,j){var m=String(this);
if(typeof t==="undefined"&&j===0){return[]
}if(!cM(t)){return cv(this,t,j)
}var w=[];
var g=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),r=0,x,k,y,v;
var q=new RegExp(t.source,g+"g");
if(!a){x=new RegExp("^"+q.source+"$(?!\\s)",g)
}var d=typeof j==="undefined"?b:cp.ToUint32(j);
k=q.exec(m);
while(k){y=k.index+k[0].length;
if(y>r){cP(w,cO(m,r,k.index));
if(!a&&k.length>1){k[0].replace(x,function(){for(var c=1;
c<arguments.length-2;
c++){if(typeof arguments[c]==="undefined"){k[c]=void 0
}}})
}if(k.length>1&&k.index<m.length){bR.apply(w,cS(k,1))
}v=k[0].length;
r=y;
if(w.length>=d){break
}}if(q.lastIndex===k.index){q.lastIndex++
}k=q.exec(m)
}if(r===m.length){if(v||!q.test("")){cP(w,"")
}}else{cP(w,cO(m,r))
}return w.length>d?cS(w,0,d):w
}
})()
}else{if("0".split(void 0,0).length){cf.split=function ag(a,b){if(typeof a==="undefined"&&b===0){return[]
}return cv(this,a,b)
}
}}var de=cf.replace;
var da=function(){var a=[];
"x".replace(/x(.)?/g,function(b,c){cP(a,c)
});
return a.length===1&&typeof a[0]==="undefined"
}();
if(!da){cf.replace=function bB(b,c){var d=cY(c);
var f=cM(b)&&/\)[*?]/.test(b.source);
if(!d||!f){return de.call(this,b,c)
}else{var a=function(j){var k=arguments.length;
var h=b.lastIndex;
b.lastIndex=0;
var g=b.exec(j)||[];
b.lastIndex=h;
cP(g,arguments[k-2],arguments[k-1]);
return c.apply(this,g)
};
return de.call(this,b,a)
}}
}var aE=cf.substr;
var du="".substr&&"0b".substr(-1)!=="b";
dg(cf,{substr:function bF(a,b){var c=a;
if(a<0){c=bQ(this.length+a,0)
}return aE.call(this,c,b)
}},du);
var dq="	\n\x0B\f\r \xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029\ufeff";
var aS="\u200b";
var am="["+dq+"]";
var ao=new RegExp("^"+am+am+"*");
var cI=new RegExp(am+am+"*$");
var bi=cf.trim&&(dq.trim()||!aS.trim());
dg(cf,{trim:function aV(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")
}return b0(this).replace(ao,"").replace(cI,"")
}},bi);
var cX=ci.bind(String.prototype.trim);
var ad=cf.lastIndexOf&&"abc\u3042\u3044".lastIndexOf("\u3042\u3044",2)!==-1;
dg(cf,{lastIndexOf:function dv(m){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")
}var b=b0(this);
var j=b0(m);
var c=arguments.length>1?bS(arguments[1]):NaN;
var g=cs(c)?Infinity:cp.ToInteger(c);
var k=ck(bQ(g,0),b.length);
var h=j.length;
var d=k+h;
while(d>0){d=bQ(0,d-h);
var o=bX(cO(b,d,k+h),j);
if(o!==-1){return d+o
}}return -1
}},ad);
var a6=cf.lastIndexOf;
dg(cf,{lastIndexOf:function dv(a){return a6.apply(this,arguments)
}},cf.lastIndexOf.length!==1);
if(parseInt(dq+"08")!==8||parseInt(dq+"0x16")!==22){parseInt=function(a){var b=/^[\-+]?0[xX]/;
return function c(g,h){var f=cX(g);
var d=bS(h)||(b.test(f)?16:10);
return a(f,d)
}
}(parseInt)
}if(1/parseFloat("-0")!==-Infinity){parseFloat=function(b){return function a(c){var d=cX(c);
var f=b(d);
return f===0&&cO(d,0,1)==="-"?-0:f
}
}(parseFloat)
}if(String(new RangeError("test"))!=="RangeError: test"){var aM=function au(){if(typeof this==="undefined"||this===null){throw new TypeError("can't convert "+this+" to object")
}var a=this.name;
if(typeof a==="undefined"){a="Error"
}else{if(typeof a!=="string"){a=b0(a)
}}var b=this.message;
if(typeof b==="undefined"){b=""
}else{if(typeof b!=="string"){b=b0(b)
}}if(!a){return b
}if(!b){return a
}return a+": "+b
};
Error.prototype.toString=aM
}if(cH){var af=function(a,b){if(cF(a,b)){var c=Object.getOwnPropertyDescriptor(a,b);
c.enumerable=false;
Object.defineProperty(a,b,c)
}};
af(Error.prototype,"message");
if(Error.prototype.message!==""){Error.prototype.message=""
}af(Error.prototype,"name")
}if(String(/a/gim)!=="/a/gim"){var ai=function au(){var a="/"+this.source+"/";
if(this.global){a+="g"
}if(this.ignoreCase){a+="i"
}if(this.multiline){a+="m"
}return a
};
RegExp.prototype.toString=ai
}});
(function(a,d){var b=function(e){switch(e){case"en_gb":return"GBP";
case"en_us":return"USD"
}};
var c=function(f){if(f==null){throw"DigitalRiver: You must provide options for locale and currency"
}if(f.locale==null){throw"DigitalRiver: You must set an option for locale"
}if(f.currency==null){f.currency=b(f.locale)
}var l=null;
if($("html").attr("lang")=="ru-ru"){l={baseUrl:"//data.nvidia.com/v2/external/dihouse",apiKey:"5fa676b9-05a5-4562-9a49-792e40aadcdd",checkoutURL:"https://store.nvidia.ru"}
}else{if($("html").attr("lang")=="en-in"){l={baseUrl:"//data.nvidia.com/v2/external/rashi",apiKey:"5fa676b9-05a5-4562-9a49-792e40aadcdd",checkoutURL:"https://store.nvidia.in"}
}else{l={baseUrl:"https://api.digitalriver.com/v1/shoppers",apiKey:"9485fa7b159e42edb08a83bde0d83dia"}
}}var e=$.extend({},l,f);
var h=function(v){var u=v.hasOwnProperty("products")?v.products.join(","):"";
if((u==""||u==" ")&&$(".cart-main-section").length){u=p()
}var t=$.Deferred();
if(u!==""&&u!==" "){if($("html").attr("lang")=="ru-ru"){$.ajax({url:e.baseUrl+"/products",headers:{"X-Lens-Client-ID":""+e.apiKey+""},jsonp:"callback",dataType:"json"}).done(function(w){t.resolve(w)
}).fail(function(w){t.reject({products:{}})
})
}else{if($("html").attr("lang")=="en-in"){$.ajax({url:e.baseUrl+"/products",headers:{"X-Lens-Client-ID":""+e.apiKey+""},jsonp:"callback",dataType:"json"}).done(function(w){t.resolve(w)
}).fail(function(w){t.reject({products:{}})
})
}else{$.ajax({url:e.baseUrl+"/me/products",jsonp:"callback",dataType:"jsonp",data:{format:"json",expand:"all",locale:e.locale,apiKey:e.apiKey,currency:e.currency,productId:u}}).done(function(w){t.resolve(w)
}).fail(function(w){t.reject({products:{}})
})
}}}else{t.reject({products:{}})
}return t.promise()
};
var p=function(){var u=[];
var A=localStorage.getItem("nvidiaCart");
var w=new Date();
var t=function(C,B){return(B<C)
};
if(A!=null){var z=JSON.parse(A);
z=z.cart;
for(var x in z){var y=Date.parse(z[x]["expires"])
}if(!t(w,y)){var v=JSON.parse(A);
u=v.cart.map(function(B){return B.id
})
}else{u=[]
}}else{u=[]
}return u.join(",")
};
var n=function(t){return $.ajax({url:e.baseUrl+"/me/products/inventory-status",jsonp:"callback",dataType:"jsonp",data:{format:"json",locale:e.locale,apiKey:e.apiKey,currency:e.currency,productId:t.products.join(",")}})
};
var o=function(){};
var m=function(t){return $.ajax({url:e.baseUrl+"/me/carts/active/line-items",jsonp:"callback",dataType:"jsonp",data:{format:"json",method:"post",productId:t.item.id,quantity:t.item.quantity,token:t.token}})
};
var r=function(t){var u=jQuery.Deferred();
u.resolve();
t.items.forEach(function(v){u=u.then(function(){return m({token:t.token,item:v})
})
});
return u
};
var k=function(t){if($("html").attr("lang")=="ru-ru"){return $.ajax({url:e.baseUrl+"/cart/"+t.token,headers:{"X-Lens-Client-ID":""+e.apiKey+""},jsonp:"callback",dataType:"jsonp"})
}else{if($("html").attr("lang")=="en-in"){return $.ajax({url:e.baseUrl+"/cart/"+t.token,headers:{"X-Lens-Client-ID":""+e.apiKey+""},jsonp:"callback",dataType:"jsonp"})
}else{return $.ajax({url:e.baseUrl+"/me/carts/active",jsonp:"callback",dataType:"jsonp",data:{format:"json",token:t.token}})
}}};
var q=function(t){if(t.locale=="ru-ru"&&t.locale=="en-in"){return"No cart details to clear"
}else{return $.ajax({url:e.baseUrl+"/me/carts/active/line-items",jsonp:"callback",dataType:"jsonp",data:{format:"json",method:"delete",token:t.token}})
}};
var o=function(t){return $.ajax({url:"https://store.nvidia.com/store/nvidia/SessionToken?format=json",jsonp:"callback",dataType:"jsonp",data:{locale:e.locale,apiKey:e.apiKey,currency:e.currency}})
};
var g=function(u){var t=0;
for(var x in u.products){if(hasOwnProperty.call(u.products,x)){if(x=="00-00030884"||x=="00-00029349"){t+=parseInt(u.products[x],10)
}}}var v=Object.assign({},u.products);
if(t>0){v=Object.assign(v,{"00-00031467":t+""})
}var w=JSON.stringify(v);
return $.ajax({url:e.baseUrl+"/cart",headers:{"X-Lens-Client-ID":""+e.apiKey+""},jsonp:"callback",dataType:"jsonp",data:{products:w}})
};
var j=function(v){var t=v.items;
if($("html").attr("lang")=="ru-ru"){var w={};
var u=t.forEach(function(x){w[""+x.id+""]=""+x.quantity+""
});
g({products:w}).done(function(y){var x=y.cart_id;
cookieHelpers.setCookie("accessToken",x);
cookieHelpers.setCookie("path","/");
a.location.href=e.checkoutURL+"/go/"+x+""
})
}else{if($("html").attr("lang")=="en-in"){var w={};
var u=t.forEach(function(x){w[""+x.id+""]=""+x.quantity+""
});
g({products:w}).done(function(y){var x=y[0].CartId;
cookieHelpers.setCookie("accessToken",x);
cookieHelpers.setCookie("path","/");
a.location.href=e.checkoutURL+"/Gotocart.aspx?cartno="+x+""
})
}else{return o().done(function(y){var x=y.access_token;
q({token:x}).done(function(){document.cookie="accessToken="+x+";path=/";
r({items:t,token:x}).done(function(){a.location.href="https://api.digitalriver.com/v1/shoppers/me/carts/active/web-checkout?token="+x
}).fail(function(){console.error("error",arguments)
})
})
})
}}};
return{getProducts:h,getInventory:n,getToken:o,getCart:k,clearCart:q,addLineItem:m,addLineItems:r,checkout:j}
};
c.noConflict=function(){return this
};
a.DigitalRiver=c
}(window));
(function(){Handlebars.registerHelper("ifProductQuantityIsOne",function(c,a){var b=store.getState();
if(cartHelpers.getProductCount(b.cart,c)==1){return a.fn(this)
}else{return a.inverse(this)
}});
Handlebars.registerHelper("ifProductLimitReached",function(c,a){var b=store.getState();
if(productHelpers.productLimitReached(b.cart,c)){return a.fn(this)
}else{return a.inverse(this)
}});
Handlebars.registerHelper("getProductStockMessage",function(d,a){var c=store.getState();
var b=productHelpers.getProductStockMessage(c.cart,d);
return b
});
Handlebars.registerHelper("iff",function(d,f,c,g){var e=false;
switch(f){case"==":e=d==c;
break;
case"!=":e=d!=c;
break;
case">":e=d>c;
break;
case"<":e=d<c;
break;
default:throw"Unknown operator "+f
}if(e){return g.fn(this)
}else{return g.inverse(this)
}})
}(window,Handlebars,undefined));
(function(){var a=function(r,q){return false
};
var k=function(q){return""
};
var d=function(t,q){if(t===undefined||q===undefined){return null
}var r=t.filter(function(u){return u.id==q
});
return r.length==0?null:r[0]
};
var c=function(q){var r=[];
$.each(q,function(v,t){var w=productHelpers.findProductById(window.digitalRiverProducts,t);
for(var u=0;
u<w.variations.product[0].customAttributes.attribute.length;
u++){if(w.variations.product[0].customAttributes.attribute[u].name=="productColor"){r.push({prod_id:w.id,prod_color:w.variations.product[0].customAttributes.attribute[u].value})
}}});
return r.length==0?null:r
};
var n=function(t){var v=[];
var x=productHelpers.findProductById(window.digitalRiverProducts,t);
if(x.productImage!=null&&x.thumbnailImage!=null){v.push({prod_id:x.id,thumbnailImage:x.thumbnailImage,productImage:x.productImage})
}var w,r,u,q;
$.each(x.customAttributes.attribute,function(y){if(x.customAttributes.attribute[y].name=="thumbnailImage2"){w="https://drh1.img.digitalriver.com/DRHM/Storefront/Company/nvidia/images/product/thumbnail/"+x.customAttributes.attribute[y].value
}else{if(x.customAttributes.attribute[y].name=="productImage2"){r="https://drh1.img.digitalriver.com/DRHM/Storefront/Company/nvidia/images/product/detail/"+x.customAttributes.attribute[y].value
}else{if(x.customAttributes.attribute[y].name=="thumbnailImage3"){u="https://drh1.img.digitalriver.com/DRHM/Storefront/Company/nvidia/images/product/thumbnail/"+x.customAttributes.attribute[y].value
}else{if(x.customAttributes.attribute[y].name=="productImage3"){q="https://drh1.img.digitalriver.com/DRHM/Storefront/Company/nvidia/images/product/detail/"+x.customAttributes.attribute[y].value
}}}}});
if(r!=null&&w!=null){v.push({prod_id:x.id,thumbnailImage:w,productImage:r})
}if(q!=null&&u!=null){v.push({prod_id:x.id,thumbnailImage:u,productImage:q})
}return v.length==0?null:v
};
var j=function(q){if(window.product_cart_values_store==undefined){window.product_cart_values_store=jQuery.parseJSON(localStorage.getItem("product_cart_values_store"))
}var r=window.product_cart_values_store.filter(function(t){return t.productID==q
});
return r.length==0?null:r[0].productThumbimage
};
var b=function(q){if(window.product_cart_values_store==undefined){window.product_cart_values_store=jQuery.parseJSON(localStorage.getItem("product_cart_values_store"))
}if(window.product_cart_values_store!=null){var r=window.product_cart_values_store.filter(function(t){return t.productID==q
});
return r.length==0?null:r[0].productTitle
}};
var m=function(q,u,t){var r;
if(localStorage.getItem("product_cart_values_store")!=null){window.product_cart_values_store=jQuery.parseJSON(localStorage.getItem("product_cart_values_store"))
}if(window.product_cart_values_store!=undefined){r=window.product_cart_values_store
}else{r=[]
}r.push({productID:q,productTitle:u,productThumbimage:t});
window.product_cart_values_store=r;
localStorage.setItem("product_cart_values_store",JSON.stringify(window.product_cart_values_store));
return window.product_cart_values_store
};
var g=function(t){var w=productHelpers.findProductById(window.digitalRiverProducts,t);
if(w!=null){var r=w.inventoryStatus.availableQuantity;
var u=w.inventoryStatus.productIsAllowsBackorders;
var v=w.inventoryStatus.productIsInStock;
var q=w.inventoryStatus.status;
if(v=="true"&&q=="PRODUCT_INVENTORY_IN_STOCK"){if(!$(".pdp-addtocart").find(".nv-button").hasClass(".js-add-button")){$(".pdp-addtocart").find(".nv-button").addClass(".js-add-button")
}$(".pdp-addtocart").find(".nv-button").removeClass("disable");
$(".pdp-addtocart").find(".js-out-of-stock").hide()
}else{if(v=="false"&&q=="PRODUCT_INVENTORY_OUT_OF_STOCK"){$(".pdp-addtocart").find(".nv-button").removeClass(".js-add-button").addClass("disable");
$(".pdp-addtocart").find(".js-out-of-stock").show()
}}}};
var f=function(q,r){if(q!=undefined){var t=q.filter(function(u){return u.productid==r
});
return t.length==0?null:t[0].promotionmessage
}};
var p=function(q,r){if(q!=undefined){var t=q.filter(function(u){return u.productid==r
});
return t.length==0?null:t[0].promotionimageurl
}};
var l=function(q,r){if(q!=undefined){var t=q.filter(function(u){return u.productid==r
});
return t.length==0?null:t[0].promotionpageurl
}};
var o=function e(){var t=-1;
if(navigator.appName=="Microsoft Internet Explorer"){var q=navigator.userAgent;
var r=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(r.exec(q)!=null){t=parseFloat(RegExp.$1)
}}return t
};
var h=function(){var x=(window.location.hostname==="localhost")?window.location.hostname+":"+window.location.port:window.location.hostname;
var r="en-us";
if($("html").attr("lang")==undefined||$("html").attr("lang")==""){r=document.documentElement.lang
}else{r=$("html").attr("lang")
}r=r.split("-");
var u=r[0]+"_"+r[1].toUpperCase();
var q="//"+x+"/bin/nvidiaGDC/servlet/promotion.json?locale="+u+"&region="+cartHelpers.mapregion($("html").attr("lang"))+"";
var y=-1;
if(navigator.appName=="Microsoft Internet Explorer"){var v=navigator.userAgent;
var w=new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
if(w.exec(v)!=null){y=parseFloat(RegExp.$1)
}}if(y>-1&&window.XDomainRequest){if(window.XDomainRequest){var t=new XDomainRequest();
t.open("get",q);
t.onprogress=function(){};
t.ontimeout=function(){};
t.onerror=function(){};
t.onload=function(){arrayjson=t.responseText;
window.promotions=arrayjson.promotions
};
setTimeout(function(){t.send()
},0)
}}else{$.ajax({type:"GET",url:q,async:false,success:function(z){arrayjson=z;
window.promotions=arrayjson.promotions
}})
}};
if(window.productHelpers==null){window.productHelpers={productLimitReached:a,getProductStockMessage:k,findProductById:d,productcolors:c,productimage:n,product_validation:g,product_thumnailimage:j,product_cart_values:m,product_title:b,getPromotions:h,findPromotionByProductId:f,findPromotionByProductIdimage:p,findPromotionByProductIdbundleurl:l}
}}(window,undefined));
(function(){window.site=window.site||{};
var a=function(l){var k=l.reduce(function(m,n){return m+(parseFloat(n.listPrice,10)*parseFloat(n.quantity,10))
},0);
return g(k)
};
var f=function(l,k){return l.filter(function(m){return m.id==k
}).reduce(function(m,n){return m+n.quantity
},0)
};
var h=function(k){return k.reduce(function(l,m){return l+m.quantity
},0)
};
var j=function(l,k){return cartHelpers.getProductCount(l,k)>0
};
var g=function(k){var l=$("html").attr("lang");
return parseFloat(k,10).formatPrice()
};
Number.prototype.formatPrice=function(l,k,o){var n=this,l=isNaN(l=Math.abs(l))?2:l,k=k==undefined?".":k,o=o==undefined?",":o,q=n<0?"-":"",p=parseInt(n=Math.abs(+n||0).toFixed(l))+"",m=(m=p.length)>3?m%3:0;
return q+(m?p.substr(0,m)+o:"")+p.substr(m).replace(/(\d{3})(?=\d)/g,"$1"+o)+(l?k+Math.abs(n-p).toFixed(l).slice(2):"")
};
var d=function(k){switch(k){case"en":site.currency="$";
break;
case"en-ca":site.currency="$";
break;
case"zh-hans":site.currency="CNY";
break;
case"zh-cn":site.currency="CNY";
break;
case"zh-hant":site.currency="TWD";
break;
case"zh-tw":site.currency="TWD";
break;
case"en-gb":site.currency="£";
break;
case"en-in":site.currency="Rs.";
break;
case"fr-fr":site.currency="€";
break;
case"fr-be":site.currency="€";
break;
case"de-at":site.currency="€";
break;
case"de-de":site.currency="€";
break;
case"zh-hk":site.currency="HKD";
break;
case"it-it":site.currency="€";
break;
case"ja":site.currency="JPY";
case"ja-jp":site.currency="JPY";
break;
case"ko":site.currency="KRW";
break;
case"ko-kr":site.currency="KRW";
break;
case"pl-pl":site.currency="zł";
break;
case"pt-br":site.currency="BRL";
break;
case"ru-ru":site.currency="руб";
break;
case"es-mx":site.currency="MXN";
break;
case"es-es":case"es":site.currency="€";
break;
case"tr":site.currency="TRY";
break;
case"sv-se":site.currency="kr";
break;
case"nb-no":site.currency="kr";
break;
case"nl-nl":site.currency="€";
break;
case"da-dk":site.currency="kr";
break;
case"da-at":site.currency="€";
break;
case"fr-be":site.currency="€";
break;
case"cs-cz":site.currency="Kč";
break;
case"en-au":site.currency="A$";
break;
default:site.currency="$"
}return site.currency
};
var b=function(k){switch(k){case"en":site.region="us";
break;
case"zh-hans":site.region="cn";
break;
case"zh-cn":site.region="cn";
break;
case"zh-hant":site.region="tw";
break;
case"zh-tw":site.region="tw";
break;
case"en-gb":site.region="gb";
break;
case"en-in":site.region="in";
break;
case"fr-fr":site.region="fr";
break;
case"de-de":site.region="de";
break;
case"zh-hk":site.region="hk";
break;
case"it-it":site.region="it";
break;
case"ja":site.region="jp";
break;
case"ja-jp":site.region="jp";
break;
case"ko":site.region="kr";
break;
case"ko-kr":site.region="kr";
break;
case"pl-pl":site.region="pl";
break;
case"pt-br":site.region="br";
break;
case"ru-ru":site.region="ru";
break;
case"es-mx":site.region="mx";
break;
case"es-es":case"es":site.region="es";
break;
case"tr":site.region="tr";
break;
case"sv-se":site.region="se";
break;
case"nb-no":site.region="no";
break;
case"nl-nl":site.region="nl";
break;
case"cs-cz":site.region="cs";
break;
case"en-au":site.region="au";
break;
default:site.region="us"
}return site.region
};
var e=function(u){var m={EUR:"€",GBP:"£",PLN:"zł",NOK:"kr",SEK:"kr",DKK:"kr",CZK:"Kč",USD:"$",AUD:"A$",JPY:"JPY",CNY:"CNY",KRW:"KRW",TWD:"TWD",INR:"Rs.",RUS:"руб"};
var n=$("html").attr("lang");
var o="USD";
if(n=="sv-se"||n=="nb-no"||n=="nb-no"){o="SEK"
}else{if(n=="pl-pl"){o="PLN"
}else{if(n=="cs-cz"){o="CZK"
}else{if(n=="en-gb"){o="GBP"
}else{if(n=="fr-fr"||n=="de-de"||n=="es-es"||n=="it-it"||n=="fi-fi"||n=="nl-nl"||n=="fr-be"){o="EUR"
}else{if(n=="da-dk"){o="DKK"
}else{if(n=="en-au"){o="AUD"
}else{if(n=="ja-jp"){o="JPY"
}else{if(n=="zh-cn"){o="CNY"
}else{if(n=="ko-kr"){o="KRW"
}else{if(n=="zh-tw"){o="TWD"
}else{if(n=="ru-ru"){o="RUS"
}else{if(n=="en-in"){o="INR"
}}}}}}}}}}}}}var q="",t=["SEK","PLN","CNY","JPY","KRW","TWD","RUS"],k=["GBP","EUR","AUD","INR"],l=k.indexOf(o)==-1?" ":"";
if(t.indexOf(o)!==-1){q=u+l+m[o]
}else{q=m[o]+l+u
}var p="";
var r="";
if(q.indexOf(".")!=-1){p=q.substring(0,q.indexOf(".")+1);
r=q.substr(q.indexOf(".")+1)
}else{p=q.substring(0,q.indexOf(",")+1);
r=q.substr(q.indexOf(",")+1)
}q=p+""+r+"";
return q
};
var c=function(){$(".cart-item__price").each(function(){var l=$(this).html();
$(this).html(cartHelpers.localisePriceDisplay(l))
});
var k=$(".cart__total").html();
$(".cart__total").html(cartHelpers.localisePriceDisplay(k))
};
if(window.cartHelpers==null){window.site={},window.cartHelpers={getCartTotal:a,getProductCount:f,getTotalProductCount:h,productIsInCart:j,setPriceFormatToLocale:g,mapLocale:d,mapregion:b,localisePriceDisplay:e,cartsymbol:c}
}}(window,undefined));
(function(){var c=function(d){document.cookie=d+"=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/"
};
var a=function(d){var e="; "+document.cookie;
var f=e.split("; "+d+"=");
if(f.length==2){return f.pop().split(";").shift()
}};
var b=function(d,e){document.cookie=d+"="+e+"; expires=Thu, 01 Jan 2050 00:00:01 GMT; path=/"
};
if(window.cookieHelpers==null){window.cookieHelpers={deleteCookie:c,getCookie:a,setCookie:b}
}}(window,undefined));
(function(){function a(h,g){var j=null;
if(h==undefined){j={cart:[],lastAction:null}
}else{j={cart:h.cart.slice(),lastAction:g}
}switch(g.type){case actionTypes.SET_CART:return{cart:g.cart,lastAction:null};
case actionTypes.ADD_ITEM_TO_CART:if(cartHelpers.productIsInCart(j.cart,g.id)){var f=j.cart.map(function(o){var m=null;
if("expires" in o){m=o.expires
}else{m=new Date();
m.setDate(m.getDate()+2)
}console.log("Expire Date: "+m);
if(o.id==g.id){var l=parseInt(o.quantity,10)+parseInt(g.quantity,10);
var n=digitalRiverProducts.filter(function(p){return p.id==g.id
})[0];
if(productHelpers.productLimitReached(j.cart,g.id)){return o
}else{var k=(l*n.pricing.salePriceWithQuantity.value).toFixed(2);
return{id:o.id,sku:o.sku,name:o.name.split("-")[0],quantity:l,listPrice:n.pricing.salePriceWithQuantity.value,totalPrice:cartHelpers.setPriceFormatToLocale(k),color:productHelpers.product_title(o.id),productIsInStock:n.inventoryStatus.productIsInStock,productIsAllowsBackorders:n.inventoryStatus.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,o.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,o.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,o.id),expires:m}
}}else{return o
}});
return{cart:f,lastAction:g}
}else{var d=digitalRiverProducts.filter(function(k){return k.id==g.id
})[0];
var c=(parseInt(g.quantity,10)*d.pricing.salePriceWithQuantity.value).toFixed(2);
var b=null;
b=new Date();
b.setDate(b.getDate()+2);
j.cart.push({id:d.id,sku:d.sku,name:d.displayName.split("-")[0],quantity:parseInt(g.quantity,10),listPrice:d.pricing.salePriceWithQuantity.value,totalPrice:cartHelpers.setPriceFormatToLocale(c),color:productHelpers.product_title(d.id),productIsInStock:d.inventoryStatus.productIsInStock,productIsAllowsBackorders:d.inventoryStatus.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,d.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,d.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,d.id),expires:b});
return j
}return j;
case actionTypes.INC_ITEM_QUANTITY:j.cart=j.cart.map(function(n){var m=null;
if("expires" in n){m=n.expires
}else{m=new Date();
m.setDate(m.getDate()+2)
}if(n.id==g.id){var l=n.quantity+1;
if(productHelpers.productLimitReached(j.cart,g.id)){return n
}else{var k=(l*n.listPrice).toFixed(2);
var n={id:n.id,sku:n.sku,name:n.name,quantity:l,listPrice:n.listPrice,totalPrice:cartHelpers.setPriceFormatToLocale(k),color:productHelpers.product_title(n.id),productIsInStock:n.productIsInStock,productIsAllowsBackorders:n.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,n.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,n.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,n.id),expires:m};
return n
}}else{return n
}});
return j;
case actionTypes.DEC_ITEM_QUANTITY:j.cart=j.cart.map(function(n){var m=null;
if("expires" in n){m=n.expires
}else{m=new Date();
m.setDate(m.getDate()+2)
}if(n.id==g.id&&n.quantity>1){var l=n.quantity-1,k=(l*n.listPrice).toFixed(2);
return{id:n.id,sku:n.sku,name:n.name,quantity:l,listPrice:n.listPrice,totalPrice:cartHelpers.setPriceFormatToLocale(k),color:productHelpers.product_title(n.id),productIsInStock:n.productIsInStock,productIsAllowsBackorders:n.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,n.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,n.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,n.id),expires:m}
}else{return n
}});
return j;
case actionTypes.REMOVE_ITEM_FROM_CART:var e=j.cart.filter(function(k){return k.id==g.id
})[0];
j.lastAction.quantityRemoved=e.quantity;
j.cart=j.cart.filter(function(k){return k.id!=g.id
});
return j;
case actionTypes.UPDATE_PRODUCTS:j.cart=j.cart.map(function(n){var l=null;
if("expires" in n){l=n.expires
}else{l=new Date();
l.setDate(l.getDate()+2)
}var m=g.products.filter(function(o){return o.id==n.id
})[0];
if(m==undefined){return n
}var k=(n.quantity*m.pricing.salePriceWithQuantity.value).toFixed(2);
return{id:n.id,sku:n.sku,name:m.displayName.split("-")[0],quantity:n.quantity,listPrice:m.pricing.salePriceWithQuantity.value,totalPrice:cartHelpers.setPriceFormatToLocale(k),color:productHelpers.product_title(n.id),productIsInStock:m.inventoryStatus.productIsInStock,productIsAllowsBackorders:m.inventoryStatus.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,n.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,n.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,n.id),expires:l}
});
return j;
default:return j
}}if(window.stateReducer==null){window.stateReducer=a
}}(window,undefined));
$(document).on("click",".dr-modal-form-for-notify-me",function(){var a=$(window).width();
var b=$(window).height();
if(a>1280){$("iframe.dr-notify-me-frame").width(1200).height(375).attr("scrolling","no")
}else{if(a>1024&&a<1281){$("iframe.dr-notify-me-frame").width(980).height(375).attr("scrolling","no")
}else{if(a>930&&a<1025){$("iframe.dr-notify-me-frame").width(a-80).height(375).attr("scrolling","no")
}else{if(a<740&&b<420){$("iframe.dr-notify-me-frame").width(a-50).height(b+60).attr("scrolling","yes")
}else{if(a>485&&a<931){$("iframe.dr-notify-me-frame").width(a-80).height(490).attr("scrolling","no")
}else{$("iframe.dr-notify-me-frame").width(a-40).height(b).attr("scrolling","yes")
}}}}}$("body").addClass("noscroll");
$.colorbox({inline:true,href:$(this).attr("data-href")})
});
$(window).resize(function(){var a=$(window).width();
var b=$(window).height();
if(a>930){$("iframe.dr-notify-me-frame").width(a-80).height(375).scrollTop(0).attr("scrolling","no")
}else{if(a>767&&a<931){$("iframe.dr-notify-me-frame").width(a-80).height(490).attr("scrolling","no").scrollTop(0)
}else{if(a<740&&b<420){$("iframe.dr-notify-me-frame").width(a-50).height(b+60).attr("scrolling","yes").scrollTop(0)
}else{$("iframe.dr-notify-me-frame").width(a-40).height(b).attr("scrolling","yes").scrollTop(0)
}}}});
$(document).ready(function(){String.prototype.setDecimal=function(Q){return(Q!==undefined)?this.replace(".",Q):this
};
$("#region-switch").on("change",function(){var Q=$(this).val();
window.location.href=Q
});
function o(Q){return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(Q).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))
}function D(Q){var T=location.hash.replace("#","");
var S=T.split("&");
for(var R=0;
R<S.length;
R++){var U=S[R].split("=");
if(U[0]==Q){return U[1]
}}}function l(R,U,S){var T=new Date();
T.setTime(T.getTime()+(S*24*60*60*1000));
var Q="expires="+T.toUTCString();
document.cookie=R+"="+U+"; "+Q
}var x=window.location.href;
x=x.toLowerCase();
if(x.indexOf("cid")>-1){var j=D("cid");
if(j==undefined){j=o("cid")
}if(j!=undefined){l("icl_cid",j,30)
}}$(document).mouseup(function(R){var Q=$(".cart");
if(!Q.is(R.target)&&Q.has(R.target).length===0){$(".cart__close").trigger("click")
}});
var j=cookieHelpers.getCookie("icl_cid");
if(j!=undefined){$('a[href*="iceleads.com"],a[href*="gethatch.com"]').each(function(){var S=$(this);
var R=S.attr("href");
var Q=R;
if(R!=undefined&&R.indexOf("#CID")==-1){if(R.indexOf("?")!=-1){Q=R+"&cid="+j
}else{Q=R+"?cid="+j
}}$(this).attr("href",Q)
})
}$(".nav>li>a, .nav>li>.not-clickable").on("click",function(R){var Q=$(window).width();
if(Q<1025&&$(this).next().hasClass("secondary-nav")){R.preventDefault();
$(this).prev().toggleClass("close").next().next().toggleClass("opened")
}});
var B=function(){y.addClass("shown")
};
var t=function(){y.removeClass("shown");
cookieHelpers.setCookie("OKCookie",1)
};
var y=$("#cookie-policy");
y.find(".close-button").on("click",function(){t()
});
var a=cookieHelpers.getCookie("OKCookie");
if(a!="1"){B()
}$("#browser-popup").on("click",".close-button",function(Q){$(Q.delegateTarget).removeClass("shown");
cookieHelpers.setCookie("haveShownOldBrowserPopup","true")
});
if(cookieHelpers.getCookie("haveShownOldBrowserPopup")!=null){$("#browser-popup").removeClass("shown")
}else{$("#browser-popup").addClass("shown")
}$('a[href*="#"]:not([href="#"])').click(function(S){var R=S.target.getAttribute("top");
try{R=parseInt(R);
if(isNaN(R)){R=0
}}catch(S){R=0
}if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var Q=$(this.hash);
Q=Q.length?Q:$("[name="+this.hash.slice(1)+"]");
if(Q.length){$("html, body").animate({scrollTop:Q.offset().top+R},1000);
return false
}}});
var r=$(".terms-modal");
$(".js-toggle-terms").on("click",function(){r.toggleClass("modal--shown");
return false
});
var g=$(".redemption-modal");
$(".js-toggle-redemption").on("click",function(){g.toggleClass("modal--shown");
return false
});
var b=$(".notify-me-modal");
$(".js-toggle-notify-me, .js-trigger-notify").on("click",function(){b.toggleClass("modal--shown");
return false
});
var F=$(".subscribe-modal");
$(".js-toggle-subscribe-modal").on("click",function(){F.toggleClass("modal--shown");
return false
});
var n=$(".js-img-gallery-modal");
$(".js-gallery-image").on("click",function(){var R=$(window).width();
if(R>768){var Q=$(this).data("large-image");
n.addClass("modal--shown");
n.find(".modal__content").css("background-image","url("+Q+")")
}});
$(".img-gallery-modal .js-modal-close").on("click",function(){n.removeClass("modal--shown")
});
var L=$(".sli-modal");
$(".js-toggle-sli-help").on("click",function(){L.toggleClass("modal--shown");
return false
});
var P=$(".js-full-specs-modal");
$(".js-toggle-full-spec").on("click",function(){P.toggleClass("modal--shown");
return false
});
var E=$("html");
var u=$("body");
var v=function(R,V,U){var Q=$(window).height();
if(R.length>0){var T=R.offset().top+V-Q;
var S=function(){var W=Math.max(u.scrollTop(),E.scrollTop());
if(W>T){U();
$(window).off("scroll",S)
}};
$(window).on("scroll",S)
}};
var N=$(".js-game-performance-block");
v(N,300,function(){$(".chart-bars").addClass("animation")
});
var m=$(".js-design-block");
v(m,240,function(){var Q=$("#js-eyecatcher-video").get(0);
if(Q){Q.play()
}});
var C=$(".js-pascal-performance-block");
v(C,200,function(){$(".chart-bars").addClass("animation")
});
var O=$(".js-watch-full-video");
var J=$(".js-full-video-modal");
O.on("click",function(){var Q=$("#full-video-iframe");
var R=Q.attr("src");
Q.attr("src",R+"&autoplay=1");
J.toggleClass("modal--shown");
return false
});
$(".js-full-video-modal .js-modal-close").on("click",function(){J.removeClass("modal--shown");
$("#full-video-iframe").each(function(){this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")
})
});
var h=["2740204800","2740205800","2740206200","2740205100","2740205900","2740206300","2032108300","2032108400","2032108500"];
var K=["5060742700","5060742500","5060742600","5061491700","5061491500","5061491600","5061491700","5061491800","5060742800","5060742700","5060742700","5061492100","5061492200","5061492400","5060742500","5094274900","2740204200","5094274700","5056171200","2740281000","5105328400","5136449000","5136375700","5136448900","5136449400","5136449500","5136449600","5150424500","5147401800","5147402100","5147402300","5147402800","5148081200","5148081400","5148081600","5148081800","5136449400","5148082000","5101732900","5136448800","5136449100","5136449200","5150424400","5136449300","5147401900","5147402000","5147402200","5147402700","5148081100","5148081300","5148081500","5148081700","5136449100","5148081900","5144751300","5144781000","5143635400","5143635500","5143635600","5143635700","5143635800","5145366000","5144941000","5144941100","5144941100","5144941200","5144941300","5144781000","5144941400","5144941500","5096011300","5096011200","5096011100","5096012100","5096011400","5096012000","5096011900","5096012200","5096011500","5096011800","5096012300","5096011100","5096012400","5096012100","5095849000","2740204400","5136374000","2740204700","326050100","5095848700","2032108200","5136373800","2740204500","326050500","5095848900","2740204300","5136373900","2740204600","326050800","5095849100","5062283800","5136374100","5062285500","5062286700","5095849200","5062284000","5136374200","5062285600","5062286800","5095849300","5062284200","5136374300","5062285700","5062286900","5095849800","5062285000","5136375500","5062286300","5062287500","5095849600","5062284800","5136375400","5062286100","5062287300","5095849600","5062284800","5136375400","5062286100","5062287300","5095849700","5062284900","5136374600","5062286200","5062287400","5095849400","5062284300","5136374400","5062285800","5062287000","5095849500","5062284400","5136374500","5062285900","5062287100","5095848700","2032108200","5136373800","2740204500","326050500","5095849900","5062285300","5136375600","5062286500","5062287700","1"];
var e=["5132991100","5132991200","5132991300","5132991400","5132991800","5132991600","5132991700","5132991500","5168116500","5168116600"];
var I=["5168120000","5168119500","5168119900","5168119600","5168120100","5168120400","5168120300","5168120200","5168119800","5168119700","5171092100","5171091200","5171091500","5171091300","5171091600","5171092000","5171091900","5171091700","5171091800","5171091400"];
var M=function(Q){return h.indexOf(Q+"")!=-1
};
var A=function(Q){return K.indexOf(Q+"")!=-1
};
var f=function(Q){return e.indexOf(Q+"")!=-1
};
var d=function(Q){return I.indexOf(Q+"")!=-1
};
productHelpers.productLimitReached=function(T,R){var S=cartHelpers.getProductCount(T,R);
var Q=1;
if(M(R)){Q=1
}else{if(f(R)){Q=5
}else{if(d(R)){Q=1
}else{if(A(R)){Q=2
}else{Q=50
}}}}if(S>=Q){return true
}else{return false
}};
productHelpers.getProductStockMessage=function(T,R){var S="en-us";
if($("html").attr("lang")==undefined||$("html").attr("lang")==""){S=document.documentElement.lang
}else{S=$("html").attr("lang")
}var Q=1;
if(M(R)){Q=1
}else{if(f(R)){Q=5
}else{if(d(R)){Q=1
}else{if(A(R)){Q=2
}else{Q=50
}}}}if(~S.indexOf("de")){return"Du kannst maximal "+Q+" bestellen"
}else{if(~S.indexOf("fr")){return"Vous pouvez uniquement commander un maximum de "+Q
}}return"Product limit reached"
};
var q="en_us",G="",z="USD";
var k="en-us";
if($("html").attr("lang")==undefined||$("html").attr("lang")==""){k=document.documentElement.lang
}else{k=$("html").attr("lang")
}switch(k){case"en":q="en_us",G="$";
z="USD";
break;
case"en-ca":q="en_us",G="$";
z="USD";
break;
case"en-us":q="en_us",G="$";
z="USD";
break;
case"fr-fr":q="fr_fr",G="€";
z="EUR";
break;
case"de-de":q="de_de",G="€";
z="EUR";
break;
case"en-gb":q="en_gb",G="£";
z="GBP";
break;
case"es-es":q="es_es",G="€";
z="EUR";
break;
case"it-it":q="it_it",G="€";
z="EUR";
break;
case"pl-pl":q="pl_pl",G="zł";
z="PLN";
break;
case"nb-no":q="no_no",G="kr";
z="NOK";
break;
case"sv-se":q="sv_se",G="kr";
z="SEK";
break;
case"da-dk":q="en_gb",G="kr";
z="DKK";
break;
case"de-at":q="de_de",G="€";
z="EUR";
break;
case"fr-be":q="fr_fr",G="€";
z="EUR";
break;
case"fr-be":q="fr_be",G="€";
z="EUR";
break;
case"de-at":q="de_at",G="€";
z="EUR";
break;
case"cs-cz":q="en_gb",G="Kč";
z="CZK";
break;
case"fi-fi":q="en_gb",G="€";
z="EUR";
break;
case"nl-nl":q="nl_nl",G="€";
z="EUR";
break;
case"en-au":q="en_au",G="A$";
z="AUD";
break;
case"zh-cn":q="zh_cn",G="CNY";
z="CNY";
break;
case"ja-jp":q="ja_jp",G="JPY";
z="JPY";
break;
case"ko-kr":q="ko_kr",G="KRW";
z="KRW";
break;
case"zh-tw":q="zh_tw",G="TWD";
z="TWD";
break;
case"ru-ru":q="ru_ru",G="руб";
z="RUS";
break;
case"en-in":q="en_in",G="Rs.";
z="INR";
break
}var w=DigitalRiver({locale:q,currency:z});
initApp({cartKey:"nvidiaCart",digitalRiverApiAccess:w,currency:G,apiCurrency:z});
if($("body").hasClass("paragon-bundle")){var H=window.location.href;
var p=/#(redemption-.*)/i;
var c=H.match(p);
if(c!==null){if(c[1]==="redemption-instructions"){g.toggleClass("modal--shown")
}else{if(c[1]==="redemption-terms-and-conditions"){r.toggleClass("modal--shown")
}}}}});
var actionTypes={SET_CART:"SET_CART",ADD_ITEM_TO_CART:"ADD_ITEM_TO_CART",REMOVE_ITEM_FROM_CART:"REMOVE_ITEM_FROM_CART",INC_ITEM_QUANTITY:"INC_ITEM_QUANTITY",DEC_ITEM_QUANTITY:"DEC_ITEM_QUANTITY",UPDATE_PRODUCTS:"UPDATE_PRODUCTS",CLEAR_CART:"CLEAR_CART"};
var getTranslatedFromText=function(){var a="en-us";
if($("html").attr("lang")==undefined||$("html").attr("lang")==""){a=document.documentElement.lang
}else{a=$("html").attr("lang")
}var b="From";
if(a==="de-de"){b="Ab"
}else{if(a==="fr-fr"){b="A Partir de"
}}return b
};
var localisePriceDisplay=function(d,j){var c={EUR:"€",GBP:"£",PLN:"zł",NOK:"kr",SEK:"kr",DKK:"kr",CZK:"Kč",USD:"$",AUD:"A$",JPY:"JPY",CNY:"CNY",KRW:"KRW",TWD:"TWD",INR:"Rs.",RUS:"руб"};
var f="",h=["SEK","PLN","CNY","JPY","KRW","TWD","RUS"],a=["GBP","EUR","AUD","INR"],b=a.indexOf(d)==-1?" ":"";
if(h.indexOf(d)!==-1){f=j+b+c[d]
}else{f=c[d]+b+j
}var e="";
var g="";
if(f.indexOf(".")!=-1){e=f.substring(0,f.indexOf(".")+1);
g=f.substr(f.indexOf(".")+1)
}else{e=f.substring(0,f.indexOf(",")+1);
g=f.substr(f.indexOf(",")+1)
}theLanguage=$("html").attr("lang");
if(theLanguage=="ru-ru"||theLanguage=="en-in"){f=e+""+g
}else{f=e+"<sup>"+g+"</sup>"
}return f
};
var initApp=function(d){var f=Redux.createStore(window.stateReducer);
window.store=f;
productHelpers.getPromotions();
var a=d.digitalRiverApiAccess;
var q=d.cartKey;
var o=$("#cartTemplate").html();
var n=Handlebars.compile(o);
var j=$(".js-product-item").map(function(){var v=$(this).data("digital-river-id");
if(v==undefined){throw"js-product-item is missing a digital river id"
}return v
}).get();
var m=$(".js-product-item-with-variations .js-add-button").map(function(){var v=$(this).data("digital-river-id");
if(v=="on"){throw"js-product-item-with-variations is missing a digital river id"
}return v
}).get();
var p=[].concat(j,m);
f.subscribe(function(){var x=f.getState();
if(x.lastAction!=null){switch(x.lastAction.type){case actionTypes.INC_ITEM_QUANTITY:case actionTypes.ADD_ITEM_TO_CART:var w=x.lastAction.id;
var v=window.digitalRiverProducts.filter(function(y){return y.id==w
})[0];
break;
case actionTypes.REMOVE_ITEM_FROM_CART:var w=x.lastAction.id;
var v=window.digitalRiverProducts.filter(function(y){return y.id==w
})[0];
if(v){}break;
case actionTypes.DEC_ITEM_QUANTITY:var w=x.lastAction.id;
var v=window.digitalRiverProducts.filter(function(y){return y.id==w
})[0];
if(v){}break
}}});
f.subscribe(function(){var x=f.getState();
var w=n({products:x.cart,total:cartHelpers.getCartTotal(x.cart),currency:d.currency});
$("#cart").html(w);
var v=cartHelpers.getTotalProductCount(x.cart);
if(v==0){$(".cart-counter").show().text(0)
}else{$(".cart-counter").show().text(v)
}if(x.lastAction!=null&&(x.lastAction.type==actionTypes.ADD_ITEM_TO_CART||x.lastAction.type==actionTypes.INC_ITEM_QUANTITY)){$(".cart-blocker").addClass("cart-blocker--shown");
$(".cart").addClass("cart--shown");
$(document).trigger("showCart")
}localStorage.setItem(q,JSON.stringify(x));
cartHelpers.cartsymbol();
cookieHelpers.deleteCookie("accessToken")
});
a.getProducts({products:p}).done(function(v){window.digitalRiverProducts=v.products.product;
$(".js-product-item").each(function(){var F=$(this);
var G=F.data("digital-river-id");
var K=productHelpers.findProductById(v.products.product,G);
var D=$(this).parent().hasClass("show-preorder");
var x=$("html").attr("lang");
Granite.I18n.setLocale(x);
if(K!=null){var M=cartHelpers.setPriceFormatToLocale(K.pricing.salePriceWithQuantity.value);
var A=K.inventoryStatus.availableQuantity;
var L=K.inventoryStatus.productIsAllowsBackorders;
var C=K.inventoryStatus.status;
if(x=="ru-ru"||x=="en-in"){if(K.inventoryStatus.productIsInStock==false){C="PRODUCT_INVENTORY_OUT_OF_STOCK"
}else{C="PRODUCT_INVENTORY_IN_STOCK"
}if(K.inventoryStatus.productIsInStock==false&&K.inventoryStatus.productIsAllowsBackorders==true){C="PRODUCT_INVENTORY_BACKORDERED"
}}else{C=K.inventoryStatus.status
}var J=K.inventoryStatus.productIsInStock;
$(this).find(".js-product-price").html(localisePriceDisplay(d.apiCurrency,M));
var z=K.customAttributes.attribute.filter(function(N){return N.name=="specialMessage"
}).map(function(N){return N.value
})[0];
if(z!=undefined){}var y=K.customAttributes.attribute.filter(function(N){return N.name=="additionalCartMessage"
}).map(function(N){return N.value
})[0];
var I=K.customAttributes.attribute.filter(function(N){return N.name=="preorderEnabled"
}).map(function(N){return N.value
})[0];
var H=K.customAttributes.attribute.filter(function(N){return N.name=="shipDate"
}).map(function(N){return N.value
})[0];
if(z!=undefined){}if(I=="true"&&D){if(x.indexOf("zz")>=0||x.indexOf("us")>=0){$(this).find(".cta-preorder-button").text(Granite.I18n.get("PREORDER"))
}else{$(this).find(".cta-preorder-button").text(Granite.I18n.get("PRE-ORDER"))
}$(this).find(".js-add-button").removeClass("inactive");
$(this).find(".js-availability").addClass("available");
$(this).find(".cta-preorder-button").addClass("js-add-button").removeClass("disabled");
$(this).find(".cta-preorder-button").parent().addClass("link-btn");
$(this).find(".cta-preorder-button").parent().addClass("brand-green");
$(this).find(".cta-preorder-button").parent().removeClass("link-btn-disabled");
$(this).find(".js-in-stock").css("display","none");
$(this).find(".js-out-of-stock").css("display","none");
$(this).find(".free-shipping").css("display","inline-block");
$(this).find(".ship-date").css("display","inline-block").text(H)
}else{if(C=="PRODUCT_INVENTORY_IN_STOCK"){$(this).find(".js-add-button").removeClass("inactive");
$(this).find(".js-availability").addClass("available");
$(this).find(".cta-preorder-button").addClass("js-add-button").removeClass("disabled");
$(this).find(".cta-preorder-button").parent().addClass("link-btn");
$(this).find(".cta-preorder-button").parent().addClass("brand-green");
$(this).find(".cta-preorder-button").parent().removeClass("link-btn-disabled");
$(this).find(".js-in-stock").css("display","inline-block");
$(this).find(".free-shipping").css("display","inline-block");
$(this).find(".ship-date").css("display","inline-block").text(H)
}else{if(C=="PRODUCT_INVENTORY_BACKORDERED"&&L=="true"){if(x.indexOf("zz")>=0||x.indexOf("us")>=0){$(this).find(".js-in-stock").text(Granite.I18n.get("Back Order"));
$(this).find(".js-in-stock").css("display","inline-block");
$(this).find(".ship-date").css("display","inline-block").text(H);
console.log("Ship date is here")
}else{$(this).find(".js-in-stock").css("display","inline-block");
$(this).find(".js-in-stock").css("display","inline-block").text(y);
$(this).find(".ship-date").css("display","inline-block").text(H)
}}else{if(C=="PRODUCT_INVENTORY_OUT_OF_STOCK"){$(this).find(".cta-preorder-button").removeClass("js-add-button").addClass("stock-grey-out");
$(this).find(".cta-preorder-button").parent().removeClass("link-btn");
$(this).find(".cta-preorder-button").parent().removeClass("brand-green");
$(this).find(".cta-preorder-button").parent().addClass("link-btn-disabled");
$(this).find(".js-out-of-stock").css("display","inline-block");
$(this).find(".free-shipping").css("display","none");
$(this).find(".ship-date").css("display","none");
$(this).find(".js-in-stock").css("display","none");
try{if(x=="ru-ru"||x=="en-in"){}else{if((x.indexOf("zz")>=0||x.indexOf("us")>=0)&&$(this).find("a").attr("data-analytics").indexOf("btn-dr-id")>-1){var B="<a href='javascript:void(0)' data-href='.notify-me-prod-modal-"+G+"' data-analytics='btn-dr-notify-me-"+G+"'  class='link-btn btn-manual lb_iframe brand-green regular-btn dr-modal-form-for-notify-me' ><div class='btn'>Notify Me</div></a>";
var w="";
w='<style>iframe.dr-notify-me-frame{border:0 none;padding-top:40px;padding-left:30px;padding-right:30px;}@media  (max-width: 500px){iframe.dr-notify-me-frame{border:0 none;padding-top:25px;padding-left:15px;padding-right:15px;}}@media  (max-width: 730px) and (orientation : landscape) {iframe.dr-notify-me-frame{padding-top:5px;padding-left:15px;padding-right:15px;}}</style><div class="hide-modal-content"><div style="overflow:hidden;background-color: #1a1a1a;" class="color-black notify-me-prod-modal-'+G+'" class="general-container" data-width="" data-height=""  ><div class="modal-content parsys"><iframe class="dr-notify-me-frame" scrolling="no"  src="https://store.nvidia.com/store?Action=DisplayNotifyMeFormPage&Env=BASE&Locale=en_US&SiteID=nvidia&productID='+G+'"></iframe></div></div></div>';
$("body").append(w)
}else{var B="<a href='javascript:void(0)' data-href='#notify-me-"+G+"' data-analytics='notify-me-"+G+"' target='overlay' class='link-btn btn-manual lb_iframe brand-green regular-btn' onclick='NVIDIAGDC.button.click(this, $(this).data(&quot;href&quot;),true, function() { ;return NVIDIAGDC.button.callbacks(this); }); return false;'><div class='btn'>Notify Me</div></a>"
}}}catch(E){}$(this).find(".cta-preorder").html(B);
if(K.inventoryStatus.expectedInStockDate==null){$(this).find(".js-out-of-stock__without-date").css("display","inline-block");
$(this).find(".js-out-of-stock__with-date").hide()
}else{$(this).find(".js-out-of-stock__without-date").hide();
$(this).find(".js-out-of-stock__with-date").css("display","inline-block").find("span").text(K.inventoryStatus.expectedInStockDate)
}}}}}}else{console.log("Digital River product wrongly configured : "+G+"");
if(D){if(x.indexOf("zz")>=0||x.indexOf("us")>=0){$(this).find(".cta-preorder-button").text(Granite.I18n.get("PREORDER"))
}}$(this).find(".js-product-price").addClass("hide-price").html("Digital River product wrongly configured : "+G+"")
}$(this).css("visibility","visible")
});
$(".js-product-item-with-variations").each(function(){var y=$(this);
var x=y.find(".js-add-button").map(function(){var z=$(this).data("digital-river-id");
var A=productHelpers.findProductById(v.products.product,z);
if(A!=null){return A.pricing.salePriceWithQuantity.value
}else{return null
}}).get().filter(function(z){return z!=null
});
var w=Math.min.apply(Math,x);
$(this).find(".js-lowest-product-price").html(localisePriceDisplay(d.apiCurrency,cartHelpers.setPriceFormatToLocale(w)));
y.find(".js-add-button").map(function(){var D=$(this).data("digital-river-id");
var G=productHelpers.findProductById(v.products.product,D);
if(G!=null){var A=G.inventoryStatus.availableQuantity;
var E=G.inventoryStatus.productIsAllowsBackorders;
var C=G.inventoryStatus.productIsInStock;
theLanguage=$("html").attr("lang");
if(theLanguage=="ru-ru"||theLanguage=="en-in"){if(G.inventoryStatus.productIsInStock==false){C="false"
}else{C="true"
}if(G.inventoryStatus.productIsAllowsBackorders==false){E="false"
}else{E="true"
}}if(C=="false"&&E=="false"){try{if(theLanguage=="ru-ru"||theLanguage=="en-in"){$(this).addClass("stock-grey-out");
$(this).parent().removeClass("link-btn");
$(this).parent().removeClass("brand-green");
$(this).parent().addClass("link-btn-disabled");
$(this).removeClass("js-add-button")
}else{if((theLanguage.indexOf("zz")>=0||theLanguage.indexOf("us")>=0)&&$(this).parent().attr("data-analytics").indexOf("btn-dr-id")>-1){var B="<a href='javascript:void(0)' data-href='.notify-me-prod-modal-"+D+"' data-analytics='btn-dr-notify-me-"+D+"'  class='link-btn btn-manual lb_iframe brand-green regular-btn dr-modal-form-for-notify-me' ><div class='btn'>Notify Me</div></a>";
var F="";
F='<style>iframe.dr-notify-me-frame{border:0 none;padding-top:40px;padding-left:30px;padding-right:30px;}@media  (max-width: 500px){iframe.dr-notify-me-frame{border:0 none;padding-top:25px;padding-left:15px;padding-right:15px;}}@media  (max-width: 730px) and (orientation : landscape) {iframe.dr-notify-me-frame{padding-top:5px;padding-left:15px;padding-right:15px;}}</style><div class="hide-modal-content"><div style="overflow:hidden;background-color: #1a1a1a;" class="color-black notify-me-prod-modal-'+D+'" class="general-container" data-width="" data-height=""  ><div class="modal-content parsys"><iframe class="dr-notify-me-frame" scrolling="no"  src="https://store.nvidia.com/store?Action=DisplayNotifyMeFormPage&Env=BASE&Locale=en_US&SiteID=nvidia&productID='+D+'"></iframe></div></div></div>';
$("body").append(F);
$(this).parent().replaceWith(B)
}else{var B="<a href='javascript:void(0)' data-href='#notify-me-"+D+"' data-analytics='notify-me-"+D+"' target='overlay' class='link-btn btn-manual lb_iframe brand-green regular-btn' onclick='NVIDIAGDC.button.click(this, $(this).data(&quot;href&quot;),true, function() { ;return NVIDIAGDC.button.callbacks(this); }); return false;'><div class='btn'>Notify Me</div></a>";
$(this).parent().replaceWith(B)
}}}catch(z){}$(this).attr("disabled",true);
$(this).addClass("inactive");
$(this).parent().parent().find(".js-in-stock").addClass("hide");
$(this).parent().parent().find(".js-out-of-stock__without-date").removeClass("hide")
}}else{console.log("Digital River product wrongly configured : "+D+"");
$(this).find(".js-product-price").addClass("hide-price").html("Digital River product wrongly configured : "+D+"")
}});
$(this).css("visibility","visible")
})
});
var h=cookieHelpers.getCookie("accessToken");
if(h){a.getCart({token:h}).done(function(y){var B={};
var A=y.cart.lineItems;
if(y.cart.lineItems.lineItem!=undefined){var z=_.filter(y.cart.lineItems.lineItem,function(D){if(D.groups){var C=_.reduce(D.groups,function(F,E){var G=_.reduce(E.group,function(H,I){return(I.relationType=="child")||H
},false);
return G||F
},false);
return !C
}else{return true
}});
var x=$("html").attr("lang");
ru_cart_id=null;
if(x=="ru-ru"||x=="en-in"){var w=["00-00030377","00-00031467"];
var v=z.filter(function(C){return w.indexOf(C.id)==-1
});
v=v.map(function(C){B[C.id]=C.quantity;
return C.id
});
ru_cart_id=v;
console.log("after map"+JSON.stringify(v))
}else{var v=z.map(function(D){var C=D.product.uri.substr(D.product.uri.lastIndexOf("/")+1);
B[C]=D.quantity;
return C
})
}a.getProducts({products:v}).done(function(C){var D=C.products.product.map(function(F){var G=B[F.id];
var E=cartHelpers.setPriceFormatToLocale(G*F.pricing.salePriceWithQuantity.value);
return{id:F.id,sku:F.sku,name:F.displayName,quantity:parseInt(G,10),listPrice:F.pricing.salePriceWithQuantity.value,totalPrice:E,color:productHelpers.product_title(F.id),productIsInStock:F.inventoryStatus.productIsInStock,productIsAllowsBackorders:F.inventoryStatus.productIsAllowsBackorders,promotionDesc:window.productHelpers.findPromotionByProductId(window.promotions,F.id),promotionImage:window.productHelpers.findPromotionByProductIdimage(window.promotions,F.id),promotionBundleurl:window.productHelpers.findPromotionByProductIdbundleurl(window.promotions,F.id)}
});
D=D.filter(function(E){return E.quantity>0
});
f.dispatch({type:actionTypes.SET_CART,cart:D})
})
}else{f.dispatch({type:actionTypes.CLEAR_CART,cart:A})
}cookieHelpers.deleteCookie("accessToken")
})
}else{var t=localStorage.getItem(q);
var b=new Date();
var k=function(w,v){return(v<w)
};
if(t!=null){var l=JSON.parse(t);
l=l.cart;
for(var u in l){console.log(l[u]["expires"]);
var g=Date.parse(l[u]["expires"])
}if(!k(b,g)){var c=JSON.parse(t);
console.log("It's alive");
f.dispatch({type:actionTypes.SET_CART,cart:c.cart});
var e=c.cart.map(function(v){return v.id
})
}else{var e=[]
}}else{var e=[]
}if(e.length>0){a.getProducts({products:e}).done(function(v){if(v.products.totalResults<1){v.products.product=[]
}f.dispatch({type:actionTypes.UPDATE_PRODUCTS,products:v.products.product})
})
}}var r=$(".cart");
$(".cart__close, .js-cart-close, .cart__continue-shopping").on("click",function(){$(".cart-blocker").removeClass("cart-blocker--shown");
r.removeClass("cart--shown");
return false
});
$(".nav-cart-link").on("click",function(){$(".cart-blocker").addClass("cart-blocker--shown");
r.addClass("cart--shown");
return false
});
$(".cart-icon, .cart-counter").on("click",function(){$(".cart-blocker").addClass("cart-blocker--shown");
r.addClass("cart--shown");
return false
});
$("#cart").on("click",".js-cart-item-remove",function(w){var v=$(this).data("digital-river-id");
f.dispatch({type:actionTypes.REMOVE_ITEM_FROM_CART,id:v});
return false
}).on("click",".js-cart-item-inc",function(w){var v=$(this).data("digital-river-id");
f.dispatch({type:actionTypes.INC_ITEM_QUANTITY,id:v});
return false
}).on("click",".js-cart-item-dec",function(w){var v=$(this).data("digital-river-id");
f.dispatch({type:actionTypes.DEC_ITEM_QUANTITY,id:v});
return false
}).on("click",".js-checkout",function(){var w=f.getState();
var v=w.cart.map(function(z){return z.displayName
});
var y=v.join(",");
var x=$(this);
x.addClass("inactive").text(Granite.I18n.get("Checking out..."));
var w=f.getState();
a.checkout({items:w.cart})
});
$(".js-product-item").on("click",".js-add-button",function(x){var y=1;
var v=null;
var w=$(x.delegateTarget);
v=w.data("digital-river-id");
f.dispatch({type:actionTypes.ADD_ITEM_TO_CART,id:v,quantity:y});
return false
});
$(".js-product-item-with-variations").on("click",".js-add-button",function(w){var x=1;
var v=$(this).data("digital-river-id");
f.dispatch({type:actionTypes.ADD_ITEM_TO_CART,id:v,quantity:x});
return false
});
$(".partners-content").on("partners-complete",function(w){var v=false;
$.each($(".shop-now-block").find("div"),function(x,y){y=$(y);
if(y.hasClass("hatch-content--success")){v=true
}if(y.find(".system").length>0){v=true
}if(y.hasClass("partners-content")&&y.find(".etailer-image").length>0){v=true
}});
v&&$(".shop-now-block > .container > .gf-sub-title").show()
})
};
(function(f,h,j,c){var g="videoComponent",a=f(h).width(),b=1025,k=768,e={videotype:"dam",preload:"auto",videoconfig:"",videourl:"",videowebmurl:"",youtubeurl:"",youkurul:""};
var d;
function l(n,m){this.element=n;
this.$element=f(this.element);
this.options=f.extend({},e,m);
this._defaults=e;
this._name=g;
this.$watchvideo=this.$element.find(".watchvideo");
console.log("video comp"+this.$watchvideo.length);
this.init()
}l.prototype.init=function(){var m=this;
m.$watchvideo.click(function(q){f("body").addClass("noscroll");
var o="";
a=f(h).width();
var p="100%";
var n="60%";
if(a>=b){p="854px";
n="480px"
}else{n=(a*9)/16
}if(m.options.videotype==="dam"){o="<div class='damvideo-border'><video id='player-dam' preload='"+m.options.preload+"' width='"+p+"' height= '"+n+"' "+m.options.videoconfig+"><source src='"+m.options.videourl+"' type='video/mp4' /><source src='"+m.options.videowebmurl+"' type='video/webm' /></video></div>";
d=true
}else{if(m.options.videotype==="youku"){o="<iframe id='player-youku' width='"+p+"' height= '"+n+"' src='"+m.options.youkuurl+"' frameborder='0' allowfullscreen></iframe>"
}else{o="<div class='youtube-border'><iframe id='player-youtube' width='"+p+"' height= '"+n+"' src='"+m.options.youtubeurl+"' frameborder='0' allowfullscreen></iframe></div>"
}}f.colorbox({width:p,html:o});
f.colorbox.resize();
if(d){f("#player-dam").get(0).play();
f("#cboxLoadedContent").css("overflow","visible")
}})
};
f.fn[g]=function(m){return this.each(function(){if(!f.data(this,"plugin_"+g)){f.data(this,"plugin_"+g,new l(this,m))
}})
}
})(jQuery,window,document);
(function(d,a,f){var c="tabComponent",e={};
function b(h,g){this.element=h;
this.$element=d(this.element);
this.options=d.extend({},e,g);
this._defaults=e;
this._name=c;
this.init()
}b.prototype.init=function(){var g=this;
g.setTabs()
};
b.prototype.setTabs=function(){d("ul.tabs li:first-child").addClass("current");
d("div#tab-container div:first-child").addClass("current");
var g=this.$element.find("ul.tabs li");
var h=this.$element.find(".tab-content");
this.$element.find("ul.tabs li").click(function(){var j=d(this).attr("data-tab");
g.removeClass("current");
h.removeClass("current");
d(this).addClass("current");
d("#"+j).addClass("current")
})
};
d.fn[c]=function(g){return this.each(function(){if(!d.data(this,"plugin_"+c)){d.data(this,"plugin_"+c,new b(this,g))
}})
}
})(jQuery,document);
(function(e,c,a,g){var d="shieldGames",f={currentGameBatch:[],currentlyLoading:false,gameLimit:18,gameType:"android",localeType:"us/en_US",startValue:0,initialValue:0,currentValue:0,platform:null,orderby:null,sort:null,template:null,androidLimit:36,buyandplay:false,includedwithmembership:false,ratingMatrix:[[0,""],[1,"rating1"],[1.5,"rating15"],[2,"rating2"],[2.5,"rating25"],[3,"rating3"],[3.5,"rating35"],[4,"rating4"],[4.5,"rating45"],[5,"rating5"]]};
function b(l,k){this.element=l;
this.$element=e(this.element);
this.options=e.extend({},f,k);
this._defaults=f;
this._name=d;
this.$shieldgamescontainer=this.$element.find("#games-container");
this.$shieldappscontainer=this.$element.find("#apps-container");
this.$sortfilter=this.$element.find("#sort");
this.$sortele=this.$element.find(".sort");
this.$appbox=this.$element.find("#app-boxes");
this.$gamebox=this.$element.find("#game-boxes");
this.$morefiltersbtn=this.$element.find("#more-filters-bttn");
this.$morefilters=this.$element.find("#more-filters");
this.$devicefilter=this.$element.find("#device");
this.$gridfilter=this.$element.find("#grid");
this.$bundlefilter=this.$element.find("#bundle");
this.$ratingsfilter=this.$element.find("#ratings");
this.$controllersfilter=this.$element.find("#controllers");
this.$gfntype=this.$element.find("#gfntype");
this.$featuretab=this.$element.find(".featured-tab");
this.$featuregamesnavtabitems=this.$featuretab.find(".games-navigation-tabs-item");
this.$buypi=this.$element.find("#buypi");
this.$buypinavtabitems=this.$buypi.find(".games-navigation-tabs-item");
this.$fgames=this.$element.find("#fgames");
this.$fgamesnavtabitems=this.$fgames.find(".games-navigation-tabs-item");
this.$inlucdedwm=this.$element.find("#inlucdedwm");
this.$inlucdedwmnavtabitems=this.$inlucdedwm.find(".games-navigation-tabs-item");
this.$freefilter=this.$element.find("#free");
this.$comingsoonfilter=this.$element.find("#coming_soon");
this.$genrefilter=this.$element.find("#genre");
this.$loadmore=this.$element.find("#more-games");
var h=this;
var n=h.getQueryStringValue("tab");
if(n==""){n=h.options.gameType
}else{h.options.gameType=n
}h.$element.find("#games-container").attr("data-category",n);
if(typeof this.options.localeType==="undefined"||this.options.localeType==""){this.options.localeType="us/en_US"
}if(this.$shieldgamescontainer||this.$shieldappscontainer){var m=this.$shieldgamescontainer.data("category");
if(m==="android"){this.options.platform="apps";
this.options.gameType="android";
this.options.template='<% _.each( gameData, function( game ){ %><li class="android-game active"><div class="game"><a href="<%- game.detailPageURL %>"><div class="banner"><img src="<%- game.feature_image %>" alt="<%- game.title %>" title="<%- game.title %>" /></div><div class="info"><div data-title="<%- game.title %>" class="title"><%- game.title %></div><div class="game-rating"><% if(game.only_on_shield == true) { %> <div class="onlyShield">Only on SHIELD</div><% } %></div><div class="game-price"><% if (game.price !== "FREE") { %><div class="price"><%- game.price %></div><% } else { %><div class="price"><%- game.price %></div><% } %></div><div class="cf"></div></div></a></div></li><% }); %>';
this.init()
}else{if(m==="gamestream"){this.options.platform="pcgames";
this.options.gameType="gamestream";
this.options.template='<% _.each( gameData, function( game ){ %><li class="gamestream-game"><div class="game"><a href="<%- game.detailPageURL %>"><div class="banner"><img src="<%- game.feature_image %>" alt="<%- game.title %>" title="<%- game.title %>" /></div><div class="info"><div data-title="<%- game.title %>" class="title"><%- game.title %></div><div class="cf"></div></div></a></div></li><% }); %>';
this.init()
}else{if(m==="geforce-now"){this.options.platform="pcgames";
this.options.gameType="geforce-now";
this.options.template='<% _.each( gameData, function( game ){ %><li class="grid-game"><div class="game"><a href="<%- game.detailPageURL %>"><div class="banner"><img src="<%- game.feature_image.thumbnail %>" alt="<%- game.title %>" title="<%- game.title %>" /></div><div class="info"><div data-title="<%- game.title %>" class="title"><%- game.title %></div><div class="grid-game-price"><% if(game.grid_store_game == false) { %> <div class="included"><%- game.included %></div><% }else if(game.price !== ""){ %><div class="price"><%- game.price %></div><% }else{ %><div class="price">&nbsp;</div><% } %></div><div class="cf"></div></div></a></div></li><% }); %>';
this.init()
}else{if(m==="apps"){this.options.platform="otherapps";
this.options.gameType="app";
this.options.template='<% _.each( gameData, function( app ){ %><li class="android-app active"><div class="app"><a href="<%- app.detailPageURL %>"><div class="banner"><img src="<%- app.feature_image %>" alt="<%- app.title %>" title="<%- app.title %>" /></div><div class="info"><div data-title="<%- app.title %>" class="title"><%- app.title %></div><div class="app-rating"><% if(app.only_on_shield == true) { %> <div class="onlyShield">Only on SHIELD</div><% } %></div><div class="app-price"><% if (app.price !== "FREE") { %><div class="price"><%- app.price %></div><% } else { %><div class="price"><%- app.price %></div><% } %></div><div class="cf"></div></div></a></div></li><% }); %>';
this.init()
}}}}}if(this.$morefiltersbtn){var j=this.$morefiltersbtn;
e(j).click(function(o){if(e(j).hasClass("active")){e(j).removeClass("active");
h.$morefilters.toggle()
}else{e(j).addClass("active");
h.$morefilters.toggle()
}})
}if(this.options.gameType=="geforce-now"&&h.$element.find("#fgames .games-navigation-tabs-item").hasClass("active")==true){this.$sortele.hide();
this.$featuretab.css("padding-bottom","80px")
}this.init();
this.options.gameType=h.$element.find("#games-container").attr("data-category");
this.fetchGameCategories();
this.toggleFilters()
}b.prototype.init=function(){var h=this;
h.$loadmore.hide();
h.$sortfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.options.sort=k.item.value;
h.$appbox.html("");
h.$gamebox.html("");
h.fetchGames()
}});
h.$gfntype.selectmenu({change:function(j,k){if(k.item.value=="fg"){h.options.startValue=0;
h.options.gameLimit=9;
h.options.buyandplay=false;
h.options.includedwithmembership=false;
h.$gamebox.html("");
h.fetchGames();
h.$featuretab.css("padding-bottom","0px")
}else{if(k.item.value=="bp"){h.options.startValue=0;
h.options.buyandplay=true;
h.$gamebox.html("");
h.fetchGames();
h.$featuretab.css("padding-bottom","0px")
}else{if(k.item.value=="im"){h.options.startValue=0;
h.options.buyandplay=false;
h.options.includedwithmembership=true;
h.$gamebox.html("");
h.fetchGames();
h.$featuretab.css("padding-bottom","0px")
}}}}});
h.$devicefilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$gridfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$bundlefilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$ratingsfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$controllersfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$freefilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$comingsoonfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.$gamebox.html("");
h.fetchGames()
}});
h.$loadmore.click(function(){h.$loadmore.hide();
h.options.startValue=h.options.startValue;
h.ellipsisTitlesGames();
h.ellipsisTitles()
});
h.ellipsisTitles();
h.ellipsisTitlesGames()
};
b.prototype.toggleFilters=function(){var h=this;
var j=h.options.gameType;
if(j=="geforce-now"){h.$element.find(".android-display").hide();
h.$element.find(".grid-display").show();
h.$element.find("#geforce-now-nav").addClass("active");
h.$element.find("#android-nav").removeClass("active");
h.$element.find("#device").next(".ui-selectmenu-button").hide();
h.$element.find("#free").next(".ui-selectmenu-button").hide();
h.$element.find("#coming_soon").next(".ui-selectmenu-button").hide();
h.$element.find("#bundle").next(".ui-selectmenu-button").hide();
h.$element.find("#ratings").next(".ui-selectmenu-button").show();
h.$element.find("#grid").next(".ui-selectmenu-button").show();
h.$element.find("#bundle").next(".ui-selectmenu-button").show();
h.$element.find("#controllers").next(".ui-selectmenu-button").show();
h.$element.find("#gfntype").next(".ui-selectmenu-button").show();
h.$element.find("#fgames > .col > .games-navigation-tabs-item").addClass("active");
h.$element.find("#game-boxes").html("")
}else{if(j=="android"){h.$element.find(".android-display").show();
h.$element.find(".grid-display").hide();
h.$element.find("#geforce-now-nav").removeClass("active");
h.$element.find("#android-nav").addClass("active");
h.$element.find("#gfntype").next(".ui-selectmenu-button").hide();
h.$element.find("#ratings").next(".ui-selectmenu-button").hide();
h.$element.find("#grid").next(".ui-selectmenu-button").hide();
h.$element.find("#bundle").next(".ui-selectmenu-button").hide();
h.$element.find("#controllers").next(".ui-selectmenu-button").hide();
h.$element.find("#free").next(".ui-selectmenu-button").show();
h.$element.find("#coming_soon").next(".ui-selectmenu-button").show()
}}};
b.prototype.ellipsisTitles=function(){var h=this;
var j=(h.$element.find(".app .title").length)?h.$element.find(".app .title"):h.$element.find(".game .title");
e(j).each(function(k){e(this).truncate("update",e(this).data("title"))
});
e(j).truncate("collapse")
};
b.prototype.ellipsisTitlesGames=function(){var h=this;
var j=(h.$element.find(".no-apps-results").length)?h.$element.find(".no-apps-results"):h.$element.find(".no-games-results");
if(h.options.currentlyLoading==false&&!e(j).is(":visible")){if(h.options.initialValue==0){h.options.startValue=h.options.startValue;
h.options.initialValue=1
}else{h.options.startValue=h.options.startValue+h.options.gameLimit
}h.fetchGames()
}};
b.prototype.windowscroll=function(){var h=this;
e(c).scroll(function(){if(e(c).scrollTop()+e(c).height()>=e(a).height()){var j=(h.$element.find(".no-apps-results").length)?h.$element.find(".no-apps-results"):h.$element.find(".no-games-results");
if(h.options.currentlyLoading==false&&!e(j).is(":visible")){if(h.options.initialValue==0){h.options.startValue=h.options.startValue;
h.options.initialValue=1
}else{h.options.startValue=h.options.startValue+h.options.gameLimit
}h.fetchGames()
}}})
};
b.prototype.fetchGames=function(){var j=this;
j.options.currentlyLoading=true;
j.showLoadingImage();
j.options.currentGameBatch=[];
var m=(j.$element.find(".no-apps-results").length)?j.$element.find(".no-apps-results"):j.$element.find(".no-games-results");
if(e(m).is(":visible")){e(m).hide()
}var l="";
var k=j.options.localeType;
var n=k.split("/")[0];
var h=k.split("/")[1];
if(n==="gb"){l="https://shield.nvidia.co.uk/games/";
n="uk"
}else{if(n==="us"){l="https://shield.nvidia.com/games/"
}else{if(n==="zh-cn"){l="http://shield.nvidia."+n+"/games/"
}else{l="https://shield.nvidia."+n+"/games/"
}}}e.get(this.makeGameURL(),function(p){if(p.length<=0){j.$loadmore.hide()
}else{j.$loadmore.show()
}for(var q=0;
q<p.length;
q++){var o={};
o.title=p[q].title;
o.id=p[q].id;
var r=false;
if(j.options.gameType==="android"){r=true
}switch(j.options.gameType){case"android":o.detailPageURL=l+"android/"+p[q].object_name.slice(0,-4);
break;
case"geforce-now":o.detailPageURL=l+"geforce-now/"+p[q].machine_name;
break;
case"app":o.detailPageURL=l+"apps/"+p[q].machine_name;
break
}o.price=p[q].price;
if(o.price){if(o.price.charAt(0)==="$"){}}o.only_on_shield=p[q].only_on_shield;
o.grid_store_game=p[q].grid_store_game;
o.included="Included";
if((typeof(p[q].feature_image)!=="undefined"&&p[q].feature_image!=="")){if(r||j.options.gameType==="app"){o.feature_image=p[q].feature_image
}else{if(typeof(p[q].feature_image)!=="undefined"&&p[q].feature_image!==""){o.feature_image=p[q].feature_image
}else{if(typeof(p[q].hero_image)!=="undefined"&&p[q].hero_image!==""){o.feature_image=p[q].hero_image
}else{o.feature_image=""
}}}}j.options.currentGameBatch.push(o)
}j.appendGames()
})
};
b.prototype.getRatingClass=function(k){var h=this;
for(var j=0;
j<h.options.ratingMatrix.length;
j++){if(h.options.ratingMatrix[j][0]===k){return h.options.ratingMatrix[j][1]
}}};
b.prototype.appendGames=function(){var h=this;
var l=_.template(h.options.template);
var k={gameData:h.options.currentGameBatch};
var m=(h.$element.find(".no-apps-results").length)?h.$element.find(".no-apps-results"):h.$element.find(".no-games-results");
var j=h.$gamebox;
if(h.options.currentGameBatch.length>0){e(j).append(l(k));
h.truncateTitle()
}else{if(h.options.startValue===0){e(m).show()
}}h.options.currentlyLoading=false;
h.hideLoadingImage();
h.$element.find("#game-boxes .game a, #app-boxes .game a").unbind();
h.$element.find(".grid-game-price").show();
h.$element.find("#game-boxes .game a, #app-boxes .game a").click(function(o){var p=e(e(this).find(".info .title")[0]).attr("data-title");
var n=e(this).attr("href")
});
if(h.options.gameType=="geforce-now"&&h.$element.find("#fgames .games-navigation-tabs-item").hasClass("active")==true){h.$sortele.hide();
h.$featuretab.css("padding-bottom","80px")
}};
b.prototype.fetchGameCategories=function(){var h=this;
var j="";
var k="";
switch(h.options.gameType){case"android":j="android";
break;
case"geforce-now":j="pcgames";
break;
case"app":k=true;
break
}if(j!==""){j="&context="+j
}if(k!==""){k="&otherApps=true"
}var l="";
if(h.$element.find("#games-container").attr("data-category")=="geforce-now"){l="https://services.tegrazone.com/api/v3/pcgames/"+this.options.localeType+"/made2game/4.3.5?"
}else{if(h.$element.find("#games-container").attr("data-category")=="android"){l="https://services.tegrazone.com/api/v3/apps/"+this.options.localeType+"/made2game/4.3.5?"
}}e.get(l+j+k,function(m){var q=Array();
var p=Array();
for(var o=0;
o<m.length;
o++){if(m[o].categories[0]!=g){for(var n=0;
n<m[o].categories.length;
n++){if(m[o].categories[n].name!=null){if(e.inArray(m[o].categories[n].name,q)===-1){q.push(m[o].categories[n].name);
p.push({id:m[o].categories[n].id,name:m[o].categories[n].name});
h.ellipsisTitles()
}}}}}e.each(p,function(r,t){try{p.sort(function(w,v){var y=w.name.toLowerCase(),x=v.name.toLowerCase();
if(y<x){return -1
}if(y>x){return 1
}return 0
})
}catch(u){console.log(u)
}h.$genrefilter.append(e("<option></option>").val(p[r].id).html(p[r].name))
});
h.$genrefilter.selectmenu({change:function(r,t){h.options.startValue=0;
h.options.category=t.item.value;
h.$gamebox.html("");
h.$appbox.html("");
h.fetchGames()
}});
h.options.sort=h.$element.find("#sort option:selected").val();
h.options.category=h.$element.find("#genre option:selected").val()
})
};
b.prototype.truncateTitle=function(){var h=this;
e(c).resize(function(){h.ellipsisTitles()
});
var j=(h.$element.find(".app .title").length)?h.$element.find(".app .title"):h.$element.find(".game .title");
e(j).truncate({lines:2,lineHeight:20})
};
b.prototype.showLoadingImage=function(){var h=this;
var j=(h.$element.find(".apps-loading").length)?h.$element.find(".apps-loading"):h.$element.find(".games-loading");
e(j).addClass("active")
};
b.prototype.hideLoadingImage=function(){var h=this;
var j=(h.$element.find(".apps-loading").length)?h.$element.find(".apps-loading"):h.$element.find(".games-loading");
e(j).removeClass("active")
};
b.prototype.makeGameURL=function(){var r=this;
var j=r.$element.find("#sort option:selected").val();
var k=r.$element.find("#device option:selected").val();
var o=r.$element.find("#grid option:selected").val();
var u=r.$element.find("#bundle option:selected").val();
var l=r.$element.find("#controllers option:selected").val();
var m=(r.$element.find("#free option:selected").val()==="1")?"&free_app=true":"";
var q=(r.$element.find("#coming_soon option:selected").val()==="1")?"&coming_soon=true":"";
var n=r.$element.find("#ratings option:selected").val();
switch(j){case"title_asc":r.options.orderby="title";
r.options.sort="asc";
break;
case"title_desc":r.options.orderby="title";
r.options.sort="desc";
break;
case"featured":r.options.orderby="feature_position";
r.options.sort="desc";
break;
case"release_date_asc":r.options.orderby="release_date";
r.options.sort="asc";
break;
case"release_date_desc":r.options.orderby="release_date";
r.options.sort="desc";
break;
case"created_asc":r.options.orderby="created";
r.options.sort="asc";
break;
case"created_desc":r.options.orderby="created";
r.options.sort="desc";
break;
case"updated_asc":r.options.orderby="updated";
r.options.sort="asc";
break;
case"updated_desc":r.options.orderby="updated";
r.options.sort="desc";
break;
default:r.options.orderby="feature_position";
r.options.sort="desc"
}if(k!=="0"&&typeof k!=="undefined"){if(k==="1"){k="&only_on_shield=true"
}else{k="&device_support="+k
}}else{k=""
}if(o!=="0"&&typeof o!=="undefined"){o="&grid_profile_support="+o
}else{o=""
}if(u!=="0"&&typeof u!=="undefined"){u="&grid_store_game="+u
}else{u=""
}if(typeof l!=="undefined"&&parseInt(l)>1){l="&multi_controller_support="+l
}else{l=""
}if(typeof n!=="undefined"&&n!=="0"){n="&rating="+n
}else{n=""
}var p="";
if(r.options.gameType=="gamestream"){p="&gamestream_support=true"
}else{if(r.options.gameType=="geforce-now"){p="&grid_support=true"
}}var t="";
if(r.options.buyandplay==true){t="&grid_store_game=true"
}else{if(r.options.includedwithmembership==true){t="&grid_store_game=false"
}}var h="";
if(r.$element.find("#games-container").attr("data-category")=="geforce-now"){h="https://services.tegrazone.com/api/v3/pcgames/"+this.options.localeType+"/made2game/4.3.5?"
}else{if(r.$element.find("#games-container").attr("data-category")=="android"){h="https://services.tegrazone.com/api/v3/apps/"+this.options.localeType+"/made2game/4.3.5?"
}}return h+"orderby="+r.options.orderby+"&sort="+r.options.sort+(r.options.category>0?"&category="+r.options.category:"")+"&start="+r.options.startValue+"&limit="+r.options.gameLimit+p+k+m+l+u+o+q+n+t
};
b.prototype.getQueryStringValue=function(h){return unescape(c.location.search.replace(new RegExp("^(?:.*[&\\?]"+escape(h).replace(/[\.\+\*]/g,"\\$&")+"(?:\\=([^&]*))?)?.*$","i"),"$1"))
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="shieldApps",f={currentAppBatch:[],currentlyLoading:false,startValue:0,initialValue:0,orderby:null,sort:null,template:null,category:null,localeType:"us/en_US"};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.$appCarouselCaption=(e("#shield-apps .swiper-slide .store-slide-info .caption").length)?e("#shield-apps .swiper-slide .store-slide-info .caption"):e("#games-container .swiper-slide .store-slide-info .caption");
this.$shieldapps=this.$element.find("#shield-apps");
this.$sortfilter=this.$element.find("#sort");
this.$appbox=this.$element.find("#app-boxes");
this.$genrefilter=this.$element.find("#genre");
if(typeof this.options.localeType==="undefined"||this.options.localeType==""){this.options.localeType="us/en_US"
}this.onwindowresize();
if(this.$shieldapps.length!=0){if(this.$shieldapps.data("category")==="apps"){this.options.platform="otherapps";
this.options.gameType="app";
this.options.template='<% _.each( gameData, function( app ){ %><li class="android-app active"><div class="app"><a href="<%- app.detailPageURL %>"><div class="banner"><img src="<%- app.feature_image %>" alt="<%- app.title %>" title="<%- app.title %>" /></div><div class="info"><div data-title="<%- app.title %>" class="title"><%- app.title %></div><div class="app-rating"><% if(app.only_on_shield == true) { %> <div class="onlyShield">Only on SHIELD</div><% } %></div><div class="app-price"><% if (app.price !== "FREE") { %><div class="price"><%- app.price %></div><% } else { %><div class="price"><%- app.price %></div><% } %></div><div class="cf"></div></div></a></div></li><% }); %>';
this.init()
}}this.fetchAppCategories()
}b.prototype.onwindowresize=function(){var h=this;
c.onresize=function(){h.$appCarouselCaption.each(function(){var j=e(this).html();
e(this).truncate("update",j);
e(this).truncate("collapse")
})
}
};
b.prototype.init=function(){var h=this;
h.$sortfilter.selectmenu({change:function(j,k){h.options.startValue=0;
h.options.sort=k.item.value;
h.$appbox.html("");
h.fetchApps()
}});
h.ellipsisTitles();
h.fetchApps()
};
b.prototype.ellipsisTitles=function(){var h=(e(".app .title").length)?e(".app .title"):e(".game .title");
e(h).each(function(j){e(this).truncate("update",e(this).data("title"))
});
e(h).truncate("collapse")
};
b.prototype.fetchApps=function(){var k=this;
k.options.currentlyLoading=true;
k.showLoadingImage();
k.options.currentAppBatch=[];
var m=(e(".no-apps-results").length)?e(".no-apps-results"):e(".no-games-results");
if(e(m).is(":visible")){e(m).hide()
}var l="https://shield.nvidia.com/apps/";
var j=k.options.localeType;
var n=j.split("/")[0];
var h=j.split("/")[1];
if(n==="gb"){l="https://shield.nvidia.co.uk/apps/"
}else{if(n==="us"){l="https://shield.nvidia.com/apps/"
}else{l="https://shield.nvidia."+n+"/apps/"
}}e.get(k.makeAppURL(),function(o){for(var p=0;
p<o.length;
p++){var r={};
r.title=o[p].title;
r.id=o[p].id;
if(k.options.gameType=="app"){r.detailPageURL=l+o[p].machine_name
}r.price=o[p].price;
if(r.price){if(r.price.charAt(0)==="$"){}}r.only_on_shield=o[p].only_on_shield;
r.grid_store_game=o[p].grid_store_game;
r.included="Included";
if((typeof(o[p].feature_image)!=="undefined"&&o[p].feature_image!=="")){if(k.options.gameType==="app"){r.feature_image=o[p].feature_image
}else{if(typeof(o[p].feature_image)!=="undefined"&&o[p].feature_image!==""){r.feature_image=o[p].feature_image
}else{if(typeof(o[p].hero_image)!=="undefined"&&o[p].hero_image!==""){r.feature_image=o[p].hero_image
}else{r.feature_image=""
}}}}try{r.ratingAvgValue=k.getRatingClass(o[p].feedback.ratingAvgValue)
}catch(q){}k.options.currentAppBatch.push(r)
}k.appendApps()
})
};
b.prototype.appendApps=function(){var j=this;
var l=_.template(j.options.template);
var k={gameData:j.options.currentAppBatch};
var m=(e(".no-apps-results").length)?e(".no-apps-results"):e(".no-games-results");
var h=(e("#app-boxes").length)?e("#app-boxes"):e("#game-boxes");
if(j.options.currentAppBatch.length>0){e(h).append(l(k));
j.truncateTitle()
}else{if(j.options.startValue===0){e(m).show()
}}j.options.currentlyLoading=false;
j.hideLoadingImage();
e("#app-boxes .android-app .app a").unbind();
e("#app-boxes .android-app .app a").click(function(o){var p=e(e(this).find(".info .title")[0]).attr("data-title");
var n=e(this).attr("href")
})
};
b.prototype.fetchAppCategories=function(){var h=this;
var k="";
var j;
if(h.options.gameType=="app"){j=true
}if(k!==""){k="&context="+gameContext
}if(j!==""){j="&otherApps=true"
}var l="https://services.tegrazone.com/api/v3/otherapps/"+this.options.localeType+"/made2game/4.3.5?";
e.get(l+"method=getAppCategories"+j,function(m){var q=Array();
var p=Array();
for(var o=0;
o<m.length;
o++){if(m[o].categories[0]!=g){for(var n=0;
n<m[o].categories.length;
n++){if(e.inArray(m[o].categories[n].name,q)===-1){q.push(m[o].categories[n].name);
p.push({id:m[o].categories[n].id,name:m[o].categories[n].name})
}}}}e.each(p,function(r,t){p.sort(function(v,u){var x=v.name.toLowerCase(),w=u.name.toLowerCase();
if(x<w){return -1
}if(x>w){return 1
}return 0
});
h.$genrefilter.append(e("<option></option>").val(p[r].id).html(p[r].name))
});
h.$genrefilter.selectmenu({change:function(r,t){h.options.startValue=0;
h.options.category=t.item.value;
e("#app-boxes").html("");
h.fetchApps()
}});
h.options.sort=h.$element.find("#sort option:selected").val();
h.options.category=h.$element.find("#genre option:selected").val()
})
};
b.prototype.truncateTitle=function(){var h=this;
var j=(e(".app .title").length)?e(".app .title"):e(".game .title");
e(j).truncate({lines:2,lineHeight:20})
};
b.prototype.showLoadingImage=function(){var h=(e(".apps-loading").length)?e(".apps-loading"):e(".games-loading");
e(h).addClass("active")
};
b.prototype.hideLoadingImage=function(){var h=(e(".apps-loading").length)?e(".apps-loading"):e(".games-loading");
e(h).removeClass("active")
};
b.prototype.makeAppURL=function(){var h=this.$element.find("#sort option:selected").val();
switch(h){case"title_asc":this.options.orderby="title";
this.options.sort="asc";
break;
case"title_desc":this.options.orderby="title";
this.options.sort="desc";
break;
case"featured":this.options.orderby="feature_position";
this.options.sort="desc";
break;
case"release_date_asc":this.options.orderby="release_date";
this.options.sort="asc";
break;
case"release_date_desc":this.options.orderby="release_date";
this.options.sort="desc";
break;
default:this.options.orderby="feature_position";
this.options.sort="desc"
}var j="https://services.tegrazone.com/api/v3/otherapps/"+this.options.localeType+"/made2game/4.3.5?";
return j+"orderby="+this.options.orderby+"&sort="+this.options.sort+(this.options.category>0?"&category="+this.options.category:"")
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,h,j,c){var g="sectionComponent",a=e(h).width(),f=h.devicePixelRatio,b=1025,k=768,d={imageDesktopUrl:"",imageTabletUrl:"",imageMobileUrl:""};
function l(n,m){this.element=n;
this.$element=e(this.element);
this.options=e.extend({},d,m);
this._defaults=d;
this._name=g;
this.init()
}l.prototype.init=function(){var m=this;
m.setImage()
};
l.prototype.setImage=function(){if(f>5){if(a<k){var m=this.options.imageMobileUrl;
if(m.indexOf("@2x")>=0){this.$element.css("background-image","url("+m+")")
}else{this.setValidImg(this.$element,this.options.imageMobileUrl.replace(".","@2x."),this.options.imageMobileUrl)
}}else{if(a>=k&&a<b){var m=this.options.imageTabletUrl;
if(m.indexOf("@2x")>=0){this.$element.css("background-image","url("+m+")")
}else{this.setValidImg(this.$element,this.options.imageTabletUrl.replace(".","@2x."),this.options.imageTabletUrl)
}}else{var m=this.options.imageDesktopUrl;
if(m.indexOf("@2x")>=0){this.$element.css("background-image","url("+m+")")
}else{this.setValidImg(this.$element,this.options.imageDesktopUrl.replace(".","@2x."),this.options.imageDesktopUrl)
}}}}else{if(a<k){this.$element.css("background-image","url("+this.options.imageMobileUrl+")")
}else{if(a>=k&&a<b){this.$element.css("background-image","url("+this.options.imageTabletUrl+")")
}else{this.$element.css("background-image","url("+this.options.imageDesktopUrl+")")
}}}};
l.prototype.setValidImg=function(o,n,m){e.get(n).done(function(){o.css("background-image","url("+n+")")
}).fail(function(){o.css("background-image","url("+m+")")
})
};
e.fn[g]=function(m){return this.each(function(){if(!e.data(this,"plugin_"+g)){e.data(this,"plugin_"+g,new l(this,m))
}})
}
})(jQuery,window,document);
(function(e,g,h,c){var f="researchandpublications",a=e(g).width(),b=1025,j=768,d={};
function k(m,l){this.element=m;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},d,l);
this._defaults=d;
this._name=f;
this.init()
}k.prototype.init=function(){var l=this;
var p=e(l.element).find(".researchlistcontainer").data("mode");
var q=p;
var n=e(l.element).find(".researchlistcontainer").data("rschid");
var m=e(l.element).find(".researchlistcontainer").data("volmsg");
var o=NVIDIAGDC.apps.endpoint;
if(p==="publications"){l.callListPublications(q,n,o,m)
}if(p==="persons"){l.callListPersons(q,n,o,m)
}};
k.prototype.callListPublications=function(p,n,o,m){var l=o+"/research-api/research-area/"+n+"/"+p;
e.ajax({type:"GET",dataType:"json",url:l,success:function(r){var q=r.publications.list;
if(q){var u=Object.keys(q);
var v=Math.ceil(u.length/2);
for(var t=0;
t<v;
t++){if(q[u[t]].title){e("#firsthalflist").append('<li><a href="'+q[u[t]].url+'"title="'+q[u[t]].title+'">'+q[u[t]].title+"</a></li>")
}}for(var t=v;
t<u.length;
t++){if(q[u[t]].title){e("#secondhalflist").append('<li><a href="'+q[u[t]].url+'"title="'+q[u[t]].title+'">'+q[u[t]].title+"</a></li>")
}}}},error:function(q){console.log("Nvidia Logger:: API call got failed");
e("#publicationlist").append('<div class="text-center"><h4 class="color-error-red">'+m+"</h4></div>")
}})
};
k.prototype.callListPersons=function(p,n,o,m){var l=o+"/research-api/research-area/"+n+"/"+p;
e.ajax({type:"GET",dataType:"json",url:l,success:function(q){function u(y,x){var z=0;
var B=y.length;
var A=[];
for(z=0;
z<B;
z+=x){eachColumn=y.slice(z,z+x);
A.push(eachColumn)
}return A
}var w=q.persons.list;
if(w){var t=Math.ceil((Object.keys(w)).length/3);
var v=u(w,t);
if(v[0]){for(var r=0;
r<v[0].length;
r++){e("#firstpeoplelist").append('<li><a href="'+v[0][r].url+'"title="'+v[0][r].title+'">'+v[0][r].title+"</a></li>")
}}if(v[1]){for(var r=0;
r<v[1].length;
r++){e("#secondpeoplelist").append('<li><a href="'+v[1][r].url+'"title="'+v[1][r].title+'">'+v[1][r].title+"</a></li>")
}}if(v[2]){for(var r=0;
r<v[2].length;
r++){e("#thirdpeoplelist").append('<li><a href="'+v[2][r].url+'"title="'+v[2][r].title+'">'+v[2][r].title+"</a></li>")
}}}},error:function(q){console.log("Nvidia Logger:: API call got failed");
e("#personlist").append('<div class="text-center"><h4 class="color-error-red">'+m+"</h4></div>")
}})
};
e.fn[f]=function(l){return this.each(function(){if(!e.data(this,"plugin_"+f)){e.data(this,"plugin_"+f,new k(this,l))
}})
}
})(jQuery,window,document);
(function(d,a,f){var c="productTileComponent",e={};
function b(h,g){this.element=h;
this.$element=d(this.element);
this.options=d.extend({},e,g);
this._defaults=e;
this._name=c;
this.init()
}b.prototype.init=function(){var g=this;
g.showSpecsImg()
};
b.prototype.showSpecsImg=function(){d(".specifications .button").each(function(){if(d(this).find(".btn").length>0){d(this).prev().show()
}})
};
d.fn[c]=function(g){return this.each(function(){if(!d.data(this,"plugin_"+c)){d.data(this,"plugin_"+c,new b(this,g))
}})
}
})(jQuery,document);
(function(e,c,a,g){var d="newsFeed",f={itemCountToShow:3,feedFetchTimeout:10000,modifierClass:"",messages:{feedNotAvailable:"The news feed is not available"},monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],feeds:[]};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.$loader=this.$element.find(".news-feed__loading");
this.$notAvailableMessage=this.$element.find(".news-feed__not-available");
this.$feedContainer=this.$element.find(".news-feed__container");
this.$template=e("#latestNewsTemplate");
this.template=e("#latestNewsTemplate").html();
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}e.extend(b.prototype,{init:function(){var j=this;
j.$loader.addClass("news-feed__loading__visable");
var h=j.options.feeds.map(function(l){return j.createDeferredFromFeedDefinition(l,j.options.feedFetchTimeout)
});
var k=e.when.apply(e,h).then(function(){var m=Array.prototype.slice.call(arguments);
var l=[].concat.apply([],m);
var n=j.sortNewsItems(l);
return n.slice(0,j.options.itemCountToShow)
}).then(function(l){var m=Mustache.render(j.template,{modifierClass:j.options.modifierClass,items:l,getFormattedDate:function(){return j.options.monthNames[this.date.getMonth()]+" "+j.padDateString(this.date.getDate()+"")+", "+this.date.getFullYear()
}});
j.addItemsToPage(m)
});
k.fail(function(l){j.$notAvailableMessage.show().text(j.options.messages.feedNotAvailable)
});
k.always(function(l){j.$loader.removeClass("news-feed__loading__visable")
})
},createDeferredFromFeedDefinition:function(h,j){return e.ajax({url:h.url,dataType:"xml",timeout:j}).then(function(n){var l=e(n);
var k=l.find("feed entry");
var m=k.map(h.parserFn).get();
return m.filter(h.filterFn)
}).fail(function(){console.warn("Could not load news feed for: ",h)
})
},sortNewsItems:function(h){return h.slice(0).sort(function(k,j){return(k.date<j.date)?1:(k.date>j.date)?-1:0
})
},addItemsToPage:function(h){e(this.element).html(h)
},padDateString:function(h){var j=h+"";
if(j.length<2){j="0"+j;
return j
}else{return j
}}});
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="geExperienceNewsFeed",f={itemCountToShow:3,feedFetchTimeout:10000,modifierClass:"",messages:{feedNotAvailable:"The news feed is not available"},monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],feeds:[]};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.$loader=this.$element.find(".news-feed__loading");
this.$notAvailableMessage=this.$element.find(".news-feed__not-available");
this.$feedContainer=this.$element.find(".news-feed__container");
this.$template=e("#ge-force-experience-template");
this.template=e("#ge-force-experience-template").html();
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}e.extend(b.prototype,{init:function(){var j=this;
j.$loader.addClass("news-feed__loading__visable");
var h=j.options.feeds.map(function(l){return j.createDeferredFromFeedDefinition(l,j.options.feedFetchTimeout)
});
var k=e.when.apply(e,h).then(function(){var m=Array.prototype.slice.call(arguments);
var l=[].concat.apply([],m);
var n=j.sortNewsItems(l);
return n.slice(0,j.options.itemCountToShow)
}).then(function(l){var m=Mustache.render(j.template,{modifierClass:j.options.modifierClass,items:l,getFormattedDate:function(){return j.options.monthNames[this.date.getMonth()]+" "+j.padDateString(this.date.getDate()+"")+", "+this.date.getFullYear()
}});
j.addItemsToPage(m)
});
k.fail(function(l){j.$notAvailableMessage.show().text(j.options.messages.feedNotAvailable)
});
k.always(function(l){j.$loader.removeClass("news-feed__loading__visable")
})
},createDeferredFromFeedDefinition:function(h,j){return e.ajax({url:h.url,dataType:"xml",timeout:j}).then(function(n){var l=e(n);
var k=l.find("channel item");
var m=k.map(h.parserFn).get();
return m.filter(h.filterFn)
}).fail(function(k){console.warn("Could not load news feed for: ",h)
})
},sortNewsItems:function(h){return h.slice(0).sort(function(k,j){return(k.date<j.date)?1:(k.date>j.date)?-1:0
})
},addItemsToPage:function(h){e(this.element).html(h)
},padDateString:function(h){var j=h+"";
if(j.length<2){j="0"+j;
return j
}else{return j
}}});
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="blogsNewsFeed",f={itemCountToShow:3,feedFetchTimeout:10000,modifierClass:"",messages:{feedNotAvailable:"The news feed is not available"},monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],feeds:[]};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.$loader=this.$element.find(".news-feed__loading");
this.$notAvailableMessage=this.$element.find(".news-feed__not-available");
this.$feedContainer=this.$element.find(".news-feed__container");
this.$template=e("#blogs-feed-template");
this.template=e("#blogs-feed-template").html();
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}e.extend(b.prototype,{init:function(){var j=this;
j.$loader.addClass("news-feed__loading__visable");
var h=j.options.feeds.map(function(l){return j.createDeferredFromFeedDefinition(l,j.options.feedFetchTimeout)
});
var k=e.when.apply(e,h).then(function(){var m=Array.prototype.slice.call(arguments);
var l=[].concat.apply([],m);
var n=j.sortNewsItems(l);
return n.slice(0,j.options.itemCountToShow)
}).then(function(l){var m=Mustache.render(j.template,{modifierClass:j.options.modifierClass,items:l,getFormattedDate:function(){return j.options.monthNames[this.date.getMonth()]+" "+j.padDateString(this.date.getDate()+"")+", "+this.date.getFullYear()
}});
j.addItemsToPage(m)
});
k.fail(function(l){j.$notAvailableMessage.show().text(j.options.messages.feedNotAvailable)
});
k.always(function(l){j.$loader.removeClass("news-feed__loading__visable")
})
},createDeferredFromFeedDefinition:function(h,j){return e.ajax({url:h.url,dataType:"xml",timeout:j}).then(function(n){var l=e(n);
var k=l.find("channel item");
var m=k.map(h.parserFn).get();
return m.filter(h.filterFn)
}).fail(function(k){console.warn("Could not load news feed for: ",h)
})
},sortNewsItems:function(h){return h.slice(0).sort(function(k,j){return(k.date<j.date)?1:(k.date>j.date)?-1:0
})
},addItemsToPage:function(h){e(this.element).html(h)
},padDateString:function(h){var j=h+"";
if(j.length<2){j="0"+j;
return j
}else{return j
}}});
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,g,h,c){var f="herobanner",a=e(g).width(),b=1025,j=768,d={slidecount:1,period:5,ts:0,lastSlide:"slide1",id:""};
function k(m,l){this.element=m;
this.$element=e(this.element);
this.options=e.extend({},d,l);
this._defaults=d;
this._name=f;
this.$slides=this.$element.find("#slides");
this.$slides1=this.$element.find("#slides1");
this.timeouts=[];
this.init()
}k.prototype.init=function(){var m=this;
var l=m.options.slidecount;
m.options.lastSlide="slide"+l+"-"+m.options.id;
if(l>1){m.setImage();
m.interval();
m.$slides.bind("touchstart",function(n){m.options.ts=n.originalEvent.touches[0].clientX
});
m.$slides.bind("touchend",function(n){m.interval();
var o=n.originalEvent.changedTouches[0].clientX;
if(m.options.ts>o+100){m.nextSlide(m.$slides)
}else{if(m.options.ts<o-100){if(~(m.$slides.siblings("input:checked").attr("id")).indexOf("slide1")){m.$slides.siblings("input#"+m.options.lastSlide).prop("checked",true)
}else{m.$slides.siblings("input:checked").prev(".radio-switch").prop("checked",true)
}}}});
m.$slides.find("label").on("click",function(){m.interval()
});
m.$slides.mouseover(function(){m.clearAllTimeout()
}).mouseout(function(){m.interval()
})
}else{m.setBannerImage()
}m.bannerButton()
};
k.prototype.clearAllTimeout=function(){if(this.timeouts.length){for(var l=0;
l<this.timeouts.length;
l++){g.clearTimeout(this.timeouts[l])
}this.timeouts=[]
}};
k.prototype.setImage=function(){var l=this;
l.$slides.find("article").each(function(){var o=e(this).attr("data-bcgImageMobile");
var n=e(this).attr("data-bcgImageTablet");
var m=e(this).attr("data-bcgImagePC");
if(a<j){e(this).css("background-image","url("+o+")")
}else{if(a>=j&&a<b){e(this).css("background-image","url("+n+")")
}else{e(this).css("background-image","url("+m+")")
}}})
};
k.prototype.setBannerImage=function(){var l=this;
l.$slides1.find("article").each(function(){var o=e(this).attr("data-bcgImageMobile");
var n=e(this).attr("data-bcgImageTablet");
var m=e(this).attr("data-bcgImagePC");
if(a<j){e(this).css("background-image","url("+o+")")
}else{if(a>=j&&a<b){e(this).css("background-image","url("+n+")")
}else{e(this).css("background-image","url("+m+")")
}}})
};
k.prototype.interval=function(){var m=this.options.autoslidedisable;
var l=this;
l.clearAllTimeout();
if(!m){var n=g.setTimeout(function(){l.nextSlide(l.$slides);
l.interval()
},l.options.period*1000);
this.timeouts.push(n)
}};
k.prototype.nextSlide=function(m){var l=this;
if(m.siblings("input:checked").attr("id")==l.options.lastSlide){m.siblings("input#slide1-"+l.options.id).prop("checked",true);
l.options.period=parseInt(m.siblings("input#slide1-"+l.options.id).attr("data-time"))
}else{m.siblings("input:checked").next(".radio-switch").prop("checked",true);
l.options.period=parseInt(m.siblings("input:checked").attr("data-time"))
}};
k.prototype.bannerButton=function(){var n=this;
var m;
var o;
var l=n.options.slidecount;
if(l==1){n.$slides1.find("article").each(function(){m=e(this).find(".text-button");
o=e(m).find("a");
console.log("Anchor ----- "+e(o).data("href"));
console.log("bannertype ----- "+e(this).prev().data("bannertype"));
e(o).attr("data-bannertype",e(this).prev().data("bannertype"));
e(o).attr("data-bannername",e(this).prev().data("bannername"));
e(o).addClass("bannerTracking")
})
}else{n.$slides.find("article").each(function(){m=e(this).find(".text-button");
o=e(m).find("a");
console.log("Anchor ----- "+e(o).data("href"));
console.log("bannertype ----- "+e(this).prev().data("bannertype"));
e(o).attr("data-bannertype",e(this).prev().data("bannertype"));
e(o).attr("data-bannername",e(this).prev().data("bannername"));
e(o).addClass("bannerTracking")
})
}};
e.fn[f]=function(l){return this.each(function(){if(!e.data(this,"plugin_"+f)){e.data(this,"plugin_"+f,new k(this,l))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="hatchPartners",f={productLookupEndpoint:"//lens.prod.gb.ib.nvidia.com/v1/products/external",RGID:"GB",source:"shield"};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.$loader=this.$element.find(".hatch-product__loading");
this.$notAvailableMessage=this.$element.find(".hatch-product__not-available");
this.$retailersContainer=this.$element.find(".hatch-product__retailers");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.addQueryParamToUrl=function(h,j,k){if(!k){return h
}h+=(h.indexOf("?")==-1)?"?":"&";
h+=j+"="+k;
return h
};
b.prototype.init=function(){var j="nRGID="+this.options.RGID+"&sModel="+this.options.hatchCode+"&source_icl="+this.options.source;
var h=this;
h.$loader.addClass("hatch-product__loading__visable");
e.ajax({type:"GET",data:j,url:this.options.productLookupEndpoint,dataType:"jsonp",jsonp:"callBack",success:function(o){var q=o.ci_data.dealers;
var l=o.ci_data.product_items;
var n=function(t,v){var u=v.filter(function(w){return w.dealer_id==t
});
if(u.length>0){return u[0]
}else{return null
}};
if(l.length<1){h.$notAvailableMessage.show().text(h.options.messages.partnersNotAvailable)
}else{var m=l[0].dealer_items;
var k=Cookies.get("icl_cid");
var r=m.map(function(t){var u=n(t.dealer_id,q);
if(u!=null){t.dealer_logo=u.dealer_logo;
t.dealer_name=u.name;
if(k!=false){t.buy_url=h.addQueryParamToUrl(t.buy_url,"cid",k)
}return t
}else{return null
}}).filter(function(t){return t!=null
});
r.sort(function(u,t){var w=u.dealer_name.toLowerCase(),v=t.dealer_name.toLowerCase();
if(w<v){return -1
}if(w>v){return 1
}return 0
});
var p=r.map(function(t){if(t.availability=="NO"){return e('<div class="hatch-product__retailers__retailer"><a href="'+t.buy_url+'" target="_blank"><img src="'+t.dealer_logo+'" alt="'+t.dealer_name+'" /><br />'+h.options.messages.outOfStock+"</a></div>")
}else{return e('<div class="hatch-product__retailers__retailer"><a href="'+t.buy_url+'" target="_blank"><img src="'+t.dealer_logo+'" alt="'+t.dealer_name+'" /></a></div>')
}}).filter(function(t){return t!=null
});
h.$retailersContainer.append(p)
}},error:function(){h.$notAvailableMessage.show().text(h.options.messages.partnersNotAvailable)
},complete:function(){h.$loader.removeClass("hatch-product__loading__visable")
}})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="faqExpand",f={};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.$key=e(this.element).attr("id");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.$element.on("click","a.toggleHeader",function(){var l=e(this);
if(h.$lastOpened&&h.$lastOpened.find("a").get(0)!==this){h.$lastOpened.removeClass("accordion-active");
h.$lastOpened.find(".accordion-section-container").slideUp(300)
}var k=h.$lastOpened=l.parent();
k.toggleClass("accordion-active");
var j=k.find(".accordion-section-container");
if(k.hasClass("accordion-active")){h.curOpenAccordHeight=j.outerHeight()?j.outerHeight():0;
j.slideDown(300)
}else{h.curOpenAccordHeight=0;
j.slideUp(300)
}});
h.$wrapper=h.$element.find(".wrapper")
};
b.prototype.showMoreFaqs=function(){var j=this;
var m=300;
var l=0;
var k=j.$wrapper.find(".items > ul").eq(0);
k.find(".item div > a").each(function(){l+=e(this).outerHeight()+2
});
var h=j.$element.find(".more-links");
l=l+(h.outerHeight()?h.outerHeight(true):0);
l=l+(j.curOpenAccordHeight||0);
k.eq(0).animate({height:l},m,function(){k.css("height","")
})
};
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,c,a,g){var d="diHouse",f={};
function b(j,h){this.element=j;
this.$element=e(j);
this.$price=this.$element.find(".di-house-product__price");
this.$button=this.$element.find(".di-house-product__button");
this.$stock=this.$element.find(".di-house-product__stock-status");
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}e.extend(b.prototype,{init:function(){var k=this;
var j=this.$element.attr("data-di-house-product-id");
var h=this.$element.attr("data-nv-product-id");
console.log(j,h);
this.requestProductDetails(j).done(function(m){if(typeof m!=="undefined"&&typeof m.Root!=="undefined"){var l=m.Root.catalogPriceStockItems.catalogPriceStockItem.price;
var n=m.Root.catalogPriceStockItems.catalogPriceStockItem.stockLevel;
k.$price.html(l+" руб.");
if(n>0){k.$button.attr("href","http://store.nvidia.ru/add-cart.html?products="+h);
k.$stock.html("в наличии")
}else{k.$element.addClass("di-house-product--out-of-stock");
k.$stock.html("нет в наличии")
}k.$element.addClass("di-house-product--ready")
}else{console.log("Data not coming thr")
}}).fail(function(){console.log("request failed")
}).always(function(){})
},requestProductDetails:function(h){return e.ajax({url:"https://lens.prod.gb.ib.nvidia.com/v1/products/dihouse/"+h+"/",dataType:"json"})
}});
e.fn[d]=function(h){return this.each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
}
})(jQuery,window,document);
(function(e,j,k,c){var h="columnTiles",a,f=j.devicePixelRatio,g=1281,b=1025,l=768,d={};
function m(o,n){this.element=o;
this.$element=e(this.element);
this.options=e.extend({},d,n);
this._defaults=d;
this._name=h;
this.init()
}m.prototype.init=function(){this.registerCallbacks();
this.setBgImage()
};
m.prototype.registerCallbacks=function(){var n=_.throttle(m.prototype.setBgImage,500);
e(j).resize(e.proxy(n,this))
};
m.prototype.setBgImage=function(){a=e(k).width();
if(this.options.columnsNumber==3){if(f>5){if(a<l){var p=this.options.imageMobileUrl1,o=this.options.imageMobileUrl2,n=this.options.imageMobileUrl3;
if(p.indexOf("@2x")>=0){this.$element.find(".threecolumn-1").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-1"),this.options.imageMobileUrl1.replace(".","@2x."),this.options.imageMobileUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".threecolumn-2").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-2"),this.options.imageMobileUrl2.replace(".","@2x."),this.options.imageMobileUrl2)
}if(n.indexOf("@2x")>=0){this.$element.find(".threecolumn-3").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-3"),this.options.imageMobileUrl2.replace(".","@2x."),this.options.imageMobileUrl3)
}}else{if(a>=l&&a<b){var p=this.options.imageTabletUrl1,o=this.options.imageTabletUrl2,n=this.options.imageTabletUrl3;
if(p.indexOf("@2x")>=0){this.$element.find(".threecolumn-1").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-1"),this.options.imageTabletUrl1.replace(".","@2x."),this.options.imageTabletUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".threecolumn-2").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-2"),this.options.imageTabletUrl2.replace(".","@2x."),this.options.imageTabletUrl2)
}if(n.indexOf("@2x")>=0){this.$element.find(".threecolumn-3").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-3"),this.options.imageTabletUrl3.replace(".","@2x."),this.options.imageTabletUrl3)
}}else{if(a>=b&&a<g){var p=this.options.imageDesktopUrl1,o=this.options.imageDesktopUrl2,n=this.options.imageDesktopUrl3;
if(p.indexOf("@2x")>=0){this.$element.find(".threecolumn-1").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-1"),this.options.imageDesktopUrl1.replace(".","@2x."),this.options.imageDesktopUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".threecolumn-2").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-2"),this.options.imageDesktopUrl2.replace(".","@2x."),this.options.imageDesktopUrl2)
}if(n.indexOf("@2x")>=0){this.$element.find(".threecolumn-3").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-3"),this.options.imageDesktopUrl3.replace(".","@2x."),this.options.imageDesktopUrl3)
}}else{var p=this.options.imageBigDesktopUrl1,o=this.options.imageBigDesktopUrl2,n=this.options.imageBigDesktopUrl3;
if(p.indexOf("@2x")>=0){this.$element.find(".threecolumn-1").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-1"),this.options.imageBigDesktopUrl1.replace(".","@2x."),this.options.imageBigDesktopUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".threecolumn-2").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-2"),this.options.imageBigDesktopUrl2.replace(".","@2x."),this.options.imageBigDesktopUrl2)
}if(n.indexOf("@2x")>=0){this.$element.find(".threecolumn-3").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".threecolumn-3"),this.options.imageBigDesktopUrl3.replace(".","@2x."),this.options.imageBigDesktopUrl3)
}}}}}else{if(a<l){this.$element.find(".threecolumn-1").css("background-image","url('"+this.options.imageMobileUrl1+"')");
this.$element.find(".threecolumn-2").css("background-image","url('"+this.options.imageMobileUrl2+"')");
this.$element.find(".threecolumn-3").css("background-image","url('"+this.options.imageMobileUrl3+"')")
}else{if(a>=l&&a<b){this.$element.find(".threecolumn-1").css("background-image","url('"+this.options.imageTabletUrl1+"')");
this.$element.find(".threecolumn-2").css("background-image","url('"+this.options.imageTabletUrl2+"')");
this.$element.find(".threecolumn-3").css("background-image","url('"+this.options.imageTabletUrl3+"')")
}else{if(a>=b&&a<g){this.$element.find(".threecolumn-1").css("background-image","url('"+this.options.imageDesktopUrl1+"')");
this.$element.find(".threecolumn-2").css("background-image","url('"+this.options.imageDesktopUrl2+"')");
this.$element.find(".threecolumn-3").css("background-image","url('"+this.options.imageDesktopUrl3+"')")
}else{this.$element.find(".threecolumn-1").css("background-image","url('"+this.options.imageBigDesktopUrl1+"')");
this.$element.find(".threecolumn-2").css("background-image","url('"+this.options.imageBigDesktopUrl2+"')");
this.$element.find(".threecolumn-3").css("background-image","url('"+this.options.imageBigDesktopUrl3+"')")
}}}}}else{if(this.options.columnsNumber==2){if(f>1){if(a<l){var p=this.options.imageMobileUrl1,o=this.options.imageMobileUrl2;
if(p.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageMobileUrl1.replace(".","@2x."),this.options.imageMobileUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageMobileUrl2.replace(".","@2x."),this.options.imageMobileUrl2)
}}else{if(a>=l&&a<b){var p=this.options.imageTabletUrl1,o=this.options.imageTabletUrl2;
if(p.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageTabletUrl1.replace(".","@2x."),this.options.imageTabletUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageTabletUrl2.replace(".","@2x."),this.options.imageTabletUrl2)
}}else{if(a>=b&&a<g){var p=this.options.imageDesktopUrl1,o=this.options.imageDesktopUrl2;
if(p.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageDesktopUrl1.replace(".","@2x."),this.options.imageDesktopUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageDesktopUrl2.replace(".","@2x."),this.options.imageDesktopUrl2)
}}else{var p=this.options.imageBigDesktopUrl1,o=this.options.imageBigDesktopUrl2;
if(p.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+p+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageBigDesktopUrl1.replace(".","@2x."),this.options.imageBigDesktopUrl1)
}if(o.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageBigDesktopUrl2.replace(".","@2x."),this.options.imageBigDesktopUrl2)
}}}}}else{if(a<l){this.$element.find(".left-column").css("background-image","url('"+this.options.imageMobileUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageMobileUrl2+"')")
}else{if(a>=l&&a<b){this.$element.find(".left-column").css("background-image","url('"+this.options.imageTabletUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageTabletUrl2+"')")
}else{if(a>=b&&a<g){this.$element.find(".left-column").css("background-image","url('"+this.options.imageDesktopUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageDesktopUrl2+"')")
}else{this.$element.find(".left-column").css("background-image","url('"+this.options.imageBigDesktopUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageBigDesktopUrl2+"')")
}}}}}else{return
}}};
m.prototype.setValidImg=function(p,o,n){e.get(o).done(function(){p.css("background-image","url('"+o+"')")
}).fail(function(){p.css("background-image","url('"+n+"')")
})
};
e.fn[h]=function(n){return this.each(function(){if(!e.data(this,"plugin_"+h)){e.data(this,"plugin_"+h,new m(this,n))
}})
}
})(jQuery,window,document);
(function(e,j,k,c){var h="columnLayout",a,f=j.devicePixelRatio,g=1281,b=1025,l=768,d={};
function m(o,n){this.element=o;
this.$element=e(this.element);
this.options=e.extend({},d,n);
this._defaults=d;
this._name=h;
this.init()
}m.prototype.init=function(){this.registerCallbacks();
this.setBgImage();
this.resetColClasses();
if(this.$element.hasClass("equial-h-col")){this.setColHeight()
}};
m.prototype.registerCallbacks=function(){var n=_.throttle(m.prototype.setBgImage,500);
e(j).resize(e.proxy(n,this))
};
m.prototype.setBgImage=function(){if(this.options.columnsNumber!=2){return
}a=e(k).width();
if(f>5){if(a<l){var o=this.options.imageMobileUrl1,n=this.options.imageMobileUrl2;
if(o.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageMobileUrl1.replace(".","@2x."),this.options.imageMobileUrl1)
}if(n.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageMobileUrl2.replace(".","@2x."),this.options.imageMobileUrl2)
}}else{if(a>=l&&a<b){var o=this.options.imageTabletUrl1,n=this.options.imageTabletUrl2;
if(o.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageTabletUrl1.replace(".","@2x."),this.options.imageTabletUrl1)
}if(n.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageTabletUrl2.replace(".","@2x."),this.options.imageTabletUrl2)
}}else{if(a>=b&&a<g){var o=this.options.imageDesktopUrl1,n=this.options.imageDesktopUrl2;
if(o.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageDesktopUrl1.replace(".","@2x."),this.options.imageDesktopUrl1)
}if(n.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageDesktopUrl2.replace(".","@2x."),this.options.imageDesktopUrl2)
}}else{var o=this.options.imageBigDesktopUrl1,n=this.options.imageBigDesktopUrl2;
if(o.indexOf("@2x")>=0){this.$element.find(".left-column").css("background-image","url('"+o+"')")
}else{this.setValidImg(this.$element.find(".left-column"),this.options.imageBigDesktopUrl1.replace(".","@2x."),this.options.imageBigDesktopUrl1)
}if(n.indexOf("@2x")>=0){this.$element.find(".right-column").css("background-image","url('"+n+"')")
}else{this.setValidImg(this.$element.find(".right-column"),this.options.imageBigDesktopUrl2.replace(".","@2x."),this.options.imageBigDesktopUrl2)
}}}}}else{if(a<l&&(this.options.imageMobileUrl1!==""||this.options.imageMobileUrl2!="")){this.$element.find(".left-column").css("background-image","url('"+this.options.imageMobileUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageMobileUrl2+"')")
}else{if(a>=l&&a<b&&(this.options.imageTabletUrl1!==""||this.options.imageTabletUrl2!="")){this.$element.find(".left-column").css("background-image","url('"+this.options.imageTabletUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageTabletUrl2+"')")
}else{if(a>=b&&a<g&&(this.options.imageDesktopUrl1!==""||this.options.imageDesktopUrl2!="")){this.$element.find(".left-column").css("background-image","url('"+this.options.imageDesktopUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageDesktopUrl2+"')")
}else{if(this.options.imageBigDesktopUrl1!==""||this.options.imageBigDesktopUrl2!=""){this.$element.find(".left-column").css("background-image","url('"+this.options.imageBigDesktopUrl1+"')");
this.$element.find(".right-column").css("background-image","url('"+this.options.imageBigDesktopUrl2+"')")
}}}}}};
m.prototype.setValidImg=function(p,o,n){e.get(o).done(function(){p.css("background-image","url('"+o+"')")
}).fail(function(){p.css("background-image","url('"+n+"')")
})
};
m.prototype.resetColClasses=function(){if(this.$element.find(">.column >.card").length){this.$element.find(">.column").each(function(){if(!e(this).find(">.card >.parsys").children().length){e(this).find(">.card").removeClass("card")
}})
}};
m.prototype.setColHeight=function(){var p=this;
var t=0;
a=e(k).width();
var q=false;
var I=this.$element.find(">.column").length;
if(a>=b||this.options.mobNoResponsive||(a>=l&&I==2&&!this.options.tabSingleCol)||(a>=l&&I==4)||(a>=l&&I>2&&this.options.tabNoResponsive)){q=true
}if(q){var E=[];
var H=[];
var w=[];
var y=[];
this.$element.find(">.column").each(function(){var L=0;
var K=0;
var J=0;
if(e(this).find(".sectionWrapper").length==1){L=e(this).find(".sectionWrapper").find(".general-container").height()
}else{if(e(this).find(".textcomp").length==1){}}H[t]=L;
if(e(this).find(".equi-height-col").length){J=e(this).find(".equi-height-col").height()
}y[t]=J;
var M=e(this).height();
E[t]=M;
t++
});
if(this.$element.parent().hasClass("full-width")){E[t]="360"
}var r=Math.max.apply(null,H);
var o=Math.max.apply(null,E);
var x=Math.max.apply(null,y);
if(NVIDIAGDC.Browser.getViewport()=="tablet"&&this.options.columnsNumber=="4"&&!this.options.tabNoResponsive){var u=this.$element.find(">.equi-height-col");
e(u).addClass("tablet-clear");
var A=e(u).find(">.column >.equi-height-col");
var D=e(u).find(".sectionWrapper").find(".general-container");
var G=e(u).find(".textcomp");
for(i=0;
i<4;
i++){if(i<2){var C=Math.max.apply(Math,E.slice(0,2));
e(u[i]).css("min-height",C);
if(A.length){var n=Math.max.apply(Math,cardHeightArray.slice(0,2));
e(A[i]).css("min-height",n)
}if(D.length){var v=Math.max.apply(Math,H.slice(0,2));
e(D[i]).css("min-height",v)
}else{if(G.length){}}}else{var B=Math.max.apply(Math,E.slice(2,4));
e(u[i]).css("min-height",B);
if(A.length){var F=Math.max.apply(Math,cardHeightArray.slice(2,4));
e(A[i]).css("min-height",F)
}if(D.length){var z=Math.max.apply(Math,H.slice(2,4));
e(D[i]).css("min-height",z)
}else{if(G.length){}}}}}else{this.$element.find(">.column").css("min-height",o);
if(this.$element.find(">.column").find(".sectionWrapper").length==I){this.$element.find(">.column").find(".sectionWrapper").find(".general-container").css("min-height",r)
}else{if(this.$element.find(">.column").find(".textcomp").length==I){}}if(this.$element.find(">.column >.equi-height-col").length){this.$element.find(">.column >.equi-height-col").css("min-height",x)
}}if(this.$element.find(">.column").find(".image-container").length||this.$element.find(">.column").find(".button").length){setTimeout(function(){p.setColHeight()
},1200)
}}};
e.fn[h]=function(n){return this.each(function(){if(!e.data(this,"plugin_"+h)){e.data(this,"plugin_"+h,new m(this,n))
}})
}
})(jQuery,window,document);
(function(e,a,g){var d="articlesGuidesFeed",f={articleCount:3};
function b(j,h){this.element=j;
this.$element=e(this.element);
this.options=e.extend({},f,h);
this._defaults=f;
this._name=d;
this.init()
}b.prototype.init=function(){var h=this;
h.sortingCall();
h.tagClick();
var j=new URL(window.location.href);
if(j.href.indexOf("tag=")>-1){h.loadMoreTags()
}else{h.loadMoreNews()
}};
b.prototype.tagClick=function(){var j=new URL(window.location.href);
var h=j.searchParams.get("tag");
if(j.href.indexOf("tag=")>-1){e(".article-container").each(function(){if(e(this).find("span.tag").hasClass(h)){e(this).addClass("active")
}else{e(this).addClass("deactive")
}})
}};
b.prototype.loadMoreTags=function(){var h=this;
var j=h.options.articleCount;
e("div.article-container.active").slice(0,j).show();
e("#loadMore").on("click",function(k){k.preventDefault();
e("div.article-container.active:hidden").slice(0,j).slideDown();
if(e("div.article-container.active:hidden").length==0){e("#loadMore").fadeOut("slow")
}})
};
b.prototype.loadMoreNews=function(){var h=this;
var j=h.options.articleCount;
e("div.article-container").slice(0,j).show();
e("#loadMore").on("click",function(k){k.preventDefault();
e("div.article-container:hidden").slice(0,j).slideDown();
if(e("div.article-container:hidden").length==0){e("#loadMore").fadeOut("slow")
}})
};
function c(k){var h=[];
k.each(function(){var p={},m=e(this),o=e(this).find(".article-date-tags span.article-date").text(),l=new Date((o)),n=l.getTime();
p.htmlCode=m[0].outerHTML;
p.time=n;
h.push(p)
});
var j=h.sort(function(m,l){return m.time<l.time
});
return j
}b.prototype.sortingCall=function(){var k=e(".article-container");
var h=e("#articleFeed-container");
var l=c(k);
var m="";
for(var j=0;
j<l.length;
++j){m+=l[j].htmlCode
}h.html(m);
return false
};
e.fn[d]=function(h){setTimeout(function(){return e(this).each(function(){if(!e.data(this,"plugin_"+d)){e.data(this,"plugin_"+d,new b(this,h))
}})
},1200)
}
})(jQuery,document);
function ytPlayerDestroyed(a){psplayer.players[a].setPlayerDestroy("videoPlayer")
}function videoPlayerDestroyed(a){psplayer.players[a].setPlayerDestroy("ytPlayer")
}function onPsMediaPlayerReady(a){psplayer.players[a].setPlayerReady("playlistPlayer")
}function onPsYtPlayerReady(a){psplayer.players[a].setPlayerReady("ytPlayer")
}function onPsPlayerReady(a){psplayer.players[a].setPlayerReady("videoPlayer")
}function initVars(d){var c=d.flashVars||{},b=d.params||{};
return d.playerRef&&(psplayer.players[d.playerApiId]=d.playerRef),c.playerApiId=d.playerApiId,c.ytPlayerId=d.ytPlayerId||psplayer.ytVideoPlayerId,c.psPlayerId=d.psPlayerId||psplayer.flvVideoPlayerId,c.imgViewerId=d.imgViewerId||psplayer.imgViewerId,d.playlistPlayerId||(d.playlistPlayerId=psplayer.playlistPlayerId),d.assetPath=d.assetPath||psplayer.assetPath,d.dataPath=d.dataPath||psplayer.dataPath,null!=d.fullscreen&&(c.fullscreen=d.fullscreen),null!=d.embedding&&(c.embedding=d.embedding),null!=d.sharing&&(c.sharing=d.sharing),d.autoPlayId&&(c.autoPlayId=d.autoPlayId),null!=d.autoPlayIndex&&(c.autoPlayIndex=d.autoPlayIndex),d.playlistId&&(c.playlistId=d.playlistId),d.playlistUrl&&(c.playlistUrl=encodeURIComponent(d.playlistUrl)),d.playlistTitle&&(c.playlistTitle=d.playlistTitle),d.videoId&&(c.videoId=d.videoId),d.videoUrl&&(c.videoUrl=encodeURIComponent(d.videoUrl)),d.playlist&&(c.playlist=d.playlist),d.playlistIndex&&(c.playlistIndex=d.playlistIndex),null!=d.autoPlay&&(c.autoPlay=d.autoPlay),d.videoImgUrl&&(c.videoImgUrl=d.videoImgUrl),d.videoImgId&&(c.videoImgId=d.videoImgId),d.ageGate&&(c.ageGate=d.ageGate),b.menu=d.menu||"false",b.scale=d.scale||"noscale",b.allowfullscreen=d.allowfullscreen||"true",b.allowscriptaccess=d.allowscriptaccess||"always",b.bgcolor=d.bgcolor||"#000000",b.allownetworking=d.allownetworking||"all",b.wmode=d.wmode||"transparent",d.fpVersion=d.fpVersion||"9.0.47",d.flashVars=c,d.params=b,d
}function encodeUrlVars(h){for(var f=h.substring(h.indexOf("?")+1),c={},d=f.split("&"),b=d.length;
b--;
){var j=d[b],g=j.substring(0,j.indexOf("="));
c[g]=j.substring(j.indexOf("=")+1)
}return c
}var swfobject=function(){function aL(){if(!ai){try{var f=ae.getElementsByTagName("body")[0].appendChild(aI("span"));
f.parentNode.removeChild(f)
}catch(d){return
}ai=!0;
for(var b=am.length,c=0;
b>c;
c++){am[c]()
}}}function ax(a){ai?a():am[am.length]=a
}function aP(b){if(typeof ac.addEventListener!=X){ac.addEventListener("load",b,!1)
}else{if(typeof ae.addEventListener!=X){ae.addEventListener("load",b,!1)
}else{if(typeof ac.attachEvent!=X){aD(ac,"onload",b)
}else{if("function"==typeof ac.onload){var a=ac.onload;
ac.onload=function(){a(),b()
}
}else{ac.onload=b
}}}}}function aH(){aF?aE():aC()
}function aE(){var f=ae.getElementsByTagName("body")[0],d=aI(at);
d.setAttribute("type",af);
var b=f.appendChild(d);
if(b){var c=0;
(function(){if(typeof b.GetVariable!=X){var a=b.GetVariable("$version");
a&&(a=a.split(" ")[1].split(","),aa.pv=[parseInt(a[0],10),parseInt(a[1],10),parseInt(a[2],10)])
}else{if(10>c){return c++,setTimeout(arguments.callee,10),void 0
}}f.removeChild(d),b=null,aC()
})()
}else{aC()
}}function aC(){var o=ak.length;
if(o>0){for(var A=0;
o>A;
A++){var w=ak[A].id,j=ak[A].callbackFn,g={success:!1,id:w};
if(aa.pv[0]>0){var d=av(w);
if(d){if(!aJ(ak[A].swfVersion)||aa.wk&&312>aa.wk){if(ak[A].expressInstall&&aB()){var v={};
v.data=ak[A].expressInstall,v.width=d.getAttribute("width")||"0",v.height=d.getAttribute("height")||"0",d.getAttribute("class")&&(v.styleclass=d.getAttribute("class")),d.getAttribute("align")&&(v.align=d.getAttribute("align"));
for(var b={},x=d.getElementsByTagName("param"),r=x.length,m=0;
r>m;
m++){"movie"!=x[m].getAttribute("name").toLowerCase()&&(b[x[m].getAttribute("name")]=x[m].getAttribute("value"))
}ay(v,b,w,j)
}else{aM(d),j&&j(g)
}}else{ab(w,!0),j&&(g.success=!0,g.ref=az(w),j(g))
}}}else{if(ab(w,!0),j){var k=az(w);
k&&typeof k.SetVariable!=X&&(g.success=!0,g.ref=k),j(g)
}}}}}function az(f){var d=null,b=av(f);
if(b&&"OBJECT"==b.nodeName){if(typeof b.SetVariable!=X){d=b
}else{var c=b.getElementsByTagName(at)[0];
c&&(d=c)
}}return d
}function aB(){return !aj&&aJ("6.0.65")&&(aa.win||aa.mac)&&!(aa.wk&&312>aa.wk)
}function ay(h,f,c,d){aj=!0,an=d||null,al={success:!1,id:c};
var b=av(c);
if(b){"OBJECT"==b.nodeName?(aO=ar(b),z=null):(aO=b,z=c),h.id=ad,(typeof h.width==X||!/%$/.test(h.width)&&310>parseInt(h.width,10))&&(h.width="310"),(typeof h.height==X||!/%$/.test(h.height)&&137>parseInt(h.height,10))&&(h.height="137"),ae.title=ae.title.slice(0,47)+" - Flash Player Installation";
var k=aa.ie&&aa.win?"ActiveX":"PlugIn",g="MMredirectURL="+(""+ac.location).replace(/&/g,"%26")+"&MMplayerType="+k+"&MMdoctitle="+ae.title;
if(typeof f.flashvars!=X?f.flashvars+="&"+g:f.flashvars=g,aa.ie&&aa.win&&4!=b.readyState){var j=aI("div");
c+="SWFObjectNew",j.setAttribute("id",c),b.parentNode.insertBefore(j,b),b.style.display="none",function(){4==b.readyState?b.parentNode.removeChild(b):setTimeout(arguments.callee,10)
}()
}aA(h,f,c)
}}function aM(b){if(aa.ie&&aa.win&&4!=b.readyState){var a=aI("div");
b.parentNode.insertBefore(a,b),a.parentNode.replaceChild(ar(b),a),b.style.display="none",function(){4==b.readyState?b.parentNode.removeChild(b):setTimeout(arguments.callee,10)
}()
}else{b.parentNode.replaceChild(ar(b),b)
}}function ar(g){var f=aI("div");
if(aa.win&&aa.ie){f.innerHTML=g.innerHTML
}else{var c=g.getElementsByTagName(at)[0];
if(c){var d=c.childNodes;
if(d){for(var b=d.length,h=0;
b>h;
h++){1==d[h].nodeType&&"PARAM"==d[h].nodeName||8==d[h].nodeType||f.appendChild(d[h].cloneNode(!0))
}}}}return f
}function aA(k,w,v){var j,h=av(v);
if(aa.wk&&312>aa.wk){return j
}if(h){if(typeof k.id==X&&(k.id=v),aa.ie&&aa.win){var g="";
for(var b in k){k[b]!=Object.prototype[b]&&("data"==b.toLowerCase()?w.movie=k[b]:"styleclass"==b.toLowerCase()?g+=' class="'+k[b]+'"':"classid"!=b.toLowerCase()&&(g+=" "+b+'="'+k[b]+'"'))
}var f="";
for(var x in w){w[x]!=Object.prototype[x]&&(f+='<param name="'+x+'" value="'+w[x]+'" />')
}h.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+g+">"+f+"</object>",aq[aq.length]=k.id,j=av(k.id)
}else{var m=aI(at);
m.setAttribute("type",af);
for(var u in k){k[u]!=Object.prototype[u]&&("styleclass"==u.toLowerCase()?m.setAttribute("class",k[u]):"classid"!=u.toLowerCase()&&m.setAttribute(u,k[u]))
}for(var c in w){w[c]!=Object.prototype[c]&&"movie"!=c.toLowerCase()&&aw(m,c,w[c])
}h.parentNode.replaceChild(m,h),j=m
}}return j
}function aw(f,d,b){var c=aI("param");
c.setAttribute("name",d),c.setAttribute("value",b),f.appendChild(c)
}function aN(b){var a=av(b);
a&&"OBJECT"==a.nodeName&&(aa.ie&&aa.win?(a.style.display="none",function(){4==a.readyState?aK(b):setTimeout(arguments.callee,10)
}()):a.parentNode.removeChild(a))
}function aK(d){var c=av(d);
if(c){for(var b in c){"function"==typeof c[b]&&(c[b]=null)
}c.parentNode.removeChild(c)
}}function av(d){var c=null;
try{c=ae.getElementById(d)
}catch(b){}return c
}function aI(a){return ae.createElement(a)
}function aD(d,c,b){d.attachEvent(c,b),q[q.length]=[d,c,b]
}function aJ(d){var c=aa.pv,b=d.split(".");
return b[0]=parseInt(b[0],10),b[1]=parseInt(b[1],10)||0,b[2]=parseInt(b[2],10)||0,c[0]>b[0]||c[0]==b[0]&&c[1]>b[1]||c[0]==b[0]&&c[1]==b[1]&&c[2]>=b[2]?!0:!1
}function au(h,f,c,d){if(!aa.ie||!aa.mac){var b=ae.getElementsByTagName("head")[0];
if(b){var j=c&&"string"==typeof c?c:"screen";
if(d&&(ap=null,ao=null),!ap||ao!=j){var g=aI("style");
g.setAttribute("type","text/css"),g.setAttribute("media",j),ap=b.appendChild(g),aa.ie&&aa.win&&typeof ae.styleSheets!=X&&ae.styleSheets.length>0&&(ap=ae.styleSheets[ae.styleSheets.length-1]),ao=j
}aa.ie&&aa.win?ap&&typeof ap.addRule==at&&ap.addRule(h,f):ap&&typeof ae.createTextNode!=X&&ap.appendChild(ae.createTextNode(h+" {"+f+"}"))
}}}function ab(d,c){if(ag){var b=c?"visible":"hidden";
ai&&av(d)?av(d).style.visibility=b:au("#"+d,"visibility:"+b)
}}function ah(d){var c=/[\\\"<>\.;]/,b=null!=c.exec(d);
return b&&typeof encodeURIComponent!=X?encodeURIComponent(d):d
}var aO,z,an,al,ap,ao,X="undefined",at="object",Y="Shockwave Flash",K="ShockwaveFlash.ShockwaveFlash",af="application/x-shockwave-flash",ad="SWFObjectExprInst",aG="onreadystatechange",ac=window,ae=document,Z=navigator,aF=!1,am=[aH],ak=[],aq=[],q=[],ai=!1,aj=!1,ag=!0,aa=function(){var j=typeof ae.getElementById!=X&&typeof ae.getElementsByTagName!=X&&typeof ae.createElement!=X,u=Z.userAgent.toLowerCase(),p=Z.platform.toLowerCase(),h=p?/win/.test(p):/win/.test(u),g=p?/mac/.test(p):/mac/.test(u),f=/webkit/.test(u)?parseFloat(u.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,b=!1,c=[0,0,0],v=null;
if(typeof Z.plugins!=X&&typeof Z.plugins[Y]==at){v=Z.plugins[Y].description,!v||typeof Z.mimeTypes!=X&&Z.mimeTypes[af]&&!Z.mimeTypes[af].enabledPlugin||(aF=!0,b=!1,v=v.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),c[0]=parseInt(v.replace(/^(.*)\..*$/,"$1"),10),c[1]=parseInt(v.replace(/^.*\.(.*)\s.*$/,"$1"),10),c[2]=/[a-zA-Z]/.test(v)?parseInt(v.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0)
}else{if(typeof ac.ActiveXObject!=X){try{var k=new ActiveXObject(K);
k&&(v=k.GetVariable("$version"),v&&(b=!0,v=v.split(" ")[1].split(","),c=[parseInt(v[0],10),parseInt(v[1],10),parseInt(v[2],10)]))
}catch(m){}}}return{w3:j,pv:c,wk:f,ie:b,win:h,mac:g}
}();
return function(){aa.w3&&((typeof ae.readyState!=X&&"complete"==ae.readyState||typeof ae.readyState==X&&(ae.getElementsByTagName("body")[0]||ae.body))&&aL(),ai||(typeof ae.addEventListener!=X&&ae.addEventListener("DOMContentLoaded",aL,!1),aa.ie&&aa.win&&(ae.attachEvent(aG,function(){"complete"==ae.readyState&&(ae.detachEvent(aG,arguments.callee),aL())
}),ac==top&&function(){if(!ai){try{ae.documentElement.doScroll("left")
}catch(a){return setTimeout(arguments.callee,0),void 0
}aL()
}}()),aa.wk&&function(){return ai?void 0:/loaded|complete/.test(ae.readyState)?(aL(),void 0):(setTimeout(arguments.callee,0),void 0)
}(),aP(aL)))
}(),function(){aa.ie&&aa.win&&window.attachEvent("onunload",function(){for(var g=q.length,f=0;
g>f;
f++){q[f][0].detachEvent(q[f][1],q[f][2])
}for(var c=aq.length,d=0;
c>d;
d++){aN(aq[d])
}for(var b in aa){aa[b]=null
}aa=null;
for(var h in swfobject){swfobject[h]=null
}swfobject=null
})
}(),{registerObject:function(g,f,c,d){if(aa.w3&&g&&f){var b={};
b.id=g,b.swfVersion=f,b.expressInstall=c,b.callbackFn=d,ak[ak.length]=b,ab(g,!1)
}else{d&&d({success:!1,id:g})
}},getObjectById:function(a){return aa.w3?az(a):void 0
},embedSWF:function(m,v,j,h,g,b,o,t,w,p){var k={success:!1,id:v};
aa.w3&&!(aa.wk&&312>aa.wk)&&m&&v&&j&&h&&g?(ab(v,!1),ax(function(){j+="",h+="";
var f={};
if(w&&typeof w===at){for(var d in w){f[d]=w[d]
}}f.data=m,f.width=j,f.height=h;
var l={};
if(t&&typeof t===at){for(var a in t){l[a]=t[a]
}}if(o&&typeof o===at){for(var c in o){typeof l.flashvars!=X?l.flashvars+="&"+c+"="+o[c]:l.flashvars=c+"="+o[c]
}}if(aJ(g)){var e=aA(f,l,v);
f.id==v&&ab(v,!0),k.success=!0,k.ref=e
}else{if(b&&aB()){return f.data=b,ay(f,l,v,p),void 0
}ab(v,!0)
}p&&p(k)
})):p&&p(k)
},switchOffAutoHideShow:function(){ag=!1
},ua:aa,getFlashPlayerVersion:function(){return{major:aa.pv[0],minor:aa.pv[1],release:aa.pv[2]}
},hasFlashPlayerVersion:aJ,createSWF:function(d,c,b){return aa.w3?aA(d,c,b):void 0
},showExpressInstall:function(f,d,b,c){aa.w3&&aB()&&ay(f,d,b,c)
},removeSWF:function(a){aa.w3&&aN(a)
},createCSS:function(f,d,b,c){aa.w3&&au(f,d,b,c)
},addDomLoadEvent:ax,addLoadEvent:aP,getQueryParamValue:function(f){var d=ae.location.search||ae.location.hash;
if(d){if(/\?/.test(d)&&(d=d.split("?")[1]),null==f){return ah(d)
}for(var b=d.split("&"),c=0;
b.length>c;
c++){if(b[c].substring(0,b[c].indexOf("="))==f){return ah(b[c].substring(b[c].indexOf("=")+1))
}}}return""
},expressInstallCallback:function(){if(aj){var a=av(ad);
a&&aO&&(a.parentNode.replaceChild(aO,a),z&&(ab(z,!0),aa.ie&&aa.win&&(aO.style.display="block")),an&&an(al)),aj=!1
}}}
}();
if(function(){function d(m,v){var u,k,j,h,f="mList_"+m,g=!1,w=!1,p=v.width||"860",q=v.height||"581";
return this.setPlayerReady=function(a){"playlistPlayer"==a&&(u=document.getElementById(f),"function"==typeof h.onComplete&&h.onComplete({target:u})),"videoPlayer"==a&&(k=document.getElementById(f),g&&k.pauseVideo(),k.addEventListener("onPlayerDestroy","videoPlayerDestroyed"),g=!1),"ytPlayer"==a&&(j=document.getElementById(f),j.addEventListener("onPlayerDestroy","ytPlayerDestroyed"),w&&j.pauseVideo(),w=!1)
},this.setPlayerDestroy=function(a){"ytPlayer"==a&&(j=null),"videoPlayer"==a&&(k=null)
},v.playerRef=this,v.playerApiId=f,h=initVars(v),swfobject.addDomLoadEvent(function(){var l=document.getElementById(m);
if(l&&swfobject.hasFlashPlayerVersion(h.fpVersion)){l.innerHTML='<div id="'+f+'"> </div>';
var e=h.assetPath+h.playlistPlayerId+"?psCacheBust="+(new Date).getTime();
swfobject.embedSWF(e,f,p,q,h.fpVersion,h.assetPath+"expressInstall.swf",h.flashVars,h.params,{id:f})
}}),{pauseVideo:function(){var a=u.getCurrentMediaType();
"video"==a?k?k.pauseVideo():g=!0:"yt-video"==a&&(j?j.pauseVideo():w=!0)
},playVideo:function(){g=!1,w=!1;
var a=u.getCurrentMediaType();
"video"==a&&k?k.playVideo():"yt-video"==a&&j&&j.playVideo()
},viewMediaAt:function(a){u&&u.viewMediaAt(a)
},closeMedia:function(){u&&u.viewMediaAt(-1)
},nextMedia:function(){u&&u.nextMedia()
},previousMedia:function(){u&&u.previousMedia()
},loadQuery:function(a){u&&u.loadQuery(a)
},loadPlaylistByUrl:function(l,a){u&&u.loadPlaylistByUrl(l,a)
},loadPlaylistById:function(l,a){u&&u.loadPlaylistById(l,a)
},loadPlaylistByUrls:function(l,a){u&&u.loadPlaylistByUrls(l,a)
},loadPlaylistByIds:function(l,a){u&&u.loadPlaylistByIds(l,a)
},getPlayerRef:function(){return u
},destroy:function(){g=!1,w=!1,k=null,j=null,u=null,swfobject.removeSWF(f)
},vars:h}
}function c(m,v){function u(){var o=h.videoId?h.videoId:h.videoUrl;
if(!o){if(!h.playlist){return
}o=h.playlist
}var n,l=o.toLowerCase();
n=-1!=l.indexOf(".flv")||-1!=l.indexOf(".mp4")||-1!=l.indexOf(".f4v")?j.assetPath+h.psPlayerId:j.assetPath+h.ytPlayerId,w=!1,k=null,swfobject.removeSWF(g),swfobject.addDomLoadEvent(function(){var x=document.getElementById(f);
if(x&&swfobject.hasFlashPlayerVersion(j.fpVersion)){var r=-1!=(""+p).indexOf("%")?p:p+"px",t=-1!=(""+q).indexOf("%")?q:q+"px";
x.innerHTML='<div style="background-color:'+j.params.bgcolor+";width:"+r+";height:"+t+';"><div id="'+g+'"></div></div>',swfobject.embedSWF(n,g,"100%","100%",j.fpVersion,j.assetPath+"expressInstall.swf",h,j.params,{id:g})
}})
}var k,j,h,f=m,g="vPlayer_"+m,w=!1,p=v.width||"616",q=v.height||"348";
return this.setPlayerReady=function(){k=document.getElementById(g),w&&k.pauseVideo(),w=!1,"function"==typeof j.onComplete&&j.onComplete({target:k})
},this.setPlayerDestroy=function(){k=null
},v.playerRef=this,v.playerApiId=g,j=initVars(v),h=j.flashVars,u(),{loadVideoByUrl:function(a){delete h.videoId,h.videoUrl=encodeURIComponent(a),h.autoPlay=1,u()
},loadVideoById:function(a){delete h.videoUrl,h.videoId=a,h.autoPlay=1,u()
},cueVideoByUrl:function(l,a){delete h.videoId,h.videoUrl=encodeURIComponent(l),a&&a.length>0?h.videoImgUrl=a:delete h.videoImgUrl,h.autoPlay=0,u()
},cueVideoById:function(l,a){delete h.videoId,h.videoId=l,h.videoImgId=a,h.autoPlay=0,u()
},loadPlaylist:function(l,a){delete h.videoId,delete h.videoUrl,h.playlist=l,a&&(h.playlistIndex=a),h.autoPlay=1
},cuePlaylist:function(l,a){delete h.videoId,delete h.videoUrl,h.playlist=l,a&&(h.playlistIndex=a),h.autoPlay=0
},pauseVideo:function(){k?k.pauseVideo():w=!0
},playVideo:function(){k&&k.playVideo()
},destroy:function(){w=!1,k=null,swfobject.removeSWF(g)
},getPlayerRef:function(){return k
},vars:j}
}var b=window.psplayer;
b={players:{},flvVideoPlayerId:"ps-video-player.swf",ytVideoPlayerId:"ps-youtube-player.swf",playlistPlayerId:"ps-media-playlist.swf",imgViewerId:"ps-img-viewer.swf",assetPath:"/etc/designs/nvidiaGDC/clientlibs_youtube/swf/",dataPath:"/etc/designs/nvidiaGDC/clientlibs_youtube/swf/",httpVideoPath:"/etc/designs/nvidiaGDC/clientlibs_youtube/swf/",PlaylistPlayer:d,VideoPlayer:c},window.psplayer=b
}(),"function"!=typeof getAssetPath){var getAssetPath=function(){return psplayer.assetPath
}
}else{psplayer.assetPath=getAssetPath()
}if("function"!=typeof getHttpVideoPath){var getHttpVideoPath=function(){return psplayer.httpVideoPath
}
}else{psplayer.httpVideoPath=getHttpVideoPath()
}if("function"!=typeof getDataPath){var getDataPath=function(){return psplayer.dataPath
}
}else{psplayer.dataPath=getDataPath()
}function getOmnitureAccount(){if(typeof s_account!="undefined"){return s_account
}}function getSiteCatalystConfig(){nvidiaGDClog("yvideo:getSiteCatalystConfig > s=",s,", s_account=",s_account);
if(typeof s!="undefined"){return{s_account:s_account,charSet:s.charSet,trackingServer:s.trackingServer,trackingServerSecure:s.trackingServerSecure,visitorNamespace:s.visitorNamespace,currencyCode:s.currencyCode,pageName:s.pageName}
}return{}
}(function(b){var a=["rated mature","content inappropriate for children","inappropriate content for children"];
b.fn.showYTVideoPanel=function(){var d=this.attr("data-video");
var f={};
f.videoId=d;
f.autoPlay="0";
f.ageGate="0";
f.width="100%";
f.height="100%";
if(swfobject.hasFlashPlayerVersion("9.0.2")){var e=new psplayer.VideoPlayer(this.prop("id"),f)
}else{c(this)
}function c(g){g.html('<iframe width="100%" height="100%" src="//www.youtube.com/embed/'+f.videoId+"?autoplay="+f.autoPlay+'&rel=0&showinfo=0&autohide=1&iv_load_policy=3" frameborder="0" allowfullscreen></iframe>')
}};
b.fn.getYTVideoDivHTML=function(c){var d="";
b(this).each(function(){b.each(this.attributes,function(){if(this.name=="href"){d+="data-video='"+this.value.replace(/.*=/,"")+"' "
}else{if(this.name.match(/^data/)){d+=this.name+"='"+this.value.replace(/'/g,"&apos;")+"' "
}}})
});
return"<div class='ytVideoContainer' id='"+c+"' "+d+"></div>"
};
b.fn.updateYoutubeMetadata=function(){b(this).each(function(){var e=b(this),c=e.attr("href"),d=c.substring(c.indexOf("?v=")+3),f="//www.googleapis.com/youtube/v3/videos?part=snippet&id="+d+"&key=AIzaSyAKRzl4h3hhO1X3imjDNBNFkgqmiBhzk_U&alt=json&callback=?";
b.getJSON(f,function(g){if(b(g.items).isVideoItemAgeGated()){e.attr("data-agegating","yes")
}else{e.attr("data-agegating","no")
}})
})
};
b.fn.isVideoItemAgeGated=function(){var d=this[0];
if(typeof d!="undefined"){if(d.snippet){var f=d.snippet["description"];
if(f){var e=f;
if(e){e=e.toLowerCase();
for(var c=0;
c<a.length;
c++){if(e.indexOf(a[c])>=0){return true
}}}}}}return false
}
})(jQuery);
(function(a){a.fn.showKMJVideoPanel=function(){var b=this.attr("data-video");
var d={};
d.videoId=b;
d.autoPlay="1";
d.ageGate="0";
d.width="100%";
d.height="100%";
if(swfobject.hasFlashPlayerVersion("9.0.2")){var c=new psplayer.VideoPlayer(this.prop("id"),d)
}else{}};
a.fn.getKMJVideoDivHTML=function(b){var c="";
a(this).each(function(){a.each(this.attributes,function(){if(this.name=="href"){c+="data-video='"+this.value+"' "
}else{if(this.name.match(/^data/)){c+=this.name+"='"+this.value.replace(/'/g,"&apos;")+"' "
}}})
});
return"<div class='kmjVideoContainer' id='"+b+"' "+c+"></div>"
}
})(jQuery);
var NVIDIAGDC=NVIDIAGDC||{},isAdmin=false;
(function(c,b,a,d){NVIDIAGDC.Profile=NVIDIAGDC.Profile||{};
NVIDIAGDC.Profile.setLoggedIn=function(){var k=false;
var h=null;
var e=null;
var l=null;
var g=null;
try{h=JSON.parse(c.base64.decode(Cookies.get("nv.nvidmNoissesDataExtended")));
var l=h.email;
var e=h.id;
var j=h.session;
k=true
}catch(f){k=false
}NVIDIAGDC.addProperty("Profile","loggedIn",k);
NVIDIAGDC.addProperty("Profile","userID",e);
NVIDIAGDC.addProperty("Profile","userEmail",l);
NVIDIAGDC.addProperty("Profile","sessionToken",j)
};
NVIDIAGDC.Profile.setLoggedIn();
NVIDIAGDC.Profile.isLoggedIn=function(){var e=false;
if(NVIDIAGDC.Profile.hasOwnProperty("loggedIn")&&(Cookies.get("nv.nvidmNoissesDataExtended")||Cookies.get("nv.nvidmNoissesData"))){e=NVIDIAGDC.Profile.loggedIn
}return e
};
NVIDIAGDC.Profile.isAdmin=function(){isAdmin=false;
if(NVIDIAGDC.Profile.isActiveSession()){NVIDIAGDC.Profile.fetchIsAdmin()
}return isAdmin
};
NVIDIAGDC.Profile.fetchIsAdmin=function(){if(NVIDIAGDC.Profile.isActiveSession()){c.ajax({url:NVIDIAGDC.apps.endpoint+"/geforce/user?user_id="+NVIDIAGDC.Profile.getUserID(),type:"GET",async:false,success:function(e){if(e.list&&e.list.length&&e.list[0].userRole[0]!==d){if(e.list[0].userRole[0].role.role==="admin"){isAdmin=true
}}else{isAdmin=false
}},error:function(f){if(f&&f.status===401){NVIDIAGDC.Profile.logout()
}}})
}};
NVIDIAGDC.Profile.isActiveSession=function(){NVIDIAGDC.Profile.fetchProfile();
return NVIDIAGDC.Profile.isLoggedIn()&&(Cookies.get("nv.nvidmNoissesDataExtended")||Cookies.get("nv.nvidmNoissesData"))
};
NVIDIAGDC.Profile.logout=function(){delete NVIDIAGDC.Profile.loggedIn;
Cookies.remove("nv.aemSssn",{domain:"nvidia.com"});
Cookies.remove("nv.nvidmNoissesData",{domain:"nvidia.com"});
Cookies.remove("nv.nvidmNoissesDataExtended",{domain:"nvidia.com"})
};
NVIDIAGDC.Profile.loginRedirection=function(e){if(NVIDIAGDC.Profile.isLoggedIn()){b.location.href=e
}else{b.location.href=NVIDIAGDC.Accounts.LoginPage+"?redirectURL="+e
}};
NVIDIAGDC.Profile.fetchProfile=function(){if(NVIDIAGDC.Profile.isLoggedIn()){var f=this;
c.ajaxSetup({beforeSend:function(g){if(NVIDIAGDC.Accounts.accountsJarvisHeaderMagicValue){g.setRequestHeader("MagicHeader",NVIDIAGDC.Accounts.accountsJarvisHeaderMagicValue)
}g.setRequestHeader("referrer-id",NVIDIAGDC.Accounts.accountsJarvisHeaderCFGRefereID)
}});
var e=NVIDIAGDC.Profile.userProfileCall({url:NVIDIAGDC.Accounts.accountsJarvisSrvcBase+"/api/1/profile/user/"+NVIDIAGDC.Profile.getUserID(),method:"GET"},NVIDIAGDC.Profile.getUserID());
e.done(function(g){NVIDIAGDC.addProperty("Profile","displayName",g.core.displayName)
});
e.fail(function(g){if(g&&g.status===401){NVIDIAGDC.Profile.logout()
}})
}};
NVIDIAGDC.Profile.userProfileCall=function(j,g){var l=this;
var e=c.Deferred();
if(g===null){console.error('UserId "'+g+'" is invalid.');
e.reject('UserId "'+g+'" is invalid.')
}else{var k=null;
try{k="Basic "+c.base64.encode(NVIDIAGDC.Profile.getSessionToken()+":")
}catch(f){nvidiaGDClog("this.activeUsers[userId].sessionToken:",f.message);
e.reject('UserId "'+g+'" is invalid.')
}j.headers={Authorization:k,"Accept-Language":"en-US"};
var h=c.ajax(j);
h.done(function(m){e.resolve(m)
});
h.fail(function(m){e.reject(m)
})
}return e.promise()
};
NVIDIAGDC.Profile.getUserID=function(){var e=null;
if(NVIDIAGDC.Profile.hasOwnProperty("userID")){e=NVIDIAGDC.Profile.userID
}return e
};
NVIDIAGDC.Profile.getSessionToken=function(){var e=null;
if(NVIDIAGDC.Profile.hasOwnProperty("sessionToken")){e=NVIDIAGDC.Profile.sessionToken
}return e
};
NVIDIAGDC.Profile.getProfileProp=function(g){if(!g){return null
}var e=null;
var f=NVIDIAGDC.Profile;
if(f.hasOwnProperty(g)){e=f[g]
}return e
};
NVIDIAGDC.Profile.isActive=function(){return NVIDIAGDC.Profile.isLoggedIn()
}
})(jQuery,window,document);