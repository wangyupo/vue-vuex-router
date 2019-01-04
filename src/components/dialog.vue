<template>
    <!-- 全部动画 -->
    <!--<transition-->
        <!--enter-active-class="animated bounceIn"-->
        <!--leave-active-class="animated bounceOut">-->
        <!--<div class="m-dialog" v-if="visible">-->
            <!--<div :class="['m-dialog-container', visible === true?'animated bounceIn':'animated bounceOut']">-->
                <!--<slot></slot>-->
            <!--</div>-->
        <!--</div>-->
    <!--</transition>-->
    <!-- 只有弹出框动画 -->
    <div class="m-dialog" v-if="visible">
        <div :class="['m-dialog-container', visible === true?'animated bounceIn':'animated bounceOut']">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import animate from 'animate.css';

    export default {
        name: "dialog2",
        props: {
            isVisible: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                visible: false
            }
        },
        watch: {
            isVisible(val) {
                this.visible = this.isVisible;
            }
        },
        created() {
            document.addEventListener('click',(e) => {
                if (e.target.className === 'm-dialog') this.closeDialog();
            })
        },
        methods: {
            closeDialog() {
                this.$emit('close');
            }
        }
    }
</script>

<style scoped lang="scss">
    .m-dialog {
        @include modalbg();
        display: flex;
        justify-content: center;
        align-items: center;
        &-container {
            //@include ct();        /* 在只有弹出框动画的情况下，使用animate.css，会导致dialog定位出现偏移，所以需要flex布局来实现上下垂直居中 */
            z-index: 1;
            min-width: 300px;
            min-height: 180px;
            background-color: #fff;
        }
    }
</style>
