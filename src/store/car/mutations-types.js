// Vuex 是一个专门为 Vue.js 应该程序开发的状态管理模式，它类似于 Redux 应用于 React 项目中，
//他们都是一种 Flux 架构。相比 Redux，Vuex 更简洁，学习成本更低。

//使用常量替代mutation事件类型--是在各种flux实现中是很常见的模式。
//这样可以使linter之类的工具发挥作用，同时吧这些常量放在单独的文件中可以让你的代码合作者
//对整个app包含的mutation一目了然  
//官方写法：export const SOME_MUTATION = 'SOME_MUTATION' //mutation-types.js
//在mutations里面：import { SOME_MUTATION } from './mutation-types'
// mutations:{
//    我们可以使用es2015风格的计算属性命名功能来使用一个常量作为函数名
//    [SOME_MUTATION](state){}
// }
export const  INSERT_BTN = 'INSERT_BTN' 