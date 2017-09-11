// pages/computer/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    itemsValue: [{
      value: 1,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 2,
      checked: true,
      color: "#b9dd08"
    }, {
      value: 3,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 4,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 5,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 6,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 7,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 8,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 9,
      checked: true,
      color: "#b9dd08"
    }, {
      value: 10,
      checked: true,
      color: "#b9dd08"
    }, {
      value: 11,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 12,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 13,
      checked: true,
      color: "#b9dd08"
    }, {
      value: 14,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 15,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 16,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 17,
      checked: true,
      color: "#b9dd08"
    }, {
      value: 18,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 19,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 20,
      checked: false,
      color: "#b9dd08"
    }, {
      value: 21,
      checked: false,
      color: "#b9dd08"
    }],
    id: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  todo: function(e){
    // console.log(e)
    var iid = this.data.itemsValue[+(e.target.id)-1];
    if(iid.checked == true){
      wx.showModal({
        title: '此座位有人正在上机',
        content: '请选择无人座位',
      })
    }else{
      // console.log(e.currentTarget.id)
      this.setData({
        id : e.currentTarget.id
      })
      wx.showModal({
        title: '您要选择' + this.data.id +　"号座位么?",
        content: '',
        success:()=>{
          wx.scanCode({
            success: () => {
              wx.showLoading({
                title: '正在获取密码',
              })
              wx.request({
                url: 'https://www.easy-mock.com/mock/59ae10e4e0dc6633419c9a5d/example/',
                success: (res) => {
                  console.log(res)
                  wx.hideLoading();
                  wx.redirectTo({
                    url: "../password/index?password=" + res.data.password + "&number=" + this.data.id,
                    success: () => {
                      wx.showToast({
                        title: '获取密码成功',
                        duration: 1000
                      })
                    }
                  })

                }
              })
            }
          })          
        }
      })
      
    }
  },
  // password:function(){
  //   wx.scanCode({
  //     success:()=>{
  //       wx.showLoading({
  //         title: '正在获取密码',
  //       })
  //       wx.request({
  //         url: 'https://www.easy-mock.com/mock/59ae10e4e0dc6633419c9a5d/example/',
  //         success:(res)=>{
  //           console.log(res)
  //           wx.hideLoading();
  //           wx.redirectTo({
  //             url: "../password/index?password=" + res.data.password + "&number=" + this.data.id,
  //             success:()=>{
  //               wx.showToast({
  //                 title: '获取密码成功',
  //                 duration: 1000
  //               })
  //             }
  //           })

  //         }
  //       })
  //     }
  //   })
  // },
  onLoad: function (options) {
    

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})