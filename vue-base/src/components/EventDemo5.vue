<template>
    <h3>事件传参</h3>
    <P @click="getNameHandler(item,$event)" v-for="(item,index) of names" :key="index" >{{ item }}</P>
</template>

<script>
export default {
    data() {
        return {
            names:['YZF','SW','CFZ']
        }
    },

    methods: {
        getNameHandler(name,e){
            console.log(name)
            console.log(e)
        }
    }
}
</script>