import dayjs from 'dayjs';

/**
 * 格式化时间戳（秒|毫秒）
 * @param {timestamp} value
 */
const timeFilter = (value) => {
    value = value.toString();
    if (value) {
        if (value.length === 13) {
            return dayjs(Number(value)).format("YYYY-MM-DD HH:mm:ss");
        }
        return dayjs.unix(Number(value)).format("YYYY-MM-DD HH:mm:ss");
    } else {
        return '-';
    }
}

/**
 * 手机号格式化
 * @param {String} phone
 */
const formatPhone = (phone) => {
    phone = phone.toString();
    return phone.substr(0, 3) + '****' + phone.substr(7, 11);
};

/**
 * 4位一空格（格式化银行卡）
 * @param {String} val
 */
const formatBank = (val) => {
    if (val) {
        return val.toString().replace(/\s/g, '').replace(/(.{4})/g, "$1 ");
    }
};

/**
 * 千分位格式化
 * @param {数字} val
 */
const toThousands = (val) => {
    let num = (val || 0).toString(),
        result = '';
    while (num.length > 3) {
        result = ',' + num.slice(-3) + result;
        num = num.slice(0, num.length - 3);
    }
    if (num) {
        result = num + result;
    }
    return result;
}

export default {
    timeFilter,
    formatPhone,
    formatBank,
    toThousands
}
