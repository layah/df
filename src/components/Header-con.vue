<template>
	<div class="zk-header-con">
        <div class="zk-header-logo">
                    <img :src="headslogo" alt="">
                    <!--<img src="../assets/images/logo-java.png" alt="">-->
                    <p class=" hidden-md hidden-sm hidden-xs">{{name}}</p>
                    <!--<p class=" hidden-md hidden-sm hidden-xs">Java开发体系</p>-->
        </div>
        <h1>{{title}}</h1>
        <!--<h1>Java开发体系配套项目</h1>-->
        <div class="zk-header-back">
                <!--<router-link to="/#">-->
                <a :href="add">
                    <span class="picback"></span>
                    <span class=" hidden-md hidden-sm hidden-xs">返回</span>
                </a>
                <!--</router-link>-->
        </div>
    </div>
</template>
<script>
	export default {
		props:['name','headslogo','title','add']
	}
</script>
<style scoped>
	.zk-header-con {
	    height: 60px;
        width: 100%;
        position: relative;
        margin-bottom: 30px;
	}
    .zk-header-logo {
        position: absolute;
        left: 11px;
        top: 17px;
    }
    .zk-header-logo img {
        float: left;
    }
    .zk-header-logo p {
        float: left;
        font-size: 18px;
        margin: 5px 0 0 10px;
        color: #999;
    }
    .zk-header-con h1 {
        text-align: center;
        font: 26px/60px microsoft yahei;
    }
    .zk-header-back {
        position: absolute;
        top: 17px;
        right: 15px;
    }
    .zk-header-back a{
        color: #999;
    }
	.zk-header-con .picback {
        float: left;
		width: 12px;
		height: 20px;
		background: url(../assets/images/Sprite.png) no-repeat -370px -400px;
	}
</style>
