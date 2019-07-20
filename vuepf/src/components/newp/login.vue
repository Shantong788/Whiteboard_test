<template>
        <div class="content">
        <div class="head cnt"><span>濮阳市医院动态运营指标数据大屏</span> </div>
        <div class="main">
            <!-- 第一部分时间 -->
            <div class="time">
                <p><span>2019</span>
                    年
                    <span>5</span>
                    月
                    <span>10</span>
                    日
                    <span class="clock">15:30</span>
                </p>
            </div>
            <!-- 上部大屏展示 -->
            <div class="dap_top">
                <div class="one">
                    <div class="title">
                        <img src="img/daping/01.png" alt="" class="pic">
                        <p class="name">总收入</p>                        
                    </div>
                    <div id="zsr"></div>
                </div>
                <div class="two">
                    <div class="title">
                        <img src="img/daping/02.png" alt="" class="pic">
                        <p class="name">药品收入</p>                        
                    </div>
                    <!-- <div id="ypsr">
                        <p>药品总收入</p>
                        <ul class="list">
                            <li class="money">6</li>
                            <li class="money">6</li>
                            <li class="money">6</li>
                            <li class="money">6</li>
                            <li class="money">6</li>
                            <li class="money">6</li>
                            <span class="danwei cnt">元</span>
                        </ul>
                    </div> -->
                    <div class="two_bom">
                        <div id="two_lft"></div>
                        <div class="two_info">
                            <div id="two_rgt"></div>
                            <p class="thistip">药品总收入占业务收入比例</p>
                        </div>
                    </div>
                </div>
                <div class="three">
                    <div class="title">
                        <img src="img/daping/03.png" alt="" class="pic">
                        <p class="name">出入院运行指标</p>
                    </div>
                    <div id="cryyxzb"></div>
                </div>
                <div class="four">
                    <div class="title">
                        <img src="img/daping/04.png" alt="" class="pic">
                        <p class="name">诊疗人次运行指标</p>
                    </div>
                    <div id="zlrcyxzb"></div>
                </div>
            </div>
            <!-- 第二部分时间 -->
            <div class="time tim1">
                <p><span>2019</span>
                    年
                    <span>5</span>
                    月
                    <span>10</span>
                    日
                </p>
            </div>
            <!-- <p>亲爱的王主任您好，以下是您<span>2018</span>年 <span>1</span>月 <span>22</span>日所关注的数据报告</p> -->
            <!-- 下部大屏展示 -->
            <div class="dap_botm">
                <div class="btmlft">
                    <div class="title tit1">
                        <img src="img/daping/05.png" alt="" class="pic">
                        <p class="name">床位指数</p>
                    </div>
                    <div class="cwzs_left">
                        <div class="cwzs_top">
                            <div class="top_lft">
                                <p>平均住院日</p>
                                <p><span class="disco">18.6</span>&nbsp; 天</p>
                            </div>
                            <div class="top_lft">
                                <p>病床周转次数</p>
                                <p><span class="disco">0.16</span>&nbsp; 次</p>
                            </div>                            
                        </div>                        
                        <div class="cwzs_info">
                            <div id="cwzs"></div>
                            <p class="thistip2">病床使用率</p>
                        </div>                        
                    </div>
                    <div class="cwzs_rgt">
                        <div class="rgt_top">
                           <p class="rgt_tip">
                               床日数
                           </p> 
                           <div id="crsphb"></div>
                        </div>
                        <div class="rgt_btm">
                            <p class="rgt_tip rgtin_tip">
                                床日数
                            </p> 
                            <div id="cwsphb"></div>
                        </div>
                    </div>
                </div>
                <div class="btmrgt">
                       <div class="btmtop">
                            <div class="title tit2">
                                <img src="img/daping/06.png" alt="" class="pic" >
                                <p class="name">抗病药物指标</p>
                            </div>
                            <div class="btmboder">
                                <div id="kjywzb1"></div>
                                <div id="kjywzb2"></div>
                                <div class="two_info3">
                                    <div id="kjywzb3"></div>
                                    <p class="thistip">病床使用率</p>
                                </div>
                                <!-- <div id="kjywzb3"></div> -->
                            </div>                            
                       </div>
                       <div class="btmbbt">
                            <div class="title tit3">
                                <img src="img/daping/07.png" alt="" class="pic">
                                <p class="name">患者负担</p>
                            </div>
                            <div class="cwzs_top2">
                                <div class="cwzs_lft">
                                    <p>每诊疗人次医疗费用</p>
                                    <p id="nie">（每门诊人次）</p>
                                    <p><span class="disco">28868</span>&nbsp; 元</p>
                                </div>
                                <div class="cwzs_lft">
                                    <p>出院患者人均医疗费用</p>
                                    <p id="spail"><span class="disco">28868</span>&nbsp; 元</p>
                                </div>                            
                            </div>
                       </div>
                       <div class="evetbtm">
                            <div class="title tit3">
                                <img src="img/daping/08.png" alt=""class="pic">
                                <p class="name">基本药物</p>
                            </div>
                            <div class="cwzs_top2">
                                <div class="cwzs_lft">
                                    <p>基本药物种类</p>
                                    <p id="spail1"><span class="disco">651</span>&nbsp;种</p>
                                </div>
                                <div class="cwzs_lft">
                                    <p>基本药物收入占药品收入比例</p>
                                    <p id="spail2"><span class="disco">50.8</span>&nbsp; %</p>
                                </div>                            
                            </div>
                       </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
import "@/assets/css/login.css"
export default {
    
}
</script>

