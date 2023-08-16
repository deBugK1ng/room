<template>
    <h3>内联事件处理器</h3>
    <button @click="addCount">ADD</button>
    <p>{{ count }}</p>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },

    methods: {
        //日后所有的方法或者函数都放在这里
        addCount() {
            //console.log(`点击了`)
            //读取到data里面的数据方案:this.count
            this.count++
        }
    }
}
</script>