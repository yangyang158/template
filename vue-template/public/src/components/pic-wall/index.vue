<template>
    <div class="pic-wall">
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
            @click="toNext"
        >
            <i class="el-icon-arrow-right" />
        </div>
    </div>
</template>
<style lang='less' scope>
.pic-wall {
    & .arrow {
        display: inline-block;
        font-size: 32px;
        cursor: pointer;
    }
    & img {
        vertical-align: middle;
    }
}
</style>
<script src='./index.js'></script>