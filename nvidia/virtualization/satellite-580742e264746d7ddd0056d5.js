/* function dtm_track
 *   @param type -- Required. The type of call. Defaults to "view".
 *   @param obj -- Optional. An object of data elements for mapping to a tag.
 *
 *   @description This function is used for tracking some event dynamically.
 *     This is used in conjunction with a special process in direct call
 *     rules and js object data elements.
 *
 *     -- The <obj> param --
 *     All data elements passed into the <obj> param of this function should
 *     be created in dtm as js objects named "dtm_layer.<element_name>".
 *     Each possible item in the object should be created as a data element
 *     and then mapped in the associated direct call rule.
 *
 *     -- The <type> param --
 *     All direct call rules will have the string in the format of <type>.
 *     So, you might have "view". In SiteCatalyst, for example, you would
 *     put this string and then init an s.t() call because it is a "view".
 *     
 *     -- Debugging -- 
 *     If you'd like to view the output of these calls as they happen, enable
 *     the debug cookie in the console with the following:
 *         document.cookie="dtm_debug=true";
 *
 *     -- Additional Info --
 *     This code also will initialize a page with an empty dtm_layer object if
 *     one isn't defined already. In addition, a global cloning function is
 *     created called "dtm_clone". It will clone the following js types: string,
 *     object, boolean, array, date, number, function. It will NOT copy anything
 *     that has prototype methods defined. It will also not copy anything that
 *     is cylic or recursive in nature. If done, a stack overflow error will
 *     result. This method can be called on any variable like so:
 *         myClonedVar = dtm_clone(myOldVar);
 */

window.dtm_clone = function(obj) {
  if (null == obj || "object" != typeof obj)
    return obj;

  if (obj instanceof Date) {
    var copy = new Date();
    copy.setTime(obj.getTime());
    return copy;
  }

  if (obj instanceof Array) {
    var copy = [];
    for (var i = 0, len = obj.length; i < len; i++) {
      copy[i] = dtm_clone(obj[i]);
    }
    return copy;
  }

  if (obj instanceof Object) {
    var copy = {};
    for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = dtm_clone(obj[attr]);
    }
    return copy;
  }

  if (typeof console != "undefined" && console.log)
    console.log('clone: type "'+(typeof obj)+'" not supported')
}
 
window.dtm_layer = window.dtm_layer || {};
window.dtm_track = function(type,obj) {
  try {
    var hasTracked = "";
    if (typeof _satellite == "undefined") hasTracked = "NOT ";
    if (typeof type == "undefined" || type == null || !type) type = "view";
  
    var temp = window.dtm_clone(window.dtm_layer);
    window.dtm_layer = obj || {};
  
    if (typeof console != "undefined" && console.log
        && typeof _satellite.readCookie('dtm_debug') != "undefined"
        && (_satellite.readCookie('dtm_debug') == "true"
            || _satellite.readCookie('dtm_debug') == true)) {
      console.log("dtm " + hasTracked + "tracked '" + type + "'", obj);
    }
  
    if (hasTracked != "NOT ")
      _satellite.track(type);
  
    window.dtm_layer = window.dtm_clone(temp);
    delete temp;
  } catch (e) {
    if(typeof console != "undefined" && console.log)
        console.log("dtm_track error. Message: ",e.getMessage()," Passed obj: ",obj);
  }
  return true;
};
