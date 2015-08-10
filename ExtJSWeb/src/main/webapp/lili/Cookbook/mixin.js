/**
 * Created by lili on 15/8/6.
 */
Ext.onReady(function(){
    Ext.define('HasCamera',{
        takePhoto:function() {
            alert('Say Cheese.....CLick');
        }
    });
    Ext.define('Cookbook.Smartphone',{
        mixins:{
            camera: 'HasCamera'
        },
        useCamera : function() {
            this.takePhoto();
            console.log("here invoke mixins.")
        },
        takePhoto:function(){
            this.focus();
            //this.takePhoto();
            this.mixins.camera.takePhoto();
        },
        focus : function(){
            alert('Focusing subject....');
            console.log("content:::"+ this);
        }
    });

    var smartphone = Ext.create('Cookbook.Smartphone');
    smartphone.useCamera(); //alert...

    Ext.define('Cookbook.InfoTextField', {
        extend: 'Ext.form.field.Text',
        onRender: function () {
            this.callParent(arguments);
            //insert into our Info Text element
            Ext.core.DomHelper.append(this.getEl(),
                'div' + this.infoText + '</div>');
        }
    },function(){
        console.log('Cookbook.InfoTextField defined!!');
    });
    var infoTextField = Ext.create('Cookbook.InfoTextField',{
        renderTo:Ext.getBody(),
        fieldLabel:'UserName',
        infoText:'你的名字必须至少6个字符。。'
    });
    infoTextField.show();
});