/**
 * Created by lili on 15/8/7.
 */
Ext.onReady(function(){
    var form = Ext.create('Ext.form.Panel',{
        bodyPadding: 10,
        border:false,
        defaultType:'textfield',
        //renderTo:Ext.getBody(),
        items : [{
            fieldLabel:'Username',
            name:'username',
            allowBlank:false
        },{
            fieldLabel:'Password',
            name:'password',
            inputType:'password',
            allowBlank:false
        }],
        buttons:[{
            text: 'Login',
            formBind:true, //一定是绑定form，所有必输完毕后才enableThis ensures the button remains disabled until the form is valid.
            disabled : true,
            handler : function(){
                alert('Login button Pressed.');

            }

        }]
    });
    Ext.create('Ext.window.Window',{
        title:'登录',
        height:140,
        width:300,
        layout:'fit',
        items:[form]
    }).show();
});