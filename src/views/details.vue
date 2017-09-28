<template>
    <div class="details-outer">
       <div class="d-head">
           <div class="d-head-top">
                <swiper :options="swiperOption" class="swiper-box">
                    <swiper-slide class="swiper-item">
                        <img src="https://bfs.biyao.com/group1/M00/1A/0D/rBACYVmRRfmAIogUAAF8gyo-LsQ369.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img src="https://bfs.biyao.com/group1/M00/18/5A/rBACVFmRRgCACI2uAAGIVZCM4KI412.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img src="https://bfs.biyao.com/group1/M00/1A/12/rBACW1mRRlWAHA8QAAGC3sa0JV0906.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img src="https://bfs.biyao.com/group1/M00/1A/11/rBACYVmRXJuAWKZmAAGFVnCq2iE713.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img src="https://bfs.biyao.com/group1/M00/1A/F0/rBACYVmby52ADBGUAAGEo1L4vJY403.jpg">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
           </div>
           <div class="d-head-bottom">
               <p>免洗厨房懒人抹布 3卷装 50节/卷</p>
               <p>天然纤维和优质木匠材料，吸水性好，吸油不沾油，每张可重复使用十次左右</p>
               <p>
                   <span class="span-l">￥69</span>
                   <span class="span-r">生产周期：15天</span>
               </p>
           </div>
       </div>
       <div class="d-intro">
           <div class="d-intro-inner">
               <span>七天无忧退换</span>
               <span>先行赔付</span>
               <span>超时赔偿</span>
               <span>全场包邮</span>
           </div>
       </div>
       <div class="d-main1">
           <div class="d-main1-top">
               <span>已选择：3卷装，1件</span>
           </div>
           <div class="d-main1-top d-main1-bottom">
               <span class="span-l">商品评价(201)</span>
               <span class="span-r">4.9分</span>
           </div>
       </div>
       <div class="d-main2">
           <div class="d-main2-inner">
              <ul>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
                  <li>
                      <span>品牌</span>
                      <span>Blilin百丽林</span>
                  </li>
              </ul>
           </div>
       </div>
       <div class="d-main3">
           <p>以更健康的方式摆脱传统抹布依赖症</p>
           <div>
               <img src="https://bfs.biyao.com/group1/M00/18/5A/rBACVFmRR9SASg8-AAOeYQ4HViQ190.jpg" alt="">
           </div>
       </div>
       <div class="d-main3">
           <p>以更健康的方式摆脱传统抹布依赖症</p>
           <div>
               <img src="https://bfs.biyao.com/group1/M00/18/5A/rBACVFmRR9SASg8-AAOeYQ4HViQ190.jpg" alt="">
           </div>
       </div>
       <div class="d-main3">
           <p>以更健康的方式摆脱传统抹布依赖症</p>
           <div>
               <img src="https://bfs.biyao.com/group1/M00/18/5A/rBACVFmRR9SASg8-AAOeYQ4HViQ190.jpg" alt="">
           </div>
       </div>
       <div class="d-main3">
           <p>以更健康的方式摆脱传统抹布依赖症</p>
           <div>
               <img src="https://bfs.biyao.com/group1/M00/18/5A/rBACVFmRR9SASg8-AAOeYQ4HViQ190.jpg" alt="">
           </div>
       </div>
   </div>
</template>
    
<script>
    export default {
        name: "details",
        data () {
            return {
                 swiperOption: {
                    slidesPerView: 1,
                    pagination : '.swiper-pagination',
                    autoplay: 2000
                }
            };
        }
    }
</script>
    
