import * as types from '@/store/mutation-types.js';

export default {
    [types.SET_USER_INFO](state, userInfo) {
        state.userInfo = userInfo;
    },
}
