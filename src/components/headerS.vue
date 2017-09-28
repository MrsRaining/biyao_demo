<template>
    <div>
       <header>
           <div class="head-top">
               <div class="head-top-l" @click="backFn">
                   <span>请输入要搜索的商品</span>
               </div>
               <div class="head-top-r" @click="headShowFn">
                   <img src="https://static.biyao.com/m/img/icon/list.png?v=biyao_a2ed1bc">
               </div>
           </div>
           <div class="head-bottom" v-show="headShow">
               <router-link to="/home">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b4.png?v=biyao_d8f4e4c">
                   </p>
                   <p>首页</p>
               </router-link>
               <router-link to="/classify">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b12.png?v=biyao_ec8fbca">
                   </p>
                   <p>分类</p>
               </router-link>
               <router-link :to="{path: '/cart', query: {title: '购物车'}}">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b5.png?v=biyao_000cf98">
                   </p>
                   <p>购物车</p>
               </router-link>
               <router-link :to="{path: '/mine', query: {title: '个人中心'}}">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b6.png?v=biyao_4b664ee">
                   </p>
                   <p>我的必要</p>
               </router-link>
           </div>
       </header>
   </div>
</template>
    
<script>
    export default {
        name: "headerS",
        data () {
            return {
                 headShow: false
            };
        },
        methods: {
            headShowFn() {
                this.headShow = !this.headShow;
            },
            backFn() {
                this.$router.go(-1);
            }
        }
    }
</script>
    
<style lang="css" scoped>
    header{
        width: 100%;
        /* height: 1.04rem; */
    }
    .head-top{
        padding: 0.06rem 0.15rem 0.06rem 0.1rem;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }
    .head-top-l{
        float: left;
        height: 0.3rem;
        width: 87%;
        background-color: #f2f2f2;
        line-height: 0.3rem;
        border-radius: 3px;
    }
    .head-top-l span{
        color: #808080; 
    }
    .head-top-l span:before{
        content: "";
        background: url(https://static.biyao.com/m/img/icon/search_01_03.png?v=biyao_cb4f4bc) no-repeat center center;
        display: inline-block;
        background-size: 50%;
        vertical-align: middle;
        width: 0.3rem;
        height: 0.16rem;
        
    }
    .head-top-r{
        float: right;
        width: 13%;
        height: 0.27rem;
        cursor: pointer;
        text-align: center;
         text-indent: 0.25rem; 
        padding-top: 0.03rem;
    }
    .head-top-r img{
        width: 0.25rem;
        height: 0.25rem;
    }
    .head-bottom{
        width: 100%;
        height: 0.47rem;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-around;
        padding-top: 0.13rem;
        position: absolute;
        /* top: 0.4rem; */
        z-index: 100;
        background-color: #fff;
    }
    .head-bottom a{
        flex-grow: 1;
        display: block;
        color: #646464;
        font-size: 0.12rem;
    }
    .head-bottom a p{
        text-align: center;
    }
    .head-bottom a p img{
        width: 0.22rem;
        height: 0.22rem;
    }
</style>