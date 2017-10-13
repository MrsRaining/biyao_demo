<template>
    <div>
       <div class="main_bd">
        <div class="m_title">
            <div class="m_m1">
                <div class="m1_img"><img src="https://static.biyao.com/m/img/base/defult_userimg.png"></div>
            </div>
            <div class="m_mr">by_Sdg</div>
            <div class="m_mz">
                <span class="span1">待付款</span>
                <span>退款/售后</span>
            </div>
        </div>
        <div class="main_wrap">
            <div class="main_wrap_list">
                <a href="" class="a1">
                    <p>我的余额</p>
                    <div>></div>
                </a>
                <a href="">
                    <p>我的订单</p>
                    <div>></div>
                </a>
                <a href="">
                    <p>我的地址</p>
                    <div>></div>
                </a>
                <a href="">
                    <p>修改密码</p>
                    <div>></div>
                </a>
                <a href="">
                    <p>服务监督邮箱</p>
                    <div>cs@biyao.com</div>
                </a>
                <a href="">
                    <p>客服新消息</p>
                    <div>></div>
                </a>
            </div>
        </div>
    </div>
    <div class="me">
        <div class="order_messge_tip">
            关注"必要"微信服务号获取订单最新状态！
        </div>
        <div class="footer_bd">
            <div class="footer_bd1">
                <div class="f-bd1">
                    <span>by....47..</span>
                    <span>|</span>
                    <a href="">退出</a>
                </div>
                <div  class="f-bd2">
                    <a href="">关于必要</a>
                    <span>|</span>
                    <a href="">回到顶部</a>
                </div>
            </div>
            <div class="footer_bd2">
                <a href="" class="footer_bd2_a1">触屏版</a>
                <span>|</span>
                <a href="" class="footer_bd2_a2">客户端</a>
            </div>
        </div>
    </div>
   </div>
</template>
    
<script>
    export default {
        name: "me",
        data () {
            return {
                 
            };
        }
    }
</script>
    
<style lang="css" scoped>
    a{text-decoration:none;}
li{list-style:none;}
body{font:12px/20px "微软雅黑";}
img{vertical-align:top;}
html{font-size:100px;}
.m_title{
width:100%;height:1.78rem;background: url('https://static.biyao.com/m/img/base/grzxlg.png?v=biyao_2088d40') no-repeat;
background-size:100% 100%;}
.m_m1{width: 100%;height:0.97rem;padding-top:0.1px;}
.m1_img{width:0.8rem;height:0.8rem;margin:0 auto;border-radius: 50%;margin-top:0.15rem;}
.m1_img img{width:0.8rem;height: 0.8rem;}
.m_mr{width:100%;height:0.39rem;text-align:center;line-height:0.39rem;color:#fff;font-size:0.14rem;overflow:hidden;}
.m_mz{width: 100%;height:0.42rem;display:flex;}
.m_mz span{flex:1;text-align:center;line-height: 0.42rem;color:#fff;font-size:0.14rem;background-color: rgba(150,114,155,.5)}
.span1{border-right:1px solid #fff;}
.main_wrap{width:100%;background-color:#f5f5f5;padding-top: 0.1px;}
.main_wrap_list{width:100%}
.main_wrap_list a{width:100%;height:0.55rem;display:block;background-color:#fff;line-height:0.45rem;border-bottom:1px solid #ccc}
.main_wrap_list a p{display: inline-block;float:left;margin-left:0.2rem;font-size:0.14rem;color:#333;}
.main_wrap_list a div{float:right;margin-right:0.2rem;font-size:0.18rem;height:0.45rem;display: inline-block;font-family:宋体;color:#333;}
.main_wrap_list .a1{margin-top:0.1rem}
.order_messge_tip{width:100%;line-height: 1.3rem;text-align: center;color:#878787;}
.footer_bd{width:100%;background-color:#f5f5f5;position:fixed;bottom:0;left: 0;}
.footer_bd1{width:100%;height:0.44rem;line-height:0.44rem;padding:0 0.13rem;}
.f-bd1{float:left;}
.f-bd2{float: right;}
.footer_bd1 a,.footer_bd1 span{color:#666;}
.footer_bd2{width:100%;height:0.35rem;line-height:0.35rem;border-top:2px solid #999;text-align:center;}
.footer_bd2 span{padding:0 0.24rem;}
.footer_bd2_a1{color:#666;}
.footer_bd2_a2{color:#B768A5;}
.me{background-color:#f5f5f5;position:relative; }

</style>