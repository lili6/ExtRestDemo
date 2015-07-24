/**
 * Created by liguofang on 2015/7/23.
 */
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    var grid = Ext.create("Ext.grid.Panel",{
        xtype: "grid",
        store: store,
        width: 600,
        height:300,
        margin:30,
        columnLines:true,
        renderTo:Ext.getBody(),
        selModel:{
            injectCheckbox:0,
            mode:"SIMPLE",   //"SINGLE"/"SIMPLE"/"MULTI"
            checkOnly: true //只能通过checkbox选择

        },
        selType:"checkboxmodel",
        columns :[

            {text:'姓名',dataIndex:'name'},
            {text:'年龄',dataIndex:'age',xtype:'numbercolumn',format:'0',
                editor:{
                    xtype:"numberfield",
                    decimalPrecision:0,
                    selectOnFocus:true
                }
            },
            {text:'电话',dataIndex:'phone',editor:'textfield'}
        ],
        plugins:[
            Ext.create('Ext.grid.plugin.CellEditing',{
                clicksToEdit:1
            })
        ],
        listeners:{
            itemdblclick:function(me,record,item,index ,e , eOpts){
                //双击事件的操作
            }
        },
        bbar:{xtype:"pagingtoolbar",store:store,displayInfo:true}

    })
});

Ext.define('UserModel', {
    extend : 'Ext.data.Model',
    fields:[
        {
            name:'name',
            type:'string'
        },
        {
            name:'age',
            type:'int'
        } ,
        {
            name:'phone',
            type:'string'
        },

    ]
});
var store = Ext.create("Ext.data.Store",{
    model:"UserModel",     //此DataModel必须在此类中定义
    autoLoad: true,
    pageSize:5,
    proxy:{
        type : "ajax",
        url:"lili/data/users.json", //static json data
        reader:{
           root:"rows"
        }
    }
})