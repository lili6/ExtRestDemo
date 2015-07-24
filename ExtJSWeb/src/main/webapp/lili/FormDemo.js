/**
 * Created by liguofang on 2015/7/24.
 */

Ext.define("CommentModel",{
    extend : "Ext.data.Model",
    fileds:[
        {name:"userName",type:"string"},
        {name:"comment",type:"string"}
    ]
});
var comment = Ext.create("CommentModel",{
    userName:'丽丽',
    comment:'生活是一朵haunted'
});
Ext.onReady(function(){
    Ext.tip.QuickTipManager.init();
    var win = Ext.create("Ext.Window",{
        title :"form demo示例",
        width:300,
        height:200,
        layout:"fit",
        items:{
            xtype:"form",
            bodyPadding:12,
            border:false,
            //border:true,
            fieldDefaults:{
                labelWidth:50,
                labelAlign:"right"
            },
            items :[
                {
                    xtype:"textfield",
                    fieldLabel:"姓名",
                    name:"userName"
                },
                {
                    xtype:"textarea",
                    fieldLabel:"留言",
                    name:"comment"
                }

            ],
            buttons: [
                //添加事件
                {
                    text: "保存",
                    handler: function () {
                        var form = this.up('form').getForm();

                        if(form.isValid()){
                            form.submit({
                            //var record = win.down("form").getRecord();

                              success:
                                  //Ext.MessageBox.alert("提示","您输入的名字是："+form.getValues()[0])
                                  //Ext.toast("提交成功")
                                  Ext.toast({
                                      html: '提交成功',
                                      //title: '提示',
                                      width: 200,
                                      align: 't'
                                  })

                            })
                        }
                    }
                },

            ]
        }
    }) ;
    var data = {
        userName: 'Jerry',
        comment: 'hello,my favorite book is balaa...'
    };
  /*      //显示文字，data绑定到form中==============1
   var form =  win.down("form").getForm();
    form.setValues(data);     */
    //===========================2 通过model加载数据
    win.down("form").getForm().loadRecord(comment);


    //获取你输入的数据

    win.show();




});
