import React from 'react';

import ProgressMeter from '../../charts/ProgressMeter';
import { Size } from '../../types/layout/proportions';

export default {
  component: ProgressMeter,
  title: 'ProgressMeter',
};

const Template = args => <ProgressMeter {...args} />;

export const BasicProgressMeter = Template.bind({});
BasicProgressMeter.args = {
  amount: 37,
  color: '143,52,210',
  total: 100,
};

export const LargerProgressMeter = Template.bind({});
LargerProgressMeter.args = {
  amount: 80,
  color: '182, 201, 235',
  size: Size.Larger,
  total: 100,
};
