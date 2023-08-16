<template>
    <h3>ComponentEvent</h3>
    <Child @someEvent="getHandle"/>
</template>

<script>

    import Child from './Child.vue';

    export default{
        components:{
            Child
        },
        methods:{
            getHandle(){
                console.log(`触发了`)
            }
        }
    }
</script>