Ext.application({

	controllers:['LoginController'],
	name : 'ExtJSWebSpring',
	views :[''],

	launch : function() {
		console.log('app is launched...' + Ext.getVersion('extjs'));
		Ext.widget('login');
		//Ext.widget('paneldemo');
		/*var task = new Ext.util.DelayedTask(function() {
			splashscreen.fadeOut({
				duration : 1000,
				remove : true
			});

			splashscreen.next().fadeOut({
				duration : 1000,
				remove : true,
				listeners:{
					afteranimate:function(el,startTime,eOpts){
						//Ext.widget('login');
						//Ext.widget('grid');
					}
				}
			

			});
			console.log('App lauchned');
		}

		);
		task.delay(2000);
*/
	},
	init : function() {
	/*	splashscreen = Ext.getBody()
				.mask('Loading application', 'splashscreen');*/
		console.log('App is init...');

	}

})