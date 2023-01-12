import Vue from "vue";
import Vuex from "vuex";
import getUserInfo from "../src/services/UserService";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    profile: null,
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
  },
  actions: {
    updateProfile({ commit }) {
      const profile = getUserInfo();
      commit("setProfile", profile);
    },
    logout({ commit }) {
      localStorage.setItem("auth._token.local", false);
      const profile = getUserInfo();
      commit("setProfile", profile);
    },
  },
});
export default store;
