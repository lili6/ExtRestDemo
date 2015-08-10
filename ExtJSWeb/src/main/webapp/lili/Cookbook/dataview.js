/**
 * Created by lili on 15/8/7.
 */

Ext.onReady(function(){
    Ext.define('Bug',{
        extend: 'Ext.data.Model',
        fields:['title','desc','status','severity']
    });
    var bugData = [{
        id:1,
        title:'bug1',
        desc:'just comment',
        status:'in progress',
        severity:1
    },{
        id:2,
        title:'bug2',
        desc:'just comment',
        status:'in progress',
        severity:1
    },
    ];

    var bugStore = new Ext.data.Store({
        model:'Bug',
        data:bugData
    });

    var dataview = Ext.create('Ext.view.View', {
        store: bugStore,
        tpl: '<tpl for=".">' +
        '<div class="bug-wrapper">' +
        '<span class="title">{title}</span>' +
        '<span class="severity severity-{severity}">{severity}</span>' +
        '<span class="description">{description}</span>'
        +
        '<span class="status {[values.status.toLowerCase().replace(" ", "-")]}">{status}</span>' +
        '</div>' +
        '</tpl>',
        itemSelector: 'div.bug-wrapper',
        emptyText: 'Woo hoo! No Bugs Found!',
        deferEmptyText: false

    });
    var panel = Ext.create('Ext.panel.Panel',{
        renderTo:Ext.getBody(),
        title:'Creating a Dataview Bound to a datastore',
        height:500,
        width:580,
        layout:'fit',
        style:'margin:50;',
        items:[dataview]
    })
});