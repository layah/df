<template>
  <div class="zk_homebg">
    <div class="bgc"></div>
<Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
 <div id="goodcover"></div>
  <div id="zk-code">
      <div class="eject-header" v-for="(pop, key) in listpo" v-show="key == massage">   
          <span class="eject-close"></span>
          <h3>{{pop.dettitle}}</h3>
          <span>{{pop.erp}}</span>
          <span>{{pop.lev}}</span>
          <!--<p>所属行业 ：ERP行业        项目级别：中型 </p>-->
          <div class="eject-lb">
              <div class="swiper-container3">
                    <!--主页-->
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="sml in pop.smlun">
                        <!--<a href="#">-->
                            <img :src="sml.smpic" height="198px" width="400" alt="">
                        <!--</a>-->
                    </div>    
                </div>
                <!--导航按钮-->
                <div class="swiper-button-prev swiper-button-white hidden-md hidden-sm hidden-xs"></div>
                <div class="swiper-button-next swiper-button-white hidden-md hidden-sm hidden-xs"></div>
            </div>
          </div>
          <div class="eject-explain">
              <ul>
                  <li>
                      <div class="eject-img">
                          <img :src="pop.funpic" alt="">
                      </div>
                      <div class="eject-cont">
                        <h4>{{pop.fundev}}</h4>
                        <p>{{pop.fundevtext}}</p>
                      </div>  
                  </li>
                  <li>
                      <div class="eject-img">
                          <img :src="pop.tecpic" alt="">
                      </div>
                      <div class="eject-cont">
                        <h4>{{pop.tecdes}}</h4>
                        <p>{{pop.tecdestext}}</p>
                      </div>
                  </li>
                  <li>
                      <div class="eject-img">
                          <img :src="pop.datpic" alt="">
                      </div>
                      <div class="eject-cont">
                        <h4>{{pop.datdes}}</h4>
                        <p>{{pop.datdestext}}</p>
                      </div>
                  </li>
                  <li>
                      <div class="eject-img">
                          <img :src="pop.propic" alt="">
                      </div>
                      <div class="eject-cont">
                          <h4>{{pop.prodes}}</h4>
                          <a :href="loo.hrefload" v-for="loo in pop.prodestext">{{loo.loadname}}</a>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>

<!--<h1>Java开发体系配套项目</h1>-->
<div class="carousel">
    <div class="carousel-pc  hidden-md hidden-sm hidden-xs">
        <div class="swiper-container1">
            <!--主页-->
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(caro,index) in listca">
                    <img :src="caro.Computer" alt="">
                    <div class="sw-content">
                        <h2>{{caro.titelh2}}</h2>
                        <p>{{caro.contentc}}</p>
                        <a href="javascript:void(0)" @click="addmore(index)">查看更多 ></a>
                    </div>
                </div>    
            </div>
            <!--分页器-->
            <div class="swiper-pagination1" @mouseover="mousee"></div>
            <!--导航按钮-->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>
        </div>
    </div>

    <div class="carousel-pad  hidden-lg">
        <div class="swiper-container2">
            <div class="swiper-wrapper">
                <div class="swiper-slide"  v-for="(caro,index) in listca">
                    <img :src="caro.Computer" width="400" alt="">
                    <div class="sw-content">
                        <h2>{{caro.titelh2}}</h2>
                        <p>{{caro.contentc}}</p>
                        <a href="javascript:void(0)"  @click="addmore(index)">查看更多 ></a>
                    </div>
                </div>
            </div>
            <div class="swiper-pagination"></div>
            <!--<div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>-->
        </div>
    </div>
</div>
<Footers :cursor="cursor"></Footers>
  </div>
</template>



