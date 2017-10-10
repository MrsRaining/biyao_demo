<template>
    <div>
       <header>
           <div class="head-top">
              <span class="head-top-l" @click="backFn"></span>
              <span class="head-top-m">{{ this.$route.query.title }}</span>
              <span class="head-top-r" @click="headShowFn">
                  <img src="https://static.biyao.com/m/img/icon/list.png?v=biyao_a2ed1bc">
              </span>
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
        },
        created() {
            // console.log(this.$router);
        }
    }
</script>
    
<style lang="css" scoped>
    header{
        width: 100%;
        box-shadow: 0px 0px 1px #d9d8d8;
        background-color: #fff;
    }
    .head-top{
        height: 0.2rem;
        padding: 0.1rem 0.15rem 0.1rem 0.15rem;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }
    .head-top-l{
        float: left;
        width: 21%;
        height: 0.2rem;
    }
    .head-top-l:before{
        content: "";
        margin-top: 0.05rem;
        border: 1px solid gray;
        border-width: 1px 0 0 1px;
        float: left;
        width: 0.14rem;
        height: 0.14rem;
        transform-origin: 33.3% 33.3%;
        transform: rotate(-45deg);
    }
    .head-top-m{
        float: left;
        width: 58%;
        height: 0.2rem;
        text-align: center;
        font-size: 0.16rem;
        line-height: 0.2rem;
    }
    .head-top-r{
        float: left;
        width: 21%;
        text-align: right;
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