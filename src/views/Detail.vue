<template>
  <div class="detail">
    <Banner :bannerImg="bannerImg" :gallaryImgs='gallaryImgs' :sightName='sightName'></Banner>
    <Header></Header>
    <List :list="list"></List>
    <div style="height:1000px"></div>
  </div>
</template>

<script>
import axios from "axios";
import Banner from "../components/Banner";
import Header from "../common/Headera";
import List from "../common/List";
export default {
  name: "detail",
  components: {
    Banner,
    Header,
    List
  },
  data() {
    return {
      bannerImg: "",
      sightName: '',
      list: [],
      gallaryImgs: []
    };
  },
  mounted() {
    this.getDataimg();
  },
  methods: {
    getDataimg() {
      axios.get("/api/detail", {
        params:{
          id: this.$route.params.id
        }
      }).then(res => {
        res = res.data;
        this.bannerImg = res.data.bannerImg;
        this.list = res.data.categoryList;
        this.gallaryImgs = res.data.gallaryImgs;
        this.sightName = res.data.sightName;
      });
    }
  },
  activated(){
    this.getDataimg(); 
  }
};
</script>

<style scoped></style>