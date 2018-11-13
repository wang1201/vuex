//这里面放的是唯一的数据源，也就是所有的model都在这里 类似vue中的data()
//取得时候可以通过store.state.x取到
//抛出。store里面引入
//而当state里面的数据源需要修改的时候，就要用mutations来改变state
//里面的值。官方规定，这样的数据才会同步   
const state = {
    goods:[],
    count:10,
    Countb:20
}
export default state