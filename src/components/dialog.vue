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
    <!--:class="['dialog', visible === true?'animated bounceIn':'animated bounceOut']"-->
    <!-- 只有弹出框动画 -->
    <div class="m-dialog">
        <transition
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
        >
            <div class="m-dialog-mask" v-if="showMask" v-show="visible"></div>
        </transition>
        <transition
            enter-active-class="animated bounceIn"
            leave-active-class="animated bounceOut"
        >
            <div class="m-dialog-wrap" v-show="visible">
                <div :class="['dialog']">
                    <slot></slot>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import animate from 'animate.css';

    export default {
        name: "dialog",
        props: {
            isVisible: {
                type: Boolean,
                default: false
            },
            showMask: {
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
                if (e.target.className === 'm-dialog-wrap') this.closeDialog();
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
        &-mask {
            @include modalbg();
            z-index: 1999;
        }
        &-wrap {
            position: fixed;
            overflow: auto;
            z-index: 1999;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            outline: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            .dialog {
                //@include ct();
                z-index: 2000;
                min-width: 300px;
                min-height: 180px;
                background-color: #fff;
            }
        }
    }
</style>