<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
    export default {
        components: {
          Headers,
          Footers
        },
        data(){
            return{
                add:"/#",
                headslogo:"/src/assets/images/logo-java.png",
                name:"Java开发体系",
                title:'Java开发体系配套项目',
                cursor:6,
                massage: '',
                listca: [],
                listpo: []
            }
        },
        methods: {
            addmore: function(index) {
                  this.massage = index;
                  $('#zk-code').show();
                  $('#goodcover').show();
                  $('.eject-close').click(function() {
                      $('#zk-code').hide();
                      $('#goodcover').hide();
                  })
            },
            mousee: function() {
                  var arr = this.listca;
                  $('.swiper-pagination1').on('mouseenter','.swiper-pagination-bullet',function(e) {
                        $(e.currentTarget).find('span').show();
                        for(var i = 0; i < arr.length; i++) {
                          $('.swiper-pagination-bullet span').eq(i).text(arr[i].titelh2);
                        }
                    })
                    $('.swiper-pagination1').on('click','.swiper-pagination-bullet',function() {
                        $('.swiper-pagination-bullet span').hide();
                    })
                    $('.swiper-pagination1').on('mouseleave','.swiper-pagination-bullet',function() {
                        $('.swiper-pagination-bullet span').hide();
                    })
                }
        },
        mounted: function() {
            this.$http({
                url: 'src/assets/json/carouse.json',
                }).then(function(res){
                    this.listca = res.data.carouse,
                    this.listpo = res.data.popup
                    // console.log(res.data)   
                },function(err){
                    console.log(err);
                })
        },
        
        updated: function() {
          var self = this;
            new Swiper ('.swiper-container1', {
        // 最后一张转到第一张
            loop: true,
            // 自动轮播
            // autoplay: 1000,
            // 如果需要分页器
            pagination: '.swiper-pagination1',
             speed: 800,
            // 分页器点击
            paginationClickable: true,
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            paginationElement : 'li',
            paginationBulletRender: function (swiper, index, className) {
                return '<li  class="' + className + '">' + '<span v-cloak></span>' + '</li>';
                // console.log(self.listca)
            },
            observer: true,
            observeParents: true
            })       
            new Swiper ('.swiper-container2', {
                loop: true,
                pagination: '.swiper-pagination',
                paginationClickable :true,
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                speed: 800,
                observer: true,
                observeParents: true
            })   

            new Swiper ('.swiper-container3', {
                loop: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                slidesPerView: "auto",
                centeredSlides: true,
                speed: 800,
                loopedSlides: 3,
                observer: true,
                observeParents: true
            })
            // console.log(this.listca);
        }
   }

</script>

