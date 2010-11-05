/*
---
description:     PostMessager

authors:
  - David Walsh (http://davidwalsh.name)

license:
  - MIT-style license

requires:
  core/1.2.1:   '*'

provides:
  - PostMessager
...
*/

Element.NativeEvents.message=2;Element.Events.message={base:"message",condition:function(a){if(!a.$message_extended){a.data=a.event.data;a.source=a.event.source;a.origin=a.event.origin;for(key in a){if(a[key]==undefined){a[key]=false}}a.$message_extended=true}return true}};var PostMessager=new Class({Implements:[Options,Events],options:{allowReceive:true,allowSend:true,source:window,validReceiveURIs:[]},initialize:function(b,a){this.setOptions(a);this.source=document.id(this.options.source);this.dest=b;this.allowReceive=this.options.allowReceive;this.allowSend=this.options.allowSend;this.validURIs=this.options.validReceiveURIs;this.listener=function(c){if(this.allowReceive&&(this.validURIs.length==0||this.validURIs.contains(c.origin))){this.fireEvent("receive",[c.data,c.source,c.origin])}}.bind(this);this.started=false;this.start()},send:function(b,a){if(this.allowSend){this.dest.postMessage(b,a);this.fireEvent("send",[b,this.dest])}},reply:function(b,c,a){c.postMessage(b,a);this.fireEvent("reply",[b,c,a])},start:function(){if(!this.started){this.source.addEvent("message",this.listener);this.started=true}},stop:function(){this.source.removeEvent("message",this.listener);this.started=false},addReceiver:function(a){this.validURIs.push(a)},removeReceiver:function(a){this.validURIs.erase(a)},enableReceive:function(){this.allowReceive=true},disableReceive:function(){this.allowReceive=false},enableSend:function(){this.allowSend=true},disableSend:function(){this.allowSend=false}});