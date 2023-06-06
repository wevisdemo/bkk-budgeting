import { GetterTree, ActionTree, MutationTree } from "vuex";

interface SelectedVoteDropdownProps {
  district_name?: string;
  project_type?: string;
  project_id?: string;
}

export interface State {
  chartData: any;
  currentImage: number;
  strategyChoice: string;
  chartSelected: string;
  isCookieSet: boolean;
  isMillion: boolean;
  selectedVoteDropdown: SelectedVoteDropdownProps;
  isModalDetails: any;
  subTitleModal: string;
}

export const state = (): State => ({
  chartData: [],
  currentImage: 0,
  strategyChoice: "",
  chartSelected: "",
  isCookieSet: false,
  isMillion: true,
  isModalDetails: [],
  subTitleModal: "ตามแผนยุทธศาสตร์ 7 ด้าน",
  selectedVoteDropdown: {
    district_name: "",
    project_type: "",
    project_id: "",
  },
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
  setIsMillion: (state, isMillion) => (state.isMillion = isMillion),
  setIsModalDetails: (state, isModalDetails) => (state.isModalDetails = isModalDetails),
  setSubTitleModal: (state, subTitleModal) => (state.subTitleModal = subTitleModal),
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
  updateIsMillion({ commit }, payload) {
    commit("setIsMillion", payload);
  },
  updateIsModalDetails({ commit }, payload) {
    commit("setIsModalDetails", payload);
  },
  updateSubTitleModal({ commit }, payload) {
    commit("setSubTitleModal", payload);
  },
};
