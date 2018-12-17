export default class Validate {

    /**
     * 验证手机格式
     */
    static tel(value) {
        return this.optional(value) || /^1[34578]\d{9}$/.test(value)
    }
}
