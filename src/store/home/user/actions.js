import * as types from '@/store/mutation-types.js';
import {rankGender} from "@/api/common";

export default {
	changeUserInfo({commit}, info) {
        let userInfo = `this is ${info}`;
		commit(types.SET_USER_INFO, userInfo);
    },
    async getRank({commit}, opts) {
		try {
			const res = await rankGender(opts);
			if (res) {
				commit(types.SET_RANK, res);
			}
		} catch (e) {
			console.log(e)
		}
	},
}
