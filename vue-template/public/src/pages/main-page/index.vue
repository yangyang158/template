<template>
    <div class="main-page">
        <div class="menu-area">
            <el-menu
                default-active="1-4-1" class="el-menu-vertical-demo" 
            >
                <div v-for="menu in menuList" :key="menu.key">
                    <el-menu-item v-if="menu.children.length === 0" :index="menu.key">
                        <i :class="menu.icon" />
                        <a :href="menu.url">{{ menu.title }}</a>
                    </el-menu-item>
                    <el-submenu v-else :index="menu.key">
                        <template slot="title">
                            <i :class="menu.icon" />
                            <span slot="title">{{ menu.title }}</span>
                        </template>
                        <el-menu-item v-for="singlemenu in menu.children" :key="singlemenu.key">
                            <a :href="singlemenu.url">{{ singlemenu.title }}</a>
                        </el-menu-item>
                    </el-submenu>
                </div>
            </el-menu>
        </div>
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view />
            </transition>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    data() {
        return {
            isCollapse: false,
            menuList: [{
                title: '首页',
                key: 'home',
                icon: 'el-icon-setting',
                url: 'http://www.baidu.com',
                children: []
            }, {
                title: '地图',
                key: 'map',
                icon: 'el-icon-setting',
                url: 'https://cn.vuejs.org/v2/guide/render-function.html',
                children: []
            }, {
                title: '系统管理',
                icon: 'el-icon-setting',
                children: [{
                    title: '用户管理',
                    key: 'user',
                    url: '#/main/user'
                }, {
                    title: '角色管理',
                    key: 'role',
                    url: '#/main/role'
                }]
            }]
        }
    },
    methods: {
        
    }
}
</script>
<style scoped>
    .main-page {
        & .menu-area {
            width: 300px;
            height: 100vh;
            display: inline-block;
            vertical-align: top;
            & > ul {
                height: 100vh;
            }
        }
        & .content {
            width: calc(100% - 310px);
            height: 100vh;
            display: inline-block;
            vertical-align: top;
        }
    }
</style>