<template>
  <div class="couser_basis">
     <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box Mbm30">
      <!--<div class="couse_title Center F30 color_3 Line30 Mbm40" v-text="couseTitle"></div>-->
      <div class="Center F20 Line30">{{caseNm}}</div>
      <div class="Mtp40 Line35">
        <select class="select_box p_ibm" @change="selectOption($event)">
            <option v-for="(caseList,index) in caseList" :data-val="caseList.val" >{{caseList.name}}</option>
        </select>
        <div class="F12 fr p_ibm">共包含{{this.caseListN.length}}个案例</div>
      </div>
      <div class="couse_list_box Mtp20" v-for="(couseList,index) in caseListN">
        <div class="p_ibt wido25 Mtp20 Mlf15 Mrt25 fl">
          <div class="p_ibt posr" >
            <img :src="couseList.couseImg" alt="" width='300' />
          </div>
        </div>
        <div class="p_ibt Mtp20 wido70">
          <div class="F18 courseName" :data-index="couseList.id">{{couseList.couseName}}</div>
          <div class="F14 Mtp20 Line18 het60">{{couseList.couseIntr}}</div>
        </div>
        <ul class="F0 couses_icon_box ">
          <li class="p_ibt Mrt60" v-for="(couseICon,index) in couseList.couseICon">
            <div class="couses_icon " :class="'couses_icon_'+(index+1)">
              <a href="javascript:;" class="scale_icon" :data-index="(index+1)" @click="showchapter($event)"></a>
            </div>
            <div class="F12 wid50 Mtp10 Center">{{couseICon}}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- <Footers></Footers> -->
    <div class="scaleBox" id="couseList">
      <div class="table">
        <div class="table_cell">
          <div class="scaleBox_cont p_ibt Tleft posr">
            <div class="Mtp30 Mlf30 Mrt30 Mbm30">
              <div class="F24 alert_title Pbm30"></div>
              <div class=" targetList Pbm15">
                <div class="F16 targeIcon Mlf20">教学目标</div>
                <ul class="Mlf30 F0">
                  <li class="F14 list_disc Plf20 Prt20 p_ibt WTO" v-for="name in chapter.targetNm">{{name}}</li>
                </ul>
              </div>
              <div style="height:256px;overflow-y:auto;" class=" Mtp30 border1 scrollBox">
                <div class="tabel Center ">
                  <div class="thead ">
                    <div class="color_f F0">
                      <div class="p_ibm widoo30 Tleft F14 bor_right Plf15">章节名称</div>
                      <div class="p_ibm wido10 F14 bor_right">学时</div>
                      <div class="p_ibm wido20 F14 bor_right">配置的案例套件</div>
                      <div class="p_ibm wido10 F14 bor_right">说明案例</div>
                      <div class="p_ibm wido10 F14 bor_right">应用案例</div>
                      <div class="p_ibm wido10 F14 bor_right">综合案例</div>
                      <div class="p_ibm wido10 F14 bor_right">企业案例</div>
                    </div>
                  </div>
                  <div class="t_body">
                    <div class="t_row F0" v-for="(chapterNm,index) in  chapter.chapterNm">
                      <div class="p_ibm widoo30 Tleft F14 bor_right WTO">
                        <span class="Plf15" v-text="index>=9?index+1:('0'+(index+1))"></span>
                        <span class="Mlf5">{{chapterNm.chapName}}</span>
                      </div>
                      <div class="p_ibm wido10 F14 bor_right">{{chapterNm.times}}</div>
                      <div class="p_ibm wido20 F14 bor_right">{{chapterNm.case}}</div>
                      <div class="p_ibm wido10 F14 bor_right">{{chapterNm.stateCase}}</div>
                      <div class="p_ibm wido10 F14 bor_right">{{chapterNm.apply}}</div>
                      <div class="p_ibm wido10 F14 bor_right">{{chapterNm.zh}}</div>
                      <div class="p_ibm wido10 F14 ">{{chapterNm.firm}}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="close_btn_box posa">
              <a href="javascript:;" class="p_ibt alert_close_btn" v-on:click="alertClose()"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="scaleBox posr" id="pdfBox">
      <div id="scaleBox"></div>
      <div class="close_btn_box" style="right: 2%;top:4%">
        <a href="javascript:;" class="p_ibt alert_close_btn" v-on:click="alertClose()"></a>
      </div>
    </div>
    <div class="scaleBox" id="videoBox">
      <div class="table">
        <div class="table_cell">
          <div class="scaleBox_cont p_ibt Tleft F0 posr" style="min-height:600px;">
            <div class="Mtp30 Mlf25 Mbm30 p_ibt wido65" style="background:#000;height:570px;">
              <video id="example_video_1" class="videoBox" controls preload="none" width="100%" height="100%">
            </div>
            <div class="p_ibt wido30 color_f  Mtp30 F14 video_list">
              <div class="Mlf15 Mrt15 Mtp20 F14 color_9  border_bm1">
                <div class="p_ibm border_bm2 Pbm15">
                  视频列表
                </div>
              </div>
              <div class="Mtp25 color_92 F14 Mlf15 Mrt15">
                第一章 Java基本语法
              </div>
              <ul class="v_list">
                <li class="color_d" v-for="video in video" :data-src=(video.srcV)>
                  <span class="p_ibm play_icon Mlf15"></span>
                  <span class="Mlf10 wid188 WTO p_ibm">{{video.name}}</span>
                  <span class="Mlf10">{{video.times}}</span>
                </li>
              </ul>
            </div>
            <div class="close_btn_box posa">
              <a href="javascript:;" class="p_ibt alert_close_btn" v-on:click="alertClose()"></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
