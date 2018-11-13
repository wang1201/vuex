<template>
    <div class="produceItem">
       <el-card>
            <img :src="info.imgUrl" class="image">
            <div style="padding: 14px;">
                <span>{{info.name}}</span>
                <div class="bottom clearfix">
                <time class="time">￥{{info.mktPrice}}</time>
            </div>
            <div style="padding: 0;display: flex;">
                    <el-input-number size="mini" v-model="num"  :min="1"  ></el-input-number>
                    <el-button @click = "addGoodsHandler" style="margin-left: 15px;" type="danger" size = "mini">加入购物车</el-button>
            </div>
            </div>
        </el-card>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ["info"],
  data(){
      return {
          num:1
      }
  },
  methods:{
     ...mapActions({
        addGoods: 'car/addGoods'
    }),
    addGoodsHandler () {
        console.log(this);
        // 是要发送请求 -> 存储在store中
        // this.$store.dispatch({type: 'car/addGoods', a: 1})
        //从info中取出来需要的这几个数据
        let { id, imgUrl, name, mktPrice: price }  = this.info;
        // 这样也可以   分发器dispatch或者直接调用起的这个函数的别名addGoods
        // this.$store.dispatch({type: 'car/addGoods', id, imgUrl, name, price, num: this.num})
        //调用这个函数也就是actions
        this.addGoods({
            id, imgUrl, name, price, num: this.num
        })
    }
  }
};
</script>

<style lang="stylus">
.produceItem {
    text-align: left;
}

.time {
    font-size: 13px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
}

.button {
    padding: 0;
    float: right;
}

.image {
    width: 100%;
    display: block;
}

.clearfix:before, .clearfix:after {
    display: table;
    content: '';
}

.clearfix:after {
    clear: both;
}
</style>
