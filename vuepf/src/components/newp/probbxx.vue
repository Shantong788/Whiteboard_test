<template>
   <el-row style="heigt:100%">
    <el-col :span="6" style="heigt:100%">
      <el-tree :data="data" default-expand-all node-key="id" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      
    </el-col>
    <el-col :span="18" style="heigt:100%">
      <iframe src="" ref="tab" frameborder="0" width="100%" height="100%"></iframe>
    </el-col>
    
  </el-row>
    
</template>

<script>
export default {
  name: 'Probbxx',
  data () {
    return {
      msg: '重要按钮',
      data: [{
          label: '全部',
          children: [{
            id:'6',
            url:'http://localhost:8080/#/tableA/table1',
            label: '库存现金',
          }]
        },{
          label: '一级 2',
          children: [{
            id:'8',
            //url:'http://localhost:8080/#/tableA/table2'
            label: '二级 2-1',
          }]
        }]
    }
  },
  methods:{
    handleNodeClick(data){
     
      if(data.id==undefined){
        return;
      }else{
        console.log(data.url);
         this.$refs.tab.src=data.url;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>