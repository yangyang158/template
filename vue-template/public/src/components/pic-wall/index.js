import c from './c.vue'
import d from './d.vue'
import bus from './bus'

export default {
    name: 'PicsWall',
    props: {
        picsList: {
            type: Array,
            default: () => [{}]
        }
    },
    data(){
        return {
            showUrl: '',
            index: 0,
            isPreview: false
        }
    },
    components: {
        c,
        d
    },
    methods: {
        toPre() {
            if (this.index === 0) return
            this.index --
            console.log('获取父组件的属性和方法', this.$parent)
        },
        toNext() {
            // try {
            //     new Date1()
            // } catch (error) {
            //     console.log('错去', error)
            // } finally {
            //     console.log(222)
            //     console.log(333)
            // }
            // if (Math.random() * 10 > 6) {
            //     console.log('大于6')
            // } else {
            //     throw true
            // }
            if (this.index === this.picsList.length - 1) return
            this.index ++ 
        },
        goPreview(index) {
            this.index = index
            this.isPreview = true
        },
        getDData(params) {
            console.log('****', params)
        }
    },
    watch: {
        index(val) {
            this.showUrl = this.picsList[val].url
            console.log('江亭')
            this.$emit('renderCallback', this.showUrl)
        }
    },
    beforeCreated() {
        console.log('创建组件实例之前', this.$el, this.data)
    },
    created() {
        console.log('创建组件实例', this.$el, this.data)
    },
    beforeMounted() {
        console.log('组件挂载到页面之前', this.$el, this.data)
    },
    mounted() {
        console.log('组件挂载到页面', this.$el, this.data)
        this.showUrl = this.picsList[this.index].url

    },
    beforeUpdated() {
        console.log('组件更新之前', this.data)
    },
    updated() {
        console.log('组件更新', this.data)
    },
    beforeDestoryed() {
        console.log('组件销毁之前', this.data)
    },
    destoryed() {
        console.log('组件销毁', this.data)
    },
    activated() {
        console.log('组件被激活时调用', this.props)
    },
    deactivated() {
        console.log('组件被移除时调用', this.props)
    }
}