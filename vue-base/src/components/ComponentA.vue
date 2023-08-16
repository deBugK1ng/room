<template>
    <h3>ComponentA</h3>
    <ComponentB :title="title" :age="age"/>
</template>

<script>
    import ComponentB from './ComponentB.vue';

    export default{
        data(){
            return{
                title:20,
                age:20
            }
        },components:{
            ComponentB
        }
    }
</script>