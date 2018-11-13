
//仓库，需要引入一下vue以及vuex并且 vue.use(vuex);
//然后export default new vuex.store({
//   可以直接在这里 state actions muytations
//   或者划分模块，引入同的模块，这里引入的是模块
// })

import Vue from 'vue'
import Vuex  from 'vuex'


import car from './car'

Vue.use(Vuex);

const store =  new Vuex.Store({
    modules:{
        car
    }
})

export default store
console.log(store);