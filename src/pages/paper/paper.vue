<template>
    <div class="zk_homebg">
        <div class="bgc"></div>
        <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
        <!--<h1>课程试卷</h1>-->
         <p class="builddes">{{titles}}</p>
         <div class="zk-paper">
             <ul class="clearfix">
                 <li v-for="pap in papers">
                     <!--<a :href="pap.paphref">-->
                    <!--<a  href="javascript:void(0)">-->
                            <span class="papbox">
                                     <img :src="pap.papimg" height="41px"  alt="">
                            </span>
                            <p>{{pap.papcont}}</p>
                     <!--</a>-->
                 </li>
             </ul>
         </div>
         <div class="zk-addmore">
             <a href="javascript:void(0)" @click="showchapter">查看演示试卷</a>
         </div>

        <div class="scaleBox">
                <div id="pdfBox"></div>
                <div class="close_btn_box" style="right: 2%;top:4%">
                    <a href="javascript:;" class="p_ibt alert_close_btn" @click="alertClose()"></a>
                </div>
        </div>

        <Footers :cursor="cursor"></Footers>
    </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer-two.vue';
import PDFObject from'../../assets/js/pdfobject.min.js';
export default{
    components:{
        Headers,
        Footers
    },
     data() {
        return {
            add:"/#",
            headslogo:"/src/assets/images/logo-java.png",
            name:"Java程序设计基础",
            title:'课程试卷',
            cursor:3,
            titles: '',
            papers:[]
        }
    },
    methods: {
         showppd: function() {
                PDFObject.embed("src/assets/ppdf.pdf", "#pdfBox", {
                     height: "100%"
                })
          },
          alertClose: function() {
                 $('.scaleBox').hide();
                
          },
          getpaper: function() {
            this.$http({
                url: 'src/assets/json/paper.json',
                }).then(function(res){
                    this.papers = res.data.papers;
                    this.titles = res.data.titles;
                },function(err){
                    console.log(err);
                })
          },
          showchapter: function() {
              $(".scaleBox").show();
               this.showppd();
          }
    },
     mounted: function() {
            // this.showppd();
            this.getpaper();
     }
}
</script>

<style scoped>
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
.close_btn_box {
  position: absolute;
  right: -15%;
  z-index: 100;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  top: 0%;
}
.alert_close_btn {
  width: 40px;
  height: 40px;
  background: url(../../assets/images/Sprite.png)no-repeat 0 -250px;
}
#pdfBox {
    height: 100%;
}

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
    .zk_homebg h1 {
    font: 30px/108px microsoft yahei;
    text-align: center;
    }
     .zk_homebg .builddes {
        width: 998px;
        margin: 0 auto;
        text-align: center;
        font: 22px/56px microsoft yahei;
    }
    .zk-paper {
        width: 992px;
        margin: 37px auto 0;
    }
    .zk-paper ul li {
        width: 233px;
        height: 168px;
        float: left;
        border: 1px solid #ddd;
        margin: 0 20px 20px 0;
        text-align: center;
    }
    .zk-paper ul li img{
        margin-top: 46px;
    }
    .zk-paper ul li p{
        font: 18px/72px microsoft yahei;
        color: #333;
    }
    .zk-paper ul li:nth-child(4n) {
        margin-right: 0;
    }
     .zk-addmore a {
         margin: 27px auto 60px;
         display: block;
         width: 189px;
         text-align: center;
         font: 14px/38px microsoft yahei;
         border: 1px solid #1a9bfc;
         border-radius: 8px;
     }

    @media only screen and (max-width: 768px) {
            .zk_homebg .builddes {
                width: 720px;
            }
            .zk-paper {
                width: 770px;
                margin: 37px auto 0;
            }
            .zk-paper ul li {
                width: 153px;
                margin: 0 25px 15px 15px;
                border: none;
            }
             .zk-paper ul li span {
                 display: block;
                 margin: 0 auto;
                 width: 100px;
                 height: 100px;
                 border-radius: 50%;
                border: 1px solid #ddd;
            }
             .zk-paper ul li img{
                margin-top: 30px;
            }
    }
</style>
