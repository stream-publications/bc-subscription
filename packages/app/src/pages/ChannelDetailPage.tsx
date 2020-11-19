import * as React from 'react';

import {RouteComponentProps} from 'react-router-dom';

import {Box} from '@bigcommerce/big-design';

export type ChannelDetailPageProps = RouteComponentProps;

export const ChannelDetailPage: React.FC<ChannelDetailPageProps> = () => {
    return (
        <Box marginVertical="xxLarge" marginHorizontal="xxxLarge">
            HI
        </Box>
    );
};
