// pages/billing/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    number: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    actionText: "正在计费",
    clickBtn: false ,
    usetime: 0,
    usemoney: 0 ,
    show: false,
    arr:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      number: options.number
    })
    let h = 0;
    let m = 0;
    let s = 0;
    this.timer = setInterval(()=>{
      this.setData({
        seconds: s++
      });
      if(s == 60){
        s = 0;
        m++;
        setTimeout(()=>{
          this.setData({
            minutes:m
          })
        },100)
      };
      if(m == 60){
        m = 0;
        h++;
        setTimeout(()=>{
          this.setData({
            hours:h
          })
        },100)
      }
      // console.log(h,m,s)
      this.data.arr = [h,m,s-1]
      // console.log(this.data.arr)
    },100)
  },
  enduse: function(){
    clearInterval(this.timer);
    this.timer = "";
    this.setData({
      actionText: "本次骑行时间",
      clickBtn: true,
      usetime: this.data.arr[0] + ":" + this.data.arr[1] + ":" + this.data.arr[2],
      usemoney: this.money(),
      show:true
    });

  },
  movetoindex: function(){
    if(this.timer == ""){
      wx.redirectTo({
        url: '../my/index'
      })
    }else{
      wx.navigateTo({
        url: '../my/index'
      })
    }
  },
  money:function(){
    let time = this.data.arr[0]*3600 + this.data.arr[1]*60 + ":" + this.data.arr[2];
    let usemoney = Math.floor((parseInt(time)*33)/1000);
    console.log(usemoney)
    
    return usemoney
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