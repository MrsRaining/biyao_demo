<template>
    <div class="details-outer">
        <div class="cover" v-show="isShow">

        </div>
       <header-t></header-t>
       <div class="d-head">
           <div class="d-head-top">
                <swiper :options="swiperOption" class="swiper-box">
                    <swiper-slide class="swiper-item">
                        <img :src="showList.imageUrl">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img :src="showList.imageUrl">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img :src="showList.imageUrl">
                    </swiper-slide>
                    <swiper-slide class="swiper-item">
                        <img :src="showList.imageUrl">
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
           </div>
           <div class="d-head-bottom">
               <p>{{ showList.title }}</p>
               <p>{{ showList.salePoint }}</p>
               <p>
                   <span class="span-l">￥{{ showList.price }}</span>
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
               <img :src="showList.imageUrl" alt="">
           </div>
       </div>
       <div class="d-main3">
           <p>以更健康的方式摆脱传统抹布依赖症</p>
           <div>
               <img :src="showList.imageUrl" alt="">
           </div>
       </div>
       <div class="bottom">
           <!-- <div class="bottom-c" v-show="isShow"></div> -->
           <div class="bottom-top" v-show="isShow">
               <div class="bottom-top-inn">
                   <div class="bottom-inn-t">
                       <span class="bottom-cancle" @click="closeFn">X</span>
                       <div class="bottom-inn-t-l">
                           <img :src="showList.imageUrl">
                       </div>
                       <div class="bottom-inn-t-r">
                           <p class="p-fir">￥699</p>
                           <p class="p-sec">生产周期：15天</p>
                           <p class="p-th">已选择：墨绿色，S，1件</p>
                       </div>
                   </div>
                   <div class="bottom-inn-m">
                       <div class="bottom-inn-m-t">
                           <p>颜色</p>
                           <div class="bottom-inn-m-t-c">
                               <a href="javascript:void(0);" v-for="(item, index) in color" :key="item.id" @click="colorFn(index)" :class="{'bottom-color': num1==index?true:false}">{{ item }}</a>
                           </div>
                       </div>
                       <div class="bottom-inn-m-t">
                           <p>尺寸</p>
                           <div class="bottom-inn-m-t-c">
                               <a href="javascript:void(0);" v-for="(item, index) in size" :key="item.id" @click="sizeFn(index)" :class="{'bottom-color': num2==index?true:false}">{{ item }}</a>
                           </div>
                       </div>
                   </div>
                   <div class="bottom-inn-b">
                       <div class="bottom-inn-b-t">
                           <span>购买数量</span>
                           <div>
                               <a href="javascript:void(0);">－</a>
                               <span>1</span>
                               <a href="javascript:void(0);">＋</a>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div class="footer">
                <div class="foot-left" v-show="!isShow">
                    <a href="javasript:void(0);">
                        <p><img src="https://static.biyao.com/m/img/icon/live.png?v=biyao_8242561"></p>
                        <p>客服</p>
                    </a>
                    <a href="javasript:void(0);">
                        <p><img src="https://static.biyao.com/m/img/base/icon_shopcarNew.png?v=biyao_254086b"></p>
                        <p>购物车</p>
                    </a>
                </div>
                <div class="foot-right">
                    <a href="javasript:void(0);" @click="shopFn">
                        <p>加入购物车</p>
                    </a>
                    <a href="javasript:void(0);" @click="shopFn">
                        <p>立即购买</p>
                    </a>
                </div>
                
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
                    autoplay: 2000,
                    loop: true
                },
                showList: "",
                isShow: false,
                color: ["墨绿色", "黑色", "卡其色"],
                size: ["S", "M", "L", "XL", "XXL", "XXXL"],
                num1: 0,
                num2: 0

            };
        },
        //这里有个问题！！
        created() {
            this.showList = JSON.parse(window.sessionStorage.goodList);
            console.log(this.showList);    
        },
        methods: {
            shopFn() {
                this.isShow = true;
            },
            closeFn() {
                this.isShow = false;
            },
            colorFn(index) {
                this.num1 = index;
            },
            sizeFn(index) {
                 this.num2 = index;
            }
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
    .footer{
        display: flex;
        justify-content: space-around;
        height: 0.49rem;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #cccccc;
    }
    .footer .foot-left img{
        width: 0.22rem;
        height: 0.19rem;
    }
    .footer p{
        text-align: center;
    }
    .footer .foot-left{
        width: 1.38rem;
        float: left;
        display: flex;
        justify-content: space-around;
    }
    .footer .foot-left a{
        /* width: 50%; */
        padding-top: 0.06rem;
        color: #808080;
        flex-grow: 1;
        border-right: 1px solid #ccc;
    }
    .footer .foot-right{
        float: left;
        flex-grow: 1;
    }
    .footer .foot-right a{
        float: left;
        width: 50%;
        color: #7f4395;
    }
    .footer .foot-right p{
        line-height: 0.49rem;
        font-size: 0.14rem;
    }
    .footer .foot-right a:last-of-type{
        background-color: #7f4395;
        color: #fff;
    }
    .bottom{
        width: 100%;
        background-color: #fff;
        position: fixed;
        bottom: 0;
        z-index: 100;
    }
    .bottom .bottom-top{
        width: 100%;
    }
    .bottom .bottom-c{
        height: 0.12rem;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }
    .bottom .bottom-top-inn{
        padding: 0 0.12rem;
    }
    .bottom .bottom-inn-t{
         height: 1.02rem;
         border-bottom: 1px solid #dddddd;
         position: relative;
    }
    .bottom .bottom-inn-t .bottom-cancle{
        width: 0.2rem;
        height: 0.2rem;
        border-radius: 0.1rem;
        border: 2px solid #393939;
        display: block;
        line-height: 0.2rem;
        text-align: center;
        position: absolute;
        top: 0.17rem;
        right: 0.04rem;
    }
    .bottom .bottom-inn-t-l{
        float: left;
        width: 1.01rem;
        height: 1.01rem;
        border: 1px solid #dddddd;
        margin-top: -0.12rem;
    }
    .bottom .bottom-inn-t-l img{
        width: 100%;
        height: 100%;;
    }
    .bottom .bottom-inn-t-r{
        float: left;
        height: 0.9rem;
        padding-top: 0.12rem;
        padding-left: 0.07rem;
    }
    .bottom .bottom-inn-t-r p{
        line-height: 0.2rem;
    }
    .bottom .bottom-inn-t-r .p-fir{
        color: #7f4395;
        font-size: 0.15rem;
    }
    .bottom .bottom-inn-t-r .p-sec{
        color: #808080;
        font-size: 0.12rem;
    }
    .bottom .bottom-inn-t-r .p-th{
        color: #000;
        font-size: 0.12rem;
    }
    .bottom .bottom-inn-m{
        height: 2.22rem;
        border-bottom: 1px solid #dddddd;
    }
    .bottom .bottom-inn-m-t{
        height: 0.88rem;
    }
    .bottom .bottom-inn-m-t p{
        height: 0.37rem;
        line-height: 0.37rem;
    }
    .bottom .bottom-inn-m-t>div a{
        float: left;
        height: 0.32rem;
        line-height: 0.32rem;
        padding: 0 0.2rem;
        color: #808080;
        border: 1px solid #cccccc;
        border-radius: 5px;
        margin-right: 0.2rem;
        margin-bottom: 0.1rem;
    }
    .bottom .bottom-inn-b{
        height: 0.74rem;
    }
    .bottom .bottom-inn-b-t{
        height: 0.44rem;
        line-height: 0.44rem;
    }
    .bottom .bottom-inn-b-t>div{
        float: right;
        height: 0.24rem;
    }
    .bottom .bottom-inn-b-t>div a{
        display: inline-block;
        height: 0.24rem;
        width: 0.24rem;
        line-height: 0.24rem;
        text-align: center;
        border-radius: 0.12rem;
        border: 1px solid #b1b1b1;
        font-size: 0.16rem;
        color: #b1b1b1;
    }
    .bottom .bottom-inn-b-t>div span{
        display: inline-block;
        width: 0.3rem;
        text-align: center;
    }
    .cover{
        position: fixed;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 50;
    }
    .bottom .bottom-inn-m .bottom-color{
        background-color: #7f4395;
        color: #fff;
    }
</style>