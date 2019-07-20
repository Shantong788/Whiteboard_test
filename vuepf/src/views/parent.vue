<template>
  <div>
    <div>{{type}}</div>
    <mesge class="tian" :msg="parent" @nashi="getCallBack"></mesge>
    <delt :tit="titone" :tip="tipone" @mytip="getCallindex"></delt>
  </div>
</template>
<script>
import mesge from "@/components/newp/hswork";
import delt from "@/components/newp/biaod";
export default {
  data() {
    return {
      type: "1",
      parent: "我媳妇儿最好看",
      titone:"登陆提示",
      tipone:"恭喜你访问成功"
    };
  },
  methods:{
      getCallBack(e){
          this.type = e
      },
      getCallindex(e){
          console.log(e)
      }
  },
  components: {
    mesge,
    delt
  }
};
</script>
<style lang="scss">
$background:#ff5857;
.tian{
    background: $background;
}
</style>

