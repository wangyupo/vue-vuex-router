import axios from 'axios';
import env from '@/config/env';
import store from '@/store';

const MOCKURL = ''; // mock数据地址

/**
 * 自定义Axios实例
 */
const AJAX = axios.create({
    baseURL: env.baseUrl,
    timeout: 30000,
    withCredentials: env.credential
});

// 添加请求拦截器
AJAX.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    let localbase = window.location.host;
    if (config.url.indexOf('api') != -1) {
        config.url = `http://${localbase}/` + config.url;           // 自定义反向代理
    }
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
AJAX.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

// 定义对外Get、Post、File请求
export default {
    get(url, param = {}, headers = {}, notUseBaseURL = false) {
        return AJAX.get(url, {
            params: param,
            headers,
        })
    },
    post(url, param = null, headers = {}, notUseBaseURL = false) {
        return AJAX.post(url, param, {
            headers,
        })
    },
    file(url, param = null, headers = {}, notUseBaseURL = false) {
        return AJAX.post(url, param, {
            headers: Object.assign({
                'Content-Type': 'multipart/form-data'
            }, headers)
        })
    }
}
