	window.AircraftView = Backbone.View.extend({
		_menuShowing : false,
		className : 'aircraft',
		events : {
			'click' : 'activate'
		},
		initialize : function() {
			this.model.bind('positionChanged', this.setPosition, this);
			this.model.bind('crash', this.crash, this);
			//this.model.bind('heightChanged', this.setHeight, this);
			//this.model.bind('orientationChanged', this.setOrientation, this);
		},
		render : function() {
			//this.setPosition();
		},
		activate : function() {
			$(this.el).addClass('active');
			/*
			var newHead = '';	
			//change direction
			switch (this.model.getHead()) {
			case 'N':
				newHead = 'NE';
				break;
			case 'NE':
				newHead = 'E';
				break;
			case 'E':
				newHead = 'SE';
				break;
			case 'SE':
				newHead = 'S';
				break;
			case 'S':
				newHead = 'SW';
				break;
			case 'SW':
				newHead = 'W';
				break;
			case 'W':
				newHead = 'NW';
				break;
			case 'NW':
				newHead = 'N';
				break;
			case 'N':
				newHead = 'NE';
				break;
			}
				
			this.model.setHead(newHead);
			//toggle menu
			//this.showMenu();
			*/
		},
		setPosition : function() {
			var posModel = this.model.getPosition()
			var position = {left: posModel.x, top:posModel.y};
			$(this.el).offset(position);
		},
		crash : function() {
			$(this.el).addClass('crashed');
			alert('plane crashed');
		},
		setHeight : function() {
			//this.el.addClass('height_'+this.model.getHeight());
		},
		showMenu : function() {
			if (!this._menuShowing) {
				//show menu
				alert('showing menu');
			}
		},
		hideMenu : function() {
			if (this._menuShowing) {
				//hide menu
				alert('hiding menu');
			}
		}
		
	});