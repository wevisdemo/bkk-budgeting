import { GetterTree, ActionTree, MutationTree } from "vuex";

interface SelectedVoteDropdownProps {
  district_name?: string;
  project_type?: string;
  project_id?: string;
}

export interface State {
  chartData: any;
  organizeData: any;
  currentImage: number;
  strategyChoice: string;
  chartSelected: string;
  isCookieSet: boolean;
  selectedVoteDropdown: SelectedVoteDropdownProps;
  isModalDetails: any;
  subTitleModal: string;
  selectYearOrganize: object;
  selectYearStrategy: object;
}

export const state = (): State => ({
  chartData: [],
  organizeData: [],
  currentImage: 0,
  strategyChoice: "",
  chartSelected: "",
  isCookieSet: false,
  isModalDetails: [],
  subTitleModal: "ตามแผนยุทธศาสตร์ 7 ด้าน",
  selectedVoteDropdown: {
    district_name: "",
    project_type: "",
    project_id: "",
  },
  selectYearOrganize: { label: "2561-2566", value: "" },
  selectYearStrategy: { label: "2561-2566", value: "" },
});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  currentImage: state => state.currentImage,
};

export const mutations: MutationTree<RootState> = {
  setCookieState: (state, payload) => (state.isCookieSet = payload),
  setCurrentImage: (state, newImage: number) => (state.currentImage = newImage),
  setSelectedVoteDropdown: (state, vote: SelectedVoteDropdownProps) =>
    (state.selectedVoteDropdown = vote),
  setStrategyChoice: (state, newStrategy: string) =>
    (state.strategyChoice = newStrategy),
  setChartSelected: (state, chartSelected: string) =>
    (state.chartSelected = chartSelected),
  setChartData: (state, chartData) => (state.chartData = chartData),
  setOrganizeData: (state, organizeData) => (state.organizeData = organizeData),
  setIsModalDetails: (state, isModalDetails) => (state.isModalDetails = isModalDetails),
  setSubTitleModal: (state, subTitleModal) => (state.subTitleModal = subTitleModal),
  setSelectYearOrganize: (state, selectYearOrganize) =>
    (state.selectYearOrganize = selectYearOrganize),
  setSelectYearStrategy: (state, selectYearStrategy) =>
    (state.selectYearStrategy = selectYearStrategy),
};

export const actions: ActionTree<RootState, RootState> = {
  updateStrategy({ commit, state }, payload) {
    state.strategyChoice === payload
      ? commit("setStrategyChoice", "")
      : commit("setStrategyChoice", payload);
  },
  updateChartSelected({ commit }, payload) {
    commit("setChartSelected", payload);
  },
  updateChartData({ commit }, payload) {
    commit("setChartData", payload);
  },
  updateIsModalDetails({ commit }, payload) {
    commit("setIsModalDetails", payload);
  },
  updateSubTitleModal({ commit }, payload) {
    commit("setSubTitleModal", payload);
  },
  updateOrganizeData({ commit }, payload) {
    commit("setOrganizeData", payload);
  },
  updateSelectYearOrganize({ commit }, payload) {
    commit("setSelectYearOrganize", payload);
  },
  updateSelectYearStrategy({ commit }, payload) {
    commit("setSelectYearStrategy", payload);
  },
};
