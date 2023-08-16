<template>
    <h3>内联事件处理器03</h3>
    <button @click="addCount('hello')">ADD</button>
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
        addCount(msg) {
            // e.target.innerHTML = "ADD" + (this.count + 1)
            console.log(msg)
            this.count++
        }
    }
}
</script>