// import Footers from '../../components/Footer-two.vue';
import PDFObject from '../../assets/js/pdfobject.min.js';
export default {
  name: 'courseOut',
  components: {
    Headers,
    // Footers
  },
  data() {
    return {
      add:"/#/resindex",
      headslogo:"/src/assets/images/logo1.png",
      // name:"知识点案例",
      title:'经典案例',
      name:"经典案例",
      // ImgSrc:"/src/assets/images/logo1.png",
      couseList: [],
      caseList:{},
      couseTitle: "",
      CorseName: "",
      chapter: {},
      video: [],
      caseNm:"",
      caseListN:[]
    }
  },
  watch: {
    CorseName: function() {
      return this.CorseName;
    }
  },
  methods: {
    getList: function() {
      this.$http.get('src/assets/json/classicCase.json').then(function(data) {
        this.couseTitle = data.data.data.couseTitle;
        this.couseList = data.data.data.couserList;
        this.caseNm= data.data.data.caseNm;
      })
    },
    getcaseList:function(){
      this.$http.get('src/assets/json/caseList.json').then(function(data) {
        this.caseList= data.data.data.caseList;
      })
    },
    selectOption:function(event){
    var nm=$(event.target).find(" option:selected").data("val")
      this.$http.get('src/assets/json/caseList'+nm+'.json').then(function(data) {
        this.caseListN= data.data.data.couserList;
      })
    },
    firstCase:function(){
      this.$http.get('src/assets/json/caseList0.json').then(function(data) {
        this.caseListN= data.data.data.couserList;
      })
    },
    alertClose: function(event) {
      $(".scrollBox").scrollTop(0);
      $('.scaleBox').hide();
      document.getElementById("example_video_1").pause();
    },
    showppd: function() {
      PDFObject.embed("src/assets/ppdf.pdf", "#scaleBox", {
        height: "100%"
      })
    },
    showchapter: function(event) {
      var _this = this;
      var courseName = $(event.target).parents(".couses_icon_box").siblings()
        .find(".courseName")
      var val = courseName.text();
      var indexNm = courseName.data("index");
      if ($(event.target).data("index") === 1) {
        $.get('src/assets/json/chapter' + indexNm + '.json').then(function(
          data) {
          _this.chapter = data;
        })
        $("#couseList").show();
        $(".alert_title").text(val)
      } else if ($(event.target).data("index") === 5) {
        $.get('src/assets/json/video.json').then(function(data) {
          _this.video = data.videoList;
        });
        $("#videoBox").show();
        $(".color_d").removeClass("active1");
        document.getElementById("example_video_1").src="";
        document.getElementById("example_video_1").autoplay = true;
        document.getElementById("example_video_1").load()
      } else {
        $("#pdfBox").show();
      }
    }
  },
  mounted: function() {
    this.getList();
    this.showppd();
    this.getcaseList();
    this.firstCase()
  },
  updated: function() {
    $('.v_list').on("click", "li", function() {
      var SrcV = $(this).data("src");
      $(this).addClass("active1").siblings().removeClass("active1");
      document.getElementById("example_video_1").src = SrcV;
    })
  }
};
</script>

<style scoped>
.select_box{
  width:260px;
  height:35px;
  border:1px solid #dadada;
  border-radius: 4px;
  padding-left: 10px;
}
.Line35{
  line-height: 35px;
}
.videoBox{
  height:570px;
  background:#000 url(../../assets/images/timg.gif) no-repeat center;
}
.tabel {
  display: table;
  width: 100%;
}
.widoo30{
  width:30%;
}
.thead {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #1a9bfc;
}

.t_row {
  /*display: table-row;*/
  width: 100%;
  min-height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ddd
}

.t_row:nth-child(even) {
  background: #f6f6f6;
}

.color_f {
  color: #fff
}

.bor_right {
  border-right: 1px solid #e5e5e5
}

.border1 {
  border: 1px solid #ddd
}

