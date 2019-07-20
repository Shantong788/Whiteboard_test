 <template>
  <div style="height:100%">
    <div class="conment">
      <div class="header">
        <li class="logo">
          <img src="../../assets/img/xyh.png" alt />
        </li>
        <p class="name">郏县妇幼保健院</p>
        <p class="keshi">{{head.keshi}}</p>
        <div class="time">
          <p>2019-6-20</p>
          <p>星期四</p>
          <p>08:00:03</p>
        </div>
        <div class="retui cnt">
          <img class="tuichu" src="../../assets/img/tuichu.png" alt />
          <p class="txtno cnt">退出</p>
        </div>
      </div>
      <div class="main">
        <div class="list">
          <div class="l_lft">
            <li class="l_info">
              <img class="inner" src="../../assets/img/boy.png" alt />
              <p class="nmb">6</p>
            </li>
            <li class="l_info">
              <img class="inner" src="../../assets/img/girly.png" alt />
              <p class="nmb">14</p>
            </li>
            <li class="l_info">
              <span class="kong cnt">空</span>
              <p class="nmb">0</p>
            </li>
            <li class="l_info">
              <span class="kong cnt">老</span>
              <p class="nmb">1</p>
            </li>
            <li class="l_info">
              <span class="kong cnt">幼</span>
              <p class="nmb">12</p>
            </li>
            <p class="all cnt">
              总住院人数：
              <span class="allnbm">47</span>人
            </p>
          </div>
          <div class="l_rgt">
            <li
              class="rg_info"
              v-for="item in huli"
              :key="item.id"
              :class="{'r_info': ![1,2].includes(item.level)}"
            >
              <span
                class="cnt"
                :class="{ 'tee': item.level==3 , 'huli': ![1,2].includes(item.level),
                'one':item.level==4,'two':item.level==5,'thre':item.level==6
                }"
              >{{item.name}}</span>
              <p class="nmb">{{item.num}}</p>
            </li>
            <!-- <li class="rg_info">
              <span class="bing cnt">病重</span>
              <p class="nmb">0</p>
            </li>
            <li class="r_info">
              <span class="huli cnt tee">特级护理</span>
              <p class="nmb">3</p>
            </li>
            <li class="r_info">
              <span class="huli cnt one">一级护理</span>
              <p class="nmb">2</p>
            </li>
            <li class="r_info">
              <span class="huli cnt two">二级护理</span>
              <p class="nmb">2</p>
            </li>
            <li class="r_info">
              <span class="huli cnt thre">三级护理</span>
              <p class="nmb">17</p>
            </li>-->
          </div>
        </div>
        <div class="news">
          <div class="news_tip">
            <ul class="leet">
              <li class="le_info" v-for="item in list" :key="item.id">
                <div class="le_top">
                  <img class="pepimg" src="../../assets/img/25.png" alt />
                  <p class="chuang">
                    <span class="hao">{{item.chuang}}</span>
                    <span class="jibie cnt">{{item.jibie}}</span>
                  </p>
                  <p class="huanzhe">{{item.jibie}}</p>
                </div>
                <div class="le_btm">
                  <p class="docter">
                    医生：
                    <span>{{item.jibie}}</span>
                  </p>
                  <p class="work">{{item.jibie}}</p>
                  <p class="hushi">
                    护士：
                    <span>{{item.jibie}}</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="ping_rgt">
          <div class="rgt_top">
            <p class="tip">
              <span class="biue"></span>入出转改
            </p>
            <p class="tody">
              今日入院
              <span class="tdy_nmb">(4)</span>：
              <span class="tdy_c">15床</span>
              <span class="tdy_c">20床</span>
              <span class="tdy_c">21床</span>
              <span class="tdy_c">22床</span>
            </p>
            <p class="tody">
              今日转入
              <span class="tdy_nmb">(0)</span>：
            </p>
            <p class="tody">
              今日出院
              <span class="tdy_nmb">(2)</span>：
              <span class="tdy_c">18床</span>
              <span class="tdy_c">20床</span>
            </p>
            <p class="tody">
              今日转出
              <span class="tdy_nmb">(2)</span>：
              <span class="tdy_c">23床</span>
            </p>
            <p class="tody">
              今日换床
              <span class="tdy_nmb">(2)</span>：
              <span class="tdy_c">19床→14床</span>
              <span class="tdy_c">17床→10床</span>
            </p>
            <p class="tody">
              预约住院
              <span class="tdy_nmb">(0)</span>：
            </p>
            <p class="tody">
              预约出院
              <span class="tdy_nmb">(0)</span>：
            </p>
            <p class="tody">
              预约换床
              <span class="tdy_nmb">(0)</span>：
            </p>
          </div>
          <p class="tip doc_tip">
            <span class="biue"></span>医嘱提醒
          </p>
          <div class="rgt_btm">
            <div class="rgt_her">
              <p class="tody" v-for="item in linews" :key="item.linews">
                <span class="tip_b"></span>
                <span class="tdy_c">{{item.changh+"号病床"+item.name+item.news}}</span>
              </p>
              <p class="tody">
                <span class="tip_b"></span>
                <span class="tdy_c">14张丽婷测空腹血糖QD</span>
              </p>
              <p class="tody">
                <span class="tip_b"></span>
                <span class="tdy_c">16床李平测空腹+三餐后血糖</span>
              </p>
              <p class="tody">
                <span class="tip_b"></span>
                <span class="tdy_c">17床陈焕香口服哈乐qd</span>
              </p>
              <p class="tody">
                <span class="tip_b"></span>
                <span class="tdy_c">19床刘起源体温大于38° 抽血培养</span>
              </p>
              <p class="tody">
                <span class="tip_b"></span>
                <span class="tdy_c"></span>
              </p>
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
 <script>
import "@/assets/css/callnmb.css";
export default {
  name: "callnumber",
  data() {
    return {
      head: {
        keshi: "",
        id: ""
      },
      huli: [],
      list: [
        {
          chuang: "22",
          jibie: "三级",
          hname: "啥的",
          dname: "对方是",
          sname: "第三次",
          shuaka: "医保"
        },
        {
          chuang: "22",
          jibie: "三级",
          hname: "啥的",
          dname: "对方是",
          sname: "第三次",
          shuaka: "医保"
        }
      ],
      linews: [
        {
          changh: "6",
          name: "刘昊然",
          news: "多喝热水"
        },
        {
          changh: "7",
          name: "刘昊然",
          news: "多喝热水"
        },
        {
          changh: "8",
          name: "刘昊然",
          news: "多喝热水"
        },
        {
          changh: "7",
          name: "刘昊然",
          news: "多喝热水"
        },
        {
          changh: "8",
          name: "刘昊然",
          news: "多喝热水"
        }
      ]
    };
  },
  methods: {
    // 获取头部信息
    getHeadInfo() {
      this.ajax
        .get("../../static/jison/head.json")
        .then(res => {
          this.head = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    },
    // 护理级别
    getJibieinfo() {
      this.ajax
        .get("../../static/jison/huli.json")
        .then(res => {
          this.huli = res.data.Data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  created() {
    this.getHeadInfo();
    this.getJibieinfo();
    // this.getUserInfo().then(res => {}).catch(err=>{});
  }
};
</script>
 
 <style>
 
 </style>
 
 
 
 
 
 