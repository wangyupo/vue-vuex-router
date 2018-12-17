import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const state = {
    userInfo: '123',
    rank: {},
}

export default {
	namespaced: true,
	state,
	actions,
    mutations,
    getters,
};
