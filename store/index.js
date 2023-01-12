import Vue from "vue";
import Vuex from "vuex";
import getUserInfo from "../src/services/UserService";
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    profile: null,
    logout: null,
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setLogout(state, logout) {
      state.logout = { dt: new Date(), logout: logout };
    },
  },
  actions: {
    async updateProfile({ commit }) {
      const profile = await getUserInfo();
      console.log(profile);
      commit("setProfile", profile);
    },
    logout({ commit }) {
      localStorage.setItem("auth._token.local", false);
      commit("setLogout", "logout");
    },
  },
});
export default store;
