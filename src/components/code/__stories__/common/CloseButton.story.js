import React from "react";

import CloseButton from "../../common/CloseButton";

export default {
  component: CloseButton,
  title: "CloseButton",
};

const Template = (args) => <CloseButton {...args} />;

export const BasicCloseButton = Template.bind({});
BasicCloseButton.args = {};
