import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    results: []
  },
  mutations: {
    setResults(state, data) {
      state.results = data
    }
  },
  actions: {
    getMusicByArtist({ commit }, artist) {
      var url = 'https://itunes.apple.com/search?callback=?&term=' + artist;
      $.getJSON(url)
        .then(res => {
          commit('setResults', res.results)
        })
        .catch(err => console.log(err))
    }
  }
})
