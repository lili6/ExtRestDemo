/**
 * Created by liguofang on 2015/7/23.
 */

Ext.define('lili.model.User', {
    extend : 'Ext.data.Model',
    fields:[
        {
            name:'name',
            type:'string'
        }, {
            name:'sex',
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
        {
            name:'remark',
            type:'string'
        }

    ]
})