const getters = {
    carInfo( state ){//state是可以取到的 挂载store身上，于是数据都可以得到最新的
        let allNumber = 0
        let allPrice = 0
        if ( state.goods.length ) {
            state.goods.forEach(good => {
                allNumber += good.num
                allPrice  += good.num * good.price
            });
        }

        return { allNumber, allPrice }
    }

}
export default getters