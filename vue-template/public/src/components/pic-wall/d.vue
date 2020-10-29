<template>
    <div class="d" @click="clickD">
        我是d组件{{ this.$store.state.name }}
        <div>
            <!-- 获取爷爷组件的值
            {{ $attrs.msgc }} -->
        </div>
    </div>
</template>
<script>
import bus from './bus'
export default {
    data() {
        return {
            a11: this.a1,
            a22: this.a2
        }
    },
    mounted() {
        // 这个时候组件 B 知道组件 A 给它传了一条数据过来了,于是赶紧叫 Bus 这个传话员把数据告诉它
        // bus 就告诉组件 B, 组件 A 那边通过inceptMessage传过来一条数据叫 msg
        bus.$on('test',(msg) => {
        })
    },
    methods: {
        clickD() {
            console.log('获取provider的值', this.a11, this.a22)
            this.$emit('getDData', '我是D组件')
        }
    },
    inject: ['a1', 'a2']
}
</script>
<style lang='less' scope>

</style>
