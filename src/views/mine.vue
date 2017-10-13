<template>
    <div>
       <header-t></header-t>
        <router-view></router-view>
   </div>
</template>
    
<script>
    export default {
        name: "mine",
        data () {
            return {
                 
            };
        },
        created() {
            console.log(123456);
            this.$router.push({
                path: "/mine/login",
                query: {
                    title: encodeURIComponent("登录")
                }
            });
        },
        updated() {
            //在这个组件加载完毕后，再次加载这个组件，组件不会重新销毁挂载，而是更新。所以会触发updated。
            // console.log(456);
            //  this.$router.push({
            //     path: "/mine/login",
            //     query: {
            //         title: encodeURIComponent("登录")
            //     }
            // });
        }
    }
</script>

<style lang="css" scoped>

</style>