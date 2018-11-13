//处理异步的请求


//模拟异步
import api from '@/util/api'
import {
    INSERT_BTN
}from './mutations-types'

const actions = {
    //写一个异步函数，获取接口的信息，actions 的参数context为与store实例具有相同方法和属性的context对象
    //可以通过context.commit提交一个mutation,或者通过context.state和context.getters来获取state和getters
    //通过store.dispatch来触发
    // 也就是思想上的流程为：view层通过点击或者其他事件请求到action，分发器dispatch收到action的动作
    //要求store进行数据或者状态的更新，更新后，告诉view我更新啦，于是view更新页面
    //实际是：view触发事件，actions接收事件，并且分发dispatch，去控制mutation触发提交commit，
    //更新数据源state，view层是绑定着数据源身上的数据的，因此数据源发生改变的时候，虚拟dom重新渲染
    //视图重新渲染

    //去视图绑定一下
    async addGoods (context,payload = {}){
        // console.log("我是",payload);
        let results = await api.addGoods(payload);
        if(results.status === 200){
            //提交moutations
            context.commit({
                type: INSERT_BTN,
                goods: results.goods
            })
        }
    },
    //去视图绑定一下
    async initGoods (context){
        let results = await api.getCarGoods();
        if(results.status === 200){
            //提交moutations
            context.commit({
                type: INSERT_BTN,
                goods: results.goods
            })
        }
    },
     // 加 减
     async controlGoodNumber(context,payload){
         let result = await api.controlGoodNumber(payload);
         if(result.status === 200){
             //提交对应的mutations
             context.commit({
                 type:INSERT_BTN,//这里还是insert_btn 拷贝出来的那个goods,因为就只需要数据就好了呀
                 goods: result.goods//提交的参数
             })
         }
     }
    
}
export default actions