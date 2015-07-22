Ext.define('ExtJSWebSpring.view.Login', {
	extend : 'Ext.window.Window',
	alias : 'widget.login',
	autoShow : true,
	height : 170,
	width : 400,
	resizable : false,
	layout : {
		type : 'fit'
	},
	title : 'Login Form',
	closeAction : 'hide',
	closeable : false,
	items : [ {
		xtype : 'form',
		frame : false,
		bodyPadding : 15,
		defaults : {
			xtype : 'textfield',
			anchor : '100%',
			labelWidth : 60,
			allowBlank : false,
			//vtype : 'alphanum', 任何字符都可以
			minLength : 4,
			maxLength : 30,
			msgTarget : 'under'
		},
		items : [ {
			name : 'user',
			itemId : 'user',
			fieldLabel : 'Username',
			maxLength : 25         ,
			emptyText:'请输入用户名'
		}, {
			name : 'password',
			fieldLabel : 'Password',
			inputType : 'password',
			maxLength : 12         ,
			emptyText:'请输入密码'
		} ],
		dockedItems : [ {

			xtype : 'toolbar',
			dock : 'bottom',
			items : [ {
				xtype : 'tbfill'
			}, {
				xtype : 'button',
				itemId : 'cancel',
				text : 'Cancel'
			}, {
				xtype : 'button',
				itemId : 'submit',
				text : 'Submit',
				formBind : true
			} ]

		} ]
	} ]
});