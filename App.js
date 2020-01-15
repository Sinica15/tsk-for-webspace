import React from 'react';
import {Provider} from 'react-redux';
import store from './src/store';

import {ApplicationProvider, IconRegistry, Text} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {mapping, dark as darkTheme, light as defaultTheme} from '@eva-design/eva';

import { default as appTheme } from './custom-theme.json';

import { AppNavigator } from './src/Application';

// const theme = { ...darkTheme, ...appTheme };
const theme = { ...defaultTheme };

export default function App() {
    return (
        <React.Fragment>
            <IconRegistry icons={EvaIconsPack}/>
            <ApplicationProvider mapping={mapping} theme={theme}>
                <Provider store={store}>
                    <AppNavigator/>
                </Provider>
            </ApplicationProvider>
        </React.Fragment>
    );
}
