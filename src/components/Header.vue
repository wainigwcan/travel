<template>
  <div class="header">
    <div class="header-left">
      <van-icon class="back-icon" name="arrow-left" />
    </div>
    <div class="header-input">
      <van-notice-bar left-icon="volume-o" class="headre-bar " text="二十四字社会主义核心价值观：富强、民主、文明、和谐、自由、平等、公正、法治、爱国、敬业、诚信、友善。" />
    </div>
    <router-link dir="div" to="/city" class="header-right">
      {{this.city}}
      <van-icon name="arrow-down" />
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  computed: {
    ...mapState(["city"])
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  display: flex;
  line-height: 0.86rem;
  height: 0.86rem;
  background: rgb(5, 201, 93);
}
.header-left {
  float: left;
  width: 0.64rem;
  text-align: center;
}
.back-icon {
  margin-top: 0.2rem;
  font-size: 0.45rem;
  color: #fff;
}
.header-input {
  flex: 1;
  height: 0.64rem;
  line-height: 0.64rem;
  border-radius: 0.06rem;
  background: #fff;
  margin-top: 0.12rem;
  margin-bottom: 0.12rem;
  box-sizing: border-box;
}
.header-right {
  float: right;
  min-width: 1.24rem;
  text-align: center;
  color: #fff;
}
.headre-bar {
  background: #fff;
  border-radius: 0.06rem;
  height: 0.65rem;
}
</style>