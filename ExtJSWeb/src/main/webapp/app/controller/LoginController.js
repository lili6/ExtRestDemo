Ext.define('ExtJSWebSpring.controller.LoginController', {
	extend : 'Ext.app.Controller',

	views : [ 'Login','GridDemo','PanelDemo' ],

	init : function(application) {
		this.control({
			"login form button#submit" : {
				click : this.buttonSubmit
			},
			"login form button#cancel" : {
				click : this.buttonCancel
			}
		});
	},

	buttonSubmit : function(button, e, options) {
		console.log('Submit button');
		var formPanel = button.up('form');
		var login = button.up('login');
		var username = formPanel.down('textfield[name=user]').getValue();
		var password = formPanel.down('textfield[name=password]').getValue();

		if (formPanel.getForm().isValid()) {
			Ext.Ajax.request({
				//url : 'login/authenticate.do',
				url : 'http://localhost:8080/SpringRestServer/login',
				//url : 'http://localhost:8080/3SpringRest/login',
				method:'POST',
				headers:{
					'Content-Type': 'application/json; charset=utf-8',
					'Access-Control-Allow-Origin':'*'
				},
				jsonData:{username:username,password:password},          // post的json数据
				scope:this,
				/*params : {
					user : username,
					password : password
				},*/
				params : {
					username : username,
					password : password
				},

				failure : function(conn, response, options, eOpts) {
					Ext.Msg.show({
						title : 'Server Error',
						msg : conn.responseText,
						icon : Ext.Msg.ERROR,
						buttons : Ext.Msg.OK
					});
				},
				success : function(conn, response, options, eOpts) {
					var result = Ext.JSON.decode(conn.responseText, true);

					if (result.success) {

						Ext.toast({
							html: '登录成功！',
							title: '提示',
							width: 200,
							align: 't'
						});
						/*Ext.Msg.show({
							title : '提示',
							//msg : result.msg,
							msg : "登陆成功！",
							buttons : Ext.Msg.OK
						});*/
						 //关闭当前的页面
						login.close();
						Ext.widget('grid');               //打开新的页面
					} else {
						Ext.Msg.show({
							title : 'Login failed',
							msg : result.msg,
							icon : Ext.Msg.ERROR,
							buttons : Ext.Msg.OK
						});
					}
				}
			});
		}

	},

	buttonCancel : function(button, e, options) {
		console.log('cancel button');
		button.up('form').getForm().reset();
	}
});