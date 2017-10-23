<template>
    <div>
       <!-- 登录框与按钮 -->
        <div class="login_in">
            <tip-box>
                <span slot="tip-text">登录成功</span>
            </tip-box>
            <div class="login">
                <input type="text" placeholder="请输入账号" v-model="userName">
                <input type="text" placeholder="请输入登录密码" v-model="password">
                <div class="login-tip" v-show="tipShow">账号或者密码输入错误!</div>
                <input type="button" value="登录" @click="loginFn">
                <p>
                    <router-link :to="{path: '/mine/register', query: {title: encodeURIComponent('注册')}}">还没有注册账号？快速注册</router-link>
                    <a href="javascript:void(0);">忘记密码！</a>
                </p>
            </div>  

            <!-- 第三方登录 -->
            <div class="otherLog">
                <div>
                    <span>合作账号登录</span>
                </div>
                <a></a>
            </div>

            <!-- 版本(触屏/客户端) -->
            <div class="edition">
                <div>
                    <a href="#">触屏版</a>
                    <a href="#">客户端</a>
                </div>
            </div>
        </div>
   </div>
</template>
    
<script>
    export default {
        name: "login",
        data () {
            return {
                userName: "",
                password: "",
                tipShow: false
            };
        },
        methods: {
            loginFn() {
                this.$http.post("/users/login", {
                    userName: this.userName,
                    password: this.password
                }).then(function (res) {
                    console.log(res);
                    if(res.data.status == "0") {
                        this.$router.push({
                            path: "/mine/me",
                            query: {
                                title: encodeURIComponent("个人中心"),
                                userName: this.userName
                            }
                        });
                    }else{  
                        this.tipShow = true
                    }
                });
            }
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
.login_in{
    width: 100%;
    background-color: #f5f5f5;
    padding-top: .01rem;
}
.login{
    width: 100%;
    height: 2.39rem;
    font-size: 0;
    position: relative;
    margin-top: .75rem;
}
.login input{
    width: 90%;
    margin-left: 5%;
    font-size: .16rem;
    height: .52rem;
}
.login .login-tip{
    height: 20px;
    font-size: 0.14rem;
    text-indent: 0.25rem;
    color: red;
    position: absolute;
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
    margin-top: 2.3rem;
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
</style>