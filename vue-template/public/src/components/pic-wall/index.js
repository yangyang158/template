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
            index: 0
        }
    },
    methods: {
        toPre() {
            if (this.index === 0) return
            this.index --
        },
        toNext() {
            if (this.index === this.picsList.length - 1) return
            this.index ++ 
        }
    },
    watch: {
        index(val) {
            console.log('监听index', val)
            this.showUrl = this.picsList[val].url
        }
    },
    beforeCreated() {
        console.log('创建组件之前')
    },
    created() {
        console.log('创建组件', this.props)
    },
    beforeMounted() {
        console.log('组件挂载到页面之前')
    },
    mounted() {
        console.log('组件挂载到页面', this.picsList, this)
        this.showUrl = this.picsList[this.index].url
    },
    updated() {
        console.log('组件更新', this.props)
    }
}