/*
* Author: Konstantin Raev (bestander@gmail.com)
* Released under the MIT license
*/
/*global io:true*/
"use strict";

var Game = require('pong-mmo-client');
var game = new Game("http://localhost");


//var socket = io.connect('http://localhost');
//socket.on('BALL_MOVED', function (data) {
//  console.log(data);
////  socket.emit('my other event', { my: 'data' });
//});

// expose jquery for plugins
//window.jQuery = window.$ = require("jquery");
//
//var $ = window.$
//  , facebook = require('facebook-commons')
//  , friendsSelector = require("jquery-facebook-multi-friend-selector")
//  ;
//
////pongClient.init('canvas-div');
//
//
//$(function(){
//  $("#login").click(
//	  function () {
//	    console.log("clicked button");
//	  });
//  // TODO friends selector initialize here
//});
//
//exports.initFacebook = function(facebookAppId){
//	facebook.loader.load(facebookAppId, function(){
//		FB.getLoginStatus(function (response) {
//		  if (response.status === "connected") {
//		    init();
//		  } else {
//		    console.log("no user session available");
//		    login();
//		  }
//		});
//	});
//}
//
//function login() {
//  FB.login(function (response) {
//    if (response.status === "connected") {
//      init();
//    } else {
//      alert('Login Failed!');
//    }
//  });
//}
//
//function init() {
//  FB.api('/me', function (response) {
//    console.log(response.name);
//    $("#jfmfs-container").jfmfs({ max_selected: 15, max_selected_message: "{0} of {1} selected"});
//  });
//}
