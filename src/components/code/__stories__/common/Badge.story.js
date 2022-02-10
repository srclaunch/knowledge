import React from "react";

import Badge from "../../common/Badge";

export default {
  component: Badge,
  title: "Badge",
};

const Template = (args) => <Badge {...args} />;

export const NumberBadge = Template.bind({});
NumberBadge.args = {
  label: 23,
};

export const StringBadge = Template.bind({});
StringBadge.args = {
  label: "Italian",
};
