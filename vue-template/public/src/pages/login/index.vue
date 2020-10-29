<template>
    <div class="login-page">
        <div class="login-area">
            <div class="header">
                登录/注册
            </div>
            <el-form
                ref="loginForm" class="content" :model="loginInfo"
                :rules="rules"
            >
                <el-form-item label="" prop="name" style="marginBottom: 50px">
                    <el-input
                        v-model="loginInfo.name" prefix-icon="el-icon-phone"
                        placeholder="请输入账号"
                    />
                </el-form-item>
                <el-form-item label="" prop="psw">
                    <el-input v-model="loginInfo.psw" prefix-icon="el-icon-time" placeholder="请输入密码" />
                </el-form-item>
            </el-form>
            <div class="footer">
                <el-button type="primary" style="width: 100%" @click="login">
                    登录
                </el-button>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'

export default {
    data() {
        return {
            loginInfo: {
                name: '',
                psw: ''
            },
            rules: {
                name: [
                    { required: true, message: '请输入账号', trigger: 'change' }
                ],
                psw: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ]
            }
        }
    },
    methods: {
        login() {
            this.$refs['loginForm'].validate((valid) => {
                if (valid) {
                    Vue.axios.post('api/login', this.loginInfo).then((res) => {
                        const {msg } = res.data
                        console.log(444, res.headers.authorization)
                        localStorage.setItem('authorization', res.headers.authorization)
                        this.$message({
                            message: msg,
                            type: 'success'
                        })
                        // 跳转主页面
                        location.href = '#/main'
                    })
                }
            })
        }
    }
}
</script>
<style scoped>
    .login-page {
        height: 100%;
        background: url('~@assets/img/background.jpg');
        & .header {
            font-size: 25px;
            color: #fff;
            text-align: center;
        }
        & .login-area {
            width: 400px;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -60%);
            & .content {
                margin: 40px 0 20px;
            }
        }
        & .footer {
            margin-top: 40px;
            text-align: center;
        }
    }
</style>