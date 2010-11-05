/* navive base onMessage support */
Element.NativeEvents.message = 2;
Element.Events.message = {
	base: 'message',
	condition: function(event) {
		if(!event.$message_extended) {
			event.data = event.event.data;
			event.source = event.event.source;
			event.origin = event.event.origin;
			for(key in event) {
				if(event[key] == undefined) {
					event[key] = false;
				}
			}
			event.$message_extended = true;
		}
		return true;
	}
};


var PostMessager  = new Class({
	
	Implements: [Options,Events],
	
	options: {
		allowReceive: true,
		allowSend: true,
		source: window,
		validReceiveURIs: [] /*,
		onSend: $empty,
		onReceive: $empty,
		*/
	},
	
	initialize: function(destFrame,options) {
		this.setOptions(options);
		this.source = document.id(this.options.source);
		this.dest = document.id(destFrame);
		
		this.allowReceive = this.options.allowReceive;
		this.allowSend = this.options.allowSend;
		
		this.validURIs = this.options.validReceiveURIs;
		
		this.listener = function(e) {
			if(this.allowReceive && (this.validURIs.length == 0 || this.validURIs.contains(e.origin))) {
				this.fireEvent('receive',[e.data,e.source,e.origin]);
			}
		}.bind(this);
		
		this.started = true;
		this.start();
	},
	
	send: function(message,URI) {
		if(this.allowSend) {
			this.dest.postMessage(message,URI);
			this.fireEvent('send',[message,this.dest]);
		}
	},
	
	start: function() {
		if(!this.started) {
			sourceFrame.addEvent('message',this.listener);
			this.started = true;
		}
	},
	
	stop: function() {
		sourceFrame.removeEvent('message',this.listener);
		this.started = false;
	},
	
	addReceiver: function(receiver) {
		this.validURIs.push(receiver);
	},
	
	removeReceiver: function(receiver) {
		this.validURIs.erase(receiver);
	},
	
	enableReceive: function() {
		this.allowReceive = true;
	},
	
	disableReceive: function() {
		this.allowReceive = false;
	},
	
	enableSend: function() {
		this.allowSend = true;
	},
	
	disableSend: function() {
		this.allowSend = false;
	}
	
});
