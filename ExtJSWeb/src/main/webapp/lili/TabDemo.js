/**
 * Created by lili on 15/8/3.
 */

Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();
    var tabs = Ext.create('Ext.tab.Panel',{
        height:200,
        bbar: [
            { xtype: 'button', text: 'Button 1' }
        ],
        items:[
            {
                id : 'tab1',
                title:'Tab 1',
                html:'A simple tab'
            },
            {
                title:'Tab 2',
                html: '第二个'
            },
            {
                id:'remove-this-tab',
                title:'remove-this-tab',
                html: '此页签将被删除。。。。。'
            }

        ],
        renderTo:Ext.getBody()
    });
    var tab = Ext.getCmp('tab1');
    Ext.create('Ext.button.Button', {
        renderTo: Ext.getBody(),
        text    : '选择第1个',
        scope   : this,
        handler : function() {
            tabs.setActiveTab(tab);
        }
    });

    Ext.create('Ext.button.Button', {
        text    : '选择第二个',
        scope   : this,
        handler : function() {
            tabs.setActiveTab(1);
        },
        renderTo : Ext.getBody()
    });
    Ext.create('Ext.button.Button',{
        text: '获得当前页签',
        scope:this,
        handler:function(){
            var tab= tabs.getActiveTab();
            alert('当前页签:' + tab.title);
        },
        renderTo:Ext.getBody()
    });
    Ext.create('Ext.button.Button', {
        text    : 'New tab',
        scope   : this,
        handler : function() {
            var tab = tabs.add({
                // we use the tabs.items property to get the length of current items/tabs
                title: 'Tab ' + (tabs.items.length + 1),
                html : 'Another one'
            });

            tabs.setActiveTab(tab);
        },
        renderTo : Ext.getBody()
    });
    Ext.create('Ext.button.Button', {
        text    : 'Remove tab',
        scope   : this,
        handler : function() {
            var tab = Ext.getCmp('remove-this-tab');
            tabs.remove(tab);
        },
        renderTo : Ext.getBody()
    });
});
