import React, {  ReactElement } from "react";
import { Button } from "@chakra-ui/core";

const Buttons = ({
  variantColor,
  children,
  ...rest
}: {
  variantColor: string;
  children: string;
}): ReactElement => {
return (<Button colorScheme={variantColor}>{children}</Button>)
};

export default Buttons;
