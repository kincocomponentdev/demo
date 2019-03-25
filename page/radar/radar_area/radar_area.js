
var recentOneMonth = [
  {
    name: '准时交付率',
    value: 9.5
  },
  {
   name:'良品率',
   value:8
  },
  {
   name:'无退款率',
   value:6
  },
  {
   name:'Top50动销率',
   value:4
  },
  {
   name:'Top50周转率',
   value:8
  },
  {
    name: '计划按时率',
    value: 9
  }];

var newData=[{
    name: '良品率',
    value: 6.5
  }, 
  {
    name: 'XX',
    value: 6
  },
  {
    name: 'YY',
    value: 6
  },
  {
    name: '准时交付率',
    value: 9.5
  },
  {
    name: '计划按时率',
    value: 9
  }];


let app = getApp();
let _ddChart =null;

Page({
    data:{
       width:100,
       height:200,
       chart: null,
    },
    onLoad(){
    },
    onReady(){
       
    },
    change(){
     recentOneMonth=newData;
     this.onDraw(_ddChart);

    },
    
    onDraw(ddChart){
     // this._ddChart=ddChart;
        //dd-charts组件内部会回调此方法，返回图表实例ddChart
        //提示：可以把异步获取数据及渲染图表逻辑放onDraw回调里面
        ddChart.clear();
        ddChart.source(recentOneMonth,{
         value: {
           min: 0,
           max: 10
         },
         name :{

         }
        })
        ddChart.coord('polar');
        ddChart.tooltip(false);
        ddChart.axis('value', {         
          grid: {
            lineDash: null,
          },
          label: null,
          line: null,
        })
        ddChart.axis('name', {
          grid: {
            lineDash: null
          }
        })
        ddChart.area().position('name*value').color('#FE5C5B').style({
          fillOpacity: 0.2
        }).animate({
          appear: {
            animation: 'groupWaveIn'
          }
        });
        ddChart.line().position('name*value').color('#FE5C5B').size(1).animate({
          appear: {
            animation: 'groupWaveIn'
          }
        });
        ddChart.point().position('name*value').color('#FE5C5B').animate({
          appear: {
            delay: 300
          }
        });
       ddChart.guide({
        text:'aa',
       });
      ddChart.render()
    }
})