import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Multiselect } from "components/Multiselect";
import { State, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";

export default {
  title: "Atoms/Multiselect",
  component: Multiselect,
} as ComponentMeta<typeof Multiselect>;

const options1 = [
  { value: "selected", label: "selected" },
  { value: "inactive", label: "Inactive" },
];

const scStore = new Store({
  selectedValue1: options1[0].value,
});

const Template: ComponentStory<typeof Multiselect> = (args) => (
  <Multiselect {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  options: options1,
  selectedValue: "all",
  onChange: action("changed"),
};

export const Interactive = () => (
  <div>
    <State store={scStore}>
      {(state) => (
        <>
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Multiselect
              selectedValue={state.selectedValue1}
              options={options1}
              onChange={(value) => scStore.set({ selectedValue1: value })}
            />
          </div>
        </>
      )}
    </State>
  </div>
);
