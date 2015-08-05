/**
 * Created by lili on 15/8/2.
 */
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    var treeStore = Ext.create('Ext.data.TreeStore',{
        root:{
            expanded: true,
            children : [
                {text:'chargeItem',leaf:true},
                {text:'chargeCoin',leaf:true},
                {text:'chargeSilver',leaf:true},
                {text:'consume',expanded:true,children:[
                    {text:'consumeItem',leaf:true},
                    {text:'consumeSilver',leaf:true},
                    {text:'consumeBSilver',leaf:true}
                ]},
                {text:'Master',leaf:true}
            ]


        }
    });

    Ext.create('Ext.tree.Panel',{
        title:'运营工具查询',
        width : 200,
        height:500,
        store:treeStore,
        rootVisible:false,
        //activeItem:2,
        useArrows:true,
        renderTo:Ext.getBody(),
        listeners: {
            itemclick: function(s,r) {
                alert(r.data.text); //获取数据，在此打开连接
            }
        },
        bbar:[
            {xtype:'button',text:'Button 1'},
            {xtype:'button',text:'Button 2'}
        ]
    })

});