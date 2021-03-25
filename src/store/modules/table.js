import mutations from "@/store/mutations";

const { TABLE_DATA } = mutations;

const tableStore = {
  namespaced: true,
  state: {
    tableData: [],
  },
  getters: {
    tableData: ({ tableData }) => tableData,
  },
  mutations: {
    [TABLE_DATA](state, value) {
      state.tableData = value;
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
  },
};

export default tableStore;
