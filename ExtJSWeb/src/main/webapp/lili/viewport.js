/**
 * Created by lili on 15/8/2.
 */

Ext.require(
    [
        'Ext.data.*'
    ]
)
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

    var west = Ext.create('Ext.tree.Panel',{
        title:'查询项目',
        width : 200,
        height:500,
        region:'west',
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
    });
    // The data store containing the list of states
    var langs = Ext.create('Ext.data.Store', {
        fields: ['code', 'language'],
        //data: Ext.data.languages,
        //from languages.js
        //data: data/languages.js  //from languages.js
        /*data: [
            ['en','English','ascii'],
            ['zh_CN','Simplified Chinese'],
            ['ko','Korean']
        ]*/
        data : [
         {"code":"en","language":"English"},
         {"code":"zh_CN","language":"Simplified Chinese"},
         {"code":"ko","language":"Korean"}
        ]
    });

// Create the combo box, attached to the states data store

// get the selected language code parameter from url (if exists)
    var params = Ext.urlDecode(window.location.search.substring(1));
    var combobox =  Ext.create('Ext.form.field.ComboBox', {
        id:'combo',
        fieldLabel: '语言选择',
        store: langs,
        queryMode: 'local',
        /*displayField: 'name',
         valueField: 'abbr'*/
        displayField:'language',
        valueField:'code',
        emptyText:'选择语言',
        hideLabel:true,
        listeners : {
            select: function (cd, record) {
                var search = location.search,
                    index = search.indexOf('&');
                params = Ext.urlEncode({'lang': record.get('code')});
                location.search = (index === -1) ? params : params + search.substr(index);
                alert(params)
                //开始处理语言点击事项

            }
        }
    });

    var record, url
    if (params.lang) {
        //alert('开始处理选择语言' + params);
        record = langs.findRecord('code', params.lang, null, null, null, true);
        if (record) {
            //this.select(cd,record)
            combobox.setValue(record.data.language);
            //combobox.setValue('dfsdf');
            url = Ext.util.Format.format("../webapp/extjs5/ext-local-{0}.js",params.lang);
            console.log("url::" + url);
            Ext.Loader.loadScript({
                url:url,
                /*onLoad:this.onSuccess(),
                onError:this.onFailure(),*/
                scope:this
            });
        }
    }

    var toolbar = Ext.create('Ext.toolbar.Toolbar', {
        //renderTo: document.body,
        //renderTo: 'toolbar',
        width   : '100%',
        //align: right,
        items: [
            {html:'<span style="color:#004B97;font-size:18px;font-weight:bold">MY EXTJS DMMO系统</span>'},
            '->',
            { xtype: 'tbspacer' },
/*            {
                // xtype: 'button', // default for Toolbars
                text: 'Button'
            },
            {
                xtype: 'splitbutton',
                text : 'Split Button'
            },*/
            //{
                combobox,

                    //renderTo: Ext.getBody()

            //},
            // begin using the right-justified button container
            //'->', // same as { xtype: 'tbfill' }
            /*{
                displayField:'language',
                xtype    : 'textfield',
                name     : '查询条件',
                emptyText: 'enter search term'
            },*/
            // add a vertical separator bar between toolbar items
            '-', // same as {xtype: 'tbseparator'} to create Ext.toolbar.Separator
            {
                xtype:'button',
                text:'用户管理',
                iconCls:'Group'}, // same as {xtype: 'tbtext', text: 'text1'} to create Ext.toolbar.TextItem
            { xtype: 'tbspacer' },// same as ' ' to create Ext.toolbar.Spacer

            {xtype:'button',
                text:'帮助',
            iconCls:'Help'},
            {xtype:'button',
                text:'注销',
                iconCls:'Doorout'}
            //{ xtype: 'tbspacer', width: 50 }, // add a 50px space
        ]
    });

    /*var head1 = new Ext.BoxComponent({
    region:'north',
    el: 'north'
});*/
    var head = Ext.create('Ext.Panel',{

        //title:'运营工具',
        region:'north',
        layout:{
            type:'vbox'
        },
        items:[
            //{html:'欢迎使用运营工具查询'},//在此可以放个图片
            {xtype:toolbar
             }
        ]

    });



//页头
//系统操作窗口



//布局管理器


   var main= Ext.create('Ext.tab.Panel', {
        width: 400,
        height: 400,
        region:'center',
        //renderTo: document.body,
        items: [{
            title: '订单查询',
            closable:true,
            bodyPadding:10,
            html:'显示查询条件和列表'
        }, {title:'元宝获得查询',
            closable:true,
            //items:[grid]
            //html:  '<iframe src="grid.html" width="100%" height="100%"></iframe>'
            //html:' <SCRIPT type="text/javascript" src="GridPanelDemo.js"></SCRIPT>'
            title: '普通Tab',
            html: "这只是一个非常普通的Tab。",
            items:[{xtype:'button',text:'按钮'}]

        },
            {
            title: 'Bar',
                closable:true,
            tabConfig: {
                title: 'Custom Title',
                tooltip: 'A button tooltip'

            }

        }]
    });
    new Ext.Viewport({
    layout:'border',
    items:[head,west,main]
});

});