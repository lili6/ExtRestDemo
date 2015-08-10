/**
 * Created by lili on 15/8/6.
 */
Ext.define('Customer.support.SupportMessage',{
    extend : 'Ext.panel.Panel',
    height: 500,
    width :500,
    alias : 'widget.supportMessage',
    title: 'Customer Support',
    html :'Customer support is online...'
});

Ext.application({
    name:'Customer',
    launch: function(){
        Ext.create('Ext.container.Viewport',{
            layout: 'fit',
            items:[{
                xtype:'supportMessage'
            }]
        })
    }
});