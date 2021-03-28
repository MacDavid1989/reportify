import Vue from 'vue';
import Vuex from 'vuex';

import breakdownReport from './modules/breakdownReport';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        breakdownReport
    }
});