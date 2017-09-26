<template>
    <div>
        <div class="nav-outer">
            <div class="nav-inner">
                <!-- 这里的：key需要注意 -->
                <div v-for="(item, index) in navList" :key="item.link" @click="setNavActive(index)" class="nav-inner-div">
                    <router-link :to='"/home/" + item.link' :class="{'nav-a-active': navActive==index}">{{ item.content}}</router-link>
                </div>
                <!-- <router-link to="/home/nanzhuang">男装</router-link>
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
                <router-link to="/home/qipei">汽配</router-link> -->
            </div>
        </div>
   </div>
</template>
    
<script>
    export default {
        name: "nav",
        data () {
            return {
                 navList: [
                     {link: 'tuijian', content: '推荐'},
                     {link: 'nanzhuang', content: '男装'},
                     {link: 'nvzhuang', content: '女装'},
                     {link: 'yanjing', content: '眼镜'},
                     {link: 'peishi', content: '配饰'},
                     {link: 'yingtong', content: '婴童'},
                     {link: 'xiexue', content: '鞋靴'},
                     {link: 'yundong', content: '运动'},
                     {link: 'piju', content: '皮具'},
                     {link: 'chuxing', content: '出行'},
                     {link: 'gehu', content: '个护'},
                     {link: 'meizhuang', content: '美妆'},
                     {link: 'jujia', content: '居家'},
                     {link: 'chuju', content: '厨具'},
                     {link: 'jiadian', content: '家电'},
                     {link: 'jiazhuang', content: '家装'},
                     {link: 'jiaju', content: '家具'},
                     {link: 'shuma', content: '数码'},
                     {link: 'qipei', content: '汽配'},
                 ],
                 navActive: 0
            };
        },
        methods: {
            setNavActive(index) {
                this.navActive = index;
                console.log(11);
            }
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
        border-bottom: 1px solid #e5e5e5;
    }
    .nav-inner-div{
        float: left;
    }
    .nav-inner a{
        width: 0.54rem;
        height: 0.45rem;
        float: left;
        line-height: 0.45rem;
        text-align: center;
        color: #808080;
        font-size: 0.14rem;
    }
    .nav-inner .nav-a-active{
         border-bottom: 1px solid #7f4395;
         color: #7f4395;
    }
</style>