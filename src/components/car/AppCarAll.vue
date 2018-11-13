<template>
    <div class="app-allinfo">
        <el-card class="box-card" shadow="hover">
            <h1>总价钱：{{carAll.allPrice}} ；总数量:{{carAll.allNumber}}</h1>
        </el-card>
    </div>
</template>
<script>
     //我们希望通过每个商品的单价和个数。得出来动态的商品的总价钱以及总数量
     //那么这个数据是通过state衍生出来的，于是类似computed的计算属性，vuex用getter
     //goto--car->getter.js 计算出来allnum 以及 allprice，
     import { mapGetters } from 'vuex'
    export default {
        computed: mapGetters({
            carAll:'car/carInfo'      
        })
        
    }
</script>
<style>

</style>

