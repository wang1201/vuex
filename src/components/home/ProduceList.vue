<template>
  <div class="produceList"> 
     <el-container>
            <el-header>
                <h1>推荐商品</h1>
            </el-header>
            <el-main>
                <el-row v-if="lists">
                    <el-col :span="6" v-for="list in lists" :key="list.id" >
                         <produce-item :info = "list"></produce-item>
                    </el-col>
                   
                </el-row>
            </el-main>
        </el-container>
  </div>
</template>

<script>
import ProduceItem from "@/components/home/ProduceItem.vue";
export default {
  data(){
      return{
          lists:[]
      }
  },
  async beforeCreate() {
    let results = await this.$jsonp({
      url: "http://mbrand.xiu.com/brand/brandGoodsSearchByParams",
      params: {
        bId: 1308,
        sort: 11,
        p: 1
      }
    });
    this.lists = results.goodsItems;
    console.log(this.lists);
  },

  components: {
    ProduceItem
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
</style>
