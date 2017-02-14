<template>
    <div class="zk_homebg">
        <div class="bgc"></div>
        <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
        <!--<h1>知识点案例</h1>-->
        <p class="kpc-cont">知识点案例1在教学中用来说明知识点,知识点的应用,以及多个知识点综合应用.实现时间一般在5-30分钟,适合课堂案例演示,课堂上机案例与课后练习案例等</p>
        <div class="linkage">
            <div class="linkage-head">
                <select id="zksystem" @change="zksys($event)">
                     <option value="-1">全部体系</option>
                      <option v-for="sys in allsystem">{{sys}}</option>
                </select>
                <select id="zkclass" @change="zkcla($event)">
                     <option value="-1">全部课程</option>
                     <option v-for="cls in sysclass">{{cls}}</option>
                </select>
                <span>共包含{{allnumber}}个案例</span>
            </div>
            <ul>
                <li v-for="clcase in classcase">
                    <!--<a href="#">-->
                        <span class="classname">{{clcase.clcasename}}</span>
                        <span class="classsystem">{{clcase.clcsys}}</span>
                    <!--</a>-->
                </li>
            </ul>
        </div>
        <!-- <Footers></Footers> -->
    </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
// import Footers from '../../components/Footer-two.vue';
export default{
       components:{
            Headers,
            // Footers
        },
       data() {
            return {
                add:"/#/resindex",
                headslogo:"/src/assets/images/logo3.png",
                name:"知识点案例",
                title:'知识点案例',
                // ImgSrc:"/src/assets/images/logo3.png",
                allsystem:[],
                allclass:[],
                allcase:[],
                sysclass:[],
                classcase:[],
                sysnm:'',
                clsnm:'',
                allnumber:''
            }
        },
        methods: {
                ergodic: function(obj) {
                    this.classcase=[];
                    for(var i = 0; i <obj.length; i++) {
                            for(var j = 0; j<obj[i].length; j++) {
                                for(var k = 0; k<obj[i][j].length; k++) {
                                    this.classcase.push(obj[i][j][k]);
                                }
                            }
                        }
                     this.allnumber = this.classcase.length;
                },
                segod: function(obj) {
                    this.classcase=[];
                    for(var i = 0; i <obj.length; i++) {
                            for(var j = 0; j<obj[i].length; j++) {
                                    this.classcase.push(obj[i][j]);
                            }
                        }
                     this.allnumber = this.classcase.length;
                },
                lasterc: function(obj) {
                    this.classcase=[];
                        for(var i = 0; i <obj.length; i++) {
                                this.classcase.push(obj[i]);
                        }
                    this.allnumber = this.classcase.length;
                },
                zksys: function(e) {
                     $("#zkclass option:first").prop("selected", 'selected');  
                     $('.linkage ul').scrollTop(0);
                    this.sysnm = e.target.selectedIndex-1;
                    this.sysclass = this.allclass[this.sysnm];
                    if( this.sysnm == -1) {
                        this.ergodic(this.allcase);
                    }else {
                        this.segod(this.allcase[this.sysnm]);
                    }
                },
                zkcla:function(e) {
                   $('.linkage ul').scrollTop(0);
                   this.clsnm = e.target.selectedIndex-1;
                   if( this.clsnm == -1) { 
                        this.segod(this.allcase[this.sysnm])
                    }else {
                        this.classcase = this.allcase[this.sysnm][this.clsnm];
                        this.allnumber = this.classcase.length;
                    }
                },
                getkpc: function() {
                    this.$http({
                        url: 'src/assets/json/kpc.json',
                    }).then(function(res){
                        this.allsystem = res.data.allsystem,
                        this.allclass = res.data.allclass,
                        this.allcase = res.data.allcase
                        this.ergodic(res.data.allcase);
                    },function(err){
                        console.log(err);
                    })
                }
        },
        mounted: function() {
                this.getkpc();
        },
        updated:function(){

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
    font-size: 30px;
    line-height: 86px;
    text-align: center;
}*/
.kpc-cont {
    font-size: 20px;
    line-height: 41px;
    width: 1200px;
    margin: 0 auto;
    text-align: center;
    padding-bottom: 50px;
}
.linkage {
    width: 1200px;
    height: 480px;
    margin: 0 auto 60px;
    box-shadow: 0 3px 10px 3px rgba(0,0,0,0.3);
}
.linkage-head {
    height: 60px;
    background-color: #1a9bfc;
    position: relative;
}
.linkage-head select {
    width: 161px;
    height: 32px;
    font-size: 12px;
    border-radius: 5px;
    padding-left: 7px;
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translate(0 , -50%);
}
.linkage-head select:nth-child(2) {
    left: 189px;
}
.linkage-head span {
    color: #fff;
    float: right;
    line-height: 60px;
    padding-right: 22px;
}
.linkage ul {
    height: 420px;
    overflow: auto;
}
.linkage li  {
    background-color: #fff;
    height: 60px;
    border-top: 1px solid #ddd;
    padding: 0 21px;
     box-sizing: border-box;
}
.linkage li:nth-child(2n)  {
    background-color: #f6f6f6;
}
.linkage span {
    /*display: block;
    width: 100%;*/
    height: 60px;
    color: #333;
    font-size: 14px;
    line-height: 60px;
}
.classsystem {
    float: right;
    color: #999;
}
@media only screen and (min-width: 768px) and (max-width: 1024px) {
    .zk_homebg h1 {
        line-height: 54px;
    }
    .kpc-cont {
        width: 950px;
        padding-bottom: 20px;
    }
    .linkage {
        width: 950px;
        height: 480px;
    }
    .linkage ul {
        height: 420px;
    }
}

@media screen and (max-width: 768px) {
    .zk_homebg h1 {
        line-height: 84px;
    }
    .kpc-cont {
        width: 720px;
        padding-bottom: 40px;
    }
    .linkage {
        width: 720px;
        height: 660px;
    }
    .linkage ul {
        height: 600px;
    }

}

@media screen and (max-height: 768px) {
    .zk_homebg h1 {
        line-height: 54px;
    }
    .kpc-cont {
        width: 950px;
        padding-bottom: 5px;
    }
    .linkage {
        width: 950px;
        height: 480px;
    }
    .linkage ul {
        height: 420px;
    }
}
</style>
