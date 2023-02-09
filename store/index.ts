import { GetterTree, ActionTree, MutationTree, Store } from "vuex";

export interface S {
  currentImage: number;
}

export const state = (): S => ({
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

declare module "vuex" {
  // Declare your own store states.

  interface StoreOptions<S> {
    $store: Store<S>;
  }
}
