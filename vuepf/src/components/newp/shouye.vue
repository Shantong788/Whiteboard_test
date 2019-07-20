<template>
  <div style="height:100%">
    <div class="coment">
      <div class="head">
        <li class="logo">
          <img src="../../assets/img/xyh.png" alt>
        </li>
        <p class="name">人脸识别认证</p>
      </div>
      <div class="btn">
        <el-row >
            <el-button>刷脸登陆</el-button>
        </el-row>       
      </div>
       <p class="facezc">人脸注册</p>
      <div class="xyhtip cnt">    
        <li class="xyhtip_in cnt">
          <img src="../../assets/img/xyh.png" alt>
           <p class="">郑州新益华医疗科技有限公司</p> 
        </li>
        <div class="xyh_btm cnt">
        <p>客服热线：0371-56850000</p>
        <p>Email：zzhyh@zzxyh.com</p>
        </div>       
      </div>        
    </div>
  </div>
</template>
<style>

.cnt {
  display: flex;
  align-items: center;
  justify-content: center;
}
.facezc{
    width: 65%;
    text-align: right;
    font-size: 0.07rem;
    color: #fff;
    margin-top: 1%;
}
.xyhtip{
    width: 100%;
    height: 7%;
    margin-top: 6%;
  flex-direction: column;
}
.xyhtip_in{
  width: 100%;
}
.xyhtip_in>img{
  width: 0.06rem;
}
.xyhtip_in>p{
  font-size: 0.05rem;
  color: #fff;
  margin-left: 0.5%;
}
.xyh_btm{
  width: 60%;
  margin-top: 0.2%;
}
.xyh_btm>P{
  color: #fff;
  font-size: 0.05rem;
}
.xyh_btm>P:nth-child(2){
  margin-left: 2%;
}
.coment {
  width: 100%;
  height: 100%;
  background: url(../../assets/img/shouye.png);
  background-position: center;
  background-size: 100% 100%;
}
.head {
  width: 100%;
  height: 11%;
  display: flex;
  align-items: center;
}
.logo {
  width: 3%;
  text-align: center;
  margin-left: 0.5%;
}
.logo > img {
  width: 0.15rem;
}
.name {
  width: 35%;
  font-size: 0.15rem;
  font-weight: 100;
  color: #fff;
}
.btn{
  width: 100%;
  height: 66%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.el-button{
    border-radius: 10px;
    padding: 0.06rem 0.7rem;
    font-size: 0.12rem;
}
</style>
