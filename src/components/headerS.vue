<template>
    <div>
       <header>
           <div class="head-top">
               <div class="head-top-l">
                   <span>请输入要搜索的商品</span>
               </div>
               <div class="head-top-r"></div>
           </div>
           <div class="head-bottom">
               <a href="##">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b4.png?v=biyao_d8f4e4c">
                   </p>
                   <p>首页</p>
               </a>
               <a href="##">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b12.png?v=biyao_ec8fbca">
                   </p>
                   <p>分类</p>
               </a>
               <a href="##">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b5.png?v=biyao_000cf98">
                   </p>
                   <p>购物车</p>
               </a>
               <a href="##">
                   <p>
                       <img src="https://static.biyao.com/m/img/icon/b6.png?v=biyao_4b664ee">
                   </p>
                   <p>我的必要</p>
               </a>
           </div>
       </header>
   </div>
</template>
    
<script>
    export default {
        name: "headerS",
        data () {
            return {
                 
            };
        }
    }
</script>
    
<style lang="css" scoped>
    header{
        width: 100%;
        height: 0.4rem;
    }
    .head-top{
        padding: 0.06rem 0.15rem 0.06rem 0.1rem;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }
    .head-top-l{
        float: left;
        height: 0.3rem;
        width: 3.4rem;
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
        background: url(https://static.biyao.com/m/img/icon/list.png?v=biyao_a2ed1bc) 0.05rem 0.03rem no-repeat;
        background-size: 80%;
        width: 0.3rem;
        height: 0.3rem;
        cursor: pointer;
    }
    .head-bottom{
        width: 100%;
        height: 0.47rem;
        border-bottom: 1px solid #e5e5e5;
        display: flex;
        justify-content: space-around;
        padding-top: 0.13rem;
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