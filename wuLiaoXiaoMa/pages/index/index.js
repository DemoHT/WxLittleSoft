//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    list: [
      {
        id: 'form',
        name: '开发者工具',
        open: false,
        pages: [
          {title: '时间戳转换', url: '/pages/devTools/timeStamp/timeStamp'},
          {title: '加解密', url: '/pages/devTools/encrypt/encrypt'},
        ]
      },
      {
        id: 'widget',
        name: '农药有毒',
        open: false,
        pages: [
          {title: '防御计算', url: '/pages/wzryTools/fangyu/fangyu'},
          {title: '铭文模拟', url: '/pages/wzryTools/mingwen/mingwen'}
        ]
      }
    //   {
    //     id: 'feedback',
    //     name: '操作反馈',
    //     open: false,
    //     pages: ['actionsheet', 'dialog', 'msg', 'picker', 'toast']
    //   },
    //   {
    //     id: 'nav',
    //     name: '导航相关',
    //     open: false,
    //     pages: ['navbar', 'tabbar']
    //   },
    //   {
    //     id: 'search',
    //     name: '搜索相关',
    //     open: false,
    //     pages: ['searchbar']
    //   }
    ]
  },
  onLoad: function () {
    console.log('index.js onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  mottoTextTap: function() {
    wx.navigateTo({
      url: '../wzryTools/wzryTools',
    })
  },
  kindToggle: function (e) {
    var id = e.currentTarget.id, list = this.data.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setData({
      list: list
    });
  },
  onShareAppMessage: function (options) {
    // share option
  }
})
