import { GetterTree, ActionTree, MutationTree } from "vuex";

export interface State {
  currentImage: number;
  strategyChoice: string;
  subStrategyChoice: string;
  isCookieSet: boolean;
}

export const state = (): State => ({
  currentImage: 0,
  strategyChoice: "",
  subStrategyChoice: "",
  isCookieSet: false,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentImage: state => state.currentImage,
};

export const mutations: MutationTree<RootState> = {
  setCookieState: (state, payload) => (state.isCookieSet = payload),
  setCurrentImage: (state, newImage: number) => (state.currentImage = newImage),
  setStrategyChoice: (state, newStrategy: string) =>
    (state.strategyChoice = newStrategy),
  setSubStrategyChoice: (state, newSubStrategy: string) =>
    (state.subStrategyChoice = newSubStrategy),
};

export const actions: ActionTree<RootState, RootState> = {
  updateStrategy({ commit, state }, payload) {
    state.strategyChoice === payload
      ? commit("setStrategyChoice", "")
      : commit("setStrategyChoice", payload);

    commit("setSubStrategyChoice", "");
  },
  updateSubStrategy({ commit, state }, payload) {
    state.subStrategyChoice === payload
      ? commit("setSubStrategyChoice", "")
      : commit("setSubStrategyChoice", payload);
  },
};
