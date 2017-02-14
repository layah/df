<template>
  <div class="zk_home">
    <div class="bgci"></div>
    <!--导航部分start-->

          <div class="nav-start">
              <!--<a class="nav-logo hidden-sm hidden-xs" href="#">-->
             <img class="hidden-sm hidden-xs " src="/src/assets/images/logo.png" alt="">
              <!--</a>-->
             <img class="nav-logo" src="/src/assets/images/logosm.png" alt="">

              <ul class="navbar-navs">
                <li><a href="javascript:;">宅课首页</a></li>
                <li><a href="javascript:;">校企方案</a></li>
                <li class="nav-active"><router-link to="/">课程资源</router-link></li>
                <li>
                <router-link to="/resindex">案例资源</router-link>
                </li>
                <li><a href="javascript:;">教学平台</a></li>
                <li><a href="javascript:;">业务介绍</a></li>
              </ul>
          </div>
          <div class="body-mid">
               <ul>
                <li>
                    <router-link to="/basis">
                        <img src="/src/assets/images/java .png" width="80px" alt="">
                        <p>Java开发</p>
                  </router-link>
                </li>
                <li>
                    <a href="#">
                          <img src="/src/assets/images/yun.png" width="80px" alt="">
                          <p>云计算与大数据</p>
                      </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/web.png" width="80px" alt="">
                        <p>Web前端开发</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/android.png" width="80px" alt="">
                        <p>Android开发</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/ios.png" width="80px"  alt="">
                        <p>IOS开发</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/game.png" width="80px" alt="">
                        <p>游戏开发</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/PHP.png" width="80px" alt="">
                        <p>PHP开发</p>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img src="/src/assets/images/Embed.png" width="80px" alt="">
                        <p>嵌入式开发</p>
                    </a>
                </li>
              </ul>
          </div>

<!--中间导航部分结束end-->
  <div class="footer">
      <p>Copyright © 2014-2018 中软国际教育 京ICP备11010802014778号</p>
      <p><a href="#">联系我们</a></p>
  </div>
</div>

</template>
<script>
  $(function() {
    if($(window).height() < 570 ) {
       $('.footer').css({"position":"static","transform":"translate(0)"})
       $('.body-mid').css({"height":"400"})
    }else {
       $('.footer').css({"position":"fixed"})
    }
  })
</script>
<style scoped>
.zk_home {
  width: 100%;
  height: 100%;
}
.bgci {
   width: 100%;
  height: 100%;
  background: url(../../assets/images/bgc.jpg);
  background-size: cover;
  position: fixed;
  z-index: -1;
}
.nav-logo {
    display: none;
}
.nav-start {
    height: 94px;
}
.nav-start img{
    padding: 36px 0 0 46px;
}
.nav-start .navbar-navs{
    height: 94px;
    float: right;
    margin-right: 43px;
}
.nav-start .navbar-navs li{
  float: left;
}
.nav-start .navbar-navs li.nav-active a{
      color: #fff;
}
.nav-start .navbar-navs li a{
  line-height: 94px;
  padding: 0 14px;
  color: #b7b7b7;
  font-size: 16px;
  font-weight: 700;
}
.nav-start .navbar-navs li a:hover{
  color: #fff;
}

.body-mid {
  width: 1200px;
  margin: 130px auto 0;
  height: 480px;
}
.body-mid ul {
  width: 1200px;

}
.body-mid ul li {
  float: left;
}
.body-mid ul li a {
  float: left;
  width: 300px;
  height: 240px;
  border: 1px solid #cac5c3;
  background: rgba(160, 160, 160, 0.1);
  text-align: center;
}

.body-mid ul li:nth-child(2) a, .body-mid ul li:nth-child(4) a, .body-mid ul li:nth-child(5) a, .body-mid ul li:nth-child(7) a{
  background: rgba(160, 160, 160, 0.5);
  /*border: none;*/
}
.body-mid ul li img {
    padding-top: 60px;
    transition: all 2s;
}

.body-mid ul li a:hover img {
    transform: scale(1.2, 1.2);
}

.body-mid ul li p{
    font-size: 24px;
    color: #fff;
    padding-top: 23px;
}

.zk_home .footer {
  height: 65px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
}
.zk_home .footer p{
  font: 14px/32px "microsoft yahei";
  color: #a9a9a9;
}
.zk_home .footer a {
  color: #a9a9a9;
  text-decoration: none;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .body-mid {
        margin-top: 40px;
        width: 920px;
    }
    .body-mid ul{
        width: 920px;
    }
    .body-mid ul li a {
        width: 230px;
        height: 230px;
    }
    .body-mid ul li a:hover img {
        transform: scale(1);
    }
}
@media (max-width: 768px) {
    .nav-logo {
        display: inline-block;
    }
    .body-mid {
        margin-top: 20px;
        width: 720px;
        height: 920px;
    }
    .body-mid ul{
        width: 720px;
    }
    .body-mid ul li a {
        width: 360px;
        height: 230px;
    }
    .body-mid ul li:nth-child(3n) a{
      background: rgba(160, 160, 160, 0.5);
       border: 1px solid #cac5c3;
    }
    .body-mid ul li:nth-child(4) a, .body-mid ul li:nth-child(5) a{
      background: rgba(160, 160, 160, 0.1);
     border: 1px solid #cac5c3;
    }
    .zk_home .footer {
      position: static !important;
      transform: translate(0);
      margin-top: 20px;
    }
     .body-mid ul li a:hover img {
        transform: scale(1);
    }
}
@media only screen and ( min-height: 680px) and (max-height:800px){
       .body-mid {
        margin-top: 40px;
        width: 920px;
      }
      .body-mid ul{
          width: 920px;
      }
      .body-mid ul li a {
          width: 230px;
          height: 230px;
      }
}
@media only screen and (max-height:680px){
       .body-mid {
        margin-top: 20px;
        width: 920px;
      }
      .body-mid ul{
          width: 920px;
      }
      .body-mid ul li a {
          width: 230px;
          height: 200px;
      }
      .body-mid ul li img {
        padding-top: 40px;
      }
}
</style>
