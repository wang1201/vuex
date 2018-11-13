<template>
  <div class="about">
    <h3>Count: {{count}}</h3>
    <h3>Countb: {{Countb}}</h3>
    <button @click="change">改变</button>
  </div>
</template>
<script>
// import { INCREMENT_COUNT } from '@/store/mutation-types'
// import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

// 是可以取到，但是不能每次都引入呀，于是挂到vue的实例上，也就是main.js的new vue的时候放入store
// import store from '@/store'
// export default {
//   data(){
//     return{
//       count:store.state.car.count
//     }
//   }
// }
//挂到根实例上之后，也就是vue的原型上有个这个store，我们在dom和数据都渲染完之后，打印一下this，发现
//多了一个$store,上面有个state对象，包含了我们在store中声明的所有的数据
//于是，可以通过this.$store.state.car.count获取数据
// export default {
//   data(){
//     return{
//       count:this.$store.state.car.count
//     }
//   },
//   mounted(){
//     console.log( this,'this');
//   }
// }

//接下来，我们希望通过点击按钮，使得count修改,于是需要mutation啦，修改状态只能用mutation
//mutation里面我们写了一个changNumber的方法，接收state使count++
// 那么事件写好了，需要触发，也就是点击事件的时候需要提交这个mutations
//于是this.$store.commit('changeNumber')，控制台查看vuex，发现数据是更新了
//但是我们拿不到最新的更改后的数据，那么我们希望数据是响应式的，那么需要computed来接收数据

export default{
  // data(){
  //   return{
  //     count:this.$store.state.car.count
  //   }
  // },
  methods:{
    change(){
      this.$store.commit('changeNumber')
    }
  },
  
  //也可以把数据放在watch上监听数据变化,但是太麻烦了，本身就是一个数据衍生出另外一个
  //所以用computed
  //也可以直接<h3>Count: {{$store.state.car.count}}</h3>
  
  // watch:{
  //   // "$store.state.car.count"(){
  //   //     this.count = this.$store.state.car.count     
  //   // }  等同于下面的这个  上面这个默认带handler
  //   "$store.state.car.count":{
  //     handler(){
  //       this.count = this.$store.state.car.count
  //     }
  //   }
    
  // }
  //理解一下watch: 
  // watch最初绑定的时候是不会执行的，要等到绑定的数据改变时执行监听计算，
  // 如果需要在一开始最初绑定的时候就执行修改，那么在方法里面写一个handler,然后加一个immediate:true
  // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
 

  // computed:{
  //   //所以此时去掉data就行了，因为能得到this.$store.state.car.count，computed就是根据一个数据创建一个数据
  //   count(){
  //     return this.$store.state.car.count
  //   },
  //   //此时dom上新建一个countb 元素，也是接收car上面的数据，car上新建一个countb数据
  //   //那么我们需要在commit触发这个countb事件,也是++,于是很是冗余，因此用mapState
  //   Countb(){
  //     return this.$store.state.car.Countb
  //   },
  // },



  // import { mapState } from 'vuex'
  // 用mapState  ok棒棒哒
  computed:mapState({
    count:state=>state.car.count,
    Countb:state=>state.car.Countb,
    //如果直接挂载到state上的，可以直接count:'count', 'count'相当于：state=>state.count
    //或者直接computed:mapState(['count'])，此时名字不可改
    //也可以computed: {...mapState(['count'])}
  })
  
 
  
}
</script>
