Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    objectArray: [
      {
        id: 0,
        name: '美国',
      },
      {
        id: 1,
        name: '中国',
      },
      {
        id: 2,
        name: '巴西',
      },
      {
        id: 3,
        name: '日本',
      },
    ],
    arrIndex: 0,
    index: 0,
    collapseData: {
      onTitleTap: 'handleTitleTap',
      panels: [{
        title: '订单号:PO2SDFDF',
        content: '订单编号:PO2SDFSD , 物料编号:5.3233323 , 订单状态:已确认 , 外协厂:深圳休息休息厂',
        expanded: true,
      }, {
        title: '订单号:333333',
        content: 'Content 2',
        expanded: false,
      }],
    },
    orderList:[],
    isHideLoadMore: true,
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      index: e.detail.value,
    });
  },
  bindObjPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      arrIndex: e.detail.value,
    });
  },

  datePicker() {
    dd.datePicker({
      currentDate: '2016-10-10',
      startDate: '2016-10-9',
      endDate: '2017-10-9',
      success: (res) => {
        dd.alert({
          title: 'datePicker response: ' + JSON.stringify(res)
        });
      },
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
          {workNo:"P3WEWER",itemCode:"3.23232", statusFlagName:"已确认"},
          {workNo:"PSDFSDWER",itemCode:"3.3432", statusFlagName:"已确认"},
          {workNo:"POOOSDFSD",itemCode:"3.8982", statusFlagName:"已确认"}
         ];
         this.setData({"orderList":orderList,"isHideLoadMore":false});
      },
    });
  },
  
 lower(){
     var orderList = this.data.orderList;
     orderList.push({workNo:"P3WEWER",itemCode:"3.23232", statusFlagName:"已确认"});
     this.setData({"orderList":orderList,"isHideLoadMore":true});
  }
});