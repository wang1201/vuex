
// 模拟后端， localStorage模拟数据库
import _ from 'lodash'

const api = {
    // 添加商品到购物车数据库
    addGoods ({id, name, price, num = 1, imgUrl}) {
        // 模拟后端能力，存储数据到数据库中
        return new Promise(resolve => {
            setTimeout(async () => {
                let { goods } = await this.getCarGoods()
                // 判断有没有这个商品
                let good = _.find(goods, item => item.id === id)
                
                if ( good ) {
                    good.num += num
                } else {
                    // 如果是新商品
                    goods.push({
                        id, name, price, imgUrl, num
                    })
                }              

                this.changeCarGoods(goods)

                resolve({status: 200, goods})

            }, 200);
        })  
    },
    getCarGoods () { // 获取用户的所有购物车商品的信息
        return new Promise(resolve => {
            setTimeout(() => {
                resolve({
                    status: 200,
                    goods: localStorage.goods ? JSON.parse(localStorage.goods) : []
                })
            }, 200)
        })
    },
    changeCarGoods (goods) {
        localStorage.goods = JSON.stringify(goods)
    },
    controlGoodNumber ({id, control_type}) { // 更改数据库中商品数目
        return new Promise(resolve => {
           setTimeout(async () => {
                let { goods } = await this.getCarGoods()
                // 查找到对应的商品
                let good = _.find(goods, item => item.id === id)
                good.num += control_type ? 1 : -1
                // 如果商品数量么得了
                if ( good.num <= 0 ) {
                    // 去掉该商品
                    _.remove(goods, item => item.id === id)
                }
                this.changeCarGoods(goods)
                resolve({
                    status: 200,
                    goods
                })
           }, 200)
        })
        

    }
}

export default api