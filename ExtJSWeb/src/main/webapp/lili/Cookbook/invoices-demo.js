/**
 * Created by liguofang on 2015/8/11.
 */
Ext.onReady(function(){
    var rowEditing = Ext.create('Ext.grid.plugin.RowEditing',{
        clicksToEdit:1
    });
    Ext.create('Ext.grid.Panel',{
        title:'Grids示例',
        height: 300,
        width:600,
        store:invoiceStore,
        //plugins:[rowEditing],
        selModel:'rowmodel',
        plugins:{
            ptype:'rowediting',
            clicksToEdit:1
        },

        style :'margin:10px',
        columns:[
            {header:'客户名称',
            dataIndex:'Client',
            flex:1,
                editor:{
                    allowBlank:false
                }
            },
            {
                header:'日期',
                dataIndex:'Date' ,
                format:'Y-m-d',    //无法生效日期
                xtype:'datecolumn',
                editor:{
                    xtype:'datefield',
                    format:'Y-m-d',
                    allowBlank:false
                }
            },
            {
                header:'金额',
                dataIndex:'Amount' ,
                xtype:'numbercolumn',
                editor:{
                    xtype:'numberfield',
                    allowBlank:false,
                    hideTrigger:true,
                    minValue:1    ,
                    maxValue:15000
                }

            } ,
            {
                header:'状态',
                dataIndex:'Status'
            }
        ]
        //renderTo:Ext.getBody()
    });


    //==========================以下是doc demo的
    Ext.create('Ext.data.Store',{
        storeId:'simpsonStore',
        fields:['Client','Date','Amount'],
        data:[
            {Client:'流行',Date:'2015-04-34',Amount:11.89},
            {Client:'有范',Date:'2014-09-10',Amount:23},
            {Client:'金星',Date:'2015-12-23',Amount:20},
        ]

    });
    Ext.create('Ext.grid.Panel',{
        title:'官方实例grid',
        //store:Ext.data.StoreManager.lookup('simpsonStore'), // 可以进行修改
        store:Ext.data.StoreManager.lookup('invoiceStore'),    //无法修改 TODO
        dockedItems:[{
            xtype:'pagingtoolbar',
            store:'invoiceStore',
            dock:'bottom',
            displayInfo:true,
            displayMsg:'我的发票信息{0}-{1}of{2}',
            emptyMsg:'没有发票信息'
        }],
        columns:[
            {header:'姓名',dataIndex:'Client',editor:'textfield'},
            {header:'时间',dataIndex:'Date',flex:1,format:'Y-m-d',
                xtype:'datecolumn',
                editor:{
                    xtype:'datefield',
                    allowBlank:false
                }
            },
            {
                header:'金额',dataIndex:'Amount'
            }

        ],
        selModel:'rowmodel',
        plugins: {
            ptype:'rowediting',
            clicksToEdit:1
        },
        height:200,
        width:400,
        style :'margin:10px',
        renderTo:Ext.getBody()
    })





});