import Vuex from "vuex";
import Vue from "vue";
import Result from "./modules/Result";
import Value from "./modules/Value";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    Result,
    Value
  }
});
