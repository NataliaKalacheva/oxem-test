import { mount, createLocalVue } from "@vue/test-utils";
import TableForm from "@/components/Table/TableForm.vue";
import UiInput from "@/components/Ui/UiInput.vue";
import Vuex from "vuex";
import sinon from "sinon";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("Table Form", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(TableForm);
  });

  it("renders the correct markup", () => {
    const tableForm = wrapper.find("form");
    const uiInput = wrapper.findComponent(UiInput);
    const loginSubmit = wrapper.find('input[type="submit"]');
    expect(tableForm.exists()).toBe(true);
    expect(uiInput.exists()).toBe(true);
    expect(loginSubmit.exists()).toBe(true);
  });

  it("Submit disabled when blanked form", () => {
    wrapper.setData({
      formData: {
        id: null,
        firstName: null,
        lastName: null,
        email: null,
        phone: null,
      },
    });
    const submitBtn = wrapper.find("input[type='submit']");
    expect(submitBtn.is("[disabled]")).toBe(true);
  });

  it("Form submit trigger onSubmitForm method", () => {
    const onSubmitFormStub = sinon.stub();

    wrapper.setData({
      formData: {
        id: 123,
        firstName: "Test",
        lastName: "Test",
        email: "test@test.com",
        phone: "(123)123-3333",
      },
    });
    wrapper.setMethods({ onSubmitForm: onSubmitFormStub });
    const form = wrapper.find("form");
    form.trigger("submit");
    expect(onSubmitFormStub.called).toBe(true);
  });
});
