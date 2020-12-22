const app = getApp()
Page({
  data: {
    items:[
      {name:"+",value:"加法"},
      {name:"-",value:"减法"},
      {name:"*",value:"乘法"},
      {name:"/",value:"除法"}
    ],
    minute:'0'+0,//分
    second:'0'+0,//秒
    inter:''//计时器
  },
  onShow:function(){
    app.globalData.page=1
    this.setData({
      minute:app.globalData.minute,
      second:app.globalData.second
    })
    this.endInter()
  },
  checkboxChange:function(e){
    if(e.detail.value[0]=="+"||e.detail.value[1]=="+"||e.detail.value[2]=="+"||e.detail.value[3]=="+")
      app.globalData.add=1
      else app.globalData.add=0
    if(e.detail.value[0]=="-"||e.detail.value[1]=="-"||e.detail.value[2]=="-"||e.detail.value[3]=="-")
      app.globalData.sub=1
      else app.globalData.sub=0
    if(e.detail.value[0]=="*"||e.detail.value[1]=="*"||e.detail.value[2]=="*"||e.detail.value[3]=="*")
      app.globalData.mul=1
      else app.globalData.mul=0
    if(e.detail.value[0]=="/"||e.detail.value[1]=="/"||e.detail.value[2]=="/"||e.detail.value[3]=="/")
      app.globalData.div=1
      else app.globalData.div=0
    console.log("checkbox发生change事件，携带value值为：",e.detail.value)
    console.log("+变量：",app.globalData.add)
    console.log("-变量：",app.globalData.sub)
    console.log("*变量：",app.globalData.mul)
    console.log("÷变量：",app.globalData.div)
  },
  testChange:function(e){
    console.log("模式切换",e.detail.value)
    if(e.detail.value==true)
    app.globalData.mode=1
    else app.globalData.mode=0
    console.log(app.globalData.mode)
  },
  numberChange:function(e){
    app.globalData.tinum=e.detail.value
  },
  easyChange:function(e){
    app.globalData.tinan=e.detail.value
  },
  startInter: function () {
    const that = this
    var second = that.data.second
    var minute = that.data.minute
    that.data.inter=setInterval(function () {  // 设置定时器
        second++
       
        if (second >= 60) {
            second = 0  //  大于等于60秒归零
            minute++
            if(minute==app.globalData.tinum){
              wx.navigateTo({
                url: '../result/result',
              })
        }
            if (minute < 10) {
                // 少于10补零
                that.setData({
                  minute: '0' + minute
                })
            } else {
                that.setData({
                  minute: minute
                })
            }
        }
        if (second < 10) {
            // 少于10补零
            that.setData({
                second: '0' + second
            })
        } else {
            that.setData({
                second: second
            })
        }
    }, 1000)
},
endInter:function(){
  const that =this
  clearInterval(that.data.inter)
},
  timu:function(){
    if(app.globalData.add==0&&app.globalData.sub==0&&app.globalData.div==0&&app.globalData.mul==0)
    {
      wx.showToast({
        title: '未选择题目',
        icon: 'loading',
        duration: 2000//持续的时间
      })
    }
    else
    wx.navigateTo({
      url:'/pages/a/a'
    })
  }
})
