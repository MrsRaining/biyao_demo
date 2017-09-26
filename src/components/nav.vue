<template>
    <div>
        <div class="nav-outer">
            <div class="nav-inner">
                <router-link to="/home/tuijian" class="nav-a-active">推荐</router-link>
                <router-link to="/home/nanzhuang">男装</router-link>
                <router-link to="/home/nvzhuang">女装</router-link>
                <router-link to="/home/yanjing">眼镜</router-link>
                <router-link to="/home/peishi">配饰</router-link>
                <router-link to="/home/yingtong">婴童</router-link>
                <router-link to="/home/xiexue">鞋靴</router-link>
                <router-link to="/home/yundong">运动</router-link>
                <router-link to="/home/piju">皮具</router-link>
                <router-link to="/home/chuxing">出行</router-link>
                <router-link to="/home/gehu">个护</router-link>
                <router-link to="/home/meizhuang">美妆</router-link>
                <router-link to="/home/jujia">居家</router-link>
                <router-link to="/home/chuju">厨具</router-link>
                <router-link to="/home/jiadian">家电</router-link>
                <router-link to="/home/jiazhuang">家装</router-link>
                <router-link to="/home/jiaju">家具</router-link>
                <router-link to="/home/shuma">数码</router-link>
                <router-link to="/home/qipei">汽配</router-link>
            </div>
        </div>
   </div>
</template>
    
<script>
    export default {
        name: "nav",
        data () {
            return {
                 
            };
        }
    }
</script>
    
<style lang="css" scoped>
    .nav-outer{
        width: 100%;
        height: 0.62rem;
        overflow-x: auto;
        overflow-y: hidden;
        position: relative;
        z-index: 0;
    }
    .nav-inner{
        width: 10.3rem;
        height: 0.46rem;
        padding: 0 0.15rem;
    }
    .nav-inner>a{
        float: left;
        width: 0.54rem;
        height: 0.44rem;
        line-height: 0.44rem;
        text-align: center;
        color: #808080;
        font-size: 0.14rem;
    }
    .nav-inner .nav-a-active{
         border-bottom: 1px solid #7f4395;
         color: #7f4395;
    }
</style>