// pages/home/home.js
const app = getApp()
console.log(app.globalData)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: 'luomoy',
    array: [{
        id: 110,
        name: 'kobe',
        age: 21
      },
      {
        id: 111,
        name: 'james',
        age: 11
      },
      {
        id: 112,
        name: 'joe',
        age: 18
      }
    ],
    counter: 0,
    list: []
  },
  handleBtnClick() {
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handlesubtraction() {
    this.setData({
      counter: this.data.counter - 1
    })
  },
  handelGetUserInfo(event) {
    console.log(event)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: app.globalData.hostUrl + 'questions/GetQuestionList',
      success: (res) => {
        console.log(res)
        const data = res.data;
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //监听页面的滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动倒底部
  onReachBottom(){
    console.log('页面滚动到底部')
  },
  onPullDownRefresh(){
    console.log('下拉刷新')
  }
})