/**
 * Created by liguofang on 2015/8/11.
 */

Ext.onReady(function(){
    Ext.define('Super',{
        extend:'Ext.data.Model',
        fields:['name']
    });
    Ext.define('Sub',{
        extend:'Super',
        idProperty:'customId'
    });

    var fields = Super.getFields();
    // Has 2 fields, "name" & "id"    ,缺省都含一个id，唯一表示
    console.log(fields[0].name,fields[1].name,fields.length);
    fields = Sub.getFields();
    // Has 2 fields, "name" & "customId", "id" is replaced
    console.log(fields[0].name,fields[1].name,fields.length);

    Ext.define('UserSetting',{
        extend: 'Ext.data.Model',
        idProperty:'userID',
        fields:[{
            name:'userID',
            type:'int'
        },{
            name:'fontSize',
            type:'string'
        },{
            name:'theme',
            type:'string'
        },{
            name:'language',
            type:'string'
        },{
            name:'dateFormat',
            type:'string'
        }
        ],
        proxy:{
            type:'localstorage',
            id:'user-settings'
        }
    }) ;
    var settings = Ext.create('UserSetting',{
        userID:1,
        fontSize:'medium',
        theme:'default',
        language:'en-gb',
        dateFormat:'d/m/Y'
    })                    ;
    settings.save();
    var settings2 = Ext.create('UserSetting',{
        userID:2,
        fontSize:'中等',
        theme:'缺省',
        language:'ZH-cn',
        dateFormat:'Y-m-d'
    })
    settings2.save();
    //console.log(settings)
    UserSetting.load(2,{
        callback: function(model,operation){
            console.log(model.get('language'));
        }
    });
});
