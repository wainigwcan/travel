<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <ul class="button-list">
          <li class="button-wrapper">
            <div class="button">{{this.city}}</div>
          </li>
        </ul>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <ul class="button-list">
          <li
            @click="handleclick(item.name)"
            class="button-wrapper"
            v-for="(item,index) in hotCities"
            :key="index"
          >
            <div class="button">{{item.name}}</div>
          </li>
        </ul>
      </div>
      <div class="area" v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <ul class="item-list" v-for="(innerItem,index) in item" :key="index">
          <li @click="handleclick(innerItem.name)" class="item border-bottom">{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Better from "better-scroll";
import { mapState , mapMutations} from 'vuex';
export default {
  name: "list",
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  computed:{
    ...mapState(['city'])
  },
  watch: {
    letter() {
      if (this.letter) {
        const element = this.$refs[this.letter][0];
        this.scroll.scrollToElement(element, 500);
      }
    }
  },
  methods: {
    handleclick(city) {
      // this.$store.dispatch('changeCity', city); 暂时用不上异步， 
      // this.$store.commit('changeCity', city);
      this.changeCity(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCity']) //vuex映射成为该组件自己的方法，直接调用
  },
  mounted() {
    this.scroll = new Better(this.$refs.wrapper, {
      // mouseWheel: true,
      click: true,
      tap: true
    });
  }
};
</script>

<style scoped>
.list {
  position: absolute;
  top: 1.9rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.title {
  background: #eee;
  line-height: 0.54rem;
  font-size: 0.26rem;
  padding-left: 0.2rem;
  color: #666;
}
.button-list {
  overflow: hidden;
  padding: 0.1rem 0.6rem 0.1rem 0.1rem;
}
.button-wrapper {
  float: left;
  width: 33.33%;
}
.button {
  margin: 0.1rem;
  padding: 0.1rem 0;
  border: 0.02rem solid #ccc;
  text-align: center;
  border-radius: 0.06rem;
}
.item {
  line-height: 0.76rem;
  padding-left: 0.2rem;
  color: #666;
}
</style>