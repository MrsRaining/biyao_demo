<template>
    <div>
        <!-- 男装列表 -->
        <div class="menList">
            <ul>
                <li class="active">
                    <a href="#">
                        男士外套
                    </a>
                </li>
                <li>
                    <a href="#">
                        男士上装
                    </a>
                </li>
                <li>
                    <a href="#">
                        男士下装
                    </a>
                </li>
            </ul>
        </div>

        <!-- 风衣/大衣专题 -->
        <div v-for="(list, index) in dataList" :key="list.id">
            <div class="menTitle" >
                <span>{{ list.categoryName.split(" · ")[0] }}</span>
                <span>{{ list.categoryName.split(" · ")[1] }}</span>
            </div>

            <!-- 男士服装列表 -->
            <div class="menWear">
                <div class="menCloth" v-for="items in list.item" :key="items.id">
                    <a href="#">        
                        <img :src="items.imageUrl">
                        <span>{{ items.title }}</span>
                        <span>￥{{ items.price }}</span>
                    </a>
                </div>
            </div>
        </div>
       
        <div class="topBack">
            <a href="#">
                <img src="https://static.biyao.com/m/img/icon/arror.png?v=biyao_a15cb86">
            </a>
        </div>
   </div>
</template>
    
<script>
    export default {
        name: "nav_2",
        data () {
            return {
                dataList: []
            };
        },
        created() {       
            this.$http.get("../../static/data/menWear/coat.json").then(res => {
                this.dataList = res.body.data.productList;
            }, err => {
                console.log(err);
            });
        },
        computed: {
            change() {
                return this.$route.params.id
            }
        }
    }
</script>
    
<style lang="css" scoped>
a{
    display: inline-block;
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
    background-color: #FAFAFA;    
}
.menList ul{
    width: 100%;
    height: .4rem;
    margin-left: .15rem;
    display: flex;
    align-items: center;
}
.menList li{
    padding: 0 .1rem;
    height: .24rem;
    line-height: .24rem;
    text-align: center;
    font-size: .12rem;
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