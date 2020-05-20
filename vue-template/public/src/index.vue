<template>
    <div id="app">
        <div>{{ test }}</div>
        <div class="photo" />
        <img :src="imgUrl" width="40px">
        <router-view />
    </div>
</template>
<script>
import userImg from '../assets/img/user-unknown.png'
export default {
    "name": 'App',
    data() {
        return {
            "test":'欢迎使用vue',
            "imgUrl": userImg
        }
    }
}
</script>
<style lang='less'>
    @import './index.less';
    .photo {
        height: 20px;
        background: red;
    }
</style>