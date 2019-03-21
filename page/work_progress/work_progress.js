Page({
  data: {
    inputValue: '',
    product : {number : "201903010001",
               productCode : "10086001",
               planStartDate : "2019-03-01",
               planCompletDate : "2019-05-01",
               planAmount : 100,
               completAmount : 50,
               
               
               },
  },

  bindKeyInput(e) {
    this.setData({
      inputValue: e.detail.value,
    });
  },

report() {
  dd.httpRequest({
   url: '',
   method: 'POST',
   data: {
    from: '钉钉',
   },
   dataType: 'json',
   success: function (res) {
    dd.showToast({
     type: 'success',
     content: '报工成功',
    });
   },
   fail: function (res) {
    dd.showToast({
     type: 'fail',
     content: '报工失败',
    });
   },
   complete: function (res) {
    // dd.hideLoading();
    // dd.alert({content: 'complete'});
   }
  });
 },

 return(){
  dd.navigateBack({
    delta: 1
  });
 },


  

});