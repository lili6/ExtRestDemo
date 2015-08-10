/**
 * Created by lili on 15/8/7.
 */
var store = Ext.create('Ext.data.TreeStore',{
    root : {
        expanded :true,
        children:[
            {
                text:'itemA',
                leaf:true
            },
            {
                text:'itemB',
                leaf:true
            },
            {
                text:'itemC',
                leaf:true
            },
            {
                text:'itemD',
                leaf:true
            },
        ]
    }
});
Ext.onReady(function(){

    var westPanel = Ext.create('Ext.tree.Panel',{
        title:'ApplicationMenu',
        region:'west',
        margins:'0 5 5 10',
        width:200,
        store:store,
        rootVisible:false,
        listeners:{
            itemclick : function(tree,record,item,index, e, options) {
                var nodeText = record.data.text,
                    tabPanel = viewport.items.get(1), //tabpanel
                    tabBar = tabPanel.getTabBar(),
                    tabIndex;
                for(var i = 0; i<tabBar.items.length; i++) {
                    if(tabBar.items.get(i).getText() == nodeText) {
                        tabIndex = i;
                    }
                }
                if(Ext.isEmpty(tabIndex)) {
                    tabPanel.add({
                        title:record.data.text,
                        bodyPadding : 10,
                        html:record.data.text
                    });
                    tabIndex = tabPanel.items.length - 1;
                }
                tabPanel.setActiveTab(tabIndex);
            }
        }
    })
    var viewport = Ext.create('Ext.container.Viewport',{
        layout : 'border',
        items:[westPanel,{
            xtype: 'tabpanel',
            region : 'center'
        }]
    })
});