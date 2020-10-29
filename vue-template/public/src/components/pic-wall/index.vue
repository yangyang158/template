<template>
    <div class="pic-wall">
        <div class="img-lists">
            <div v-for="(img, index) in picsList" :key="index" class="item-img">
                <img
                    :src="img.url" 
                    width="100%" 
                    onerror="alert('The image could not be loaded.')"
                    @click="goPreview(index)"
                >
            </div>
        </div>
        <div v-if="isPreview" class="preview">
            <div class="container">
                <div 
                    class="pre arrow" 
                    :class="{disabled: index === 0}" 
                    @click="toPre"
                >
                    <i class="el-icon-arrow-left" />
                </div>
                <img width="200px" :src="showUrl">
                <div 
                    class="next arrow" 
                    :class="{disabled: index === picsList.length -1}" 
                    :title="index === picsList.length -1 ? '已是最后一张' : ''"
                    @click="toNext"
                >
                    <i class="el-icon-arrow-right" />
                </div>
            </div>
        </div>
        <hr>
        <c v-bind="$attrs" v-on="$listeners" @getDData="getDData" />
        <d />
        <iframe height="600" width="800" src="http://172.19.102.129:8080/#/admin/common/project-group" />
    </div>
</template>
<style lang='less' scope>
.pic-wall {
    & .arrow {
        display: inline-block;
        font-size: 32px;
        cursor: pointer;
        &.disabled {
            color: #ccc;
        }
    }

    & .preview {
        position: fixed;
        z-index: 1;
        margin: 0 auto;
        background: rgba(0, 0, 0, 0.4);
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        & .container {
            width: 60%;
            height: 50%;
            margin: 15% auto;
            text-align: center;
        }
        & img {
            vertical-align: middle;
        }
    }
    & .img-lists {
        & .item-img {
            display: inline-block;
            width: 100px;
            height: 100px;
            cursor: pointer;
            & img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
<script src='./index.js'></script>