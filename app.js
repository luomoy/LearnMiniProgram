const TOKEN = 'token'

App({
  globalData: {
    token: ''
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {
    // 先从缓存中取token
    const token = wx.getStorageSync(TOKEN)
    //判断token是否有值
    if(token && token.length !== 0){
      //验证token是否过期
      this.check_token(token)
    }else{
      this.login()
    }
  },
  check_token(token) {
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header:{
        token
      },
      success: (res) => {
        if (!res.data.errCode) {
          console.log('token有效')
          this.globalData.token = token
        }else{
          this.login()
        }
      }
    })
  },
  login(){
    // 登录
    wx.login({
      //code五分钟有效期
      success: (res) => {
        console.log(res)
        //获取code
        const code = res.code;
        // 将code发送给服务器
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            //取出token
            const token = res.data.token
            //token保存到globalData
            this.globalData.token = token
            //进行本地存储
            wx.setStorageSync(TOKEN, token)

          }
        })
      }
    })
  }
})