<template>
    <h3>内联事件处理器03</h3>
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
        addCount(e) {
            e.target.innerHTML = "ADD" + (this.count + 1)
            this.count++
        }
    }
}
</script>