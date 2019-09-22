<template>
   <div class="container">
     <div>
       <img class="userimg" src="/static/tabs/avatar/2.png">
       <p class="username">看不见</p>
     </div>
      
     <div>
      <!-- <button type="getuserinfo" @getuserinfo="dologin">dianwo</button> -->
      <button  class="btn" open-type="getUserInfo" lang="zh_CN" @getuserinfo="doLogin">授权登录</button>
     </div>
     
  </div>
</template>


<script>
import qcloud from 'wafer2-client-sdk'
import config from '@/config.js'
import {get} from '@/util'
// import {showModal} from '@/utils/showmodal'
export default {
  data() {
     return {
      userInfo: {
        // avatarUrl: '../../../static/images/nouser.png',
        nickName: '登陆'
      }
    }
  },
  methods:{
      doLogin (e) {
      const self = this
      console.log(self)
      qcloud.setLoginUrl(config.loginUrl)
      console.log(config.loginUrl)
      qcloud.login({
        success: function (userInfo) {
          qcloud.request({
            url: config.userUrl,
            login: true,
            success (userRes) {
              wx.setStorageSync('userInfo', userRes.data.data)
              self.userInfo = userRes.data.data
              console.log(456, self.userInfo)
              // self.userInfo = userInfo
              wx.showToast({
                title: '成功',
                icon: 'success',
                duration: 2000
              })
            }
          })
          // console.log('登录成功', userInfo)
          // wx.setStorageSync('userInfo', userInfo)
        },
        fail: function (err) {
          console.log('登录失败', err)
        }
      })
    },
    getDemo(){
    console.log("getdemo-start")
    get('/weapp/demo')
    console.log("getdemo-end")
  }
  },
  mounted(){
    console.log("小程序已经启动了")
    this.getDemo()
  }
  
}
</script>

<style>
.userimg{
  height: 200rpx;
  width: 200rpx;
  border-radius: 30px;
}
.username{
text-align: center;

}

.btn{
  margin-top: 200rpx;
  border-bottom-color: aqua;
  
  
}
</style>

