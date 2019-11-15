// pages/home/home.js
import request from './../../service/network.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'哈哈哈',
    counter: 0,
    isShow: true
  },
  handleChangeShow(){
    this.setData({
      isShow: !this.data.isShow
    })
  },
  handletabClick(event){
    console.log(event) 
  },
  handleIncrement(event){
    console.log(event)
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handlePushAbout(){
    wx.navigateTo({
      url: '/pages/about/about?title=你好啊',
    })
  },
  handleShowToast() {
    wx.showToast({
      title: 'hello',
      icon: 'none',
      mask: true,
      success: function() {

      },
      fail: function() {

      },
      complete: function() {

      }
    })
  },
  handleShowModal() {
    wx.showModal({
      title: '标题',
      content: '内容',
      // showCancel: false,
      cancelText: '退出',
      cancelColor: 'red',

      confirmText: '好的',
      confirmColor: 'blue',
      success: function(res) {
        if (res.cancel) {
          console.log('用户点击了取消')
        }
        if (res.confirm) {
          console.log('用户点击了确定')
        }
      }
    })
  },
  handleShowLodaing() {
    wx.showLoading({
      title: '加载中',
    })
    setTimeout(() => {
      wx.hideLoading()
    }, 1000)
  },
  handleShowAction() {
    wx.showActionSheet({
      itemList: ['相册', '拍照'],
      itemColor: 'red',
      success: function(res) {
        console.log(res)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    request({
      url: 'http://49.234.200.243:801/V3/questions/GetQuestionList',
      data: {
        page: 1,
        limit: 10
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
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
  onShareAppMessage: function(options) {
    return {
      title: '你好啊',
      path: '/pages/about/about',
      imageUrl: 'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})