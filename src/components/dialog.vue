<template>
    <div class="dialog-container">
        <div class="dialog-bg" v-if="showDialog" @click="closeDialog">
            <div :class="{'dialog-con': true,'active': closeDialog}" @click="stopPropagation">
                <div v-if="showClose" class="close-dialog">
                    <i class="close-icon" @click="closeDialog"></i>
                </div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        components:{
        },
        model: {
            prop: 'showDialog',
            event: 'dialog-state'
        },
        props: {
            showDialog: false,
            showClose: {
                type: Boolean,
                default: false
            }
        },
        watch: {
            showDialog: function (newVal,oldVal) {
                if(newVal){
                    // document.querySelector('body').style.overflow = 'hidden'
                }
            }
        },
        data() {
            return {
            }
        },
        methods: {
            closeDialog: function () {
                // document.querySelector('body').style.overflow = 'auto'
                this.$emit('dialog-state',false)
            },
            stopPropagation: function (e) {
                e.stopPropagation()
            }
        }
    }
</script>

<style lang="scss" scoped>
    .dialog-container{
        height: 0px;
        .dialog-bg{
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,0.65);
            text-align: center;
            white-space: nowrap;
            font-size: 0;
            z-index: 999;
            .close-dialog{
                position: relative;
                @mixin bafore_after{
                    content: '';
                    position: absolute;
                    background-position: center;
                    background-repeat: no-repeat;
                    width: 26px;
                    height: 26px;
                    background-size: 26px;
                }
                .close-icon{
                    position: absolute;
                    right: 40px;
                    margin-top: 10px;
                    &:hover{
                        cursor: pointer;
                    }
                    &:hover:after{
                        @include bafore_after;
                        background-image: url("~@/assets/img/common/cross_h.png");
                    }
                    &:active:after{
                        @include bafore_after;
                        background-image: url("~@/assets/img/common/cross_a.png");
                    }
                    &:after{
                        @include bafore_after;
                        background-image: url("~@/assets/img/common/cross_n.png");
                    }
                }
            }
            .dialog-con{
                display: inline-block;
                vertical-align: middle;
                background-color: #fff;
                font-size: 14px;
                text-align: left;
                white-space: normal;
                border-radius: 4px;
            }
            &:after{
                content: "";
                display: inline-block;
                height: 100%;
                vertical-align: middle;
            }
            .dialog-title{
                font-size: 20px;
                color: #000000;
                text-align: center;
                margin-top: 20px;
            }
            .dialog-text{
                font-size: 16px;
                color: #9B9B9B;
                text-align: center;
                margin-top: 10px;
            }
        }
    }
</style>
