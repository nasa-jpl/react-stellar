import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import {
  Modal,
  ModalActionRow,
  ModalClose,
  ModalBody,
  ModalDescription,
} from "components/Modal";
import { Button, Dropdown } from "index";

export default {
  title: "Molecules/Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

const img =
  "data:image/png;base64,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";

export const Controlled = Template.bind({});
Controlled.parameters = { docs: { disable: true } }; // disable docs for this modal since it will always be open and will interfere with doc viewing
Controlled.args = {
  title: "Modal Title",
  open: true,
  onOpenChange: action("open changed"),
  children: (
    <>
      <ModalBody>
        <ModalDescription>
          Somewhere, something incredible is waiting to be known.
        </ModalDescription>
        <img width="100%" src={img} />
      </ModalBody>
      <ModalActionRow>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Begin</Button>
      </ModalActionRow>
    </>
  ),
};

export const WithScrollingContent = Template.bind({});
WithScrollingContent.parameters = { docs: { disable: true } }; // disable docs for this modal since it will always be open and will interfere with doc viewing
WithScrollingContent.args = {
  title: "Modal Title",
  open: true,
  onOpenChange: action("open changed"),
  children: (
    <div style={{ maxHeight: "400px", overflow: "auto" }}>
      <ModalBody>
        <ModalDescription>
          Somewhere, something incredible is waiting to be known.
        </ModalDescription>
        {/* @ts-ignore */}
        <Dropdown
          maxMenuHeight={100}
          onChange={() => {}}
          label="Label"
          labelPosition="top"
          options={[
            { label: "Label 1", value: 1 },
            { label: "Label 2", value: 2 },
            { label: "Label 3", value: 3 },
            { label: "Label 4", value: 4 },
            { label: "Label 5", value: 5 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
            { label: "Label 6", value: 6 },
          ]}
        />
        <br />
        <img width="100%" src={img} />
      </ModalBody>
      <ModalActionRow>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Begin</Button>
      </ModalActionRow>
    </div>
  ),
};

export const ReactJSXExample = () => (
  <div>
    <Modal
      title="Modal Title"
      trigger={
        <Button size="large" onClick={() => {}}>
          Open Modal
        </Button>
      }
    >
      <ModalBody>
        <ModalDescription>
          Somewhere, something incredible is waiting to be known.
        </ModalDescription>
        <img width="100%" src={img} />
      </ModalBody>
      <ModalActionRow>
        <ModalClose asChild>
          <Button variant="secondary">Cancel</Button>
        </ModalClose>
        <Button>Begin</Button>
      </ModalActionRow>
    </Modal>
  </div>
);
