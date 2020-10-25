import * as React from "react";
import { FunctionComponent } from "react";
import theme from './theme'
import { extendTheme } from "@chakra-ui/core";
import { ChakraProvider } from "@chakra-ui/core";

const customTheme = extendTheme(theme);
const ZetaProvider: FunctionComponent = ({ children }) => {
	return (
		<ChakraProvider resetCSS={true} theme={customTheme}>
			{children}
		</ChakraProvider>
	);
};
export default ZetaProvider;