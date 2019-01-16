import ToastComponent from './toast'

const Toast = {};

Toast.install = (Vue) => {
    const ToastConstructor = Vue.extend(ToastComponent);
    const instance = new ToastConstructor();                    // 创建toast子实例
    instance.$mount(document.createElement('div'));             // 挂载实例到我们创建的DOM上
    document.body.appendChild(instance.$el);

    // 添加实例方法，以供全局调用
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
