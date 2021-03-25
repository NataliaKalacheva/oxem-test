import mutations from "@/store/mutations";

const { TABLE_DATA, SELECTED_VARIANT_VALUE } = mutations;

const tableStore = {
  namespaced: true,
  state: {
    selectedVariantValue: "mini_data",
    tableVariants: {
      mini_data: {
        name: "Mini data",
        value: "mini_data",
        path:
          "?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D",
      },
      big_data: {
        name: "Big data",
        value: "big_data",
        path:
          "?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}",
      },
    },
    tableData: [],
  },
  getters: {
    tableData: ({ tableData }) => tableData,
    tableVariants: ({ tableVariants }) => tableVariants,
    selectedVariant: ({ tableVariants, selectedVariantValue }) =>
      tableVariants[selectedVariantValue],
  },
  mutations: {
    [TABLE_DATA](state, value) {
      state.tableData = value;
    },
    [SELECTED_VARIANT_VALUE](state, value) {
      state.selectedVariantValue = value;
    },
  },
  actions: {
    async fetchTableData({ commit, getters }) {
      try {
        const url = `${process.env.VUE_APP_BASE_API_URL}${getters.selectedVariant.path}`;
        const response = await fetch(url);
        const data = await response.json();
        commit(TABLE_DATA, data);
      } catch (err) {
        throw new Error(err);
      }
    },
    setTableVariant({ commit }, value) {
      commit(SELECTED_VARIANT_VALUE, value);
    },
  },
};

export default tableStore;
