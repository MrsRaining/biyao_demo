<template>
    <div>
       <header-t></header-t>
       <!-- 登录框与按钮 -->
       <!--  <div class="login">
            <input type="text" placeholder="请输入手机">
            <input type="text" placeholder="请输入登录密码">
            <a></a>
            <input type="button" value="登录">
            <p>
                <a href="#">还没有注册账号？快速注册</a>
                <a href="#">忘记密码！</a>
            </p>
        </div>   -->

        <!-- 第三方登录 -->
        <!-- <div class="otherLog">
            <div>
                <span>合作账号登录</span>
            </div>
            <a></a>
        </div> -->

        <!-- 版本(触屏/客户端) -->
       <!--  <div class="edition">
            <div>
                <a href="#">触屏版</a>
                <a href="#">客户端</a>
            </div>
        </div> -->
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
        name: "mine",
        data () {
            return {
                 
            };
        }
    }
</script>
    
<style lang="css" scoped>
a{
    display: inline-block;
    text-decoration: none;
}
ul{
    font-size: 0;
}
li{
    display: inline-block;
}
input{
    outline: none;
    border: none;
}
html{
    font-size: 100px;
}
body{
    background-color: #f5f5f5;
}

/*登录框与按钮*/
.login{
    width: 100%;
    height: 2.39rem;
    font-size: 0;
    margin-top: .75rem;
    position: relative;
}
.login input{
    width: 90%;
    margin-left: 5%;
    font-size: .16rem;
    height: .52rem;
}
.login input[type="text"]{
    border-bottom: 2px solid #ccc;
    background-color: #f5f5f5;
}
.login>a{
    position: absolute;
    right: .2rem;
    top: .57rem;
    background: url(https://static.biyao.com/m/img/login/eyes1.png?v=biyao_df7cc4b) no-repeat center;
    width: .44rem;
    height: .44rem;
    background-size: 60%;
}
.login input[type="button"]{
    background-color: #7f4395;
    border-radius: .3rem;
    color: white;
    line-height: .51rem;
    text-align: center;
    margin: .44rem 0 .16rem 5%;
    font-size: .2rem;
}

/*注册账号和忘记密码*/
.login p{
    width: 87%;
    margin-left: 7%;
    display: flex;
    justify-content: space-between;
}
.login p a{
    color: #7f4395;
    height: .22rem;
    font-size: .16rem;
    line-height: .22rem;
}

/*第三方登录/QQ登录*/
.otherLog{
    width: 100%;
    padding: 0 5%;
    box-sizing: border-box;
    font-size: 0;
    margin-top: 2.7rem;
}
.otherLog div{
    position: relative;
    width: 100%;
    height: 1px;
    background-color: #ccc;
}
.otherLog div span{
    width: 1.32rem;
    height: .22rem;
    font-size: .16rem;
    background-color: #f5f5f5;
    position: absolute;
    left: 50%;
    top: -.1rem;
    transform: translate(-50%, 0);
    text-align: center;
    color: gray;
}
.otherLog>a{
    width: .42rem;
    height: .42rem;
    background: url(https://static.biyao.com/m/img/login/qq_login.png?v=biyao_cd9aea7);
    background-size: .42rem .42rem;
    margin-left: 50%;
    margin-top: .39rem;
    transform: translate(-50%, 0);
}

/*版本(触屏/客户端)*/
.edition{
    width: 100%;
    border-top: solid 1px #999;
    display: flex;
    justify-content: center;
    align-items: center;
    height: .49rem;
    margin-top: .18rem;
}
.edition>div{
    width: 1.72rem;
    height: .16rem;
    font-size: 0;
    margin-left: .3rem;
}
.edition a{
    font-size: .14rem;
}
.edition a:first-of-type{
    padding-right: .2rem;
    border-right: solid 1px #666;
    line-height: .12rem;
    color: #666;
}
.edition a:last-of-type{
    padding-left: .2rem;
    color: #B768A5;
}
a{text-decoration:none;}
li{list-style:none;}
body{font:12px/20px "微软雅黑";}
img{vertical-align:top;}
html{font-size:100px;}
.m_title{
;width:100%;height:1.78rem;background: url('https://static.biyao.com/m/img/base/grzxlg.png?v=biyao_2088d40') no-repeat;
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
.main_wrap_list a div{float: right;margin-right:0.2rem;font-size:0.18rem;height:0.45rem;display: inline-block;font-family:宋体;color:#333;}
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