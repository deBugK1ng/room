<template>
    <h3>列表渲染</h3>
    <p v-for="(item,index) of names">{{ item }} - {{ index }}</p>
    <div>
        <p v-for="(value,key,index) of userinfo">{{ value }} - {{ key }} - {{ index }}</p>
    </div>
</template>

<script>

export default {
    data() {

        return {
            names: [`程序员`, 'it', 'QWE'],
            userinfo:{
                name:'yzf',
                age:23,
                gender:'man'
            }
        }
    }
}
</script>