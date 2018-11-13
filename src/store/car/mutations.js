//更改vuex的store中的状态的唯一方法就是提交mutation,每个mutation都有一个字符串的
//事件类型type和一个回调函数handler，这个回调函数就是进行状态修改的地方
//类似vue的methods，只不过调用的时候需要特别的方法
//state作为第一个参数
import {
    INSERT_BTN
}from './mutations-types'
const mutations = {
    //mutations必须是同步函数，异步交给actions做，如果写成了异步的，则触发了commit之后，回调函数并没有调用，所以修改无法被调式工具记录

     // 键名为type 值为handler(回调函数) ，handler接收的第一个参数为state，第二个参数是载荷payload （参数）
     //多数情况下，payload也就是载荷 应该是一个对象
    //  [INSERT_BTN]:(state,{count = 1})=>{
    //    state.count +=count;
    // },
    [INSERT_BTN]: (state, payload) => {
        state.goods = _.cloneDeep(payload.goods)
    },
    changeNumber(state){
        state.count ++
        state.Countb ++
    }
    
}
//接下来就需要提交mutations
//通过store.commit触发事件 也就是调用这个方法 
//store.commit('INSERT_BTN' , 10),可以传参，此时这个10就是count

//也可以写为：
//store.commit('INSERT_BTN'{
//    count:10
// })
//或者写为,这种对象的格式更好i些
//store.commit({
//     type:'INSERT_BTN',
//     count:10
// })
// 也可以vue里面使用this.$store.commit('INSERT_BTN',10)
// 还可以 import {mapMutations} from 'vuex'
// 然后 在methods里 ...mapMutations({'INSERT_BTN'})//事件名与组件名一样 
//映射 this.INSERT_BTN() 为 this.$store.commit('INSERT_BTN')
export default mutations