<template>
     <div class="zk_homebg">
       <div class="bgc"></div>
       <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
                  <div class="laboratory">
                          <div class="laboratory-head">
                              <div class="laboratory-left" @click="lableft">
                                  <div class="laboratory-box"></div>
                                  <p>课程实验室</p>
                              </div>
                              <div class="laboratory-right" @click="labright">
                                  <div class="laboratory-box"></div>
                                  <p>实践实验室 </p>
                              </div>
                              <div class="laboratory-line"></div>
                          </div>

                          <div class="laboratory-middle w">
                              <p>{{msg1}}</p>
                          </div>

                          <div class="laboratory-middle-t w">
                              <p>{{msg2}}</p>
                          </div>

                          <div class="laboratory-footer clearfix">
                              <ul>
                                  <li v-for="valo in labo">
                                      <!--<a href="javascript:;">-->
                                          <h3>{{valo.lag}}</h3>
                                          <div class="lab-cont">
                                              <p>{{valo.lagdeg}}</p>
                                          </div>
                                      <!--</a>-->
                                      <div class="laboratory-bom">
                                          <div class="laboratory-evt-left">
                                              <img :src="valo.imgsquary" alt="">
                                              <h4>{{valo.labevt}}</h4>
                                              <p>{{valo.labtent}}</p>

                                          </div>
                                          <div class="laboratory-evt-right">
                                              <img :src="valo.imgmodule" alt="">
                                              <h4>{{valo.labmod}}</h4>
                                              <p>{{valo.lablocal}}</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>

                          <div class="laboratory-footer-t clearfix">
                              <ul>
                                  <li v-for="valt in labt">
                                      <!--<a href="javascript:;">-->
                                          <h3>{{valt.lag}}</h3>
                                          <div class="lab-cont">
                                              <p>{{valt.lagdeg}}</p>
                                          </div>
                                      <!--</a>-->
                                      <div class="laboratory-bom">
                                          <div class="laboratory-evt-left">
                                              <img :src="valt.imgsquary" alt="">
                                              <h4>{{valt.labevt}}</h4>
                                              <p>{{valt.labtent}}</p>
                                          </div>
                                          <div class="laboratory-evt-right">
                                              <img :src="valt.imgmodule" alt="">
                                              <h4>{{valt.labmod}}</h4>
                                              <p>{{valt.lablocal}}</p>
                                          </div>
                                      </div>
                                  </li>
                              </ul>
                          </div>
                      </div>
              <Footers :cursor="cursor"></Footers>
            </div>
</template>
<script>
// import vm from 'vue';
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
            // el: "#app",
            components: {
              Headers,
              Footers
            },
            data(){
                return {
                add:"/#",
                headslogo:"/src/assets/images/logo-java.png",
                name:"Java开发体系",
                title:'实验环境',
                cursor:7,
                labo:[],
                labt:[],
                msg1:'',
                msg2:''
                }
            },
            methods: {
                  lableft: function() {
                        $(".laboratory-right .laboratory-box").css('background','#ccc');
                        $(".laboratory-left .laboratory-box").css('background','#1a9bfc');
                        $(".laboratory-right").css('color','#666');
                        $(".laboratory-left").css('color','#1a9bfc');
                        $(".laboratory-middle").show();
                        $(".laboratory-middle-t").hide();
                        $(".laboratory-footer").show();
                        $(".laboratory-footer-t").hide();
                  },
                  labright: function() {
                        $(".laboratory-right .laboratory-box").css('background','#1a9bfc');
                        $(".laboratory-left .laboratory-box").css('background','#ccc');
                        $(".laboratory-right").css('color','#1a9bfc');
                        $(".laboratory-left").css('color','#666');
                        $(".laboratory-middle-t").show();
                        $(".laboratory-middle").hide();
                        $(".laboratory-footer").hide();
                        $(".laboratory-footer-t").show();
                  }
            },
            mounted: function() {
                this.$http({
                    url: 'src/assets/json/lab.json',
                    }).then(function(res){
                        this.msg1 = res.data.msg1,
                        this.msg2 = res.data.msg2,
                        this.labo = res.data.labo,
                        this.labt = res.data.labt
                    },function(err){
                        console.log(err);
                    })
            }
        }
        $(function(){
          $(document).scroll(function() {
              if($(document).scrollTop()>63) {
                  $(".laboratory-head").addClass('hasfixed').css({"zIndex":"100","background":"rgba(203,203,203,.8)"})
                  $('.laboratory-middle').css("margin-top","90px");
                  $('.laboratory-middle-t').css("margin-top","90px");
              }else {
                  $(".laboratory-head").removeClass("hasfixed").css({"zIndex":"0","background":"transparent"});
                  $('.laboratory-middle').css("margin-top","13px");
                  $('.laboratory-middle-t').css("margin-top","13px");
              }
          });

        })
</script>

