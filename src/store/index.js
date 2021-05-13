import { createStore } from 'vuex'

export default createStore({
    state: {
        // Banda a pesquisar
        band: "",
        searched: false

    },
    mutations: {
        setBand(state, payload) {
            state.band = payload
        },
        isSearched(state) {
            state.searched = true;
        }
    },
    getters: {
        getBand: (state) => state.searchBand
    },
    actions: {
    },
    modules: {
    }
})
