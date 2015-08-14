/**
 * Created by liguofang on 2015/8/13.
 */

Ext.onReady(function(){
   var splitButton = Ext.create('Ext.button.Split',{
           text:'Save...',
           tooltip:'点击箭头选择保存',
           menu:Ext.create('Ext.menu.Menu',{
               items:[
                   {
                       text: 'Save as Image',
                       handler: function () {
                           console.log('Save as Image');
                       }
                   },{
                       text:'Save as PDF',
                       handler:function(){
                           console.log('save as pdf');
                    }
                   }, {
                       text:'save as word',
                       handler:function(){
                           console.log('save as word');
                       }

                   }
               ]
           })
    }    );
    splitButton.on({
        click:function(){
            splitButton.showMenu();
        }   ,
        scope:this
    })

    var panel= Ext.create('Ext.panel.Panel',{
        renderTo: Ext.getBody(),
        height:300,
        width:200,
            html: 'Panel Contents',
        dockedItems:[{
            xtype:'toolbar',
            dock:'top',
            items:[splitButton]
        }]
    })
});