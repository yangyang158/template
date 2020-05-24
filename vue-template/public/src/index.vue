<template>
    <div id="app">
        <div>
            {{ test }}
        </div>
        <div class="photo" />
        <img :src="imgUrl" width="40px">
        <pic-wall :pics-list="picsList" />
        <router-view />
    </div>
</template>
<script>
import userImg from '../assets/img/user-unknown.png'
import PicWall from './components/pic-wall/index.vue'
import Vue from 'vue'
Vue.component('pic-wall', PicWall)
export default {
    "name": 'App',
    data() {
        return {
            "test":'欢迎使用vue',
            "imgUrl": userImg,
            "picsList": [{
                title: '1', 
                url: 'http://pics.sc.chinaz.com/files/pic/pic9/201904/zzpic17410.jpg'
            }, {
                title: '2', 
                url: 'http://pic2.sc.chinaz.com/files/pic/pic9/201304/xpic10771_s.jpg'
            }, {
                title: '3', 
                url: 'http://pic32.nipic.com/20130808/4416678_094717767000_2.jpg'
            }]
        }
    }
}
</script>
<style lang='less' scope>
    @import './index.less';
    .photo {
        height: 20px;
        background: red;
    }
</style>