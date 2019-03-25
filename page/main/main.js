let app = getApp();


//内网穿透工具介绍:
// https://open-doc.dingtalk.com/microapp/debug/ucof2g
//替换成开发者后台设置的安全域名
let url = "http://******";

Page({
    data: {
    tagData: [
      { date: '2019-03-18', tags: ["#3CB371"] , content:"单号:ADF022,数量:30\n单号:POO022,数量:10"} ,
      { date: '2019-02-28', tags: ["#FF0000"] , content:"单号:UIOIO3,数量:10\n单号:RTYYO3,数量:60"} ,
      // { date: '2019-05-14', tag: '生产中', tagColor: 2, content:[{"productOrderNo":"ADF022"},{"muber":20}]},
      // { date: '2019-03-28', tag: '逾期',   tagColor: 3, content:[{"productOrderNo":"ADF012"},{"muber":10}]},
      // { date: '2019-01-18', tag: '已完成', tagColor: 4, content:[{"productOrderNo":"ADF024"},{"muber":10}]},
    ],
    items: [
      {
        dot: false,
        text: 50,
        isWrap: false,
        intro: '计划生产单',
      },
      {
        dot: false,
        text: 99,
        isWrap: false,
        intro: '已开工',
      },
      {
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: '逾期',
      },
    ],
    stock:[{
        dot: false,
        text: 100,
        overflowCount: 99,
        isWrap: false,
        intro: '当前库存',
    }]
  },

handleSelect(e) {
 console.log(e);
//  console.log(event); 

},



})