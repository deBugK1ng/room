<template>
    <div>
        <h1>姓名:{{ obj.name }}</h1>
        <h1>年龄:{{ obj.age }}</h1>
        <h1>产品:{{ obj.taobao }}</h1>
        <h1>深层次数据响应:{{ obj.pro.a.b[0] }}</h1>
        <button @click="btn">点击更新视图层某一个数据</button>
    </div>
</template>

<script>

import { ref } from 'vue'
import { reactive } from 'vue'
//reactive不能用在基本数据类型上
export default {
    setup() {
        const name = '马云'
        const age = 50
        const taobao = '淘宝'
        const obj = reactive({
            taobao,
            name,
            age,
            pro:{
                a:{
                    b:['我是深层次的数据']
                }
            }
        })

        function btn(){
            obj.taobao = '淘宝02'
            obj.name = '马化腾'
            obj.age = 80
            obj.pro.a.b[0] = '我是更改之后的数据'
        }
        

        return {
            name,
            age,
            btn,
            obj
        }
    },

}

</script>