<template>
    <div class="c" @click="clickC">
        我是c组件
        <div>
            获取爷爷组件的值
            {{ $attrs.msgc }}
        </div>
        <!-- <d v-bind="$attrs" v-on="$listeners" /> -->
    </div>
</template>
<script>
import d from './d.vue'
import bus from './bus'
export default {
    // components: {
    //     d
    // },
    data() {
        return {
           
        }
    },
    methods: {
        clickC() {
            // this.$emit('getCData', '我是c组件')
            bus.$emit('test', '我是c组件')
        }
    }
}
</script>
<style lang='less' scope>

</style>
