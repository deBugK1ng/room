<template>
    <h3>ComponentB</h3>
    <p>{{ title }}</p>
    <p>{{ age }}</p>
</template>

<script>
    export default{
        data(){
            return{

            }
        },
        props:{
            title:{
                type:String
            },
            age:{
                type:Number,
                default:0
            }
        }
    }
</script>