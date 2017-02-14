<template>
  <div class="zk_homebg">
    <div class="bgc"></div>
    <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <!--<h1>优势与特色</h1>-->
	<div class="advantage">
		<ul class="clearfix hidden-md  hidden-sm hidden-xs adv1">
	        	<li v-for="val in list">
              <img :src="val.img" alt="">
	           	<!--<a href="#">-->
	           		<p class="ad_title">{{val.title}}</p>
	           		<p>{{val.content}}</p>
	           	<!--</a>-->
	        	</li>
		</ul>


    <ul class="clearfix hidden-lg  adv2">
	        	<li v-for="val in list">
              <img :src="val.img" alt="">
	           	<!--<a href="#">-->
	           		<p class="ad_title">{{val.title}} </p>
	           		<p>{{val.content}}</p>
	           	<!--</a>-->
	        	</li>
		</ul>
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
			return {
             add:"/#",
              headslogo:"/src/assets/images/logo-java.png",
              name:"Java开发体系",
              title:'优势与特色',
              cursor:5,
            	list:[]
			}
        },
        mounted: function() {
            this.$http({
                url: 'src/assets/json/pic.json',
                }).then(function(res){
                    this.list = res.data
                },function(err){
                    console.log(err);
                })
        }

}
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
/*.zk_homebg  h1 {
  font: 30px/108px microsoft yahei;
  text-align: center;
}*/
.zk_homebg .advantage .adv1 {
  padding: 7px 0 50px 50px;
  margin: 0 auto;
  width: 1200px;
  animation: bounceInRight 2s;
}
.zk_homebg .advantage .adv1 li {
  box-sizing: border-box;
  padding-left: 141px;
  position: relative;
  float: left;
  width: 350px;
  height: 175px;
}
.zk_homebg .advantage .adv1 li a {
  text-decoration: none;
}
.zk_homebg .advantage .adv1 li img {
  animation: zoomInRight 2s;
  position: absolute;
  left: 60px;
  top: 20px;
}
.zk_homebg .advantage .adv1 li .ad_title {
  font: 700 18px/54px microsoft yahei;
  color: #000;
}
.zk_homebg .advantage .adv1 li p {
  font: 14px/26px microsoft yahei;
    color: #000;
}

.zk_homebg .advantage .adv2 {
  padding: 7px 0 0 40px;
  margin-bottom: 100px;
  width: 1000px;
  margin: 0 auto;
  animation: bounceInRight 2s;
}
.zk_homebg .advantage .adv2 li {
  box-sizing: border-box;
  padding-left: 100px;
  position: relative;
  float: left;
  width: 300px;
  height: 173px;
}
.zk_homebg .advantage .adv2 li a {
  text-decoration: none;
}
.zk_homebg .advantage .adv2 li img {
  animation: zoomInRight 2s;
  position: absolute;
  left: 25px;
  top: 20px;
}
.zk_homebg .advantage .adv2 li .ad_title {
  font: 700 18px/54px microsoft yahei;
  color: #000;
}
.zk_homebg .advantage .adv2 li p {
  font: 14px/26px microsoft yahei;
    color: #000;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {

}

@media only screen and (max-width: 768px) {
  .zk_homebg .advantage .adv2 {
    width: 768px;
  }
  .zk_homebg .advantage .adv2 li {
    height: 155px;
    width: 336px;
  }
  
}
@media screen and (max-height: 768px ){
  .zk_homebg .advantage .adv1 li {
    height: 145px;
  }
}
</style>
