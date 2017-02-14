<template>
    <div class="zk_homebg">
        <div class="bgc"></div>
        <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
        <!--<h1>教师团队</h1>-->
        <div class="tecpic">    
            <div class="teacher-bo" v-for="(tet, index) in teachdet" v-show="index == message">    
                <span>{{tet.grade}}</span>
                <h2>{{tet.tchname}}</h2>
                <p>{{tet.brief}}</p>
                <img :src="tet.tchpic" alt="">
            </div>
        </div>
        <div class="zk-teacher">
            <div class="gallery-thumbs">
                <div class="swiper-wrapper">
                    <div class="swiper-slide" v-for="tsm in teachsm" :id="tsm.id">
                        <img class="teacher-sm" :src="tsm.tchpic2" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="swbutton">
            <div class="swiper-button-next hidden-md hidden-sm hidden-xs"></div>
            <div class="swiper-button-prev hidden-md hidden-sm hidden-xs"></div>
        </div>
        <Footers :cursor="cursor"></Footers>
    </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
    components:{
        Headers,
        Footers
    },
    data(){
        return {
            add:"/#",
            headslogo:"/src/assets/images/logo-java.png",
            name:"Java开发体系",
            title:'教师团队',
            cursor:8,
            message:'',
            teachdet:[],
            teachsm:[]
        }
    },
    methods: {
        getTeacher: function() {
            this.$http({
                url: 'src/assets/json/teacher.json',
            }).then(function(res){
                this.teachdet = res.data.tecdet,
                this.teachsm = res.data.tecsm        
            },function(err){
                console.log(err);
            })
        }
    },
    mounted(){
        this.getTeacher();
    },
    updated(){
       var galleryThumbs = new Swiper ('.gallery-thumbs', {
            loop: true,
            // loopedSlides :5,
            slideToClickedSlide: true,
            spaceBetween: 20,
            slidesPerView: 5,
            centeredSlides: true,
            loopAdditionalSlides :2,
            speed: 1000,
            touchRatio: 0.2,
            initialSlide :2,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            observer: true,
            observeParents: true,
            onSlideChangeStart: function(swiper){
                var num = $(".swiper-slide-active").eq(0).attr("id");
                $(".teacher-bo").eq(num).show().siblings().hide();
            }  
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
    .zk_homebg .teacher-bo {
    display: none;
    position: relative;
    margin: 0 auto;
    width: 1000px;
    height: 288px;
    background-color: #efefef;
    margin-bottom: 85px;
    /*animation: bounceInRight 2s;*/
    }
    .zk_homebg .teacher-bo::before {
    content: '';
    width: 42px;
    height: 42px;
    background-color: #efefef;
    position: absolute;
    left: 475px;
    bottom: -17px;
    transform: rotate(45deg);
    }
    .zk_homebg .teacher-bo span {
    position: absolute;
    left: 37px;
    width: 44px;
    height: 55px;
    padding: 10px 10px 0;
    font: 12px/12px microsoft yahei;
    display: block;
    background: url(../../assets/images/jin.png);
    }
    .zk_homebg .teacher-bo h2 {
    padding: 8px 0 0 97px;
    font: 18px/44px microsoft yahei;
    text-align: left;
    color: #333;
    }
    .zk_homebg .teacher-bo p {
    font: 14px/30px microsoft;
    padding-left: 32px;
    text-align: left;
    width: 641px;
    color: #333;
    }
    .zk_homebg .teacher-bo img {
    position: absolute;
    top: -60px;
    right: 0px;
    }
    .zk_homebg .gallery-thumbs {
    width: 1000px;
    /*width: 200px;*/
    margin: 0 auto;
    height: 160px;
    overflow: hidden;
    position: relative;
    /*background-color: #ccc;*/
    animation: bounceInRight 2s;
    }
    .zk_homebg .gallery-thumbs .teacher-sm {
    width: 120px;
    cursor: pointer;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    }
    .zk_homebg .swiper-slide-active .teacher-sm {
    width: 160px;
    }
    .zk_homebg .swbutton {
    width: 100%;
    margin-bottom: 120px;
    position: relative;
    }
    .zk_homebg .swbutton .swiper-button-prev,
    .zk_homebg .swbutton .swiper-button-next {
    width: 28px;
    height: 50px;
    margin-top: -110px;
    }
    .zk_homebg .swbutton .swiper-button-prev {
    left: 160px;
    background: url(../../assets/images/Sprite.png) no-repeat 0 -360px;
    }
    .zk_homebg .swbutton .swiper-button-next {
    right: 160px;
    background: url(../../assets/images/Sprite.png) no-repeat 0 -430px;
    }

    @media only screen and (max-width: 768px) {
        .tecpic {
            margin-top: 175px;
        }
        .zk_homebg .teacher-bo {
            margin-bottom: 100px;
            width: 748px;
        }
        .zk_homebg .teacher-bo::before {
            left: 350px;
        }
        .zk_homebg .teacher-bo p {
            width: 400px;
            line-height: 24px;
        }
        .zk_homebg .gallery-thumbs {
            width: 768px;
        }
        
    }
    @media screen and (max-height: 768px ){
        .zk_homebg .teacher-bo {
            margin-bottom: 50px;
        }

        .zk_homebg .swbutton{
            margin-bottom: 80px;
        }
    }
    @media screen and (max-height: 668px ){
        .zk_homebg h1 {
            line-height: 85px;
        }
        .zk_homebg .teacher-bo {
            height: 230px;
        }
        .zk_homebg .teacher-bo img {
            width: 265px;
        }
    }

</style>