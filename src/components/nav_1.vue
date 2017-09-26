<template>
    <div>
        <my-banner></my-banner>
        <!-- 必要说 -->
        <a href="#" id="msgBar">
            <div class="msgContent">
                    <img src="https://bfs.biyao.com/group1/M00/00/1A/wKhkVFj-edmADpllAAAUli6cC9U929.png">
                    | 是时候制止数码产品的暴利了!
            </div>
            <div>
                <span class="goIcon">
                    <!-- ::before -->
                </span>
            </div>  
        </a>
        
        <!-- 模块1 -->
        <div id="module1">
            <a href="#">
                <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE6AmAPBpJAAEya9Bkdz8598.jpg" id="pic1">      
            </a> 
            <a href="#">
                <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACW1nE6BeAFokXAAA2eyo_6Go745.jpg" id="pic2">
            </a>    
            <a href="#">
                <img src="https://bfs.biyao.com/group1/M00/1B/67/rBACVFnE6CaAD207AAB0U4OssqY353.jpg" id="pic3">
            </a>    
        </div>

        <!-- 精选 -->
        <div id="module2">
            <div class="module2-title">精选</div>
           
            <!-- <a href="#">
                <img src="" class="module2-pic">
            </a>
            <a href="#">
                <img src="" class="module2-pic">
            </a>
            <a href="#">
                <img src="" class="module2-pic">
            </a>
            <a href="#">
                <img src="" class="module2-pic">
            </a>
            <a href="#">
                <img src="" class="module2-pic">
            </a> -->
             <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide class="swiper-item">
                     <a href="#">
                        <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE6IWAPgEsAAErdvmGtDw843.jpg" class="module2-pic">
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                     <a href="#">
                        <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE6IWAPgEsAAErdvmGtDw843.jpg" class="module2-pic">
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                     <a href="#">
                        <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE6IWAPgEsAAErdvmGtDw843.jpg" class="module2-pic">
                    </a>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                     <a href="#">
                        <img src="https://bfs.biyao.com/group1/M00/1D/1B/rBACYVnE6IWAPgEsAAErdvmGtDw843.jpg" class="module2-pic">
                    </a>
                </swiper-slide>
            </swiper>
        </div>
       
        <!-- 光学眼镜 -->
        <div id="optical-glasses">
            <div class="module-title">光学眼镜</div>
            <!-- 图片 -->
            <a href="#">
                <img src="https://bfs.biyao.com/group1/M00/1C/06/rBACW1mvtHiAH5vtAABDiovhozc223.jpg" class="module-pic">
                <div class="inner-introduction">
                    <div class="inner-content">
                        <div class="p1">依视路集团旗下</div>
                        <div class="p2">企业制造</div>
                    </div>
                </div>
            </a>
            <!-- 商品列表 -->
            <div class="glass-list">
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/6F/rBACYVmk2S2AfpGaAAArzDqsUjA106.jpg">
                    <div class="title1">无声派对复古-C</div>
                    <div class="price1">￥249</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/16/70/rBACVFl5V--ER9JuAAAAAI2dZXo223.jpg">
                    <div class="title2">钛金属-Mars</div>
                    <div class="price2">￥299</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/16/51/rBACW1lfRwuEENdZAAAAAHHWObc126.jpg">
                    <div class="title3">纯钛飞行员太阳镜</div>
                    <div class="price3">￥249</div>
                </a>
            </div>
        </div>

        <!-- 品质男装 -->
        <div id="man-custom">
            <div class="module-title">品质男装</div>
            <a href="#">
                <img src="https://bfs.biyao.com/group1/M00/19/F0/rBACVFmns_6AAwj8AADcjblhiDk031.jpg" class="module-pic">
                <div class="inner-introduction">
                    <div class="inner-content">
                        <div class="p1">Hugo Boss、PRADA</div>
                        <div class="p2">制造商出品</div>
                    </div>
                </div>
            </a>

            <!-- 男装列表 -->
            <div class="custom-list">
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/0F/3E/rBACVFke_GCARgfXAABh7oDy5f4293.jpg" >
                    <div class="title1">三防免烫衬衫五色</div>
                    <div class="price1">￥219</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/39/rBACVFnCBsmAVQ7DAACBdTYVTyg934.jpg" >
                    <div class="title2">意大利进口面料...</div>
                    <div class="price2">￥299</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1B/97/rBACYVmmjXaAVidMAACMu-OAU-w438.jpg" >
                    <div class="title3">solTAL免烫长/短袖P..</div>
                    <div class="price3">￥189</div>
                </a>
    <!--  -->
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1A/F6/rBACW1mb6VmAH0vyAAA6crbKh1Q291.jpg">
                    <div class="title4">藏青色斜纹混纺西裤</div>
                    <div class="price4">￥339</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1C/6E/rBACW1m3fReAOidUAACHf02tRJ8077.jpg" >
                    <div class="title5">中款商务男风衣</div>
                    <div class="price5">￥799</div>
                </a>
                <a href="#">
                    <img src="https://bfs.biyao.com/group1/M00/1C/5D/rBACW1m2QJ6AA_NVAAB6czCj0cc863.jpg" >
                    <div class="title6">牙刷蜜蜂袖标卫衣</div>
                    <div class="price6">￥259</div>
                </a>
            </div>
        </div>
   </div>
