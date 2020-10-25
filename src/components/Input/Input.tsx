import React, {  ReactElement } from "react";
import { Input } from "@chakra-ui/core";

const Inputs = ({
  variantSize,
  children,
  ...rest
}: {
  variantSize: string;
  children: string;
}): ReactElement => {
return (<Input size={variantSize} placeholder={children}/>)
};

export default Inputs;
