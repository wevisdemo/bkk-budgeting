import { GetterTree, ActionTree, MutationTree } from "vuex";

export interface State {
  currentImage: number;
}

export const state = (): State => ({
  currentImage: 0,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentImage: state => state.currentImage,
};

export const mutations: MutationTree<RootState> = {
  setCurrentImage: (state, newImage: number) => (state.currentImage = newImage),
};

export const actions: ActionTree<RootState, RootState> = {};
