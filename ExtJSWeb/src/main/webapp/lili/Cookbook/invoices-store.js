/**
 * Created by liguofang on 2015/8/11.
 */

var invoiceStore = Ext.create('Ext.data.Store',{
    autoLoad:true,
    autoSync:true,
    model:Invoice,
    groupField:'Client',
    proxy :{
        type:'ajax',
        url:'./lili/Cookbook/invoices.json',
        //url:'invoices.json',
        reader:{
            type:'json',
            rootProperty:'rows'
        },
        writer:{
            type:'json',
            writeAllFields:false
        }
    }
});