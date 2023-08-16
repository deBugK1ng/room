<template>
    <h3>Key属性添加到v-for中</h3>
    <P v-for="(item, index) of names" :key="index">{{ item }}</P>
</template>

<script>
export default {
    data() {

        return {

            names: ['YZF', 'CFZ', 'SW']
        }
    }
}
</script>