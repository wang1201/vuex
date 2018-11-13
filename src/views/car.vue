<template>
  <div class="app-car">
      <template v-if = "car.goods.length > 0">
        <app-car-item
          v-for = "good in car.goods"
          :key  = "good.id"
          :info = "good"
        ></app-car-item>
      </template>
      <el-alert
        v-else
        title="没有更多数据"
        type="warning">
      </el-alert>
      <app-car-all>

      </app-car-all>
  </div>
</template>

<script>
import AppCarItem from '@/components/car/AppCarItem'
import AppCarAll from '@/components/car/AppCarAll'
import { mapState } from 'vuex'
export default {
  components: {
    AppCarItem,
    AppCarAll
  },
  created(){
    //于是发现有个问题，就是数据点击添加到购物车页面的时候是好使的，但是
    //当我刷新页面发现木有了呐。。。桑心。。。
    //这是因为一次vuex的过程是，当我点击了添加购物车，actions接收动作，利用dispatch分发器
    //分发请求，去触发commit对应的mutations，mutations做出对应的响应，拿到数据源state，做出
    //相应的运算啥的，然后返回给view，也就是购物车页面，那么这一次的动作触发的vuex就完毕啦
    //所以你刷新页面，人家又没有触发动作提交啥的，此时获取的state是数据源里的数据，
    //因为你改的是深拷贝出来的数据，也就是说不是源state，所以人家不变
    //因此我们初始化一下，在页面一进来的时候就触发一下函数 ，写一个不传数据，仅仅是获取的
    //方法   移驾app.vue
    console.log(this.$store.state.car.goods);
  },
  computed: {
    ...mapState(['car'])
    // goods ()  {
    //   return this.$store.state.car.goods
    // }
  }
}
</script>
