--- 
layout: post
title: Struggling with XMLHttpRequest
tags: []

status: publish
type: post
published: true
meta: 
  jabber_published: "1301114187"
  _edit_last: "17422583"
---
After several hours of work I gave up writing my own code to do the simplest asynchronous post.

In fact I found it relatively easy to write a request following [Mozilla's tutorial](https://developer.mozilla.org/en/AJAX/Getting_Started). And it works perfectly on my local environment. when I began to deploy a piece of javascript code with a dummy server response ruby script to CIMS server, it went crazy.

    // Send AJAX request
    this.jsonReqStr = JSON.stringify(this.jsonReqObj);
    this.sendRequest = function () {
      this.req = new XMLHttpRequest();
      this.req.onreadystatechange = function () {
        var weight = meshWidget.weight;
        var req = meshWidget.weight.req;
        if (req.readyState == 4) {
          alert(req.responseText);
          if (req.status == 200) {
            //weight.mat = JSON.parse(req.responseText).mat;
          }
        }};
      this.req.open("POST", "compute-weight.cgi", true);
      this.req.send(this.jsonReqStr);
    }

This piece of code doesn't work on CIMS web server. Every time it should return a "Hello" it returns a html source file along with `501` error. I thought it was because apache or interpreter wasn't configured right. Or might be it is another permission mistake.

But it wasn't. This compute-weight.cgi works perfectly fine if I entered the url of the script in the browser. Then I began to suspect the correctness of my code. But doesn't that weird that same code hosted on different computers, was interpreted by the same browser have different behavior? (I tested in both Chrome and Firefox)

It turns out that I found a code that works, and I still don't know what are the differences between the two.

    //from: http://www.captain.at/howto-ajax-form-post-request.php
    var http_request = false;
    function makePOSTRequest(url, parameters, handle_to_alert) {
      http_request = false;
      if (window.XMLHttpRequest) { // Mozilla, Safari,...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
          // set type accordingly to anticipated content type
          //http_request.overrideMimeType('text/xml');
          http_request.overrideMimeType('text/html');
        }
      } else if (window.ActiveXObject) { // IE
        try {
          http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
          try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }
      }
      if (!http_request) {
        alert('Cannot create XMLHTTP instance');
        return false;
      }
    
      http_request.onreadystatechange = handle_to_alert;
      http_request.open('POST', url, true);
      http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http_request.setRequestHeader("Content-length", parameters.length);
      http_request.setRequestHeader("Connection", "close");
      http_request.send(parameters);
    }
    
    function alertContents() {
      if (http_request.readyState == 4) {
        if (http_request.status == 200) {
          alert(http_request.responseText);
        } else {
          alert('There was a problem with the request.');
        }
      }
    }
