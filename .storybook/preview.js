import React from "react";
import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/core"

addDecorator((storyFn) => <ChakraProvider>{storyFn()}</ChakraProvider>);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};
