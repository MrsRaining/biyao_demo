<template>
    <div>
        <!-- 男装列表 -->
    <div class="menList">
        <ul>
            <li v-for="(item, index) in dataList" :key="item.id" :class="{'active': nowNum==index}" @click="colorFn(index, item)">
                <a href="javacript:void(0);">
                    {{ item }}
                </a>
            </li>
        </ul>
    </div>

    <!-- 风衣/大衣专题 -->
    <div v-for="items in showList" :key="items.id">
        <div class="menTitle">
            <span>{{ items.categoryName.split("·")[0]}}</span>
            <span>{{ items.categoryName.split("·")[1]}}</span>
        </div>
        
        <!-- 男士服装列表 -->
        <div class="menWear">
            <div class="menCloth" v-for="list in items.item" :key="list.id">
                <a href="javasript:void(0);" @click="dataShow(list)">        
                    <img v-lazy="list.imageUrl">
                    <span>{{ list.title }}</span>
                    <span>￥{{ list.price }}</span>
                </a>
            </div>
        </div>
    </div>
    
    <h1>{{getData}}</h1>
   </div>
</template>
    
<script>
    export default {
        name: "nav_2",
        data () {
            return {
                data: "",
                dataList: [],
                showList: "",
                nowNum: 0
            };
        },
        methods: {
            colorFn(index, item) {
                this.nowNum = index;
                for(var j in this.data) {
                    if(j == item) {
                        this.showList = this.data[j].data.productList;
                    }
                }
            },
            //当路由跳转时这个组件异步的去销毁，同时新的组件立马开始创建，所以在新的组件挂在完毕时，下面的方法还未执行，所以会出现数据获取不到的错误。
            dataShow(list) {
                window.sessionStorage.goodList = JSON.stringify(list);
                this.$router.push({
                    path: "/details",
                    query: {
                        title: list.title
                    }
                });
                // console.log(window.sessionStorage.goodList);
            }
        },
        computed: {
            getData() {
                this.nowNum = 0;
                this.$http.get("/goods", {
                params: {
                    "name": this.$route.params.id
                }
            }).then(function(res) {
                this.dataList = [];
                this.data = res.data.msg;
                var i = 0;
                for(var ele in res.data.msg) {
                    if(i==0) {
                        this.showList = res.data.msg[ele].data.productList;
                    }
                    this.dataList.push(ele); 
                    i += 1;
                }
            });   
            }
        },
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

/*男装列表*/
.menList{
    width: 100%;
    height: .4rem;
    margin-top: .01rem;
    background: #FAFAFA;    
}
.menList ul{
    height: .4rem;
    margin-left: .15rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.menList li{
    width: .38rem;
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    font-size: .12rem;
    flex: 1;
}
.menList li a{
    color: gray;
}
.active{
    background: #7f4395;
    border-radius: .12rem;
}
.menList .active a{
    color: #fff;
}

/*男装标题*/
.menTitle{
    width: 100%;
    height: .8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #f5f5f5;
}
.menTitle span{
    width: 100%;
    text-align: center;
}
.menTitle span:first-of-type{
    height: .2rem;
    font-size: .16rem;
    color: #333;
    line-height: .16rem;
    margin-bottom: .08rem;
}
.menTitle span:last-of-type{
    height: .16rem;
    font-size: .12rem;
    color: #333;
    color: gray;
    line-height: .16rem;
}

/*男装专题*/
.menWear{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    background-color: #f5f5f5;
}
/*每个男装块*/
.menCloth{
    width: 48.5%;
    height: 2.59rem;
    font-size: 0;
    background-color: white;
    margin-bottom: .02rem;
    margin-left: 1%;
}
.menCloth a{
    width: 100%;
    height: 2.59rem;
}
.menCloth a img{
    width: 96%;
    height: 75%;
    margin-left: 2%;
}
.menCloth span{
    width: 100%;
    text-align: center;
    height: .14rem;
    font-size: .14rem;
    line-height: .14rem;
    display: inline-block;
}
.menCloth span:first-of-type{
    margin: .1rem 0;
    color: #333;
}
.menCloth span:last-of-type{
    color: #f33;
}

/*回到顶部*/
.topBack{
    width: .46rem;
    height: .46rem;
    position: fixed;
    background: rgba(255,255,255,.9);
    box-shadow: 0 0 10px 1px #dcc0de;
    bottom: .64rem;
    right: .1rem;
    border-radius: 50%;
    font-size: 0;
}
.topBack a{
    width: 100%;
    height: 100%;
    position: relative;
    text-align: center;
}
.topBack a img{
    position: absolute;
    width: .18rem;
    height: .20rem;
    top: 50%;
    left: 50%;
    margin-top: -.1rem;
    margin-left: -.09rem;
}
</style>