.pdfobject-container {
  height: 500px;
}

.pdfobject {
  border: 1px solid #666;
}

.pdfobject-container {
  height: 100%;
}

.table {
  display: table;
  height: 100%;
}

.wid188 {
  width: 188px;
}

.video_list {
  height: 570px;
  background: #333;
}

.v_list {
  height: 468px;
  overflow-y: auto;
}

.v_list>li {
  height: 50px;
  line-height: 50px;
  cursor: pointer;
}

.v_list>li:hover {
  background: #404040;
}

.active1 {
  background: #404040;
}

.play_icon {
  border-width: 8px 0px 8px 13px;
  border-color: transparent transparent transparent #929292;
  border-style: solid;
  height: 0px;
}

.color_92 {
  color: #929292
}

.color_d {
  color: #ddd;
}

.border_bm1 {
  border-bottom: 1px solid #404040;
}

.border_bm2 {
  border-bottom: 2px solid #2fb3ff
}

.wido65 {
  width: 65%;
}

.wido35 {
  width: 35%
}

.F24 {
  font-size: 24px;
}

.targetList {
  min-height: 140px;
  background: #f6f6f6;
}

.targeIcon {
  height: 40px;
  line-height: 40px;
  padding-left: 30px;
  background: url(../../assets/images/couse_icon.png)no-repeat 3px -382px;
}

.list_disc {
  width: 180px;
  background: url(../../assets/images/disc.png) no-repeat left center;
}

.table_cell {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}

.scaleBox {
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
}

.alert_close_btn {
  width: 40px;
  height: 40px;
  background: url(../../assets/images/Sprite.png)no-repeat 0 -250px;
}

.scaleBox_cont {
  width: 1000px;
  margin: 0 auto;
  border-radius: 8px;
  background: #fff;
}

.auto_box {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
}

.couse_title {
  width: 100%;
  padding-top: 60px;
}

.couse_list_box {
  width: 100%;
  height: 250px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1)
}

.couse_name {
  position: absolute;
  top: 40%;
  left: 0;
  display: block;
  width: 100%;
  height: 48px;
  line-height: 48px;
  color: #fff;
  font-size: 20px;
  text-align: center;
  background: rgba(0, 0, 0, .6);
}

.het60 {
  height: 60px;
}

.wido70 {
  width: 70%;
}

.wid50 {
  width: 50px;
}

.couses_icon {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: url(../../assets/images/couse_icon.png)no-repeat;
  cursor: pointer;
}

.couses_icon:hover .scale_icon {
  display: block;
}


.couses_icon_1{
  background-position: 0 -59px;
}
.couses_icon_2 {
  background-position: 0 -272px;
}
.couses_icon_3 {
  background-position: 0 -328px;
}

.couses_icon_4 {
  background-position: -56px -328px;
}
.couses_icon_5 {
  background-position: 0 -113px;
}
.close_btn_box {
  position: absolute;
  right: -15%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  top: 0%;
}

.scale_icon {
  position: absolute;
  display: none;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background: url(../../assets/images/couse_icon.png)no-repeat -79px 15px;
  background-color: rgba(0, 0, 0, 0.6)
}

.couses_icon_box>li:last-child {
  margin-right: 0
}

@media only screen and (min-width: 1024px) {
  .auto_box {
    width: 1200px;
  }
  .actual_list:nth-child(4n) {
    margin-right: 0
  }
  .actual_list {
    margin-right: 26px;
  }
}

;

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .auto_box {
    width: 960px;
  }
  .close_btn_box {
    right: -2%;
    top: -3%;
  }
  .wido25 {
    width: 30%
  }

  .wido30 {
    width: 40%;
  }

  .wido65 {
    width: 55%;
  }

  .wido70 {
    width: 65%
  }

  .scaleBox_cont {
    width: 95%
  }
  /*.table_cell .Mlf15{margin-left: 10px}*/
}

;

@media only screen and (max-width: 768px) {
  .auto_box {
    width: 700px;
  }
  .wido65 {
    width: 53%;
  }

  .scaleBox_cont >.wido30{
    width:40%;
  }

  .wido25 {
    width: 43%
  }

  .wido70 {
    width: 48%
  }

  .couse_list_box {
    height: 100%;
    padding-bottom: 20px;
  }

  .couses_icon_box {
    text-align: center;
    margin-top: 20px;
  }

  .couses_icon_box>li {
    margin-right: 100px;
  }

  .het60 {
    height: 210px;
  }
  /*.table_cell .Mlf15{margin-left: 0}*/
}

@media screen and (max-height: 768px) {
  .header_top {
    padding-bottom: 0;
  }

  .Mtp35 {
    margin-top: 10px;
  }

  .Ptp40 {
    padding-top: 10px;
  }

  .tip_state {
    height: 75px;
  }
}
</style>
