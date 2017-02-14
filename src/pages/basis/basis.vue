<template>
  <div class="couser_basis">
     <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box">
      <div class="basis_box Mtp45 color_3 Center">
        <!--<div class="F30 Line30">Java程序设计基础</div>-->
        <div class="F20 Mtp40 Line30">Java软件开发全部技能，从编程语言开始，到开源框架技术，通过扎实的理论学习及大量案例实践，帮助学习者快速增长项目经验，达到企业用人标准。
        </div>
        <div class="Mtp20">
          <ul class="couse_icon_list F0">
            <li class="p_ibt wido25  Center  Mtp40" v-for="list in corseList">
              <div class="couse_icon_box" :class="list.bg_col">
                <div class="p_ibm couse_icon" :class="list.bg_icon"></div>
              </div>
              <div class="Mtp15">{{list.name}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footers :cursor="cursor"></Footers>
  </div>
</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
  name:'basis',
  components:{
    Headers,
    Footers
  },
  data(){
    return {
      add:"/#",
      headslogo:"/src/assets/images/logo-java.png",
      name:"Java开发体系",
      title:'Java程序设计基础',
      cursor:1,
      corseList:{}
    }
  },

  watch:{
    corseList:function(){
      return this.corseList;
    }
  },
  methods:{
    getList:function(){
      this.$http.get('src/assets/json/cours_list.json').then(function(data){
          this.corseList=data.data;
      })
    }
  },
  mounted:function(){
    this.getList();
  }
}
</script>

<style scoped>
@media screen and (max-width: 768px) and (max-width: 1024px){
.couser_basis{min-height:100%;}
.Mtp65{margin-top:40px;}
.Mtp60{margin-top: 20px;}
.F40{font-size: 30px;}
.F26{font-size: 22px;}
.couse_icon_box{
    width: 90px;
    height: 90px;
    line-height: 90px;
}
.couse_icon {
  height: 54px;
  background: url(../../assets/images/abstract_icon.png)no-repeat center;
}
.couse_icon_1{
  height:46px;width:46px;background-position: -127px -63px;
}
.couse_icon_2{
  height:46px;width:46px;background-position: -127px 0;
}
.couse_icon_3{
  height:46px;width:46px;background-position: 0 -60px;
}
.couse_icon_4{
  height:50px;width:50px;background-position: -191px -62px;
}
.couse_icon_5{
  height:46px;width:46px;background-position: -61px 0;
}
.couse_icon_6{
  height:46px;width:46px;background-position: -62px -62px;
}
.couse_icon_7{
  height:46px;width:46px;background-position: -193px 0;
}
.couse_icon_8{
  height:42px;width:42px;background-position: 0 0;
}
.couser_basis{background-size: cover;}
.Mtp50 {
    margin-top: 35px;
}

}
@media screen and (max-height: 768px ){
.Mtp45{margin-top: 15px;}
.Mtp40 {margin-top: 20px;}.Mtp15{margin-top: 10px;}
}
</style>
