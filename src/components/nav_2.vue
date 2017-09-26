<template>
    <div>
        <h1>{{ change }}</h1>
   </div>
</template>
    
<script>
    export default {
        name: "nav_2",
        data () {
            return {
                data: ""
            };
        },
        computed: {
            change() {
                return this.$route.params.id
            }
        }
    }
</script>
    
<style lang="css" scoped>
    
</style>