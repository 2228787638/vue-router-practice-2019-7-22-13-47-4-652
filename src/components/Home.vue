<template>
    <div>
        <button @click="goback">返回</button>
        <span class="right">用户名：{{this.$route.query.name}}</span>
        <Inputs></Inputs>
        <Item></Item>
    </div>
</template>

<script>
    import Inputs from "./Inputs";
    import Item from "./Item";
    export default {
        name: "index",
        components: {Inputs,Item},
        methods:{
            goback(){
                const answer = window.confirm('确认返回？');
        if(answer){
                    this.$router.push({path: '/'});
                }else{

                }
            }
        }
    }
</script>

<style scoped>
.right{
    float: right;
}
</style>
