<template>
	<div class="zk_header">
      <div class="zk_development fl">
				<!-- <slot name="footer" data-l="123">{{todo}}</slot> -->
					<!--<router-link to="/">-->
						<p class=" hidden-md hidden-sm hidden-xs">{{name || "Java体系开发"}}</p>
						<div class="piclog hidden-lg"></div>
					<!--</router-link>      -->
				</div>
      <div class="zk_backhome hidden-xs fr">
					<router-link to="/">
						<p class=" hidden-md hidden-sm hidden-xs">返回主页</p>
						<div class="picback  hidden-lg"></div>
					</router-link>
      </div>
    </div>
</template>
<script>
export default{
	name:'header',
	props:["name"]
};

</script>
<style scoped>
	.zk_header {
	  height: 58px;
	}
	.zk_header .zk_development a {
	  text-decoration: none;
	  color: #333;
	}
	.zk_header .zk_development p {
	  padding: 26px 0 0 143px;
	  position: relative;
	  font: 20px/22px microsoft yahei;
	}
	.zk_header .zk_development .piclog {
		width: 26px;
		height: 32px;
		margin: 20px 0 0 100px;
		background: url(../assets/images/Sprite.png) no-repeat 0 -320px;
	}
	.zk_header .zk_development p::before {
	  content: '';
	  width: 26px;
	  height: 32px;
	  top: 16px;
	  left: 100px;
	  position: absolute;
	  background: url(../assets/images/Sprite.png) no-repeat 0 -320px;
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
