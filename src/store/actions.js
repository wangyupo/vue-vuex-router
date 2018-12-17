import * as types from '@/store/mutation-types.js';
// import {userInfo} from "@/api/common";

export default {
	changeUserInfo({commit}, info) {
        let userInfo = `this is ${info}`;
		commit(types.SET_USER_INFO, userInfo);
    },
}
