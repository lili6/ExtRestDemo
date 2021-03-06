/**
 * Created by liguofang on 2015/7/23.
 */
Ext.define('ExtJSWebSpring.view.PanelDemo', {
    extend: 'Ext.form.Panel',
    alias: 'widget.paneldemo',
    //autoShow: true,
    width: 500,
    height: 300,
    margin: 20,
    title: 'form',
    renderTo:Ext.getBody(),
    collapsible: true, //可折叠
    autoscroll: true,  //自动创建滚动条
    defaultType: 'textfield',
    defaults: {
        anchor: '100%'
    },
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
                    {xtype: "textfield", name: "name", fieldLabel: "姓名", allowBlank: false},
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
                        name: "phone",
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