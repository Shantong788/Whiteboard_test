<template>
     <div style="height:100%">
        <div class="fa-coment">
        <div class="head">
            <li class="logo">
            <img src="../../assets/img/xyh.png" alt>
            </li>
            <p class="name">人脸识别认证</p>
        </div>  
        <div class="y_face cnt">
            <div class="phot_in cnt">
            <div class="phot cnt">
                <span>没有检测到人脸</span> 
            </div>
            </div>            
        </div>
        <p class="phot_tip">
            正视前方，眨眨眼
        </p>
        </div>
  </div>
</template>
<style>
.fa-coment{
    width: 100%;
    height: 100%;
}
.head {
  width: 100%;
  height: 11%;
  background: #5394F9;
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
.y_face{
    width: 100%;
    height: 69%;
}
.phot_in{
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;    
    background: #fff;
    border: solid #eee 15px;
}
.phot{
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #928C87;
    color: #fff;
    font-size: 0.12rem;
}
.phot_tip{
    width: 100%;
    height: 20%;
    color: #333;
    font-size: 0.12rem;
    text-align: center;
}
</style>
