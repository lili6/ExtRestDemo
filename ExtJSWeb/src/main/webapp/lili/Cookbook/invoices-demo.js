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
        ]                     ,
        renderTo:Ext.getBody()
    })
});