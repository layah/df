<template>
  <div class="couser_basis">
     <Headers :add="add" :headslogo="headslogo" :name="name" :title="title"></Headers>
    <div class="auto_box Mtp30" >
      <div class="tabel Center">
          <div class="thead">
              <div class="color_f F0">
                  <div class="p_ibm wido16 F14 bor_right">阶段名称</div>
                  <div class="p_ibm wido14 F14 bor_right">操作系统与服务器</div>
                  <div class="p_ibm wido14 F14 bor_right">数据库技术</div>
                  <div class="p_ibm wido14 F14 bor_right">Java开发核心技术</div>
                  <div class="p_ibm wido14 F14 bor_right">Java开发进阶技术</div>
                  <div class="p_ibm wido14 F14 bor_right">H5开发技术</div>
                  <div class="p_ibm wido14 F14 bor_right">软件工程与工具</div>
              </div>
          </div>
          <div class="t_body">
              <div class="t_row F0" v-for=" (couseName,index) in couseName">
                  <div class="p_ibt wido16 F14 Center couse_box">
                    <div class="list_icon p_ibm Mtp40" :class="'list_icon_'+(index+1) "></div>
                    <div class=" F14" :class="'cousr_n_col'+(index+1)">{{couseName.name}}</div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                      <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-for='name in couseName.couList'>{{name}}</router-link>
                          <router-link to="/course" class="couse_list list_bg" v-show="index>5"></router-link>
                      </div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                    <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-for='name1 in couseName.couList1'>{{name1}}</router-link>
                          <router-link to="/course" class="couse_list list_bg" v-show="index>5">计算机网络与协议入门</router-link>
                      </div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                    <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-for='name2 in couseName.couList2'>{{name2}}</router-link>
                          <router-link to="/course" class="couse_list list_bg" v-show="index>5">计算机网络与协议入门</router-link>
                    </div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                    <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-for='name3 in couseName.couList3'>{{name3}}</router-link>
                          <router-link to="/course" class="couse_list list_bg" v-show="index>5">计算机网络与协议入门</router-link>
                    </div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                    <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-for='name4 in couseName.couList4'>{{name4}}</router-link>
                          <router-link to="/course" class="couse_list list_bg" v-show="index>5">计算机网络与协议入门</router-link>
                    </div>
                  </div>
                  <div class="p_ibt wido14 F14 couse_box">
                    <div class="p_ibt wido90">
                          <router-link to="/course" class="couse_list list_dashad" v-show="index>5"> </router-link>
                          <router-link to="/course" class="couse_list list_bg" v-for='name5 in couseName.couList5'>{{name5}}</router-link>
                    </div>
                  </div>
              </div>
          </div>
      </div>

    </div>
    <Footers  :cursor="cursor"></Footers>
  </div>

</template>

<script>
import Headers from '../../components/Header-con.vue';
import Footers from '../../components/Footer.vue';
export default{
    name:'jobs',
    components:{
      Headers,
      Footers
    },
    data(){
      return {
        add:"/#",
        headslogo:"/src/assets/images/logo-java.png",
        name:"Java开发体系",
        title:'逻辑结构',
        cursor:2,
        couseName:[]
      }
    },
    methods:{
      getList:function(){
        this.$http.get('src/assets/json/logic_list.json').then(function(data){
            this.couseName=data.data.couseName;
        })
      }
    },
    mounted:function(){
      this.getList();
    }
};

</script>

<style scoped>
.auto_box{width:1200px;min-height:60px;margin-left:auto;margin-right: auto;}
.tabel{display: table;width: 100%;box-shadow: 0 0 9px rgba(0,0,0,0.25);animation: bounceInRight 2s;}
.thead{width:100%;height:50px;line-height: 50px;background: #1a9bfc;}
.t_row{/*display: table-row;*/width: 100%;}
.t_cell{display: table-cell;}
.p_ibm{display: inline-block;vertical-align: middle;}
.p_ibt{display: inline-block;vertical-align: top;}
.Center{text-align: center}
.color_f{color:#fff}
.F0{font-size: 0;}
.F14{font-size: 14px;}
.wido16{width: 16%;}
.wido14{width:14%}
.wido90{width: 90%;}
.het155{height: 155px;}
.bor_right{border-right:1px  solid #e5e5e5}
.bor_bottom{border-bottom:1px  solid #e5e5e5;}
.bor_right:last-child{border: none;}
.couse_box{height: 140px;border-right:1px  solid #e5e5e5;border-bottom:1px  solid #e5e5e5;}
.couse_box:nth-child(2n+1){background:#f6f6f6;}
.couse_box:first-child{background:#fff}
.couse_list{display: block;width: 100%;min-height:20px;line-height: 20px;margin-top:5px;font-size:12px;color:#666;text-align: center;
animation: scallp 5s ;
}
@keyframes  scallp{
  from{transform: scale(0);
    }
  to{
    transform: scale(1);
  }

}

.couse_list_1{transform: scale(1);}
.list_dashad{border: 1px dotted #666;border-radius: 4px;}
.list_bg{background: #7bc4fc;border-radius: 4px;border: 1px solid #7bc4fc;color: #fff}
.list_icon{width: 36px;height: 45px;background: url(../../assets/images/Sprite.png)no-repeat center;}
.list_icon_1{background-position: 0 0;}
.list_icon_2{background-position: 0 -61px;}
.list_icon_3{background-position: 0 -120px;}
.list_icon_4{width: 45px;background-position: 0 -180px;}
.cousr_n_col1{color:#5cabfe}
.cousr_n_col3{color:#f39c24}
.cousr_n_col2{color:#1abb9b}
.cousr_n_col4{color:#f2686d}

@media only screen and (min-width: 1024px) {
.auto_box{width: 1200px;}


};
@media only screen and (min-width: 768px) and (max-width: 1024px) {
.auto_box{width: 960px;}
.F14{
  font-size: 10px;
}
.couse_box{height:120px;}
.couse_list{font-size: 10px;}
.thead{height:40px;line-height: 40px;}
.Mtp40{margin-top: 20px;}
};

@media only screen and (max-width: 768px) {
.auto_box{width: 768px;}
.F14{
  font-size: 10px;
}
.Mtp40{margin-top: 45px;}
.couse_box{height:150px;}
}
@media screen and (max-height:768px) {
.Mtp30{ margin-top: 10px}
}
</style>
