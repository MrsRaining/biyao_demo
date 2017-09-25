<template>
    <div>
        <div class="nav-outer">
            <div class="nav-inner">
                <a href="##">推荐</a>
                <a href="##">男装</a>
                <a href="##">女装</a>
                <a href="##">眼镜</a>
                <a href="##">配饰</a>
                <a href="##">婴童</a>
                <a href="##">鞋靴</a>
                <a href="##">运动</a>
                <a href="##">皮具</a>
                <a href="##">出行</a>
                <a href="##">个护</a>
                <a href="##">美妆</a>
                <a href="##">居家</a>
                <a href="##">厨具</a>
                <a href="##">家电</a>
                <a href="##">家装</a>
                <a href="##">家具</a>
                <a href="##">数码</a>
                <a href="##">汽配</a>
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
        z-index: -10;
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
</style>