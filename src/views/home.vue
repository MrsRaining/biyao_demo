<template>
    <div>
       <header-s></header-s>
       <nav-b></nav-b>
       <router-view></router-view>
   </div>
</template>
    
<script>
    import nav from '../components/nav'
    export default {
        name: "home",
        data () {
            return {
                 
            };
        },
        components: {
            'nav-b': nav
        }
    }
</script>
    
<style lang="css" scoped>
    
</style>