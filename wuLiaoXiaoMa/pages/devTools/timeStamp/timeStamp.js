var now = new Date();
Page({
  data: {
    showTopTips: false,

    date: "",
    time: "",
    dateTime : "",
    timeStamp: 0
  },

  onLoad() {
    var now = new Date();
    this.setData({
      date: now.format("yyyy-MM-dd"),
      time: now.format("hh:mm"),
      dateTime: now.format("yyyy-MM-dd hh:mm:ss"),
      timeStamp: Math.floor(now.getTime() / 1000)
    })
  },

  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },

  bindDateChange: function (e) {
    console.log("bindDateChange " + e.detail.value)
    var tmpDate = new Date(this.data.date + " " + this.data.time)
    this.setData({
      date: e.detail.value,
      timeStamp: Math.floor(tmpDate.getTime() / 1000),
      dateTime: tmpDate.format("yyyy-MM-dd hh:mm:ss")
    })
  },

  bindTimeChange: function (e) {
    console.log("bindTimeChange " + e.detail.value)
    var tmpDate = new Date(this.data.date + " " + this.data.time)
    this.setData({
      time: e.detail.value,
      timeStamp: Math.floor(tmpDate.getTime() / 1000),
      dateTime: tmpDate.format("yyyy-MM-dd hh:mm:ss")
    })
  },

  bindTimeStampChange: function (e) {
    console.log("bindTimeStampChange " + e.detail.value)
    var tmpDate = new Date(e.detail.value * 1000);
    this.setData({
      date: tmpDate.format("yyyy-MM-dd"),
      time: tmpDate.format("hh:mm"),
      dateTime: tmpDate.format("yyyy-MM-dd hh:mm:ss")
    })
  }
});