</template>
    
<script>
    import banner from './banner'
    export default {
        name: "nav_1",
        data () {
            return {
                swiperOption: {
                    slidesPerView: 1,
                    // paginationClickable: true,
                    spaceBetween: 10,
                    // mousewheelControl: true
                } 
            };
        },
        components: {
            "my-banner": banner
        }
    }
</script>
    
<style lang="css" scoped>
body{
    background-color: #f0f0f0;
}
/* 必要说 */
#msgBar{
    display: block;
    width: 100%;
    height: 42px;
    background-color: #fff;
    margin-top: -20px;
    font-size:16px;
    color: gray;
    text-decoration: none; 
}

#msgBar .msgContent{
    width: 100%;
    height: 0.42rem;
    text-align: left;
    display: flex;
    align-items: center;
    margin-left: 0.10rem;
}

#msgBar img{
    width: 0.93rem;
    height: 0.20rem;
}


/* 模块1 */
#module1{
    width: 100%;
    height: 3.16rem;
    background-color: #fff;
    margin-top: 0.10rem;
    box-shadow: 0 0.05rem 0.15rem #888888;
}

#module1  img{
    display: inline-block;
    float: left;
}

#pic1{
    width: 2.38rem;
    height: 3.04rem;
    margin-right: 0.06rem;
}

#pic2{
    width: 1.70rem;
    height: 1.49rem;
    margin-bottom: 0.05rem;
}

#pic3{
    width: 1.70rem;
    height: 1.49rem;
}

/* 精选 */
#module2{
    width: 100%;
    height: 2.60rem;
    background-color:#fff; 
    margin-top: 0.10rem;
    box-shadow: 0 0.05rem 0.15rem #888888;
}
#module2 .module2-title{
    width: 100%;
    height: 0.5rem;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.5rem;
}

#module2 .module2-pic{
    width: 3.62rem;
    height: 1.97rem;
    margin: 0 0.05rem 0 0.05rem;
}


/* 光学眼镜 */
#optical-glasses{
    width: 100%;
    height: 4.41rem;
    background-color: #fff;
    box-shadow: 0 0.05rem 0.15rem #888888; 
    margin-top: 0.1rem;
    position: relative;
}

 .module-title{
    width: 100%;
    height: 0.5rem;
    font-size: 0.16rem;
    text-align: center;
    line-height: 0.5rem;
}

.module-pic{
    width: 100%;
    height: 1.82rem;
}

.inner-introduction{
    position: absolute;
    top: 100px;
    left: 95px;
    width: 55%;
    height: 0.76rem;
    border: 3px solid #fff;
    font-size: 16px;
    text-align: center;
    color: #000;
    font-weight: bold;
}

.inner-content{
    width: 98%;
    height: 70px;
    background-color: #fff;  
    margin: 3px;
}

.inner-content .p1{
    height: 50%;
    line-height: 275%;
}

.inner-content .p2{
    height: 50%;
    line-height: 160%;
}

#optical-glasses .glass-list{
    position: relative;
    margin-top: 0.1rem;
}

#optical-glasses .glass-list a{
    font-size: 12px;
    text-decoration: none;
    color: #000;
    display: inline-block;
    width: 32.5%;
    height: 2rem;
    margin-right: -25px;
}

#optical-glasses .glass-list img{
    width: 100%;
    height: 1.37rem;
}

#optical-glasses .title1{
    position: absolute;
    top: 142px;
    left: 21px;
}

#optical-glasses .price1{
    position: absolute;
    top: 160px;
    left: 46px;
    color: #f33;
}

#optical-glasses .title2{
    position: absolute;
    top: 142px;
    left: 172px;
}

#optical-glasses .price2{
    position: absolute;
    top: 160px;
    left:190px;
    color: #f33;
}

#optical-glasses .title3{
    position: absolute;
    top: 142px;
    left: 296px;
}

#optical-glasses .price3{
    position: absolute;
    top: 160px;
    left:325px;
    color: #f33;
}

/* 品质男装 */
#man-custom{
    width: 100%;
    height: 739px;
    background-color: #fff;
    position: relative;
    margin-top: 0.1rem;
}

/* 男装列表 */
#man-custom .title1{
    position: absolute;
    top: 142px;
    left: 21px;
}

#man-custom .custom-list{
    position: relative;
    margin-top: 0.1rem;
}

#man-custom .custom-list a{
    font-size: 12px;
    text-decoration: none;
    color: #000;
    display: inline-block;
    width: 32.5%;
    height: 1.7rem;
    margin-right: -25px;
}

#man-custom .custom-list img{
    width: 100%;
    height: 1.37rem;
    float: left;
}

#man-custom .price1{
    position: absolute;
    top: 160px;
    left: 46px;
    color: #f33;
}

#man-custom .title2{
    position: absolute;
    top: 142px;
    left: 172px;
}

#man-custom .price2{
    position: absolute;
    top: 160px;
    left:190px;
    color: #f33;
}

#man-custom .title3{
    position: absolute;
    top: 142px;
    left: 296px;
}

#man-custom .price3{
    position: absolute;
    top: 160px;
    left:325px;
    color: #f33;
}
</style>