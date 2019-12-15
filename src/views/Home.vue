<template>
<div class="home">
    <HomeHeader></HomeHeader>
    <HomeSwiper :swiperList='swiperList'></HomeSwiper>
    <HomeIcom :iconList='iconList'></HomeIcom>
    <HomeRecommend :recList='recList'></HomeRecommend>
    <HomeToday :weekendList='weekendList'></HomeToday>
</div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../components/Header'
import HomeSwiper from '../components/Swiper'
import HomeIcom from '../components/Icon'
import HomeRecommend from '../components/Recommend'
import HomeToday from '../components/Todaywhere'
import {mapState} from 'vuex'
export default{
    name:'home',
    components:{
        HomeHeader,
        HomeSwiper,
        HomeIcom,
        HomeRecommend,
        HomeToday
    },
    data(){
        return{
            swiperList: [],
            iconList: [],
            recList: [],
            weekendList: [],
            lastCity: ''
        }
    },
    mounted(){
        // console.log('object');
        this.lastCity = this.city;
        this.getHomeInfo();
    },
    activated(){
        // console.log('eee');
        if(this.lastCity !== this.city){
            this.lastCity = this.city;
            this.getHomeInfo();
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        getHomeInfo(){
            axios.get('/api/index?city=' + this.city)
            .then(res => {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.swiperList = data.swiperList;
                    this.iconList = data.iconList01;
                    this.recList = data.recList;
                    this.weekendList = data.weekendList;
                }
            })
        }
    }
}
</script>

<style scoped></style>