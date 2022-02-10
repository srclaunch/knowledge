import React from 'react';

import Button from '../../forms/buttons/Button';

export default {
  component: Button,
  title: 'Button',
};

const Template = args => <Button {...args} />;

export const BasicButton = Template.bind({});
BasicButton.args = {
  label: 'Basic button',
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = {
  label: 'Primary button',
  primary: true,
};

export const DisabledButton = Template.bind({});
DisabledButton.args = {
  disabled: true,
  label: 'Disabled button',
};
