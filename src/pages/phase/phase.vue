<template>
  <div class="couser_basis">
    <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box">
        <div class="header_top">
            <div class="plan_icon_box Ptp40">
                <div class="F0 phase_box Center">
                    <div class="p_ibm wido25" v-for="(list,index) in tipList">
                        <div class="strip p_ibm wido42"></div>
                        <div class="phase_icon p_ibm posr" @click="LightUp()"  v-bind:class="{'phase_icon_on':index==0}">
                          <div class="F16 color_3 wido100 Center posa word_box" v-text="list.name"></div>
                          <div class="posa triangle_up" style="display:none;" v-show="index==0"></div>
                        </div>
                        <div class="strip p_ibm wido42"></div>
                    </div>
                </div>
            </div>
            <div class="Mtp55 posr tip_state Center">
              <div class="Ptp20 Plf20 Prt10 Pbm10 tip_class F14" v-for="(tipl,index) in tipListL" v-show="index==0">{{tipl.name}}</div>
            </div>
        </div>
        <div class="Mtp35">
          <ul class="couse_list_ul">
            <li class="actual_list Mbm15" v-for="one in couseList">
                <router-link :to="one.srcL">
                    <div class="posr" style="overflow:hidden">
                        <img class="imgBox" :src="one.imgL">
                        <div class="F12 color_6 actual_hide_box">
                            <div class="actual_hide ">
                              <div class="p_ibm pic_box Mlf20">
                                <img :src="one.img" >
                              </div>
                              <div class="p_ibm Line20 wido60 Mlf10">
                                  <span class="F12 color_fff" v-text="one.Int"></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="Mlf20 Mrt20 Mtp10 Mbm10 Tleft">
                        <div class="Mtp5 color_3 WTO F14" v-text="one.name"></div>
                        <div class="Mtp5 color_9 F12">
                            <span>{{one.num}}学时</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.sec}}章节</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.case}}案例</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="clearfix"></li>
          </ul>
          <ul class=" couse_list_ul" style="display:none;">
            <li class="actual_list Mbm15" v-for="one in couseListO">
                <router-link :to="one.srcL">
                    <div class="posr" style="overflow:hidden">
                        <img class="imgBox" :src="one.imgL">
                        <div class="F12 color_6 actual_hide_box">
                            <div class="actual_hide ">
                              <div class="p_ibm pic_box Mlf20">
                                <img :src="one.img" >
                              </div>
                              <div class="p_ibm Line20 wido60 Mlf10">
                                  <span class="F12 color_fff" v-text="one.Int"></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="Mlf20 Mrt20 Mtp20 Mbm20 Tleft">
                        <div class="Mtp15 color_3 WTO F14" v-text="one.name"></div>
                        <div class="Mtp10 color_9 F12">
                            <span>{{one.num}}学时</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.sec}}章节</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.case}}案例</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="clearfix"></li>
          </ul>
          <ul class=" couse_list_ul" style="display:none;">
            <li class="actual_list Mbm15" v-for="one in couseListT">
                <router-link :to="one.srcL">
                    <div class="posr" style="overflow:hidden">
                        <img class="imgBox" :src="one.imgL">
                        <div class="F12 color_6 actual_hide_box">
                            <div class="actual_hide ">
                              <div class="p_ibm pic_box Mlf20">
                                <img :src="one.img" >
                              </div>
                              <div class="p_ibm Line20 wido60 Mlf10">
                                  <span class="F12 color_fff" v-text="one.Int"></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="Mlf20 Mrt20 Mtp20 Mbm20 Tleft">
                        <div class="Mtp15 color_3 WTO F14" v-text="one.name"></div>
                        <div class="Mtp10 color_9 F12">
                            <span>{{one.num}}学时</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.sec}}章节</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.case}}案例</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="clearfix"></li>
          </ul>
          <ul class=" couse_list_ul" style="display:none;">
            <li class="actual_list Mbm15" v-for="one in couseListh">
                <router-link :to="one.srcL">
                    <div class="posr" style="overflow:hidden">
                        <img class="imgBox" :src="one.imgL">
                        <div class="F12 color_6 actual_hide_box">
                            <div class="actual_hide ">
                              <div class="p_ibm pic_box Mlf20">
                                <img :src="one.img" >
                              </div>
                              <div class="p_ibm Line20 wido60 Mlf10">
                                  <span class="F12 color_fff" v-text="one.Int"></span>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="Mlf20 Mrt20 Mtp20 Mbm20 Tleft">
                        <div class="Mtp15 color_3 WTO F14" v-text="one.name"></div>
                        <div class="Mtp10 color_9 F12">
                            <span>{{one.num}}学时</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.sec}}章节</span>
                            <span class="Mlf10 Mrt10">|</span>
                            <span>{{one.case}}案例</span>
                        </div>
                    </div>
                </router-link>
            </li>
            <li class="clearfix"></li>
          </ul>
        </div>
    </div>
    <Footers :cursor="cursor"></Footers>
  </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
  name:'phase',
  components:{
    Headers,
    Footers
  },
  data(){
    return {
      add:"/#",
      headslogo:"/src/assets/images/logo-java.png",
      name:"Java开发体系",
      title:'课程清单',
      cursor:3,
      tipList:[],
      couseList:[],
      couseListO:[],
      couseListT:[],
      couseListh:[],
      tipListL:[]
    }
  },
  watch:{
    tipList:function(){
      return this.tipList;
    }
  },
  methods:{
    getList:function(){
      this.$http.get('src/assets/json/tip_list.json').then(function(data){
          this.tipList=data.data;
      })
    },
    getCouse:function(){
      this.$http.get('src/assets/json/couse_zj.json').then(function(res){
          this.couseList=res.data.couseListOne;
          this.couseListO=res.data.couseListTwo;
          this.couseListT=res.data.couseListTh;
          this.couseListh=res.data.couseListF;
          this.tipListL=res.data.tipList;
      })
    },
    LightUp:function(){
      $('.plan_icon_box').on('click','.phase_box .phase_icon',function(){
        var num=$('.phase_icon').index(this);
        $(this).addClass('phase_icon_on').parents().siblings().find('.phase_icon').removeClass('phase_icon_on');
        $('.triangle_up').eq(num).show().siblings('.triangle_up').hide() ;
        $('.couse_list_ul').eq(num).show().siblings().hide();
        $('.triangle_up').eq(num).show().parents().siblings().find('.triangle_up').hide();
        $('.tip_class').eq(num).show().siblings().hide()
      })
    }
  },
  mounted:function(){
    this.getList();
    this.getCouse()
  }
};


