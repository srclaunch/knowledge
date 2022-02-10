import React from "react";

import MoreMenu from "../../common/MoreMenu";

export default {
  component: MoreMenu,
  title: "MoreMenu",
};

const Template = (args) => <MoreMenu {...args} />;

export const BasicMoreMenu = Template.bind({});
BasicMoreMenu.args = {
  items: [
    {
      label: "Hello",
    },
    {
      label: "World",
    },
    {
      label: "Goodbye",
      labelColor: "223, 82, 85",
    },
  ],
};