<style>
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
.zk_homebg #goodcover {
  background-color: rgba(0, 0, 0, 0.5);
  display: none;
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  z-index: 1001;
}
.zk_homebg #zk-code {
  width: 1000px;
  height: 770px;
  background-color: #fff;
  z-index: 1002;
  position: fixed;
  top: 50px;
  transform: translate(-50%);
  left: 50%;
  border-radius: 5px;
  display: none;
}
.zk_homebg #zk-code .eject-header {
  height: 113px;
  position: relative;
}
.zk_homebg #zk-code .eject-header .eject-close {
  content: '';
  position: absolute;
  width: 40px;
  height: 40px;
  right: -40px;
  top: -40px;
  background: url(../../assets/images/Sprite.png) no-repeat 0 -250px;
  cursor: pointer;
}
.zk_homebg #zk-code .eject-header h3 {
  color: #333;
  font: 24px/50px microsoft yahei;
  padding: 19px 0 0 35px;
}
.zk_homebg #zk-code .eject-header span {
  display: inline-block;
  color: #999;
  font: 14px/24px microsoft yahei;
  padding: 0 0 22px 35px;
}
.zk_homebg #zk-code .eject-header .eject-lb {
  height: 198px;
  width: 100%;
}
.zk_homebg #zk-code .eject-header .eject-lb .swiper-container3 {
  height: 198px;
  overflow: hidden;
  position: relative;
}
.zk_homebg #zk-code .eject-header .eject-lb .swiper-container3 .swiper-slide {
  width: 400px;
}
.zk_homebg #zk-code .eject-header .eject-explain {
  height: 453px;
  overflow: auto;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li {
  height: 185px;
  position: relative;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont {
  width: 886px;
  padding: 43px 0 0 195px;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont h4 {
  font: 18px/34px microsoft yahei;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont p {
  padding: 0;
  font: 14px/26px microsoft yahei;
}

.zk_homebg #zk-code .eject-header .eject-explain ul li .eject-img {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  position: absolute;
  left: 75px;
  top: 23px;
  overflow: hidden;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li:nth-child(4) {
  min-height: 200px;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li:nth-child(4) a {
  display: block;
}
.zk_homebg #zk-code .eject-header .eject-explain ul li:nth-child(2n) {
  background-color: #f7f7f7;
}
/*.zk_homebg  h1 {
  font: 30px/90px microsoft yahei;
  text-align: center;
}*/
.zk_homebg .carousel .carousel-pc .swiper-container1 {
  width: 100%;
  height: 540px;
  margin: 0 auto;
  padding: 30px 0 120px;
  overflow: hidden;
  text-align: center;
  animation: bounceInRight 2s;
}
.zk_homebg .carousel .carousel-pc .swiper-container1:hover .swiper-button-prev,
.zk_homebg .carousel .carousel-pc .swiper-container1:hover .swiper-button-next {
  display: block;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-slide img {
  position: absolute;
  right: 52%;
  top: 35px;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-slide .sw-content {
  width: 522px;
  position: absolute;
  left: 52%;
  top: 60px;
  text-align: left;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-slide h2 {
  font: 24px/60px microsoft yahei;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-slide p {
  font: 16px/32px microsoft yahei;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-slide a {
  font: 14px/42px microsoft yahei;
  color: #0577f8;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-button-prev {
  background: url(../../assets/images/Sprite.png) no-repeat 0 -360px;
  width: 28px;
  height: 50px;
  left: 40px;
  top: 210px;
  display: none;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-button-next {
  background: url(../../assets/images/Sprite.png) no-repeat 0 -430px;
  width: 28px;
  height: 50px;
  right: 40px;
  top: 210px;
  display: none;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-pagination-bullet {
  background-color: #e2e2e2;
  width: 12px;
  height: 12px;
  opacity: 1;
  border: 2px solid transparent;
  position: relative;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-pagination-bullet span {
  display: none;
  width: 123px;
  height: 38px;
  position: absolute;
  background-color: #4c4c4c;
  top: -58px;
  left: -58px;
  color: #fff;
  font: 12px/32px microsoft yahei;
  border-radius: 5px;
  border: 2px solid #f8f8f8;
  box-shadow: 0px 1px 1px 2px #ccc;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-pagination-bullet span::before {
  content: '';
  width: 10px;
  height: 10px;
  transform: rotate(45deg);
  background-color: #4c4c4c;
  position: absolute;
  top: 31px;
  left: 55px;
  border-bottom: 2px solid #f8f8f8;
  border-right: 2px solid #f8f8f8;
  box-shadow: 2px 2px 0 #ccc;
}
.zk_homebg .carousel .carousel-pc .swiper-container1 .swiper-pagination-bullet-active {
  background-color: transparent;
  border: 2px solid #0577f8;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 {
  width: 100%;
  height: 570px;
  margin: 0 auto 60px;
  overflow: hidden;
  text-align: center;
  animation: bounceInRight 2s;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 img {
  padding-top: 50px;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 .sw-content h2 {
  padding: 20px 0;
  font: 24px/35px microsoft yahei;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 .sw-content p {
  font: 14px/24px microsoft yahei;
  padding: 0 70px;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 .sw-content a {
  color: blue;
  font: 16px/30px microsoft yahei;
}
.swiper-container-horizontal>.swiper-pagination-bullets {
  bottom: 50px;
}
.zk_homebg .carousel .carousel-pad .swiper-pagination-bullet {
  background-color: #000;
  width: 12px;
  height: 12px;
}
.zk_homebg .carousel .carousel-pad .swiper-container2 .swiper-pagination-bullet-active {
  background-color: transparent;
  border: 2px solid #0577f8;
}

@media only screen and (min-width: 768px) and (max-width: 1024px) {
  /*.zk_homebg {
    min-height: 768px;
  }*/
   .zk_homebg  h1 {
    font: 30px/68px microsoft yahei;
  }
  .zk_homebg #zk-code {
    width: 900px;
    height: 640px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain {
      height: 323px;
  }
    .zk_homebg #zk-code .eject-header .eject-explain ul li {
    height: 160px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont {
    width: 800px;
    padding: 25px 0 0 165px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li .eject-img {
    width: 82px;
    height: 82px;
    position: absolute;
    border-radius: 50%;
    left: 35px;
    top: 35px;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 60px;
  }
}

@media only screen and (max-width: 768px) {
    /*.zk_homebg  h1 {
      font: 30px/168px microsoft yahei;
    }*/
    .zk_homebg #zk-code {
      width: 690px;
      height: 850px;
    }
    .zk_homebg #zk-code .eject-header .eject-explain {
      height: 536px;
    }
    .zk_homebg #zk-code .eject-header .eject-explain ul li {
    height: 140px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont {
    width: 620px;
    padding: 25px 0 0 145px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li .eject-img {
    width: 82px;
    height: 82px;
    position: absolute;
    border-radius: 50%;
    left: 25px;
    top: 25px;
  }
  .zk_homebg .carousel .carousel-pad .swiper-container2 .sw-content {
    margin-top: 20px;
  }
   .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 10px;
  }
}
@media screen  and (max-height: 768px ){
  /*.zk_homebg #zk-code {
    height: 650px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain {
    height: 336px;
  }
  .zk_homebg #zk-code .eject-header h3 {
      padding: 14px 0 0 35px;
      line-height: 40px;
  }
  .zk_homebg #zk-code .eject-header span{
      padding-bottom: 10px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li {
      height: 140px;
  }
  .zk_homebg #zk-code .eject-header .eject-explain ul li .eject-cont {
      padding-top: 22px;
  }*/
    .zk_homebg .carousel .carousel-pc .swiper-container1 {
        height: 470px;
        padding: 0 0 50px 0;
  }
}
@media screen  and (max-height: 680px ){
  .zk_homebg  h1 {
    line-height: 50px;
  }
    .zk_homebg .carousel .carousel-pc .swiper-container1 {
        height: 430px;
        padding: 0 0 50px 0;
  }
  .swiper-container-horizontal>.swiper-pagination-bullets {
    bottom: 20px;
  }
}
</style>