<template>
    <div>
       <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item">
                 <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/66/rBACVFnE5hqADLAcAADAKIqsmKQ044.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                 <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE5fWAQfrMAAFevveVmWk321.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                 <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE5meAN7_KAADyBaoDFyg690.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                 <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/66/rBACVFnE5pKAKknyAAEPE2bEGJA126.jpg" alt="">
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                 <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/67/rBACVFnE5vqAdQtOAAFIZe-vdKA095.jpg" alt="">
                </a>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
   </div>
</template>
    
<script>
    export default {
        name: "cart",
        data () {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    autoplay: 2000,
                    pagination : '.swiper-pagination',
                    // paginationClickable: true,
                    // spaceBetween: 30,
                    // mousewheelControl: true
                } 
            };
        }
    }
</script>
    
<style lang="css" scoped>
    .swiper-box{
    width: 100%;
    height: 2.31rem;
}

.swiper-box img{
    width: 100%;
    height: 2.10rem;
}
.swiper-pagination{
    bottom: 0.25rem;
    text-align: right;
}
</style>