<style scoped>
.zk_homebg {
  width: 100%;
  overflow: hidden;
}
.bgc {
  background-image: url(../../assets/images/bg2j.jpg);
  background-size: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
}
.zk_homebg .laboratory {
  padding-bottom: 10px;
}
.zk_homebg .laboratory .laboratory-head {
  position: relative;
  height: 90px;
  margin: 0 auto;
  width: 1200px;
}
.zk_homebg .laboratory .hasfixed {
  position: fixed;
  left: 50%;
  top: 0;
  transform: translate(-50%)
}
.zk_homebg .laboratory .laboratory-head .laboratory-line {
  width: 1200px;
  border-top: 5px solid #e7eaec;
  position: absolute;
  top: 25px;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left,
.zk_homebg .laboratory .laboratory-head .laboratory-right {
  text-align: center;
  width: 150px;
  position: absolute;
  z-index: 1;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left p,
.zk_homebg .laboratory .laboratory-head .laboratory-right p {
  cursor: pointer;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left .laboratory-box,
.zk_homebg .laboratory .laboratory-head .laboratory-right .laboratory-box {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: #cccccc;
  position: absolute;
  top: -60px;
  left: 50px;
  cursor: pointer;
  border: 2px solid #f1f1f1;
  box-sizing: content-box;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left .laboratory-box::before,
.zk_homebg .laboratory .laboratory-head .laboratory-right .laboratory-box::before {
  content: '';
  width: 18px;
  height: 28px;
  position: absolute;
  top: 7px;
  left: 13px;
  background: url(../../assets/images/Sprite.png) no-repeat -217px -6px;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left {
  left: 27%;
  top: 62px;
  color: #1a9bfc;
}
.zk_homebg .laboratory .laboratory-head .laboratory-left .laboratory-box {
  background-color: #1a9bfc;
}
.zk_homebg .laboratory .laboratory-head .laboratory-right {
  right: 27%;
  top: 62px;
}
.zk_homebg .laboratory .laboratory-middle {
  margin-top: 13px;
  font: 16px/28px microsoft yahei;
  padding: 14px 31px 20px;
  background-color: #f6f6f6;
  position: relative;
  border-radius: 5px;
}
.zk_homebg .laboratory .laboratory-middle::before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: #f6f6f6;
  position: absolute;
  transform: rotate(45deg);
  top: -7px;
  left: 390px;
}
.zk_homebg .laboratory .laboratory-middle-t {
  display: none;
  margin-top: 13px;
  font: 16px/28px microsoft yahei;
  padding: 14px 31px 20px;
  background-color: #f6f6f6;
  position: relative;
  border-radius: 5px;
}
.zk_homebg .laboratory .laboratory-middle-t::before {
  content: '';
  width: 16px;
  height: 16px;
  background-color: #f6f6f6;
  position: absolute;
  transform: rotate(45deg);
  top: -7px;
  left: 793px;
}
.zk_homebg .laboratory-footer {
  width: 1200px;
  margin: 0 auto;
  animation: bounceInRight 2s;
}
.zk_homebg .laboratory-footer ul li {
  float: left;
  width: 380px;
  height: 220px;
  background-color: #fff;
  margin: 31px 30px 0 0;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #ccc;
}
.zk_homebg .laboratory-footer ul li:nth-child(3n) {
  margin-right: 0;
}
.zk_homebg .laboratory-footer ul li a {
  text-decoration: none;
}
.zk_homebg .laboratory-footer ul li h3 {
  padding-top: 6px;
  font: 700 18px/36px microsoft yahei;
  color: #333;
  text-align: center;
}
.zk_homebg .laboratory-footer ul li .lab-cont {
  height: 96px;
}
.zk_homebg .laboratory-footer ul li p {
  padding: 10px 40px 0;
  font: 14px/26px microsoft yahei;
  color: #666;
}
.zk_homebg .laboratory-footer ul li .laboratory-bom {
  padding-top: 25px;
  margin: 0 40px;
  border-top: 1px dashed #ccc;
}
.zk_homebg .laboratory-footer ul li .laboratory-bom img {
  position: absolute;
  top: 2px;
  left: -3px;
}
.zk_homebg .laboratory-footer ul li .laboratory-bom .laboratory-evt-left,
.zk_homebg .laboratory-footer ul li .laboratory-bom .laboratory-evt-right {
  float: left;
  width: 131px;
  margin-left: 18px;
  padding-left: 46px;
  position: relative;
}
.zk_homebg .laboratory-footer ul li .laboratory-bom h4 {
  font: 14px/16px microsoft yahei;
  color: #666;
}
.zk_homebg .laboratory-footer ul li .laboratory-bom p {
  color: #999;
  padding: 0;
  font: 12px/30px microsoft yahei;
}
.zk_homebg .laboratory-footer-t {
  width: 1200px;
  margin: 0 auto;
  display: none;
  animation: bounceInRight 2s;
}
.zk_homebg .laboratory-footer-t ul li {
  float: left;
  width: 380px;
  height: 220px;
  background-color: #fff;
  margin: 31px 30px 0 0;
  border-radius: 5px;
  box-shadow: 0px 0px 6px #ccc;
}
.zk_homebg .laboratory-footer-t ul li:nth-child(3n) {
  margin-right: 0;
}
.zk_homebg .laboratory-footer-t ul li a {
  text-decoration: none;
}
.zk_homebg .laboratory-footer-t ul li h3 {
  padding-top: 6px;
  font: 700 18px/36px microsoft yahei;
  color: #333;
  text-align: center;
}
.zk_homebg .laboratory-footer-t ul li .lab-cont {
  height: 96px;
}
.zk_homebg .laboratory-footer-t ul li p {
  padding: 10px 40px 0;
  font: 14px/26px microsoft yahei;
  color: #666;
}
.zk_homebg .laboratory-footer-t ul li .laboratory-bom {
  padding-top: 25px;
  margin: 0 40px;
  border-top: 1px dashed #ccc;
}
.zk_homebg .laboratory-footer-t ul li .laboratory-bom img {
  position: absolute;
  top: 2px;
  left: -3px;
}
.zk_homebg .laboratory-footer-t ul li .laboratory-bom .laboratory-evt-left,
.zk_homebg .laboratory-footer-t ul li .laboratory-bom .laboratory-evt-right {
  float: left;
  width: 131px;
  margin-left: 18px;
  padding-left: 46px;
  position: relative;
}
.zk_homebg .laboratory-footer-t ul li .laboratory-bom h4 {
  font: 14px/16px microsoft yahei;
  color: #666;
}
.zk_homebg .laboratory-footer-t ul li .laboratory-bom p {
  color: #999;
  padding: 0;
  font: 12px/30px microsoft yahei;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
  .zk_homebg .laboratory .laboratory-head {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-head .laboratory-line {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-middle {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-middle::before {
    left: 310px;
  }
  .zk_homebg .laboratory .laboratory-middle-t {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-middle-t::before {
    left: 575px;
  }
  .zk_homebg .laboratory .laboratory-footer {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li {
    float: left;
    width: 380px;
    height: 220px;
    margin: 31px 90px 0 18px;
    border-radius: 5px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li:nth-child(3n) {
    margin-right: 90px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li:nth-child(2n) {
    margin-right: 0;
  }
  .zk_homebg .laboratory .laboratory-footer-t {
    width: 900px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li {
    float: left;
    width: 380px;
    height: 220px;
    background-color: #fff;
    margin: 31px 90px 0 18px;
    border-radius: 5px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li:nth-child(3n) {
    margin-right: 90px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li:nth-child(2n) {
    margin-right: 0;
  }
}
@media only screen and (max-width: 768px) {
  .zk_homebg .laboratory .laboratory-head {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-head .laboratory-line {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-middle {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-middle::before {
    left: 242px;
  }
  .zk_homebg .laboratory .laboratory-middle-t {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-middle-t::before {
    left: 391px;
  }
  .zk_homebg .laboratory .laboratory-footer {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li {
    float: left;
    width: 300px;
    height: 220px;
    margin: 31px 30px 0 6px;
    border-radius: 5px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li:nth-child(3n) {
    margin-right: 30px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li:nth-child(2n) {
    margin-right: 0;
  }
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom {
    padding-top: 25px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom img {
    position: absolute;
    top: 2px;
    left: -3px;
  }
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom .laboratory-evt-left,
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom .laboratory-evt-right {
    float: left;
    width: 107px;
    margin-left: 3px;
    padding-left: 35px;
    position: relative;
  }
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom h4 {
    font: 12px/16px microsoft yahei;
    color: #666;
  }
  .zk_homebg .laboratory .laboratory-footer ul li .laboratory-bom p {
    color: #999;
    padding: 0;
    font: 12px/30px microsoft yahei;
  }
  .zk_homebg .laboratory .laboratory-footer-t {
    width: 650px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li {
    float: left;
    width: 300px;
    height: 220px;
    background-color: #fff;
    margin: 31px 30px 0 6px;
    border-radius: 5px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li:nth-child(3n) {
    margin-right: 30px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li:nth-child(2n) {
    margin-right: 0;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom {
    padding-top: 25px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom img {
    position: absolute;
    top: 2px;
    left: -3px;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom .laboratory-evt-left,
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom .laboratory-evt-right {
    float: left;
    width: 107px;
    margin-left: 3px;
    padding-left: 35px;
    position: relative;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom h4 {
    font: 12px/16px microsoft yahei;
    color: #666;
  }
  .zk_homebg .laboratory .laboratory-footer-t ul li .laboratory-bom p {
    color: #999;
    padding: 0;
    font: 12px/30px microsoft yahei;
  }
}
</style>