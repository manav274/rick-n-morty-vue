import Vue from 'vue'
import Vuex from 'vuex'

import filterOptions from './filterOptions';

import * as actions from './actions/actions'
import * as mutations from './mutations/mutations'
import * as getters from './getters/getters'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        filters: filterOptions,
        selectedFilters: [],
        url: "https://rickandmortyapi.com/api/character/?",
        characters: [],
        filteredCharacters: []
    },
    mutations,
    actions,
    getters
})
