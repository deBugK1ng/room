<template>
    <h3>数组变化侦听</h3>
    <ul>
        <li v-for="(item,index) of names" :key="index">{{ item }}</li>
        <button @click="addListHandle">添加</button>
    </ul>
    <h3>数组1</h3>
    <p v-for="(item,index) of nums1" :key="index">{{ item }}</p>
    <h3>数组2</h3>
    <p v-for="(item,index) of nums2" :key="index">{{ item }}</p>
</template>

<script>
    export default{
        data(){
            return{
                names:['YZF','SW','CFZ'],
                nums1:[1,2,3,4,5],
                nums2:[6,7,8,9,10]
            }
        },
        methods:{
            addListHandle(){
            //    this.names.push('WRY') 
            //concat,slice,fliter需要做替换
            this.names = this.names.concat(['WRY'])
            }
        }
    }
</script>