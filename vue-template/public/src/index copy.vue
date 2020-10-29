<template>
    <div id="app">
        <div>
            {{ test }}
        </div>
        <div class="photo" />
        <img :src="imgUrl" width="40px" @click="clickPhoto">
        <pic-wall 
            ref="picWall" 
            :pics-list="picsList" 
            :msgc="[1,2,3]" 
            @renderCallback="renderCallback"
            @getCData="getCData"
        />
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
    },
    provide: {
        a1: 1,
        a2: [1,2,3],
        a3: {name: 'yy'}
    },
    methods: {
        renderCallback(params) {
            console.log('params', params)
        },
        clickPhoto() {
            console.log('子组件属性和方法1', this.$children)
            console.log('子组件属性和方法2', this.$refs.picWall)
        },
        getCData(value) {
            console.log('获取c组件的值', value)
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