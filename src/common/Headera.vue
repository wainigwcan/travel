<template>
  <div class="header">
    <div v-show="showAbs" class="header-abs" @click="$router.push('/')">
      <van-icon class="header-icon" name="arrow-left" />
    </div>
    <van-nav-bar
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
      title="详情介绍"
      left-text="返回"
      @click-left="$router.push('/')"
    />
  </div>
</template>

<script>
export default {
  name: "headera",
  data() {
    return {
      showAbs: true,
      opacityStyle: 0
    };
  },
  methods:{
      handleScroll(){
          console.log('scroll');
          const top = document.documentElement.scrollTop;
          if(top > 60){
             let opacity = top / 140;
             opacity = opacity > 1 ? 1 : opacity;
             this.opacityStyle = { opacity }
              this.showAbs = false;
          }else{
              this.showAbs = true;
          }
      }
  },
  created(){
  },
  activated(){
      window.addEventListener('scroll',this.handleScroll)
  }, //全局事件解绑 ，
  deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
  }
};
</script>

<style scoped>
.header-abs {
  position: absolute;
  top: 0.1rem;
  left: 0.1rem;
  width: 1rem;
  height: 1rem;
  background: rgba(0, 0, 0, 0.8);
  border-radius: 0.5rem;
}
.header-icon {
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  color: #fff;
  font-size: 0.5rem;
}
.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: .86rem;
  background: rgb(3, 209, 245);
}
.header-fixed .van-nav-bar__title, .header-fixed .van-nav-bar__text{
    color: #fff;
}

</style>