<style lang="css" scoped>
    .details-outer{
        background-color: #f2f2f2;
    }
    .d-head{
        width: 100%;
        height: 5.3rem;
        border-bottom: 1px solid #f2f2f2;
        background-color: #fff;
    }
    .d-head .d-head-top{
        width: 100%;
        height: 4.14rem;
    }
    .d-head .d-head-top .swiper-box{
        width: 100%;
        height: 100%;
    }
    .d-head .d-head-top .swiper-box .swiper-pagination{
        text-align: right;
    }
    .d-head .d-head-top .swiper-box img{
        width: 100%;
        height: 100%;
    }
    .d-head .d-head-bottom{
        width: 100%;
        height: 1.17rem;
    }
    .d-head .d-head-bottom p{
        height: 0.39rem;
        padding: 0 0.11rem;
    }
    .d-head .d-head-bottom p:nth-of-type(1){
        color: #000;
        font-size: 0.18rem;
        line-height: 0.39rem;
    }
    .d-head .d-head-bottom p:nth-of-type(2){
        color: #808080;
        font-size: 0.12rem;
    }
    .d-head .d-head-bottom p:nth-of-type(3) .span-l{
        color: #f85453;
        font-size: 0.14rem;
        float: left;
        line-height: 0.39rem;
    }
    .d-head .d-head-bottom p:nth-of-type(3) .span-r{
        float: right;
        color: #000;
        font-size: 0.12rem;
        line-height: 0.39rem;
    }
    .d-intro{
        margin-top: 0.1rem;
        width: 100%;
        height: 0.5rem;
        background-color: #fff;
        border-bottom: 1px solid #f2f2f2;
    }
    .d-intro .d-intro-inner{
        padding: 0 0.12rem 0 0.12rem;
        height: 0.5rem;
        width: 3.9rem;
        line-height: 0.5rem;
        color: #999999;
        background: url(https://static.biyao.com/m/img/icon/s4.png?v=biyao_e37c626) no-repeat center right;
        background-size: auto 35%;
        background-origin: content-box;
        
    }
    .d-intro .d-intro-inner span{
        float: left;
        margin-right: 0.12rem;
        font-size: 0.12rem;
    }
    .d-intro .d-intro-inner span:before{
        content: "";
        background: url(../assets/imgs/ico_16.png) no-repeat 0 center;
        width: 0.16rem;
        height: 0.16rem;
        display: inline-block;
        vertical-align: middle;
        margin-right: 4px;
    }
    .d-main1{
        width: 100%;
        height: 0.91rem;
        margin-top: 0.1rem;
        background-color: #fff;
    }
    .d-main1 .d-main1-top{
        width: 3.9rem;
        height: 0.45rem;
        line-height: 0.45rem;
        padding: 0 0.12rem 0 0.12rem;
        color: #000;
        background: url(https://static.biyao.com/m/img/icon/s4.png?v=biyao_e37c626) no-repeat center right;
        background-size: auto 35%;
        background-origin: content-box;
        border-bottom: 1px solid #cccccc;
    }
    .d-main1 .d-main1-bottom .span-l{
        float: left;
    }
    .d-main1 .d-main1-bottom .span-r{
        float: right;
        margin-right: 0.28rem;
        font-size: 0.1rem;
        color: #999;
        line-height: 0.5rem;
    }
    .d-main2{
        width: 100%;
        /* height: 3.03rem; */
        background-color: #eeeeee;
        margin-top: 0.1rem;
    }
    .d-main2 .d-main2-inner{
        width: 3.64rem;
        padding: 0.12rem 0.25rem 0.13rem 0.25rem;
        /* background-color: blue; */
    }
    .d-main2 .d-main2-inner ul li{
        line-height: 0.31rem;
        border-bottom: 1px dotted #000;
        overflow: hidden;
    }
    .d-main2 .d-main2-inner ul li span:first-of-type{
        float: left;
        width: 32%;
    }
    .d-main2 .d-main2-inner ul li span:last-of-type{
        float: left;
        width: 68%;
    }
    .d-main3{
        width: 100%;
        height: 5.86rem;
        background-color: #fff;
        margin-bottom: 0.1rem;
    }
    .d-main3 p{
        height: 0.49rem;
        width: 100%;
        font-size: 0.14rem;
        color: #000;
        line-height: 0.49rem;
        text-align: center;
    }
    .d-main3>div{
        padding: 0 0.1rem 0.1rem 0.1rem;
    }
    .d-main3>div img{
        width: 100%;
        height: 100%;
    }
</style>