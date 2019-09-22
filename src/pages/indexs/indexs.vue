<template>
   
     <view>
         <swiper class="swiper" indiicator-dots="true" autoplay="true" interval="5000" duration="1000">
             
             <swiper-item>
             <img class="img" src="/static/images/ligong.jpg" >
             </swiper-item>>
             <swiper-item>
             <img class="img" src="/static/images/dong.jpg" >
             </swiper-item>>
             <swiper-item>
             <img class="img" src="/static/images/fenglin.jpg" > 
             </swiper-item>>
             <swiper-item>
             <img class="img" src="/static/images/school.jpg" >
             </swiper-item>>
         </swiper>

        <button @click="addpoe" class="btn">刷新诗歌</button>
        
     </view>
     
   
</template>


<script>
// import addpoe from './addpoe'
// import qcloud from 'wafer2-client-sdk'
 import config from '@/config.js'
 import {post} from '@/util'
// import {showModal} from '@/utils/showmodal'
// import YearProgress from '@/components/YearProgress'
export default{
mounted(){
    console.log("页面跳转")
},
methods:{
  async addpoe () {
      console.log(222,this.userInfo)
      console.log("页面跳转!!!!")
      const res = await post('/weapp/addpoe',this.userInfo)
        
      console.log(233, res.data)

      if (res.data.title) {
        showModal(res.data.title, res.data.msg)
      }
      // else {
      //   showModal('提示',res.data.msg)
      // }
    },
    scanpoe () {
      console.log("scanpoe")
      const that = this
      wx.scanCode({
        success (res) {
          if (res.result) {
            that.addpoe(res.result)
            console.log(555, res)
          }
        }
      })
      }
     }
}
</script>

<style>
.img{
  height:100%;;
  width: 100%;
  border-radius: 5px;
  
}
.swiper{
    padding-bottom: 20px;
    border-bottom-color: dimgrey;
    margin-bottom: 20;
}
.username{
text-align: center;

}

.btn{
  margin-top: 200rpx;
  border-bottom-color: rgb(9, 29, 29);
  
  
  
}
</style>

