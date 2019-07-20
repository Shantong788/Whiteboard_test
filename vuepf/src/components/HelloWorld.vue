<template style="height:100%">
    <div>
      <p>国家标准科目版本信息</p>
      <div>
        <el-button  type="primary" @click="alertDialog">新增</el-button>
        <el-button type="primary" @click="alertDialog">修改</el-button>
        <el-button type="primary">删除</el-button>
        <el-button type="primary">发布</el-button>
        <el-button type="primary" @click="another">国家标准科目内容维护</el-button>
      </div>
      <div  class="">
        <el-table 
          ref="multipleTable" 
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            >
          </el-table-column>
          <el-table-column
            label="版本号"
            >
            <template slot-scope="scope">{{ scope.row.date }}</template>
          </el-table-column>
          <el-table-column
            prop="name"
            label="版本名称 "
            >
          </el-table-column>
          <el-table-column
            prop="address"
            label="发布状态"
            show-overflow-tooltip>
          </el-table-column>
        </el-table>
      </div>

      <el-dialog title="国家标准科目版本编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="版本号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="版本名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="addsave">确 定</el-button>
        </div>
      </el-dialog>

      <!-- <el-dialog title="国家标准科目版本编辑" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="版本号" :label-width="formLabelWidth">
            <el-input v-model="form.id" autocomplete="off" value=""></el-input>
          </el-form-item>
          <el-form-item label="版本名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog> -->
     
    </div>
  
    
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '默认按钮',
      tableData: [{
          date: 'B00001',
          name: '2009年国家医院会计制度',
          address: '已发布'
        }, {
          date: 'B00002',
          name: '2017年国家医院会计制度',
          address: '未发布'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          id:'22',
          name: '',
        },
        formLabelWidth: '120px'
    }
  },
  mounted:function(){
    // this.$http.get('apis/spboot/test/user/1').then(function(res){
    //   console.log(res);
    // },function(){
    //   console.log("请求失败");
    // })

    this.ajax.get("apis/spboot/test/user/1", 
                    {headers:{'Content-Type':'application/json'}}).then(function (res) { 
                            console.log('success')
                        }).catch(function (error) {
                              console.log(error)
                          })

  },
  methods:{
     alertDialog(){
        this.dialogFormVisible=true;
        
      },
      another(){
        this.$router.push('/newp/probbxx');
      },
      addsave(){
        // this.dialogFormVisible = false;
        // //console.log(this.form.id);
        // axios({//格式a
        //     params:{
        //       nsVId:this.form.id,
        //       nsVName:this.form.name
        //     },
        //     method:'get',
        //     url:'http://192.168.1.74:8190/ns/version/insert',
            
        // }).then(function(resp){
        //     console.log(resp);
        // }).catch(resp => {
        //     console.log('请求失败');
        // });
      },
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
