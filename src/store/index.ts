import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface UserREP {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: URL;
}

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, data: UserREP) {
      state.user = data;
    },
  },
  actions: {},
  modules: {},
});
