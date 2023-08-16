<template>

    <p :class="classObject">Class样式绑定1</p>
    <p :class="[arrActive,arrHasError]">Class样式绑定2</p>
    <p :class="[isActive ? 'active text-danger':'']">Class样式绑定3</p>
    <!-- 数组和对象嵌套过程中，只能是数组嵌套对象，不能反其道而行之 -->
</template>


<script>
    export default{

        data(){
            return{
                isActive:true,
                hasError:true,
                classObject:{
                    'active':true,
                    'text-danger':true
                },
                arrActive:'active',
                arrHasError:'text-danger'
            }
        }
    }
</script>

<style>
    .active {
        font-size: 40px;
    }
    
    .text-danger{
        color: red;
    }
</style>