import React from 'react';

import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {mapping, dark as darkTheme} from '@eva-design/eva';

import { default as appTheme } from './custom-theme.json';

import { AppNavigator } from './src/Application';

const theme = { ...darkTheme, ...appTheme };

export default function App() {
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider mapping={mapping} theme={theme}>
                <AppNavigator/>
            </ApplicationProvider>
        </React.Fragment>
    );
}
