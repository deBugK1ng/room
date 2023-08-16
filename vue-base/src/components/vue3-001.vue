<template>
    <div>
        <h1>姓名:{{ name }}</h1>
        <h1>年龄:{{ age }}</h1>
        <h1>公司:{{ company }}</h1>
        <h1>产品:{{obj.taobao }}</h1><hr>
        <h1 v-for="(item,values) of arr" :key="values">{{ item.xiami }}</h1>
        <button @click="btn">点击更新视图层某一个数据</button>
    </div>
</template>

<script>

import { ref } from 'vue'
export default {
    setup() {
        const name = ref('马云')
        const age = ref(50)
        const company = '阿里巴巴'
        const arr = ref([{
            xiami:'虾米音乐'
        }])

        const obj = ref({
            taobao: '淘宝',
            tmall: '天猫'
        })

        function btn(){
            // console.log(name)
            name.value = '马化腾'
            // console.log(name)
            age.value = 80
            obj.value.taobao = '淘宝002'
            console.log(arr)
            arr.value[0].xiami = '虾米001'
            
        }
        

        return {
            name,
            age,
            company,
            obj,
            btn,
            arr
        }
    },

}

</script>