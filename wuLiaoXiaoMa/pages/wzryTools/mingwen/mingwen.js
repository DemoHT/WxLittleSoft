// mingwen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "",
    statusCode: "",
    header: ""
  },

  bindOnTap: function() {
    var page = this
    wx.request({
      url: 'http://pvp.qq.com/web201605/herodetail/193.shtml',
      success: function (response) {
        console.log(response)
        page.setData({
          text: response.data,
          statusCode: response.statusCode,
          header: response.header
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
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