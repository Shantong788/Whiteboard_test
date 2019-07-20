<template>
  <el-button type="text" @click="open">点击打开 Message Box</el-button>
</template>

<script>
export default {
  data() {
    return {
      aa: "没错"
    };
  },
  props:{
      msg: {
          type: String,
          default:"哈哈"
      }
  },
  created(){
    //   this.msg = "aa" // 不允许
    //   console.log(this.aa)
  },
  methods: {
    open() {
      this.$prompt(this.msg, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
      })
        .then(({ value }) => {
          this.aa = value;
          this.$emit('nashi', this.aa)

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  }
};
</script>