</script>

<style scoped>
.auto_box {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
}
.imgBox{
  width:280px;
  height:140px;
}
.header_top{
  width: 100%;
  padding-bottom: 35px;
}
.phase_icon{
  width: 45px;
  height:45px;
  border-radius: 50%;
  border:3px solid #f1f1f1;
  background: url('../../assets/images/Sprite.png') center;
  background-position: -206px -1px;
  background-color: #ccc;
  cursor: pointer;
}
.phase_icon_on{
  background-color: #1a9bfc
}
.phase_icon_off{
}
.plan_icon_box{
  width: 100%;
}
.strip{
  height:4px;
  background-color: #e7eaec;
}
.word_box {
top: 55px;
left: -55px;
width: 150px;
}
.tip_state{
  width: 100%;
  height:87px;
  border-radius: 8px;
  background-color: #f6f6f6;
}
.triangle_up{
  width: 0;
  height:0;
  top:85px;
  left:0;
  border-left:20px solid transparent;
  border-right:20px solid transparent;
  border-bottom:20px solid #f6f6f6;
}

.actual_list {
float: left;
width: 280px;
margin-right: 26px;
position: relative;
overflow: hidden;
border-radius: 4px;
box-shadow: 0px 1px 3px rgba(0,0,0,0.2);
}
.actual_list:hover {
box-shadow: 0px 2px 14px rgba(0,0,0,0.4);
}
.actual_list:nth-child(4n){
  margin-right: 0
}
.actual_hide_box {
width: 280px;
height: 140px;
line-height: 140px;
position: absolute;
top: 0px;
transition: 0.6s;
}

.actual_hide {
width: 280px;
height: 140px;
position: absolute;
top: 170px;
transition: 0.6s;
}

.actual_list:hover .actual_hide {
top: 0;
}

.actual_list:hover .actual_hide_box {
background: rgba(0,0,0,0.6);
}
.pic_box{
  width: 60px;
  height:60px;
  border-radius: 50%;
  line-height: 60px;
  text-align: center;
  overflow: hidden;
}
.hidden{
  overflow: hidden;
}
.color_fff{
  color:#fff;
}
.couse_list_ul{
  animation: bounceInRight 2s;
}
@media only screen and (min-width: 1024px) {
.auto_box{width: 1200px;}
.actual_list:nth-child(4n){
  margin-right: 0
}
.actual_list{
  margin-right:26px;
}

};
@media only screen and (min-width: 768px) and (max-width: 1024px) {
.auto_box{width: 960px;}
.actual_list:nth-of-type(3n){
  margin-right: 0;
}
.actual_list:nth-child(4n){
  margin-right: 60px;
}
.actual_list{
  margin-right:60px;
}
.wido42 {
    width: 40.63%;
}
.Mtp35{margin-top: 10px;}
};

@media only screen and (max-width: 768px) {
.auto_box{width: 700px;}
.actual_list:nth-child(2n){
  margin-right: 0
}
.imgBox{
  width:340px;
  height:auto;
}
.actual_list{
  width:340px;
}
.actual_list:nth-of-type(2n+1){
  margin-right: 20px;
}
.actual_list{
  margin-right:20px;
}
.wido42{
  width: 37.15%;
}
.F18{
  font-size:14px;
}
.actual_hide_box{
  width:100%;
  height:100%;
}
.actual_hide {
  width:100%;
  margin-top:30px;
}
}
@media screen and (max-height: 768px) {
.header_top{padding-bottom: 0;}
.Mtp35{margin-top:10px;}
.Ptp40{padding-top: 10px;}
.tip_state{height:75px;}
}
</style>
