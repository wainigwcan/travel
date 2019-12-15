<template>
  <div>
    <van-search placeholder="请输入城市" v-model="keyword" />
    <div class="search" ref="aaa" v-show="keyword">
      <ul>
        <li @click="handleclick(item.name)" class="item border-bottom" v-for="(item,index) in list" :key="index">{{item.name}}</li>
        <li class="item border-bottom" v-show="hasNoData">没有找到城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Better from "better-scroll";
import {mapMutations} from 'vuex';
export default {
  name: "search",
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: "",
      list: [],
      timer: null
    };
  },
  methods: {
    handleclick(city) {
      // this.$store.dispatch('changeCity', city); 暂时用不上异步， 
      // this.$store.commit('changeCity', city);
      this.changeCity(city);
      this.$router.push('/');
      this.keyword = '';
    },
    ...mapMutations(['changeCity']) //vuex映射成为该组件自己的方法，直接调用
  },
  computed:{
    hasNoData(){
      return !this.list.length
    }
  },
   mounted() {
    this.scroll = new Better(this.$refs.aaa, {
      // mouseWheel: true,
      click: true,
      tap: true
    });
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setInterval(() => {
        const result = [];
        for (let i in this.cities) {
          this.cities[i].forEach(value => {
            if (
              value.spell.indexOf(this.keyword) > -1 ||
              value.name.indexOf(this.keyword) > -1
            ) {
              result.push(value);
            }
          });
        }
        this.list = result;
      }, 100);
    }
  }
};
</script>

<style scoped>
.search {
  z-index: 1;
  position: absolute;
  top: 2rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: #eee;
}
.item {
  line-height: 0.62rem;
  padding-left: 0.2rem;
  background: #fff;
  color: #777;
}
</style>