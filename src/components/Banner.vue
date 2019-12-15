<template>
  <div>
    <div class="banner" @click="handleshow">
      <div class="banner-img">
        <img class="banner-img-content" :src="this.bannerImg" alt />
      </div>
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <van-icon class="banner-icon" name="notes-o" />{{this.gallaryImgs.length}}
        </div>
      </div>
    </div>
    <FadeAnimation>
      <Gallary @close="handle_show" :gallaryImgs="gallaryImgs" v-if="showgrllary"></Gallary>
    </FadeAnimation>
  </div>
</template>

<script>
import Gallary from "../common/Gallary";
import FadeAnimation from '../common/FadeAnimation'
export default {
  name: "banner",
  data() {
    return {
      showgrllary: false
    };
  },
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  methods: {
    handleshow() {
      this.showgrllary = true;
    },
    handle_show(){
      this.showgrllary = false;
    }
  },
  components: {
    Gallary,
    FadeAnimation
  }
};
</script>

<style scoped>
.banner {
  position: relative;
  overflow: hidden;
  padding-bottom: 55%;
  height: 0;
  background: linear-gradient(#000, 10%, #fff);
}
.banner-img-content {
  width: 100%;
}
.banner-info {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  color: #fff;
}
.banner-title {
  flex: 1;
  padding: 0.2rem;
}
.banner-number {
  padding: 0 0.4rem;
  height: 0.4rem;
  line-height: 0.4rem;
  margin-top: 0.2rem;
  box-sizing: border-box;
  border-radius: 0.2rem;
  background: rgba(0, 0, 0, 0.4);
}
.banner-icon {
  position: relative;
  top: 0.04rem;
}

</style>