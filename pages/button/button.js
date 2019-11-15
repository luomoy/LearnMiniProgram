// pages/button/button.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLoading: true,
    imagePath: ''
  },
  onLoad(options){
    this.get_data_origin();
    request({
      url: 'http://49.234.200.243:801/V3/questions/GetQuestionList'
    })
  },
  get_data_origin(){

  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]

        this.setData({
          imagePath: path
        })
      }
    })
  },
  handleImageLoad(){
    console.log('图片加载完成')
  },
  handleScroll(event){
    console.log(event)
  }
})