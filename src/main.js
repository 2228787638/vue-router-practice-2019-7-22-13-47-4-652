import Vue from 'vue'

import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter, {index} from 'vue-router'
import Main from "./components/Main";
import Item from "./components/Item";
import App from "./App";
import Inputs from "./components/Inputs";
import Home from "./components/Home";

Vue.use(Vuex,VueAxios,axios,VueRouter);
Vue.use(VueRouter);
Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    items:[

    ],
    status: 0
  },
  mutations: {
      addItems (state,item) {
        state.items.push(item);
      },
      changeContent (state,id,name) {
        state.items[id].name=name;

      },
      changeStatus (state,status) {
        state.status=status;
      },
      changeEditFlag (state,id){
        state.items[id].editFlag=false;
      },
      enterClick (state,id){
        state.items[id].editFlag=true;
      },
      getList (state,items){
          //console.log(typeof(items));
          state.items.push(...items);
         // console.log(state.items);
      },
      addItem (state,items){
          //console.log(typeof(items));
          state.items.push(...items);
          // console.log(state.items);
      }
  }
});
const router = new VueRouter({
    routes :[
        { path: '/', component: Main },
        { path: '/item', component: Item },
        { path: '/home', component: Home },
        { path: '/inputs', component: Inputs }
    ]
});
new Vue({
    render: h => h(App),
    router,
    store,
    axios,
    VueAxios
}).$mount('#app');
// new Vue({
//     el:'#app',
//     store,
//     router,
//     components:{App},
//     template:'<App/>'
// })
