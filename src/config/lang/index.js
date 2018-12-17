import Vue from 'vue';
import VueI18n from 'vue-i18n';
import messages from './messages';
import {
    getUrlParam,
    getStore
} from '@/common/util';

Vue.use(VueI18n);
/**
 * 从localStorage中拿到用户的语言选择，如果没有，那默认中文。
 * @type {VueI18n}
 */
const browserLang = navigator.language || navigator.browserLanguage;

const i18n = new VueI18n({
    // locale: getStore("iotc_lang") || browserLang || 'zh-CN',
    locale: 'zh-CN',
    messages
});

export default i18n;
