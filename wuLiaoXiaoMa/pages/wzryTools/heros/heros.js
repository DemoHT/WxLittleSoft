// heros.js
var heroList = require("../../../data/wzry/heroList.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    heroList: heroList.heroList,
    heroTypes: [
      { "code": 3, "name": "坦克" },
      { "code": 1, "name": "战士" },
      { "code": 4, "name": "刺客" },
      { "code": 2, "name": "法师" },
      { "code": 5, "name": "射手" },
      { "code": 6, "name": "辅助" },
    ]
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