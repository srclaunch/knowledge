import React from 'react';

import RadialGauge from '../../charts/RadialGauge';

export default {
  component: RadialGauge,
  title: 'RadialGauge',
};

const Template = args => <RadialGauge {...args} />;

export const SimpleRadialGauge = Template.bind({});
SimpleRadialGauge.args = {
  color: '143,52,210',
  size: 120,
  value: 80,
};
