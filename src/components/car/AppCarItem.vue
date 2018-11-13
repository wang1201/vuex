<template>
    <div class="app-car-item">
        <el-card class="box-card" shadow="hover">
            <div class="info">
                <img :src="info.imgUrl" alt="">
                <div class="content">
                    <h3>{{info.name}}</h3>
                    <p>单价: ￥{{info.price}}</p>
                </div>
            </div>
            <div class="control">
                <el-input-number :value="info.num"  @change = "changeNum" :max="10000" ></el-input-number>
            </div>
        </el-card>
    </div>
</template>

<script>
//现在，可以显示添加过来的数据了，那么我们希望她是双向的，也就是说我们在购物车里面，也可以进行
//商品的添加和删除，从而导致数据state变化 写一个change方法
import { mapAction } from 'vuex'
export default {
    props: ['info'],
    methods:{
        //去actions分发改变的方法到mutations触发某个commit得到数据
        //input-number。使用change事件 每次点击会得到两个参数，newval oldval
        changeNum(newval,oldval){
            this.$store.dispatch({
                type:'car/controlGoodNumber',
                id:this.info.id,
                 control_type: oldval < newval // 判断是+还是-
            })
        }
    }
}
</script>
<style lang="scss">
.app-car-item {
    width: 700px;
    margin: 0px auto 20px;

    .el-card__body {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .info {
            img {
                width: 150px;
                height: 150px;
                margin-right: 15px;
            }
            display: flex;align-items: center;
        }
    }
    
}
</style>
