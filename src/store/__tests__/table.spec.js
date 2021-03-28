import tableStore from "@/store/modules/table";
import tableVariants from "@/constants/tableVariants";
import mockTableData from "@/store/__mocks__/table";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockTableData),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("test table getters", () => {
  const { tableData, selectedVariant, isTableLoading } = tableStore.getters;
  let store;

  beforeEach(() => {
    store = {
      tableData: mockTableData,
      selectedVariant: tableVariants.mini_data,
      isTableLoading: false,
    };
  });

  it("table data", () => {
    expect(tableData(store)).toBeDefined();
    expect(tableData(store)).toEqual(mockTableData);
  });

  it("selected variant", () => {
    expect(selectedVariant(store)).toBeDefined();
    expect(selectedVariant(store)).toEqual(tableVariants.mini_data);
  });

  it("isTableLoading", () => {
    expect(isTableLoading(store)).toBeDefined();
    expect(isTableLoading(store)).toEqual(false);
  });
});

describe("test table mutations", () => {
  const {
    TABLE_DATA,
    SELECTED_VARIANT_VALUE,
    TOGGLE_TABLE_LOADER,
    ADD_ROW,
  } = tableStore.mutations;

  it("TABLE_DATA", () => {
    const state = { tableData: [] };
    TABLE_DATA(state, mockTableData);
    expect(state.tableData).toEqual(mockTableData);
  });

  it("SELECTED_VARIANT_VALUE", () => {
    const state = { selectedVariant: {} };
    SELECTED_VARIANT_VALUE(state, tableVariants.mini_data);
    expect(state.selectedVariant).toEqual(tableVariants.mini_data);
  });

  it("TOGGLE_TABLE_LOADER", () => {
    const state = { isTableLoading: false };
    TOGGLE_TABLE_LOADER(state, true);
    expect(state.isTableLoading).toEqual(true);
  });

  it("ADD_ROW", () => {
    const state = { tableData: mockTableData };
    const newRow = {
      id: 13,
      firstName: "Test",
      lastName: "Test",
      email: "Test@in.gov",
      phone: "(112)111-2296",
      address: {
        streetAddress: "9792 Mattis Ct",
        city: "Waukesha",
        state: "WI",
        zip: "22178",
      },
      description: "et lacus magna dolor...",
    };
    const expectedData = [...mockTableData, { ...newRow }];
    ADD_ROW(state, newRow);
    expect(state.tableData).toEqual(expectedData);
  });
});

describe("test table actions", () => {
  const { fetchTableData } = tableStore.actions;
  const table = mockTableData;
  let store;
  let context;

  beforeEach(() => {
    store = {
      tableData: mockTableData,
      selectedVariant: tableVariants.mini_data,
      isTableLoading: false,
    };
    context = {
      commit: jest.fn(),
      getters: tableStore.getters,
      dispatch: jest.fn(),
    };
  });

  it("fetchTableData exist", async () => {
    expect(fetchTableData).toBeDefined();
  });

  it("fetchTableData action commits table_data mutation", async () => {
    await fetchTableData(context);
    expect(context.commit).toBeCalled();
    expect(context.commit).toBeCalledTimes(1);
    expect(context.commit).toHaveBeenCalledWith("TABLE_DATA", table);
  });
});
