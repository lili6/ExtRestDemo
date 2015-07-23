/**
 * Created by liguofang on 2015/7/23.
 */
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    var form = Ext.create("Ext.form.Panel", {
        width: 600,
        height: 300,
        margin: 20,
        title: 'form',
        //autoShw: true,
        renderTo:Ext.getBody(),
        collapsible: true, //可折叠
        autoscroll: true,  //自动创建滚动条
        defaultType: 'textfield',
        defaults: {
            anchor: '100%'       //一行只能放一个组件
        } ,
            fieldDefaults: {
                labelWidth: 80,
                labelAlign: "left",
                flex: 1,
                margin: 5
            },
            items: [
                {
                    xtype: "container",
                    layout: "hbox",
                    items: [
                        {xtype: "textfield", name: "name", fieldLabel: "姓名", allowBlank: false,flex:1},
                        {xtype: "textfield", name: "sex", fieldLabel: "性别", allowBlank: false},
                        {xtype: "numberfield", name: "age", fieldLabel: "年龄", decimalPrecision: 0, vtype: "age"}
                    ]
                },
                {
                    xtype: "container",
                    layout: "hbox",
                    items: [
                        {xtype: "textfield", name: "phone", fieldLabel: "电话", allowBlank: false, emptyText: "电话或手机号码"},
                        {
                            xtype: "textfield",
                            name: "email",
                            fieldLabel: "邮箱",
                            allowBlank: false,
                            emptyText: "Email地址",
                            vtype: "email"
                        }
                    ]
                },
                {
                    xtype: "textareafield",
                    name: "remark",
                    fieldLabel: "备注",
                    height: 50
                }
            ],
            buttons: [
                {xtype: "button", text: "保存"}
            ]

    });
    //1-----------------通过loadRecord加载record
   /* var userRecord = Ext.create("lili.model.User",{
        name:"lili",
        sex:'girl',
        age:25,
        //无法加载下面的值---
        phone:"1233432445",
        remark:'this\'s good!'
    });
    form.loadRecord(userRecord)*/

    //2----------------通过setValues方法来加载json数据
    var data ={
        name: "lili-j",
        age: 23,
        phone:"12132434"
    };
    form.getForm().setValues(data);

});