<template>

    <div>
        <Row>
            <Col span="8">
                <Menu active-name="1" :open-names="['1']">
                    <MenuItem name="1" @click.native="change(0)">All</MenuItem>
                    <MenuItem name="2" @click.native="change(1)">Active</MenuItem>
                    <MenuItem name="3" @click.native="change(2)">Complete</MenuItem>
                    <MenuItem name="4">我的</MenuItem>
                </Menu>
            </Col>
            <Col span="8">
                <div v-for="(item,index) in items" :key="item.id">
                    <div class="itemstyle">
                        {{index+1}}.
                        <input type="checkbox" v-model="item.active"/>
                        <label v-bind:class="{changeCheckbox:item.active}" v-on:dblclick="changeContent(item.id,item.name)">
                            <span v-if="item.editFlag">{{item.name}}</span>
                            <span v-else><input v-model="item.name" type="text" @keyup.enter="enterClick(item.id)"></span>
                        </label>
                    </div>
                </div>
            </Col>
        </Row>
    </div>
</template>

<script>
    /* eslint-disable vue/no-shared-component-data,no-unused-vars,no-console,no-undef */
    export default {
        name: "Item",
        data(){
            return {
                itemId:1,
                items:this.$store.state.items,
                status:this.$store.state.status,
                categoryIndex: 0
            }
        },
        methods: {
            change(flag) {
                switch (flag) {
                    case 0:this.items=this.$store.state.items;break;
                    case 1:this.items=this.$store.state.items.filter(i=>{return !i.active});break;
                    case 2:this.items=this.$store.state.items.filter(i=>{return i.active});break;
                }
                this.$store.commit('changeStatus',flag);
                this.status=flag;
                this.categoryIndex = flag;
                this.id=1;
            },
            changeContent(id,name){
                this.$store.commit('changeEditFlag',id-1);
                this.$store.commit('changeContent',id-1,name);
                this.items[id-1].name=name;
                this.items[id-1].editFlag=false;
            },
            enterClick(id){
                this.$store.commit('enterClick',id-1);
                this.items[id-1].editFlag=true;
            }
        }
    }

</script>

<style scoped>
    @import '../common.css';

</style>
