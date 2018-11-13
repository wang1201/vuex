//这配置该模块的仓库
//需要引入一些state mutations actions等
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
export default {
    //为了解决不同模块命名冲突的问题，将不同模块的namespaced:true，
    //之后在不同页面中引入getter、actions、mutations时，需要加上所属的模块名
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}