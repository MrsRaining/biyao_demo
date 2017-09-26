<template>
    <div>
           
        <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item" v-for="(item, index) in navList" :key="item.id"><router-link :to="'/home/'+item.link">{{ item.content }}</router-link></swiper-slide>
            <!-- <swiper-slide class="swiper-item">Slide 2</swiper-slide>
            <swiper-slide class="swiper-item">Slide 3</swiper-slide>
            <swiper-slide class="swiper-item">Slide 4</swiper-slide>
            <swiper-slide class="swiper-item">Slide 5</swiper-slide>
            <swiper-slide class="swiper-item">Slide 6</swiper-slide>
            <swiper-slide class="swiper-item">Slide 7</swiper-slide>
            <swiper-slide class="swiper-item">Slide 8</swiper-slide>
            <swiper-slide class="swiper-item">Slide 9</swiper-slide>
            <swiper-slide class="swiper-item">Slide 10</swiper-slide> -->
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
        </swiper>
   </div>
</template>
    
<script>
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
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
                navActive: 0,
                 swiperOption: {
                    slidesPerView: 8,
                    freeMode: true,
                    // paginationClickable: true,
                    // spaceBetween: 30,
                    // mousewheelControl: true
                }
            }
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
    /* .nav-outer{
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
    } */
    .swiper-box{
        width: 100%;
        height: 0.46rem;
        border: 1px solid #e5e5e5;
    }
    .swiper-item{
        width: 0.54rem;
        height: 0.45rem;
        line-height: 0.45rem;
        text-align: center;
    }
    .swiper-item>a{
        color: #808080;
        width: 100%;
        height: 100%;
        display: block;
    }
    /* .swiper-item .colorShow{
        color: #7f4395;
        border-bottom: 1px solid #7f4395;
    } */
    .swiper-item .router-link-active{
        color: #7f4395;
        border-bottom: 1px solid #7f4395;
    }
</style>