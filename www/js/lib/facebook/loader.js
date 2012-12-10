/**
 * Facebook loader CommonJS module.
 * Requires a ./ready.js module and triggers it's ready function when init is done.*
 * Author: Konstantin Raev (bestander@gmail.com)
 * Version: 0.2.0 (25 Oct 2012)
 * Released under the MIT license
 */
 exports.load = function(facebookAppId, callback){

  window.fbAsyncInit = function () {
    FB.init({
      appId : facebookAppId,
      status : true,
      cookie : true,
      xfbml : true,
      oauth : true
    });
    callback();
  };

  (function (d) {
    var js, id = 'facebook-jssdk';
    if (d.getElementById(id)) {
      return;
    }
    js = d.createElement('script');
    js.id = id;
    js.async = true;
    js.src = "//connect.facebook.net/en_US/all.js";
    d.getElementsByTagName('head')[0].appendChild(js);
  }(document));
};