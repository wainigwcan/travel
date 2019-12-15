<template>
  <div class="list">
    <div class="item" v-for="(item,index) in list" :key="index">
      <div class="item-title border-bottom">
        <span>
          <van-icon class="item-icon" name="like" />
        </span>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <list :list="item.children"></list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    list: Array
  }
};
</script>

<style scoped>
.list-discounts {
  line-height: 0.8rem;
}
.item-title {
  line-height: 0.8rem;
  padding: 0 0.2rem;
}
.item-icon {
  color: pink;
  position: relative;
  top: 0.03rem;
  left: -0.07rem;
}
.item-children {
  padding: 0 0.2rem;
}
</style>