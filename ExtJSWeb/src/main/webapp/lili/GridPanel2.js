/**
 * Created by lili on 15/8/4.
 */
Ext.onReady(function(){

    // 定义数据模型
    Ext.define('User', {
        extend: 'Ext.data.Model',
        fields: [ 'name', 'email', 'age', 'phone' ]
    });

    // 创建数据仓库
    var store = Ext.create('Ext.data.Store', {
        model: 'User',
        pageSize: 5,
        data: {
            items: [{
                name: 'Lisa',
                email: 'lisa@simpsons.com',
                age:23,
                phone: '555-111-1224'
            }, {
                name: 'Bart',
                email: 'bart@simpsons.com',
                age:23,
                phone: '555-222-1234'
            }, {
                name: 'Homer',
                email: 'homer@simpsons.com',
                age:23,
                phone: '555-222-1244'
            }, {
                name: 'Marge',
                email: 'marge@simpsons.com',
                age:23,
                phone: '555-222-1254'
            }, {
                name: 'Marge',
                email: 'marge@simpsons.com',
                age:23,
                phone: '555-222-1254'
            }]
        },
        proxy: {
            type: 'memory',
            reader: {
                type: 'json',
                rootProperty: 'items'
            }
        }
    });

    // The data store containing the list of states
    var states = Ext.create('Ext.data.Store', {
        fields: ['abbr', 'name'],
        data : [
            {"abbr":"AL", "name":"姓名"},
            {"abbr":"AK", "name":"邮箱"},
            {"abbr":"AZ", "name":"手机"}
            //...
        ]
    });

    // Create the combo box, attached to the states data store
    var combo = Ext.create('Ext.form.ComboBox', {
        store: states,
        width:60,
        queryMode: 'local',
        displayField: 'name',
        valueField: 'abbr',
        allowBlank:false,
        value:'AL'
    });

    // 创建数据表格
    var grid = Ext.create('Ext.grid.Panel', {
        // xtype: 'gridpanel', // 指定创建gridpanel
        title: '管理员列表',
        region:'center',
        iconCls:'icon-Group',
        selType: "checkboxmodel", // 显示复选框
        selModel: {
            injectCheckbox: 1,
            mode: "SIMPLE",     //"SINGLE"/"SIMPLE"/"MULTI"
            checkOnly: true     //只能通过checkbox选择
        },
        collapsible:true,
        columnLines:true,
        columns: [{ // 显示行号
            xtype: "rownumberer",
            text: ''
        },{
            text: '姓名',
            dataIndex: 'name'
        }, {
            text: '邮箱',
            dataIndex: 'email',
            flex: 1
        },{
            text: '年龄',
            dataIndex: 'age'
        }, {
            text: '手机',
            dataIndex: 'phone'
        }],
        store: store,
        // 创建工具栏
        tbar:[{
            xtype:'button',
            iconCls:'icon-Add',
            text:'添加',
            listeners:{
                click:function(){
                    alert('Add');
                }
            }
        }, {
            xtype:'button',
            iconCls:'icon-Bulletedit',
            text:'修改'
        }, '-' ,{
            xtype:'button',
            iconCls:'icon-Delete',
            text:'删除'
        }, {
            xtype:'button',
            iconCls:'icon-Delete',
            text:'批量删除'
        }, '-', {
            xtype:'button',
            iconCls:'icon-Pageexcel',
            text:'导出'
        }, '->', combo, {
            xtype:'textfield'
        }, {
            xtype:'button',
            plain: true,
            text:'检索',
            iconCls:'icon-Bulletmagnify'
        }, {
            xtype:'button',
            plain: true,
            text:'高级检索',
            iconCls:'icon-Bulletmagnify'
        }],
        bbar: { xtype: "pagingtoolbar", store: store, displayInfo: true }
    });

    // 创建应用
    Ext.create('Ext.panel.Panel', {
        plugins: 'viewport', // 自适应浏览器窗口
        layout: 'fit',
        border: false,
        items: {
            xtype: 'panel',
            layout: 'border',
            border: false,
            items: [grid]
        }
    });
});
