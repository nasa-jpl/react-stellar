import { Label } from 'components/Label';

import { ComponentMeta } from '@storybook/react';

export default {
  title: "Atoms/Label",
  component: Label,
} as ComponentMeta<typeof Label>;

export const StringLabel = () => <Label>Name</Label>;

export const RequiredLabel = () => <Label required={true}>Required Name</Label>;
