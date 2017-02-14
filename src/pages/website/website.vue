<template>
    <div class="zk_homebg">
        <div class="bgc"></div>
        <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
        <!--<h1>课程网站</h1>-->
        <div class="bigbox">
            <div class="sboxweb" v-for="wbs in website">
                <ul>
                    <li v-for="wbli in wbs.weblist">
                        <img :src="wbli.bgimg" alt="">
                        <p class="sboxwebcont">{{wbli.webcont}}</p>
                        <div class="webhide">
                            <p>{{wbli.contdes}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="goclass">
                <a href="#">前往课程网站</a>
            </div>
        </div>
        <Footers :cursor="cursor"></Footers>
    </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer-two.vue';
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
            title:'课程网站',
            cursor:4,
            website:[]
        }
    },
    mounted: function() {
        this.$http({
            url: 'src/assets/json/website.json',
            }).then(function(res){
                this.website = res.data;
                // console.log(res.data)
            },function(err){
                console.log(err);
            })
    },
    updated: function() {
        $('.sboxweb').on('mouseenter','li',function() {
            // $(this).find('.webhide').stop().animate({"top":"0"},500)
            $(this).find('.webhide').stop().animate({"opacity":"1"},800)
        })
        $('.sboxweb').on('mouseleave','li',function() {
            // if($(this).index() == 0) {
            //     $(this).find('.webhide').stop().animate({"top":"500"},500)
            // }else {
            //     $(this).find('.webhide').stop().animate({"top":"250"},500)
            // }
            $(this).find('.webhide').stop().animate({"opacity":"0"},1000)
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
    /*.zk_homebg h1 {
        font: 30px/108px microsoft yahei;
        text-align: center;
    }*/
    .bigbox {
        width: 1000px;
        height: 500px;
        margin: 0 auto;
        position: relative;
        overflow: hidden;
    }
    .sboxweb {
        width: 500px;
        height: 500px;
        float: left;
    }
    .sboxweb ul li {
        width: 250px;
        height: 250px;
        float: left;
        text-align: center;
        background-size: cover;
        position: relative;
    }
    .sboxweb ul li .webhide {
        width: 250px;
        height: 250px;
        background-color: rgba(0,0,0,0.7);
        position: absolute;
        top:0px;
        opacity: 0;
    }
    .sboxweb ul li .webhide p {
        color: #fff;
        width: 200px;
        margin: 70px auto;
    }
    .sboxweb ul li img {
        padding-top: 95px;
    }
    .sboxweb ul li .sboxwebcont {
        color: #fff;
        font-size: 18px;
        margin-top: 32px;
    }
    .sboxweb ul li:nth-child(1) {
        height: 500px;
    }
    .sboxweb ul li:nth-child(1) .webhide {
        height: 500px;
    }
    .sboxweb ul li:nth-child(1) .webhide p {
        margin-top: 200px;
    }
    .sboxweb ul li:nth-child(1) img {
        padding-top: 205px;
    }
    .sboxweb:nth-child(1) ul li:nth-child(1) {
        background-image: url(../../assets/images/webclass2.jpg)
    }
    .sboxweb:nth-child(1) ul li:nth-child(2) {
        background-image: url(../../assets/images/webclass1.jpg)
    }
    .sboxweb:nth-child(1) ul li:nth-child(3) {
        background-image: url(../../assets/images/webclass5.jpg)
    }
    .sboxweb:nth-child(2) ul li:nth-child(1) {
        background-image: url(../../assets/images/webclass3.jpg)
    }
    .sboxweb:nth-child(2) ul li:nth-child(2) {
        background-image: url(../../assets/images/webclass4.jpg)
    }
    .sboxweb:nth-child(2) ul li:nth-child(3) {
        background-image: url(../../assets/images/webclass6.jpg)
    }
    .goclass {
        position: absolute;
        width: 192px;
        height: 36px;
        border: 1px solid #fff;
        bottom: 26px;
        border-radius: 5px;
        text-align: center;
        left: 31px;
        z-index: 10;
    }
    .goclass a{
        color: #fff;
        line-height: 34px;
        font-size: 16px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        .sboxweb ul li .webhide {
            display: none;
        }
    }

    @media only screen and (max-width: 768px) {
        .bigbox {
            width: 660px;
            height: 1120px;
            margin-bottom: 15px;
        }
        .sboxweb {
            width: 660px;
            height: 550px;
        }
        .sboxweb ul li {
            width: 300px;
            margin: 15px;
            border: 2px solid #ccc;
        }
        .sboxweb ul li:nth-child(1) {
            height: 530px;
        }
        .sboxweb ul li .webhide {
            display: none;
        }
        .goclass {
            bottom: 610px;
            left: 77px;
        }
    }

</style>
