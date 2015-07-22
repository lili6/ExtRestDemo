var datas=[
    [100,'离散',true,new Date(1979,09,08),2400],
    [200,'麒麟',false,new Date(1978,11,08),1500],
    [300,'霹雳',false,new Date(1981,01,19),1700],
];
Ext.define('ExtJSWebSpring.view.GridDemo', {
    extend : 'Ext.grid.Panel',
    alias : 'widget.grid',
    //创建Grid表格组件
    //var grid= Ext.create('Ext.grid.Panel',{
        renderTo: Ext.getBody(),
        width:500,
        height:230,
        frame:true,
        //bodyPadding : 100,
        selType:'cellmodel',//设置单元格为选择模式 Ext.selection.CellModel
        tbar:[{
            text: '取得所选单元格',
            handler: function(){
                var cell = grid.getSelectionModel().getCurrentPosition();
                alert(Ext.JSON.encode(cell));//选择还是有点问题 TODO ll
                //alert(Ext.JSON.encode(cell));
            }
        }],
       /* viewConfig:{
            forceFit:true,kk
            stripeRows:true //在表格中显示斑马线
        },*/
        store:{
            fields:['id','name','leader','Birthday','salary'], //定义字段
            proxy :{
                type: 'memory',//Ext.data.proxy.Memory
                data: datas,

                reader:'array'//Ext.data.reader.Array
            },


            autoLoad:true//自动加载
            },

            columns:[
                {header:"id",width:80,dataIndex:'id',dataIndex:'id',sortable:true},
                {header:"姓名",width:80,dataIndex:'name',dataIndex:'name',sortable:true
                },
                {
                    header: "组长", width: 80,  dataIndex: 'leader', sortable: true,
                    xtype: 'booleancolumn',//boolean 列
                    trueText: '是',
                    falseText: '否'
                }
                ,
                {header:"生日",width:150,dataIndex:'Birthday',sortable:true,
                    xtype:'datecolumn',
                    format:'Y年m月d日'//格式化日期
                },

                {header:"薪水",width:80,dataIndex:'salary',sortable:true
                    //xtype: 'numbercolumn',
                    //format:'0,000' //格式化数字
                }
                ]

});