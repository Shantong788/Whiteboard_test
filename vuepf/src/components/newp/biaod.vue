<template>
  <el-button type="text" @click="open">提示{{getVuexData}}</el-button>
</template>

<script>
export default {
  data() {
    return {
      id: "5"
    };
  },
  props: {
    tit: {
      type: String,
      default: "交易提醒 "
    },
    tip: {
      type: String,
      default: "交易失败，请返回网站再试一次 "
    },
    // tits: {
    //   type: Object,
    //   default: () => {
    //     return {
    //       tit: "交易提醒",
    //       tip: "交易失败，请返回网站再试一次"
    //     };
    //   }
    // }
  },
  created(){
      
      console.log(this.getVuexData)
  },
  methods: {
    open() {
      this.$confirm(this.tip, this.tit, {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          
          this.$emit('mytip', "haha")
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  },
  computed:{
      getVuexData(){
          return this.$store.state.count
      }
  }
};
</script>