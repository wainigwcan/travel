<template>
<div>
    <div class="recomment-title">热销推荐</div>
    <ul>
        <router-link tag="li" :to="'/detail/' + item.id" class="item border-bottom" v-for="(item,index) in recList" :key="index">
            <div class="item-img-wrapper">
                <img :src="item.imgSrc" alt="">
            </div>
            <div class="item-info">
                <p class="item-title" v-raindow>{{item.imgAlt}}</p>
                <p class="item-desc">{{item.itemAddr}}</p>
                <button>查看详情</button>
            </div>
        </router-link>
    </ul>
</div>
</template>

<script>
export default{
    name: 'recomment',
    props: {
        recList: Array
    }
}
</script>

<style scoped>
.recomment-title{
    margin-top: .1rem;
    background: #eee;
    line-height: .8rem;
    text-indent: .2rem;
}
.item{
    display: flex;
    height: 1.9rem;
    /* background: red; */
}
.item-img-wrapper{
    padding: .1rem;
    box-sizing: border-box;
    width: 1.8rem;
    height: 1.8rem;
}
.item-img-wrapper img{
    width: 100%;
    height: 100%;
}
.item-info{
    flex: 1;
    padding: .1rem;
}
.item-title{
    line-height: .54rem;
    font-size: .32rem;
}
.item-desc{
    line-height: .45rem;
    color: #ccc;
}
.item-info button{
    margin-top: .1rem;
    background: #ff0dcc;
    color: #fff;
    border-radius: .06rem;
    border:0;
    padding:.1rem;
    font-size: .24rem;
}
</style>