<template>
    <div>
        <h3>count:{{count}}</h3>
        <button  @click="changeCount">添加</button>
    </div>
    
</template>
<script>
//这就是单向数据流，也就是view视图触发某个active动作，通知state 操作数据源改变,改变后相应道view上
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    changeCount() {
      this.count++;
    }
  }
};
</script>
