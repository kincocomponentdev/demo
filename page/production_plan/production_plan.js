Page({
  data: {
    
    arrayfactory: [
      {
        id: 0,
        name: '工厂AAAA',
      },
      {
        id: 1,
        name: '工厂BBBB',
      },
      {
        id: 2,
        name: '工厂CCCC',
      },
      {
        id: 3,
        name: '工厂DDDD',
      },
    ],

    arraystatus: [
      {
        id: 0,
        name: '待生产',
      },
      {
        id: 1,
        name: '生产中',
      },
      {
        id: 2,
        name: '已完成',
      }
    ],
  
    facindex: 0,

    statusindex:0,

    orderList:[],

    isHideLoadMore: true,
  },

  bindfacPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
         facindex: e.detail.value,
    });
  },

  bindstatusPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      statusindex: e.detail.value,
    });
  },

  doSearch(){
      this.showLoading();
  },

  doSubmit(){

  },

  showLoading() {
    dd.showLoading({
      content: '正在加载中.......',
    });
    setTimeout(() => {
      dd.hideLoading();
      this.showToastSuccess();
     
    }, 3000);
  },
  showToastSuccess() {
    dd.showToast({
      type: 'success',
      content: '加载成功！',
      duration: 1000,
      success: () => {
          var orderList = [
                              {productOrderNo :"P3WEWER", itemCode:"3.23232", startTime:"2018-09-08", endTime:"2018-12-20",targetNo:20, finishedNo:3, productStatus:"待生产"},
                              {productOrderNo :"P3WEWER", itemCode:"3.23232", startTime:"2018-09-08", endTime:"2018-12-20",targetNo:20, finishedNo:3, productStatus:"待生产"},
                              {productOrderNo :"P3WEWER", itemCode:"3.23232", startTime:"2018-09-08", endTime:"2018-12-20",targetNo:20, finishedNo:3, productStatus:"待生产"},
                              {productOrderNo :"P3WEWER", itemCode:"3.23232", startTime:"2018-09-08", endTime:"2018-12-20",targetNo:20, finishedNo:3, productStatus:"待生产"},
         ];
         this.setData({"orderList":orderList,"isHideLoadMore":false});
      },
    });
  },
  
 lower(){
     var orderList = this.data.orderList;
     orderList.push( {productOrderNo :"P3WEWER", itemCode:"3.23232", startTime:"2018-09-08", endTime:"2018-12-20",targetNo:20, finishedNo:3, productStatus:"待生产"});
     this.setData({"orderList":orderList,"isHideLoadMore":true});
  }
});