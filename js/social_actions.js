//JavaScript functions for BTM Social Actions Module

// +1

(function() {
  var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
  po.src = 'https://apis.google.com/js/plusone.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();

//Facebook Like

(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

//Twitter Tweet 

!function(d,s,id) {
  var js,fjs=d.getElementsByTagName(s)[0];
  
  if(!d.getElementById(id)){
  	js=d.createElement(s);js.id=id;
  	js.src="//platform.twitter.com/widgets.js";
  	fjs.parentNode.insertBefore(js,fjs);
  }
}(document,"script","twitter-wjs");


/*
* Social Tracking for Google Analytics
*/

//Make Sure the APIs are ready
$(window).load(function() {

//Instantiating _gaq queue

	var _gaq = _gaq || [];

//It is worth noting that as long as async code for the +1 and Google Analytics Page Tracking
//Plus 1 will track Social Actions Automatically

//Facebook Like

	FB.Event.subscribe('edge.create', function(targetUrl) {
		alert('event fired!');
  		_gaq.push(['_trackSocial', 'facebook', 'Like', targetUrl]);
	});

	FB.Event.subscribe('edge.remove', function(targetUrl) {
		alert('event fired!');
		_gaq.push(['_trackSocial', 'facebook', 'Unlike', targetUrl]);
	});

	FB.Event.subscribe('message.send', function(targetUrl) {
		alert('event fired!');
  		_gaq.push(['_trackSocial', 'facebook', 'Sent to a Friend', targetUrl]);
	});
	
//Tweet Action

/*
* Twitter needs a little more love. Since it opens a new window,
* we should check that we aren't injecting the URI for that window
* into GA. Therefore we check for the src attribute of the query 
* string for the query to the Twitter API - just remove any
* paramters from that and shove it in there instead.
*/
	function extractParamFromTweetUri(uri, paramName) {
	  if (!uri) {
		return;
	  }
	  var uri = uri.split('#')[0];  // Remove anchor.
	  var parts = uri.split('?');  // Check for query params.
	  if (parts.length == 1) {
		return;
	  }
	  var query = decodeURI(parts[1]);

	  // Find url param.
	  paramName += '=';
	  var params = query.split('&');
	  for (var i = 0, param; param = params[i]; ++i) {
		if (param.indexOf(paramName) === 0) {
		  return unescape(param.split('=')[1]);
		}
	  }
	}

	twttr.events.bind('tweet', function(event) {
	  if (event) {
		var targetUrl;
	    if (event.target && event.target.nodeName == 'IFRAME') {
		  targetUrl = extractParamFromTweetUri(event.target.src, 'url');
	    }
		alert('event fired!');
	  _gaq.push(['_trackSocial', 'twitter', 'Tweet', targetUrl]);
	  }
   });
});

		