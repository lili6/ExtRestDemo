/**
 * Created by lili on 15/8/4.
 */
Ext.onReady(function(){

    /**
     * 主体面板
     * */
    var centerPanel = Ext.create('Ext.tab.Panel', {
        region:'center',
        items:{
            title:'首页',
            html:'不可关闭的默认首页页面'
        }
    });

    /**
     * 树形菜单
     * */
    var menuTree = Ext.create('Ext.tree.Panel', {
        region:'west',
        title:'菜单导航',
        layout:'fit',
        width:180,
        root: {
            expanded: true,
            collapsed:true,
            text:'菜单',
            children: [{
                text:'会员中心',
                url:'http://www.163.com',
                leaf:true,
                iconCls:'User'
            }, {
                text:'文章列表',
                leaf:true,
                url:'http://www.59code.com',
                iconCls:'Time'
            }, {
                text:'图片仓库',
                leaf:true,
                url:'http://www.sina.com.cn',
                iconCls:'Pictures'
            }, {
                text:'个人资料',
                leaf:true,
                url:'http://www.csdn.net',
                iconCls:'Vcard'
            }, {
                text:'系统设置',
                leaf:true,
                url:'http://www.baidu.com',
                iconCls:'Cog'
            }]
        }
    });

    /**
     * 绑定树形菜单点击事件，点击树形菜单，在主区域打开对应面板。
     * 如果是已经打开的面板，使该面板取得焦点
     * */
    menuTree.on('itemclick', function( item, record, item, index, e, eOpts ){

        if(!record.data.leaf){
            return;
        }

        var title = record.data.text;
        var iconCls = record.data.iconCls;
        var href = record.data.url;

        // 检测是否已经打开，如已打开，则直接展示该面板
        var opened = centerPanel.items.items;
        for(var i = 0; i < opened.length; i++){
            if(opened[i].title == title){
                opened[i].show();
                return;
            }
        }

        // 该面板尚不存在，创建该面板并展示
        centerPanel.add({
            title: record.data.text,
            closable:true,
            iconCls:record.data.iconCls,
            html:"<iframe scrolling='auto' frameborder='0' width='100%' height='100%' src='" + href + "'></iframe>"
        }).show();
    });

    // 创建应用
    Ext.create('Ext.panel.Panel', {
        plugins: 'viewport', // 自适应浏览器窗口
        layout:'fit',
        border:false,
        items: {
            xtype:'panel',
            layout:'border',
            items:[{
                region:'north',
                height:80,
                border:false,
                bodyStyle:{
                    backgroundColor:'#095f93',
                    lineHeight:'80px',
                    fontWeight:'bold',
                    fontSize:'30px',
                    color:'#fff',
                    paddingLeft:'20px'
                },
                html:'Ext JS 5.0后台框架示例'
            }, menuTree, centerPanel]
        }
    });

});