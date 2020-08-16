import * as React from "react";

import { Box, Flex,FlexItem, ProgressCircle } from "@bigcommerce/big-design";

export interface LoaderProps {
  height?: string;
}

export const Loader: React.FC<LoaderProps> = props => {
  return (
    <Box marginVertical="xxLarge" marginHorizontal="xxxLarge">
      <Flex
        style={{ height: props.height }}
        justifyContent="center"
        alignItems="center"
      >
        <FlexItem>
          <ProgressCircle size="large" />
        </FlexItem>
      </Flex>
    </Box>
  );
};
