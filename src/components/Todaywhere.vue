<template>
  <div>
    <div class="todaywhere-title">今儿去哪</div>
    <ul>
      <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="(item,index) in weekendList" :key="index">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt/>
        </div>
        <div class="item-info">
          <p class="item-title" v-raindow>{{item.imgAlt}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Todaywhere",
  props: {
      weekendList: Array
  },
  methods:{
  }
};
</script>

<style scoped>
.todaywhere-title {
    margin-top: .1rem;
  background: rgb(4, 180, 250);
  color: #fff;
  line-height: 0.8rem;
  text-indent: 0.1rem;
}
.item {
  overflow: hidden;
  height: 0;
  padding-bottom: 35%;
  background: #eee;
}
.item-img-wrapper {
  width: 100%;
  height: 2rem;
}
.item-img-wrapper img {
  width: 100%;
  height: 100%;
}
.item-title {
  line-height: .7rem;
  padding-left: .2rem;
}
</style>