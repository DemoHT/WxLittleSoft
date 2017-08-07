Page({
  data: {
    defense: 500,
    hp: 2000,
    damageRatio: "",
    damageMax: 0
  },
  onLoad: function (options) {
    var that = this
    var defense = options.defense === undefined ? this.data.defense : options.defense
    var hp = options.hp === undefined ? this.data.hp : options.hp
    console.log("defense:" + defense + " hp:" + hp)
    this.setData({
      defense: defense,
      hp: hp,
      damageRatio: that.getDamageRatio(defense),
      damageMax: that.getDamageMax(defense, hp)
    })
  },
  onShareAppMessage: function (options) {
    var path = "/pages/wzryTools/fangyu/fangyu?defense=" + this.data.defense + "&hp=" + this.data.hp
    console.log("share path=" + path)
    return {
      path: path
    }
  },
  bindDefenseChange: function (e) {
    var that = this
    var defense = parseInt(e.detail.value)
    this.setData({
      defense: defense,
      damageRatio: that.getDamageRatio(defense),
      damageMax: that.getDamageMax(that.data.defense, that.data.hp)
    })
  },
  bindHpChange: function (e) {
    var that = this
    var hp = parseInt(e.detail.value)
    this.setData({
      hp: hp,
      damageRatio: that.getDamageRatio(that.data.defense),
      damageMax: that.getDamageMax(that.data.defense, hp)
    })
  },

  getDamageMax: function (defense, hp) {
    return Math.floor((defense/602 + 1) * hp)
  },
  getDamageRatio: function (defense) {
    return (defense / (defense + 602) * 100).toFixed(2) + "%"
  }
})