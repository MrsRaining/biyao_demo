<template>
    <div>
       <div class="tip" v-show="false">
           <slot name="tip-text"></slot>
           <!-- <span>我是一个提示框</span> -->
       </div>
   </div>
</template>
    
<script>
    export default {
        name: "tipBox",
        data () {
            return {
                 
            };
        }
    }
</script>
    
<style lang="css" scoped>
    .tip{
        position: absolute;
        width: 1.05rem;
        height: 0.34rem;
        background-color: rgba(0, 0, 0, 0.3);
        top: 10%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 0.07rem;
        z-index: 999;
        line-height: 0.34rem;
        text-align: center;
        font-size: 0.16rem;
    }
</style>