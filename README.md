PostMessager
=========

PostMessager is a MooTools plugin that acts as a wrapper for the window.postMessage API which is available in IE8+, Firefox 3.1+, Opera 9+, Safari, and Chrome.  PostMessager also normalizes the onMessage event for use within MooTools.

![Screenshot](http://davidwalsh.name/dw-content/postmessager.png)


How to Use
----------

PostMessager instances can be created at any time.  Two arguments are accepted:  the destination window and the instance options.

	#JS
	
	/* Get hold of an iFrame */
	var domain = 'http://jpmcts.local';
	var iframe = document.id('listenerFrame').contentWindow;
	
	/* Create a PostMessager instance */
	var messager = new PostMessager(iframe,{
		allowReceive: true,
		allowSend: true,
		validReceiveURIs: ['http://jpmcts.local'],
		onSend: function(message,dest) {
			console.log('sending "',message,'" to ',dest);
		},
		onReceive: function(message,source,origin) {
			console.log('received message "',message,'" from ',origin,' at ',source);
			this.reply('Got it!',source,origin);
		}
	});
	
PostMessager handles sending, receiving, and replying to messages.  Optimally you would add an instance to each frame.

For specific usage and options, please read the documentation or visit [http://davidwalsh.name/js/postmessager](http://davidwalsh.name/js/postmessager)