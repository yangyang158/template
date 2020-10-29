<template>
    <div class="main-page-system-user">
        <div v-if="false" class="hhh">
            {{ text }}
        </div>
        <el-table
            :data="tableData"
            style="width: 100%"
        >
            <el-table-column
                type="index"
            />
            <el-table-column
                prop="name"
                label="姓名"
            />
            <el-table-column
                prop="phone"
                label="手机号"
            />
            <el-table-column
                prop="createdAt"
                label="注册时间"
            />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                        size="mini"
                        @click="handleEdit(scope.$index, scope.row)"
                    >
                        编辑
                    </el-button>
                    <el-button
                        size="mini"
                        type="danger"
                        @click="handleDelete(scope.$index, scope.row)"
                    >
                        删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
        >
            <el-form
                ref="userform" :model="formData" label-width="80px"
                :rules="rules"
            >
                <el-form-item label="姓名" prop="name">
                    <el-input v-model="formData.name" />
                </el-form-item>
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="formData.phone" />
                </el-form-item>
                <el-form-item label="上传头像">
                    <el-upload
                        class="upload-demo"
                        :action="uploadUrl"
                        :file-list="fileList"
                        accept=".jpg,.jpeg,.png"
                        list-type="picture"
                        :limit="1"
                    >
                        <el-button size="small" type="primary">
                            点击上传
                        </el-button>
                        <div slot="tip" class="el-upload__tip">
                            只能上传jpg/png文件，且不超过500kb
                        </div>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="confirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import Vue from 'vue'

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
        uploadUrl: function() {
            return 'api/user/upload-photo/' + this.formData.id
        }
    },
    mounted: function(){
        this.getTableData()
    },
    methods: {
        getAuthroze: function(name) {
            const strcookie = document.cookie
            const arrcookie = strcookie.split("; ")// 分割
            // 遍历匹配
            for ( var i = 0; i < arrcookie.length; i++) {
                var arr = arrcookie[i].split("=")
                if (arr[0] == name){
                    return arr[1]
                }
            }
            return ""
        },
        getTableData: function() {
            Vue.axios.defaults.headers.common['authorization'] = localStorage.getItem('authorization')
            Vue.axios.get('api/users/tableData').then((res) => {
                const {msg, data } = res.data
                this.tableData = data
            })
        },
        handleEdit: function(index, row) {
            this.$router.push({
                path: "/main/role",
                // name: 'Role',
                query: {
                    id: 1723
                }
            })
            // Object.assign(this.formData, row)
            // this.dialogVisible = true
        },
        handleDelete: function(index, row) {
            Vue.axios.delete(`api/deleteUser/${row.id}`).then((res) => {
                const {msg, data } = res.data
                this.$message({
                    message: '删除成功',
                    type: 'success'
                })
                this.getTableData()
            })
        },
        handleClose: function(done) {
            this.dialogVisible = false
        },
        confirm: function(){
            this.$refs['userform'].validate((valid) =>{
                if (valid) {
                    Vue.axios.put(`api/user/${this.formData.id}`, this.formData).then((res) => {
                        const {msg, data } = res.data
                        this.$message({
                            message: '修改成功',
                            type: 'success'
                        })
                        this.dialogVisible = false
                        this.getTableData()
                    })

                }
            })
        },
        uploadPhoto: function() {
            Vue.axios.post(`/user/upload-photo/${this.formData.id}`).then((res) => {
                const {msg, data } = res.data
                // this.$message({
                //     message: '修改成功',
                //     type: 'success'
                // })
                // this.getTableData()
            })
        }
    }
}
</script>
<style>
 .hhh {
    color: red;
 }
</style>