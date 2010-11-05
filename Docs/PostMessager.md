Class: PostMessager {#PostMessager}
=====================================

PostMessager is a MooTools plugin that acts as a wrapper for the window.postMessage API which is available in IE8+, Firefox 3.1+, Opera 9+, Safari, and Chrome. PostMessager also normalizes the onMessage event for use within MooTools.

### Implements:

Options, Events

PostMessager Method: constructor {#PostMessager:constructor}
---------------------------------------------------------------

### Syntax:

	var messager = new PostMessager(destination,options);

### Arguments:

1. destination - (*object*)  The destination window or frame to send the message to.
1. options - (*object*)  An object containing the PostMessager instance's options.

### Options:

allowReceive: true,
allowSend: true,
source: window,
validReceiveURIs: []


* allowReceive - (*boolean*, defaults to true)  Allows this instance to receive messages.  May be enabled or disabled at any time.
* allowSend - (*boolean*, defaults to true)  Allows this instance to send messages to the destination frame.  May be enabled or disabled at any time.
* source - (*window object*, defaults to window)  The window to send from and listen to.
* validReceiveURIs - (*array*, defaults to [])  An array of valid URIs to receive messages from.  An empty array allows any frame to send a message to your source.


### Returns:

A PostMessager instance.

### Events:

### send

* (*function*) Function to execute when a message is sent.

### Signature

	onSend(message,destination)


### receive

* (*function*) Function to execute when a message is received.

### Signature

	onReceive(message,source,origin)
	
### reply

* (*function*) Function to execute when replying *to* a message.

### Signature

	onReply(message,source,origin)

	
PostMessager Method: send {#PostMessager:send}
---------------------------------------------------------------

Sends a message to the destination window

### Syntax:

	messager.send('Hello from the parent window!','http://domain2.com');

### Arguments:

1. message - (*string|object*)  The message to be sent.
2. uri - (*string*)  The protocal/domain/port match that the destination window must be at to receive a message.

### Returns:

The PostMessager instance.

PostMessager Method: reply {#PostMessager:reply}
---------------------------------------------------------------

Replies to a message received by any valid origin.

### Syntax:

	message.reply('Got your message!',source,origin)

### Arguments:

1. message - (*string*)  The message to be returned.
2. source - (*window/frame object*)  The window or frame which sent the original message.
3. origin - (*string*)  The origin (URI) of the message.

### Returns:

The PostMessager instance.


PostMessager Method: start {#PostMessager:start}
---------------------------------------------------------------

Starts the message listener.

### Syntax:

	messager.start();


### Returns:

The PostMessager instance.


PostMessager Method: stop {#PostMessager:stop}
---------------------------------------------------------------

Stops the message listener.  Instance may still send messages.

### Syntax:

	messager.stop();
	
### Returns:

The PostMessager instance.



PostMessager Method: addReceiver {#PostMessager:addReceiver}
---------------------------------------------------------------

Adds a valid receiver.  Accepts a URI (protocol,domain,port).  Port only if present.

### Syntax:

	messager.addReceiver('http://davidwalsh.name:8080');
	
### Arguments:

1. uri - (*string*)  The URI to add.
	
### Returns:

The PostMessager instance.


PostMessager Method: removeReceiver {#PostMessager:removeReceiver}
---------------------------------------------------------------

Removes a valid receiver.  Accepts a URI (protocol,domain,port).  Port only if present.

### Syntax:

	messager.removeReceiver('http://davidwalsh.name:8080');
	
### Arguments:

1. uri - (*string*)  The URI to add.
	
### Returns:

The PostMessager instance.


PostMessager Method: enableReceive {#PostMessager:enableReceive}
---------------------------------------------------------------

Allows the source to receive messages, if receiving has been disabled.

### Syntax:

	messager.enableReceive();
	
### Returns:

The PostMessager instance.


PostMessager Method: disableReceive {#PostMessager:disableReceive}
---------------------------------------------------------------

Disables the source from receiving messages.

### Syntax:

	messager.disableReceive();
	
### Returns:

The PostMessager instance.



PostMessager Method: enableSend {#PostMessager:enableSend}
---------------------------------------------------------------

Allows the source to send messages, if sending has been disabled.

### Syntax:

	messager.enableSend();
	
### Returns:

The PostMessager instance.


PostMessager Method: disableSend {#PostMessager:disableSend}
---------------------------------------------------------------

Disables the source from sending messages.

### Syntax:

	messager.disableSend();
	
### Returns:

The PostMessager instance.