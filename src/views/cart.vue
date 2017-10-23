<template>
    <div>
        <header-t></header-t>
        <div class="cart" v-for="item in dataList" :key="item.id">
            <!-- 购物车无商品时 -->
            <!-- <div class="empty_shop">
                <img src="https://static.biyao.com/m/img/null/shopcar.png?v=biyao_6b91960">
                <p>购物车还是空的，赶紧行动吧！</p>
                <input type="button" value="去逛逛">
            </div> -->

            <!-- 购物车有商品时 -->
            <div class="normal_shop">
                <div class="shop_list">
                    <!-- 购物车商品种类标题 -->
                    <div class="check_title">
                        <div>
                            <!-- 复选框 -->
                            <span class="first_span"></span>
                            <span class="last_span">FTCA袜品</span>
                        </div>
                    </div>
                    <!-- 单间 -->
                    <div class="every_shop">
                        <div>
                            <!-- 复选框 -->
                            <span class="first_span"></span>
                            <!-- 单件图片展示 -->
                            <a href="#">
                                <img src="https://bfs.biyao.com/group1/M00/18/CD/rBACVFmWVSiAHmXPAAEGg6macMA750_400x400.jpg">
                            </a>
                            <!-- 单件文本信息 -->
                            <div class="shop_info">
                                <!-- 单件标题 -->
                               <h4>多彩条纹康纶抗菌中筒女袜七双装</h4>
                               <!-- 单件单价 -->
                               <span class="every_price">￥79</span></br>
                               <!-- 单件简介 -->
                               <h6>混色七双装</h6>
                               <!-- 单件按钮 -->
                               <div class="every_button">
                                   <div class="jian">－</div>
                                   <div class="num">1</div>
                                   <div class="jian jia">＋</div>
                               </div>
                               <div class="delete">X</div>
                            </div>
                        </div>
                    </div>
                    <!-- 合计商品和价格 -->
                    <div class="sum_shop">
                        共<span>1</span>件
                        &nbsp;&nbsp;
                        合计：<span>￥79</span>
                        &nbsp;&nbsp;
                    </div>
                </div>
            </div>
        </div>
   </div>
</template>
    
<script>
    export default {
        name: "cart",
        data () {
            return {
                 dataList: ""
            };
        },
        created() {
            this.$http.post("/users/cart").then(function(res) {
                if(res.data.status == "0") {
                    this.dataList = res.data.msg;
                }
            });
        }
    }
</script>
    
<style lang="css" scoped>

    /* 购物车整体样式 */
    .cart{
        width: 100%;
        background-color: #f5f5f5;
        min-height: 6.06rem;
        padding-top: .01rem;
    }

    /* 购物车为空时的样式 */
    .empty_shop{
        margin-top: .22rem;
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    /* 购物车  车的样式/图标 */
    .empty_shop img{
        width: .5rem;
        height: .5rem;
    }

    /* 购物车为空时的提示 */
    .empty_shop p{
        width: 100%;
        height: .61rem;
        text-align: center;
        line-height: .61rem;
        font-size: .14rem;
        color: #666;
    }

    /* 购物车为空时  逛逛按钮 */
    .empty_shop input{
        width: 2.6rem;
        height: .4rem;
        margin-top: .1rem;
        background: #B768A5;
        color: white;
        border: none;
        border-radius: .03rem;
        text-align: center;
        line-height: .4rem;
    }

    /* 购物车有东西时的样式 */
    .normal_shop{
        width: 100%; 
        font-size: .14rem;
    }
    /* 每一类商品样式 */
    .shop_list{
        margin: .15rem 0;
        border-bottom: solid 1px #ccc;
        background-color: #fff;
        min-height: 1.97rem;
    }
    /* 每类商品标题样式 */
    .check_title{
        width: 100%;
        height: .41rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: dotted 1px gray;
    }
    .check_title div{
        width: 3.9rem;
        height: .25rem;
    }
    .first_span{
        width: .22rem;
        height: .25rem;
        background: url(https://static.biyao.com/m/img/icon/s2.png?v=biyao_1d84f14) no-repeat left center;
        background-size: 80%;
        display: inline-block;
        float: left;
    }
    .last_span{
        color: #666;
        float: left;
        margin: 4px 0 0 5px;
    }
    /* 每类商品单件样式 */
    .every_shop{
        width: 100%;
        height: 1.14rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: dotted 1px gray;
    }
    .every_shop>div{
        width: 3.9rem;
        height: .93rem;
        display: flex;
        justify-content: space-between;
    }
    .every_shop>div>span{
       margin-top: .35rem;
    }
    /* 每个单件图片 */
    .every_shop>div>a>img{
        width: .9rem;
        height: .88rem;
        border: solid 1px #ccc;
    }
    /* 单件文本信息 */
    .shop_info{
        width: 2.48rem;
        height: .88rem;
        font-size: .14rem;
    }
    /* 单件标题 */
    h4{
        width: 1.65rem;
        line-height: .2rem;
        overflow: hidden;
        margin-bottom: .05rem;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: normal;
        float: left;
    }
    /* 单件单价 */
    .every_price{
        color: #B768A5;
        float: right;
    }
    /* 单件简介 */
    h6{
        width: 100%;
        font-size: .13rem;
        color: #999;
        float: left;
        font-weight: normal;
    }
    /* 单件按钮 */
    .every_button{
        width: 1.04rem;
        height: .32rem;
        font-size: 0;
        line-height: .32rem;
        float: left;
        margin-top: .18rem;
    }
    .jian{
        width: .24rem;
        height: .3rem;
        border: 1px solid #CCC;
        background-color: white;
        font-size: .27rem;
        display: inline-block;
        vertical-align: middle;
        line-height: .27rem;
    }
    .jia{
        line-height: .25rem;
        color: #B768A5;
    }
    .num{
        width: .4rem;
        height: .3rem;
        display: inline-block;
        font-size: .12rem;
        border-top: 1px solid #CCC;
        border-bottom: 1px solid #CCC;
        vertical-align: middle;
        text-align: center;
        
    }
    /* 删除按钮 */
    .delete{
        width: .24rem;
        height: .24rem;
        font-size: .24rem;
        float: right;
        color: #ccc;
        margin-top: .18rem;
        vertical-align: middle;
    }
    /* 合计商品和价格 */
    .sum_shop{
        width: 100%;
        height: .41rem;
        line-height: .41rem;
        text-align: right;
    }
    .sum_shop>span:last-of-type{
        color: #B768A5;
    }
</style>