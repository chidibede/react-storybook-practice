// import { ButtonProps } from '@chakra-ui/core'
/* eslint-disable import/no-anonymous-default-export */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";
import Buttons from "./Buttons";
import { Story } from "@storybook/react/types-6-0";

export default {
  title: "Forms/Buttons",
  component: Buttons,
};

// export const Primary = () => <Buttons variant='blue'>Chakra</Buttons>
// export const Success = () => <Buttons variant='green'>Chakra</Buttons>
// export const Secondary = () => <Buttons variant='gray'>Chakra</Buttons>
// export const Danger = () => <Buttons variant='red'>Chakra</Buttons>

const Template: Story<any> = (args) => <Buttons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  variantColor: "blue",
  children: "Login",
};
export const Danger = Template.bind({});

Danger.args = {
  variantColor: "red",
  children: "Login",
};
export const Success = Template.bind({});

Success.args = {
  variantColor: "green",
  children: "Login",
};
