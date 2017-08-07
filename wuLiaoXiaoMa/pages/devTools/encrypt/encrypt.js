// encrypt.js
var md5 = require("../../../utils/md5.js")
var sha1 = require("../../../utils/sha1.js")
Page({
  data: {
    text: "",
    md5Text: "",
    sha1Text: ""
  },
  bindInputChange: function (e) {
    var srcText = e.detail.value
    this.setData({
      text: srcText,
      md5Text: md5(srcText),
      sha1Text: sha1(srcText)
    })
  },

})