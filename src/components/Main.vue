<template>
    <div>
        欢迎页面！
        <input v-model="name" type="text"><br>
        <router-link :to="{ path: 'home', query: { name: name }}">开始使用</router-link>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data(){
            return {
                name:''
            }
        }
    }
</script>

<style scoped>

</style>
