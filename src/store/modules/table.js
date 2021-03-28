import mutations from "@/store/mutations";
import tableVariants from "@/constants/tableVariants";

const {
  TABLE_DATA,
  SELECTED_VARIANT_VALUE,
  TOGGLE_TABLE_LOADER,
  ADD_ROW,
} = mutations;

const tableStore = {
  namespaced: true,
  state: {
    isTableLoading: false,
    selectedVariant: tableVariants.mini_data,
    tableData: [],
  },
  getters: {
    tableData: ({ tableData }) => tableData,
    selectedVariant: ({ selectedVariant }) => selectedVariant,
    isTableLoading: ({ isTableLoading }) => isTableLoading,
  },
  mutations: {
    [TABLE_DATA](state, value) {
      state.tableData = value;
    },
    [SELECTED_VARIANT_VALUE](state, value) {
      state.selectedVariant = value;
    },
    [TOGGLE_TABLE_LOADER](state, value) {
      state.isTableLoading = value;
    },
    [ADD_ROW](state, item) {
      state.tableData.push(item);
    },
  },
  actions: {
    async fetchTableData({ commit, getters, dispatch }) {
      try {
        dispatch("toggleTableLoader", true);
        const url = `${process.env.VUE_APP_BASE_API_URL}${getters.selectedVariant.path}`;
        const response = await fetch(url);
        const data = await response.json();
        commit(TABLE_DATA, data);
      } catch (err) {
        throw new Error(err);
      } finally {
        dispatch("toggleTableLoader", false);
      }
    },
    setTableVariant({ commit }, value) {
      commit(SELECTED_VARIANT_VALUE, tableVariants[value]);
    },
    toggleTableLoader({ commit }, value) {
      commit(TOGGLE_TABLE_LOADER, value);
    },
    addNewItem({ commit }, item) {
      commit("ADD_ROW", item);
    },
  },
};

export default tableStore;
