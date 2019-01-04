<template>
    <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut">
        <div class="m-dialog" v-if="visible">
            <div class="m-dialog-container">
                <slot></slot>
            </div>
        </div>
    </transition>
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
        &-container {
            @include ct();
            z-index: 1;
            min-width: 300px;
            min-height: 180px;
            background-color: #fff;
        }
    }
</style>
