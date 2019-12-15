<template>
<div class="wrapper">
    <van-swipe :autoplay="3000">
  <van-swipe-item v-for="(item,index) in swiperList" :key="index">
      <img class="swiper-img" v-lazy="item.imgUrl" alt="">
  </van-swipe-item>
</van-swipe>
</div>
</template>

<script>
export default{
    name: 'HomeSwiper',
    props: {
        swiperList: Array
    }
}
</script>

<style scoped>
.wrapper{
    height: 0;
    overflow: hidden;
    padding-bottom: 31.25%;
    background: #eee;
}
.swiper{
    width: 100%;
    height: 100%;
}
.swiper-img{
    width: 100%;
    height: 100%;
}

</style>