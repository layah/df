<template>
  <div class="couser_basis">
   <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box">
        <div class="header_top Center">
            <!--<div class=" F30 Line30 Mtp45">{{couseList.navNm}}</div>-->
            <div class="F20 Mtp40 Line30">{{couseList.tipList}}</div>
        </div>
        <div class="Mtp20">
          <ul class="couse_list_ul">
            <li class="actual_list Mbm15" v-for="(couseList,index) in couseList.couseList">
                <router-link :to="Url+(index+1)">
                    <div class="posr" style="overflow:hidden">
                        <img class="imgBox" :src="couseList.imgL">
                        <div class="F12 color_6 actual_hide_box">
                            <div class="actual_hide F0">
                                <div class=" Mtp20 color_fff Center p_ibt case_box border_r9">
                                    <div class="">{{couseList.num}}</div>
                                    <div class="">体验案例</div>
                                </div>
                                <div class=" Mtp20 color_fff Center p_ibt case_box border_r9">
                                    <div class="">{{couseList.sec}}</div>
                                    <div class="">知识点案例</div>
                                </div>
                                <div class=" Mtp20 color_fff Center p_ibt case_box ">
                                    <div class="">{{couseList.case}}</div>
                                    <div class="">综合技术案例</div>
                                </div>
                                <div class=" Mtp20 color_fff Center p_ibt case_box border_r9">
                                    <div class="">{{couseList.js}}</div>
                                    <div class="">业务综合案例</div>
                                </div>
                                <div class=" Mtp20 color_fff Center p_ibt case_box">
                                    <div class="">{{couseList.gc}}</div>
                                    <div class="">工程实践案例</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="Mlf20 Mrt20 Mtp10 Mbm10 Tleft">
                        <div class="Mtp5 color_3 WTO F14" v-text="couseList.name"></div>
                        <div class="Mtp5 color_9 F12">{{couseList.num}}个案例</div>
                    </div>
                </router-link>
            </li>
            <li class="clearfix"></li>
          </ul>
        </div>
    </div>
    <!-- <Footers></Footers> -->
  </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
// import Footers from '../../components/Footer-two.vue';
export default{
  name:'integratedCase',
  components:{
    Headers,
    // Footers
  },
  data(){
    return {
       add:"/#/resindex",
       headslogo:"/src/assets/images/logo2.png",
       name:"企业综合案例",
       title:'企业综合案例',
      // ImgSrc:"/src/assets/images/logo2.png",
      couseList:{},
      Url:"/trains?typeId=",
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
      this.$http.get('src/assets/json/integratedCase.json').then(function(data){
          this.couseList=data.data;
      })
    }
  },
  created:function(){
    this.getCouse()

  },
  mounted:function(){
    this.getList();
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
.case_box{
  height:40px;
  padding-right:15px;
  padding-left: 15px;
  font-size:12px;
}
.border_r9{  border-right:1px solid #999;}
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
position: absolute;
top: 0px;
transition: all ease 0.3s;
-webkit-transition:all ease 0.3s;
-o-transition:all ease 0.3s;
}

.actual_hide {
width: 280px;
height: 140px;
position: absolute;
top: 170px;
transition: all ease 0.3s;
-webkit-transition:all ease 0.3s;
-o-transition:all ease 0.3s;}

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
.imgBox{
  width:340px;
  height:auto;
}
.actual_list{
  width:340px;
}
.actual_hide_box{
  width:100%;
  height:100%;
}
.actual_hide {
  width:100%;
  margin-top:30px;
}
.case_box{
    padding-right: 25px;
    padding-left: 25px;
}
}
@media screen and (max-height: 768px) {
.header_top{padding-bottom: 0;}
.Mtp35{margin-top:10px;}
.Ptp40{padding-top: 10px;}
.tip_state{height:75px;}
.Mtp45{
    margin-top: 15px;
}
}
</style>
