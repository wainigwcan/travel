<template>
<div class="alphabet">
    <ul class="list">
        <li @click="handclick" v-raindow class="item" v-for="(item, key) in cities" :key="key">{{key}}</li>
    </ul>
</div>
</template>

<script>
export default{
    name: 'abphabet',
    props:{
        cities: Object
    },
    methods:{
        handclick(e){
            this.$emit('change', e.target.innerText);
            // console.log(e.target.innerHTML);
        }
    }
}
</script>

<style scoped>
.list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:2rem;
    right:.2rem;
    bottom: 0;
    width: 0.4rem;
}
.item{
    text-align: center;
    line-height: .5rem;
}
</style>