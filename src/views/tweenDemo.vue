<template>
    <span class="tweened-number">{{ tweeningValue }}</span>
</template>

<script>
    import TWEEN from 'tween.js';

    export default {
        props: {
            // The value that we'll be tweening to.
            value: {
                type: Number,
                required: true
            },

            // How long the tween should take. (In milliseconds.)
            tweenDuration: {
                type: Number,
                default: 500
            }
        },

        watch: {
            // Whenever `props.value` changes, update the tween.
            value(newVal, oldVal) {
                this.tween(oldVal, newVal)
            }
        },

        // This holds the temporary state of the tweened value.
        data() {
            return {
                tweeningValue: 0
            }
        },

        mounted() {
            this.tween(0, this.value)
        },

        methods: {
            // This is our main logic block. It handles tweening from a start value to an end value.
            tween(start, end) {
                let frameHandler

                // Handles updating the tween on each frame.
                const animate = function (currentTime) {
                    TWEEN.update(currentTime)
                    frameHandler = requestAnimationFrame(animate)
                }

                const myTween = new TWEEN.Tween({tweeningValue: start})
                    .to({tweeningValue: end}, this.tweenDuration)
                    // Be careful to not to do too much here! It will slow down the app.
                    .onUpdate(() => {
                        this.tweeningValue = myTween.tweeningValue
                    })
                    .onComplete(() => {
                        // Make sure to clean up after ourselves.
                        cancelAnimationFrame(frameHandler)
                    })
                    // This actually starts the tween.
                    .start()

                frameHandler = requestAnimationFrame(animate)
            }
        }
    }
</script>
