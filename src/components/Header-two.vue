<template>
	<div class="zk_header">
      <div class="zk_development fl">
					<!--<a href="javascript:;">-->
						<img :src="headslogo" alt="">
						<p class=" hidden-md hidden-sm hidden-xs">{{name}}</p>
					<!--</a>-->
					 </div>
      <div class="zk_backhome hidden-xs fr">
					<router-link to="/resindex">
						<p class=" hidden-md hidden-sm hidden-xs">返回上一页</p>
						<div class="picback  hidden-lg"></div>
					</router-link>
      </div>
    </div>
</template>
<script>
	export default {
		props:['name','headslogo']
	}
</script>
<style scoped>
	.zk_header {
	  height: 58px;
		position: relative;
	}
	.zk_header .zk_development a {
	  text-decoration: none;
	  color: #333;
	}
	.zk_header .zk_development img {
		position: absolute;
		left: 102px;
		top: 23px;
	}
	.zk_header .zk_development p {
	  padding: 26px 0 0 143px;
	  font: 20px/22px microsoft yahei;
	}
	.zk_header .zk_backhome a {
	  text-decoration: none;
	  color: #333;
	}
	.zk_header .zk_backhome p {
	  padding: 35px 101px 0 0;
	  position: relative;
	  font: 20px/22px microsoft yahei;
	}
	.zk_header .zk_backhome .picback {
				margin: 20px 75px 0 0;
			  width: 36px;
				height: 36px;
			  background: url(../assets/images/Sprite.png) no-repeat -150px 0px;
	}
	.zk_header .zk_backhome p::before {
	  content: '';
	  width: 36px;
	  height: 36px;
	  top: 29px;
	  left: -50px;
	  position: absolute;
	  background: url(../assets/images/Sprite.png) no-repeat -150px 0px;
	}
</style>
