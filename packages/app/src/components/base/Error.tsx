import * as React from 'react';

import image from '../../assets/undraw_server_down_s4lk.svg';

import {Box, Flex, FlexItem, H1} from '@bigcommerce/big-design';

interface ErrorProps {
    message: string;
}

export const Error: React.FC<ErrorProps> = (props) => {
    return (
        <Box marginVertical="xxLarge" marginHorizontal="xxxLarge">
            <Flex justifyContent="center" alignItems="center" flexDirection="column">
                <FlexItem marginVertical="xxxLarge">
                    <img width="50%" style={{marginLeft: '25%', marginRight: '25%'}} src={image} />
                </FlexItem>

                <FlexItem marginVertical="xLarge">
                    <H1>{props.message}</H1>
                </FlexItem>
            </Flex>
        </Box>
    );
};
