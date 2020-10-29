<template>
    <div class="main-page-system-role">
        角色管理
        <div v-changeColor="{text: '使用自定义指令', color: 'red'}">
            444
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

Vue.directive('changeColor', function(el, bingind) {
    el.innerHTML = bingind.value.text
    el.style.color = bingind.value.color
    el.click = function() {
        alert(111)
    }
})
export default {
    data() {
        return {
            text: 111,
            dialogVisible: false,
            tableData: [],
            formData: {
                id: '',
                name: '',
                phone: '',
                photo: ''
            },
            fileList: [],
            rules: {
                name: [
                    { required: true, message: '请输入姓名', trigger: 'change' }
                ]
            }
        }
    },
    computed: {
    },
    mounted: function(){
        console.log(this.$route)
    },
    methods: {
    }
}
</script>
<style>
 .hhh {
    color: red;
 }
</style>