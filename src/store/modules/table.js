import mutations from "@/store/mutations";

const { TABLE_DATA, CURRENT_PAGE } = mutations;

const tableStore = {
  namespaced: true,
  state: {
    tableData: [],
    perPage: 50,
    curPage: 1,
  },
  getters: {
    tableData: ({ tableData }) => tableData,
    curPage: ({ curPage }) => curPage,
    perPage: ({ perPage }) => perPage,
  },
  mutations: {
    [TABLE_DATA](state, value) {
      state.tableData = value;
    },
    [CURRENT_PAGE](state, value) {
      state.curPage = value;
    },
  },
  actions: {
    async fetchTableData({ commit }) {
      try {
        const response = await fetch(
          "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D"
        );
        const data = await response.json();
        commit(TABLE_DATA, data);
      } catch (err) {
        console.log(err);
      }
    },
    changeCurrentPage({ commit }, page) {
      commit(CURRENT_PAGE, page);
    },
  },
};

export default tableStore;
