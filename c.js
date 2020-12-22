const app = getApp();
Page({
  data: {
    add:null,
    sub:null,
    mul:null,
    div:null,
    num1:null,
    num2:null,
    op:'',
    mode:null
  },
  onLoad:function(e){
    var ops=['+','-','*','÷']
    var fop
    this.setData({
      add:app.globalData.add,
      sub:app.globalData.sub,
      mul:app.globalData.mul,
      div:app.globalData.div,
      page:app.globalData.page,
      mode:app.globalData.mode
    })
    if(app.globalData.tinan==1){
      this.setData({
        num1:Math.floor(Math.random()*9)+1,
        num2:Math.floor(Math.random()*9)+1,//1-10
      })
    }
    if(app.globalData.tinan==2){
      this.setData({
        num1:Math.floor(Math.random()*49)+1,
        num2:Math.floor(Math.random()*49)+1,//1-50
      })
    }
    if(app.globalData.tinan==3){
      this.setData({
        num1:Math.floor(Math.random()*99)+1,
        num2:Math.floor(Math.random()*99)+1,//1-100
      })
    }
    app.globalData.page++
    if(app.globalData.add==0){
      ops[0]=null
      console.log("不含加法")
    }
    if(app.globalData.sub==0){
      ops[1]=null
      console.log("不含减法")
    }
    if(app.globalData.mul==0){
      ops[2]=null
      console.log("不含乘法")
    }
    if(app.globalData.div==0){
      ops[3]=null
      console.log("不含除法")
    }
    var i=Math.floor(Math.random()*3)
    fop=ops[i]
    while(fop==null)
    {
     fop=ops[(i++)%4]
    }
    this.setData({
      op:fop
    })   
    if(fop=='+') {
      console.log(this.data.num1,fop,this.data.num2,"=",this.data.num1+this.data.num2)
      app.globalData.timu[app.globalData.page-2]=this.data.num1+fop+this.data.num2
      app.globalData.stdresult[app.globalData.page-2]=this.data.num1+this.data.num2
    } 
    if(fop=='-') {
      if(this.data.num1-this.data.num2>=0)
      {console.log(this.data.num1,fop,this.data.num2,"=",this.data.num1-this.data.num2)
      app.globalData.timu[app.globalData.page-2]=this.data.num1+fop+this.data.num2
      app.globalData.stdresult[app.globalData.page-2]=this.data.num1-this.data.num2
    }
      else
      {
      console.log(this.data.num2,fop,this.data.num1,"=",this.data.num2-this.data.num1)
      app.globalData.timu[app.globalData.page-2]=this.data.num2+fop+this.data.num1
      app.globalData.stdresult[app.globalData.page-2]=this.data.num2-this.data.num1
      }
    }
    if(fop=='*') {
      console.log(this.data.num1,fop,this.data.num2,"=",this.data.num1*this.data.num2)
      app.globalData.timu[app.globalData.page-2]=this.data.num1+fop+this.data.num2
      app.globalData.stdresult[app.globalData.page-2]=this.data.num1*this.data.num2
    }
    if(fop=='÷') {
      if(this.data.num1>=this.data.num2)
      {
        if(this.data.num1%this.data.num2==0)
        {console.log(this.data.num1,fop,this.data.num2,"=",this.data.num1/this.data.num2)
        app.globalData.timu[app.globalData.page-2]=this.data.num1+fop+this.data.num2
        app.globalData.stdresult[app.globalData.page-2]=this.data.num1/this.data.num2
      }
        else
        {console.log(this.data.num1-(this.data.num1%this.data.num2),fop,this.data.num2,"=",(this.data.num1-(this.data.num1%this.data.num2))/this.data.num2)
        app.globalData.timu[app.globalData.page-2]=(this.data.num1-(this.data.num1%this.data.num2))+fop+this.data.num2
        app.globalData.stdresult[app.globalData.page-2]=(this.data.num1-(this.data.num1%this.data.num2))/this.data.num2
      }
      }
      else
      {
        if(this.data.num2%this.data.num1==0)
        {
        console.log(this.data.num2,fop,this.data.num1,"=",this.data.num2/this.data.num1)
        app.globalData.timu[app.globalData.page-2]=this.data.num2+fop+this.data.num1
        app.globalData.stdresult[app.globalData.page-2]=this.data.num2/this.data.num1  
      }
        else
        {console.log(this.data.num2-(this.data.num2%this.data.num1),fop,this.data.num1,"=",(this.data.num2-(this.data.num2%this.data.num1))/this.data.num1)
        app.globalData.timu[app.globalData.page-2]=(this.data.num2-(this.data.num2%this.data.num1))+fop+this.data.num1
        app.globalData.stdresult[app.globalData.page-2]=(this.data.num2-(this.data.num2%this.data.num1))/this.data.num1      
      }
      }
    }
  },
 result:function(){
   wx.redirectTo({
      url:'../result/result'
    })
  },
  getInput:function(e){
    app.globalData.result[app.globalData.page-2]=e.detail.value
  },
})

