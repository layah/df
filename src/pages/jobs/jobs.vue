<template>
  <div class="couser_basis">
   <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box">
        <!--<div class="Center F30 Ptp20">岗位与技能</div>-->
        <div class="Mtp75 jobList Pbm10 F0 swiper-container">
          <div class="swiper-wrapper">
            <div class="jobList_li p_ibt posr swiper-slide " v-for="job in josName">
              <div class="Center F22 color_3 Mtp25 Line24 job_name Mlf15 Mrt15" v-text="job.name"></div>
              <div class="Mtp30 Mbm15 jobList_box">
                  <div class="jobList_u Mlf15 Mrt15">
                      <div class="p_ibm jobs_icon bag_icon"></div>
                      <div class="p_ibm F16 color_3 Mlf15">岗位职责</div>
                      <ul class="Mtp20 jobList_ul ">
                        <li class="list_disc Plf15 F12 color_3" v-for="jobz in jobz" v-text="jobz.duty"></li>
                      </ul>
                  </div>
                  <div class="jobList_d">
                    <div class="p_ibm jobs_icon lamp_icon Mlf15 Mtp20 "></div>
                    <div class="p_ibm F16 color_3 Mlf15 Mrt15 Mtp20 ">技术要求</div>
                    <ul class="Mtp20 sliding_box Mlf15 Mrt15">
                      <li class="list_disc Plf15 F12 color_3" v-for="skills in skills" v-text="skills.sex"></li>
                    </ul>
                  </div>
              </div>
              <div class=" Center">
                <a href="javascript:;" class="F12 show_all" v-show="skills.length>4" @click="showAll()">全部显示>></a>
                <a href="javascript:;" class="F12 show_hid" style="display:none;" @click="slidD()">收起显示>></a>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
    <Footers  :cursor="cursor"></Footers>
  </div>

</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
    name:'jobs',
    components:{
      Headers,
      Footers
    },
    data(){
      return {
        add:"/#",
        headslogo:"/src/assets/images/logo-java.png",
        name:"Java开发体系",
        title:'岗位与技能',
        cursor:4,
        josName:[],
        jobz:[],
        skills:[]
      }
    },
    methods:{
      getList:function(){
        this.$http.get('src/assets/json/jobs.json').then(function(data){
            this.josName=data.data.josName;
            this.jobz=data.data.jobz;
            this.skills=data.data.skills;
        })
      },
      showAll:function(){
        $('.jobList').on("click",'.show_all ',function(){
          var that=$(this);
          var nm=that.index(this);
          that.parent()
          .siblings()
          .find('.jobList_d').eq(nm).css({
            "transform":"translateY(-130px)",
            "box-shadow":"rgba(0, 0, 0, 0.3) 0px -4px 7px"
          });
          that.hide().siblings().show()
        });
      },
      slidD:function(){
        $('.jobList').on("click",'.show_hid ',function(){
          var that=$(this);
          var nm=that.index(this);
          that.parent()
          .siblings()
          .find('.jobList_d').eq(nm).css({
            "transform":"translateY(0)",
            "box-shadow":"none"
          });
          that.hide().siblings().show()
        });
      }
    },
    mounted:function(){
      this.getList();

    },
    updated:function(){
      var mySwiper=new Swiper(".swiper-container",{
          setWrapperSize :true,
          autoHeight: true,
          slidesPerView  :'auto',
          grabCursor : true,
          slidesPerGroup : 1,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          breakpoints:{
            768:{
              width:768,
            },
            1024:{
              width:1024,
            }
          },
          onInit:function(){
            $('.swiper-slide').width("280px")
          },
        });
    }
}

</script>

<style scoped>

.auto_box {
  width: 1200px;
  margin-left: auto;
  margin-right: auto;
  min-height: 60px;
  position: relative;
}
.header_top{
  width: 100%;
  height:250px;
}
.plan_icon_box{
  width: 100%;
}
.Mtp75{
  margin-top: 75px;
}
.jobList{
  width: 100%;
  overflow-x: hidden;
  animation:bounceInRight 2s;
}
.jobList_li{
  width: 280px;
  height:500px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: 0 1px 10px rgba(0,0,0,0.11);
  border-radius: 4px;
  border-top:7px solid;
  background: #fff;
}
.jobList_li:nth-child(n+2){
  border-top-color: #3ea3ec;
}
.jobList_li:nth-child(2n+1){
  border-top-color: #feaa46;
}
.jobList_li:nth-child(3n+1){
  border-top-color: #15d3bf;
}
.jobList_li:nth-child(4n){
  border-top-color: #fe7c7b;
}
.job_name{
  height: 50px;
}
.F22{
  font-size: 22px;
}
.jobList_ul{
  height: 125px;
  /*overflow-y: hidden;*/
  border-bottom: 1px dashed #999;
}
.max_height50{
  max-height: 50px;
}
.jobs_icon{
  width: 15px;
  height:18px;
  background: url(../../assets/images/Sprite.png) center;
}
.lamp_icon{
  background-position:-368px -302px;
}
.bag_icon{
  background-position:-368px -325px;
}
.list_disc{
  background: url(../../assets/images/disc.png) no-repeat left center;
}
.btn_box{
  height: 45px;
  line-height: 45px;
}
.sliding_box{
}
.jobList_d{
  transition: 1s;
  background: #fff;
}
.jobList_d_box{
  height:168px;
  overflow: hidden;
}
.jobList_box{
  height:335px;
  overflow-y: hidden;
}
.swiper-button-next{
  background: url(/static/Sprite.a641ca1.png) no-repeat 0 -430px;
    width: 28px;
    height: 50px;
    right:-20px;
    top:60%;
}
.swiper-button-prev {
    background: url(/static/Sprite.a641ca1.png) no-repeat 0 -360px;
    width: 28px;
    height: 50px;
    left:-20px;
    top:60%;

  }
@media  screen and (min-width: 1024px) {
.auto_box{width: 1200px;}


};
@media  screen and (min-width: 768px) and (max-width: 1024px) {
.auto_box{width:  100%;}
.swiper-button-next, .swiper-button-prev{display: none;}
.Mtp75{margin-top: 20px;}
.F40{font-size: 30px;}
.Mtp20{margin-top: 10px;}
.Mtp30{margin-top: 10px;}
.Ptp40{padding-top: 20px;}
.jobList_li{height:480px;}
.Mtp25 {
    margin-top: 20px;
}
};

@media  screen and (max-width: 768px) {
.auto_box{width:  100%;}
.Mtp30{margin-top: 15px;}
.Mtp75{margin-top: 75px;}
.Ptp40{padding-top:40px;}

}
@media screen and (max-height:768px) {
  .Mtp75{margin-top: 50}
}
</style>
