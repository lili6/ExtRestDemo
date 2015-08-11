/**
 * Created by liguofang on 2015/8/11.
 */
var itemsPerPage =2;
var invoiceStore = Ext.create('Ext.data.Store',{
    storeId:'invoiceStore',
    //autoLoad:true,
    autoLoad:false,
    pageSize:itemsPerPage,
    //autoLoad:{start:0,limit:2},
    //autoSync:true,
    model:Invoice,
    groupField:'Client',
    proxy :{
        type:'ajax',
        url:'./lili/Cookbook/invoices.json',
        //url:'invoices.json',
        reader:{
            type:'json',
            rootProperty:'rows',
            totalProperty:'total'
        },
        writer:{
            type:'json',
            writeAllFields:false
        }
    }
});
/*

invoiceStore.load({
    params:{
        start:0,
        limit:itemsPerPage
    }
});*/
