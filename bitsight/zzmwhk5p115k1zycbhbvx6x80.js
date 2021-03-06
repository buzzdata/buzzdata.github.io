/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 525);
/******/ })
/************************************************************************/
/******/ ({

/***/ 525:
/***/ (function(module, exports) {

(function(){var es,initHubspotIntegration,originalReady,s,setForeignData;return null==window._hsq&&(window._hsq=[]),setForeignData=function(video,tracker){var pageName,pageUrl,ref;return pageUrl=document.location.href.split('?')[0],pageName=(null==(ref=document.getElementsByTagName('title')[0])?void 0:ref.innerHTML)||'',pageName=pageName.replace(/^[\n\s]+/,'').replace(/[\n\s]+$/,''),pageName=pageName.replace(/[^\x00-\x7F]/g,''),video.foreignData({hubspot_hutk:tracker.utk.visitor,wistia_visitor_key:video.visitorKey(),page_url:pageUrl,page_name:pageName,canonical_url:tracker.canonicalUrl,page_id:tracker.pageId,content_type:tracker.contentType})},initHubspotIntegration=function(){return wistiaEmbeds.onFind(function(video){return video.ready(function(){var ref;return(null==(ref=video._mediaData.integrations)?void 0:ref.hubspot)?void 0:Wistia.util.poll(function(){return video.visitorKey()},function(){return video instanceof Wistia.PlaylistIframeAPI||window._hsq.push(function(tracker){return setForeignData(video,tracker)}),video instanceof Wistia.PublicApi?Wistia.Metrics.videoCount(video,'player/integrations-hubspot-v1/init-on-api-embed'):video instanceof Wistia.PlaylistIframeAPI?Wistia.Metrics.count('player/integrations-hubspot-v1/init-on-iframe-playlist',1,{href:location.href,referrer:document.referrer,hashedId:video.hashedId()}):Wistia.Metrics.count('player/integrations-hubspot-v1/init-on-iframe-embed',1,{href:location.href,referrer:document.referrer,hashedId:video.hashedId()})})})})},null==window.wistiaEmbeds?(null==window.wistiaEmbedShepherdReady?window.wistiaEmbedShepherdReady=initHubspotIntegration:(originalReady=window.wistiaEmbedShepherdReady,window.wistiaEmbedShepherdReady=function(){return originalReady(),initHubspotIntegration()}),es=document.createElement('script'),es.type='text/javascript',es.async=!0,es.src='//fast.wistia.com/assets/external/embed_shepherd-v1.js',s=document.getElementsByTagName('script')[0],s.parentNode.insertBefore(es,s)):initHubspotIntegration()})();;


/***/ })

/******/ });