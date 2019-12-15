<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page,index) in pages" :key="index">
        <div @click="kaifaxhong(index)" class="icon" v-for="(item,index) in page" :key="index">
          <div class="icon-img">
            <img :src="item.imgUrl" alt />
          </div>
          <p class="icon-desc" v-raindow>{{item.title}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  name: "HomeIcom",
  props: {
    iconList: Array
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    kaifaxhong(index) {
      this.$toast({
        message: "这里还没开发",
        icon: "https://img.yzcdn.cn/vant/logo.png"
      });
    }
  }
};
</script>

<style scoped>
.icons {
  height: 0;
  overflow: hidden;
  padding-bottom: 50%;
}
.icons .swiper-container {
  height: 0;
  padding-bottom: 50%;
}
.icon {
  position: relative;
  width: 25%;
  float: left;
  height: 0;
  overflow: hidden;
  padding-bottom: 25%;
}
.icon-img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0.44rem;
  box-sizing: border-box;
  padding: 0.1rem;
}
.icon-img img {
  display: block;
  margin: 0 auto;
  height: 100%;
}
.icon-desc {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  line-height: 0.44rem;
  font-size: 0.2rem;
  text-align: center;
}
</style>