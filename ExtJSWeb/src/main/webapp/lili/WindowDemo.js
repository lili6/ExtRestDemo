/**
 * Created by liguofang on 2015/7/23.
 */
Ext.onReady(function() {
    Ext.tip.QuickTipManager.init();
    var win = Ext.create("Ext.window.Window",{
        id: "myWin",
        title:"实例窗口",
        width:500,
        height:300,
        layout:"fit",    //悬浮显示
        autoShow:true, // 自动显示
        modal:true,     //模态打开时，只能此窗口可以操作，背景窗口不可操作
        closable:true,
        maximizable: true,
        minimizable: true,
        items: [
            {
                xtype: "form",
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
                            { xtype: "textfield", name: "name", fieldLabel: "姓名", allowBlank: false },
                            { xtype: "numberfield", name: "age", fieldLabel: "年龄", decimalPrecision: 0, vtype: "age" }
                        ]
                    }
                ]
            }
        ],
        buttons: [
            { xtype: "button", text: "确定", handler: function () { this.up("window").close(); } },
            { xtype: "button", text: "取消", handler: function () { this.up("window").close(); } }
        ]
    });
});