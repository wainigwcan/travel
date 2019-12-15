<template>
<div class="city">
    <van-nav-bar
    class="city-title"
  title="选择城市"
  left-text="返回"
  @click-left="onClickLeft"/>
  <Search :cities='cities'></Search>
  <List :letter='letter' :hotCities='hotCities' :cities='cities'></List>
  <Alphabet @change="handleLetterChange" :cities='cities'></Alphabet>
</div>
</template>

<script>
import axios from 'axios'
import List from '../components/List'
import Alphabet from '../components/Alphabet'
import Search from '../components/Search'
export default{
    name: 'city',
    components:{
        List,
        Alphabet,
        Search
    },
    data(){
        return{
            cities: {},
            hotCities: [],
            letter: ''
        }
    },
    methods:{
        onClickLeft(){
            this.$router.push("/");
        },
        getCity(){
            axios.get('/api/city')
            .then(res => {
                res = res.data;
                if(res.ret && res.data){
                    const data = res.data;
                    this.hotCities = data.hotCities;
                    this.cities = data.cities;
                    // console.log(res);
                }
            });
        },
        handleLetterChange (letter) {
            // console.log(letter);
            this.letter = letter;
        }
    },
    mounted(){
        this.getCity();
    }
}
</script>

<style scoped>
.city-title{
    background: rgb(7, 231, 220);
}
</style>