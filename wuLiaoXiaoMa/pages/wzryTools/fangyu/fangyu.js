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
    if (e.detail.value) {
      var defense = parseInt(e.detail.value)
      this.setData({
        defense: defense,
        damageRatio: that.getDamageRatio(defense),
        damageMax: that.getDamageMax(defense, that.data.hp)
      })
      return defense
    } else {
      this.setData({
        defense: "",
        damageRatio: "",
        damageMax: ""
      })
      return ""
    }
  },
  bindHpChange: function (e) {
    var that = this
    if (e.detail.value) {
      var hp = parseInt(e.detail.value)
      this.setData({
        hp: hp,
        damageMax: that.getDamageMax(that.data.defense, hp)
      })
      return hp
    } else {
      this.setData({
        hp: "",
        damageMax: ""
      })
      return ""
    }
  },

  getDamageMax: function (defense, hp) {
    defense = parseInt(defense)
    hp = parseInt(hp)
    return Math.floor((defense/602 + 1) * hp)
  },
  getDamageRatio: function (defense) {
    defense = parseInt(defense)
    return (defense / (defense + 602) * 100).toFixed(2) + "%"
  }
})