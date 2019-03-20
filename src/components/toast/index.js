/**
 * Vue插件
 * 参考链接：
 * https://cn.vuejs.org/v2/api/#Vue-extend
 * https://cn.vuejs.org/v2/api/#vm-mount
 */

import ToastComponent from './Toast'

const Toast = {};

Toast.install = (Vue) => {
    // 第一步：使用基础 Vue 构造器，创建一个“子类”
    const ToastConstructor = Vue.extend(ToastComponent);
    // 第二步：创造一个组件实例
    const instance = new ToastConstructor();
    // 第三步：将实例挂在到div上
    instance.$mount(document.createElement('div'));
    // 第四步：在body添加组件
    document.body.appendChild(instance.$el);

    // 第五步：添加实例方法，以供全局调用
    Vue.prototype.$toast = (msg, type, duration = 2000) => {
        instance.message = msg;
        instance.type = type;
        instance.show = true;
        setTimeout(() => {
            instance.show = false;
        }, duration)
    }
};

export default Toast;
