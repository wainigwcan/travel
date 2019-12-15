<template>
  <div class="gallary" @click="handleGrllaryClick">
    <div class="gallary-item">
      <van-swipe>
        <van-swipe-item class="swiper-item" v-for="(item,index) in gallaryImgs" :key="index">
          <img :src="item" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "gallary",
  props:{
      gallaryImgs: Array
  },
  methods:{
      handleGrllaryClick () {
          this.$emit('close');
      }
  }
}
</script>

<style scoped>
.gallary {
  z-index: 99;
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #000;
}
.swiper-item{
   height: 3rem;
}
.swiper-item img{
    width: 100%;
    /* height: 100%; */
}
</style>