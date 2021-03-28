import advocates from '../../data/advocates.json';
import friends from '../../data/friends.json';

const state = {
    currentClients: []
};

const getters = {
    getClients: (state) => state.currentClients
};

const actions = {
    fetchAdvocates: ({ commit }) => commit('setAdvocates', advocates),
    fetchFriends: ({ commit }) => commit('setFriends', friends)
};

const mutations = {
    setAdvocates: (state, advocates) => (state.currentClients = advocates),
    setFriends: (state, friends) => (state.currentClients = friends),
};

export default {
    state,
    getters,
    actions,
    mutations
};