/**
 * Created by lili on 15/7/27.
 */
Ext.define('User',{
    extend : 'Ext.data.Model',
    fields  : ['name','phone']
});

Ext.define('UserListController', {
    extend:'Ext.app.ViewController',
    alias:'controller.userlist',

    init : function(view) {
        this.userCount = 0 ;
        var users = [],
            i;
        for (i =0;i<5;++i){
            users.push(this.getUser());
        }
        view.getStore().add(users);
    },

    onAddClick : function() {
        this.addUser();
    },

    onDeleteClick : function() {
        var view = this.getView(),
            selected = view.getSelectionModel().getSelection()[0],
            store = view.getStore();

        store.remove(selected);
        //Ext.toast('删除一条记录','info','t');
        Ext.toast('删除一条记录');
        console.log("删除一条记录：" + selected.getUser().getName());
    },

    onSelectionChange : function(selModel, selections){
        this.lookupReference('delete').setDisabled(selections.length===0);
    },

    getUser :function() {
        ++this.userCount;
        return {
            name : 'User' + this.userCount,
            phone: this.generatePhone()
        };
    },

    addUser: function() {
        this.getView().getStore().add(this.getUser());
        console.log("新增1条记录：" );
    },
    generatePhone :function() {
        var num = '',
            i;
        for(i =0; i<7;++i){
           num += Ext.Number.randomInt(0,9);
            if(num.length===3) {
                num += '-';
            }
        }
        return num;
    }

});
Ext.define('UserList', {
    extend : 'Ext.grid.Panel',
    controller: 'userlist',
    //floating: true, //窗口浮动
    draggable: {
        delegate: 'h1'
    },
    //frame:true, 使的有框架的感觉
    tools:[{
        type:'refresh',
        tooltip: 'Refresh form Data',
        // hidden:true,
        handler: function(event, toolEl, panelHeader) {
            // refresh logic
        }
    },
        {
            type:'help',
            tooltip: 'Get Help',
            callback: function(panel, tool, event) {
                // show help here
            }
        }],

    fbar: [//footer bar
        { type: 'button', text: 'Button 1' }
    ],

    //dock : 'right',
    //closable: true,
    //bbar:[{
    tbar:[{
    //buttons:[{ runs ok same as dockedItem toolbar ,bottom
        text:'Add',
        listeners:{
            click:'onAddClick'
        }
    }, {
      text: 'Delete',
        reference :'delete',
        listeners :{
            click:'onDeleteClick'
        }
    }
    ],
    bodyBorder:true,
    bodyStyle: {
        background: '#ffe',
        padding: '5px'
    },

    store : {
        model:'User'
    },
    selModel :{
        type:'rowmodel',
        listeners:{
            selectionchange :'OnSelectionChange'
        }
    },
    columns :[{
        flex : 1,
        dataIndex : 'name',
        text:'姓名'
    }, {
        flex : 1,
        dataIndex: 'phone',
        text:'电话'
    }]


});
Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();
    new UserList({
        renderTo: Ext.getBody(),
        width: 400,
        height: 200
    });
    new Ext.panel.Panel({
        title: 'Some Title',
        renderTo: Ext.getBody(),
        width: 400, height: 300,
        layout: 'form',
        items: [{
            xtype: 'textarea',
            style: {
                width: '95%',
                marginBottom: '30px'
            }
        },
            new Ext.button.Button({
                text: 'Send',
                minWidth: '100',
                style: {
                    marginBottom: '10px'
                }
            })
        ]
    });
    //粉色背景的悬浮框
    new Ext.Component({
        constrain: true,
        //floating: true,
        //renderTo:Ext.getBody(),
        renderTo:document.body,
        border:1,
        style: {
            color:'#FFFFFF',
            backgroundColor: '#fae',
            border: '1px solid black'
        },
        title:'悬浮组件',
        html: '<h1 style="cursor:move">The title</h1><p>The content</p>',
        draggable: {
            delegate: 'h1' //在 h1 的周围才能被拖拽
        }
    });
   /* var win = Ext.create({
            xtype: 'window',
            title: 'Resize This Window!',
            height: 100,
            width: 200,
            layout: 'anchor',
            items: [{
                xtype: 'textarea',
                anchor: '0 0',
                liquidLayout: false // allows the textarea to fire "resize"
            }]
        }),
        textfield = win.items.getAt(0);

    win.show();

    textfield.on('resize', function(textfield, width, height) {
        Ext.Msg.alert('Text Field Resized', 'width: ' + width + ', height: ' + height);
    });*/

    var panel = Ext.create({
        xtype: 'panel',
        //renderTo: document.body,
        title:'测试面板',
        frame:true,
        height:220,
        width:220,
        //html:'<h1 class="mytitle">题目</h1> 内容 巴拉巴拉',
        floating:true,
        items:[
            {
                xtype:'displayfield',
                fieldLable:'主页',
                name:'HOME',
                value:'HELLO'
            },
            {
                xtype:'displayfield',
                fieldLable:'访问者',
                name:'visitor_score',
                value:'20'
            }
        ],
        buttons:[{
            text:"更新一下"
        }]


    });
    panel.on({
        click: function(e) {
            console.log(e.getTarget().innerHTML);
        },
        element:'body',
        delegate:'h1.mytitle'
    });

});
