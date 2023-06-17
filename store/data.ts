import { GetterTree, ActionTree, MutationTree } from "vuex";
import { BudgetRow, fetchDataSource } from "~/data/fetch-data-source";
import { Filters, getBudgetItems } from "~/data/get-budget-items";
import { getChartData, getChartDataGroupByOrganizations } from "~/data/get-chart-data";

/* This data store is a wrapper to Node.js-based data layer functions. */

export interface DataState {
  budgetRows?: BudgetRow[];
}

export const state = (): DataState => ({
  budgetRows: undefined,
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  getBudgetItems: state => (filters?: Filters) => {
    return getBudgetItems(state.budgetRows!, filters);
  },

  getChartData: state => () => {
    return getChartData(state.budgetRows!);
  },

  getChartDataGroupByOrganizations: state => (year: number) => {
    return getChartDataGroupByOrganizations(state.budgetRows!, year);
  },
};

export const mutations: MutationTree<RootState> = {
  setBudgetRows: (state, payload) => (state.budgetRows = payload),
};

export const actions: ActionTree<RootState, RootState> = {
  async nuxtServerInit({ commit }) {
    const budgetRows = await fetchDataSource();
    await commit("setBudgetRows", budgetRows);
  },
};
