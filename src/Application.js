import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {
    BottomNavigation,
    BottomNavigationTab
} from '@ui-kitten/components';

import SavedScreen from "./screens/SavedSceen";
import TranslateNavigator from "./screens/TranslateScreen";

const TabBarComponent = ({navigation}) => {

    const onSelect = (index) => {
        const selectedTabRoute = navigation.state.routes[index];
        navigation.navigate(selectedTabRoute.routeName);
    };

    return (
        <SafeAreaView>
            <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
                <BottomNavigationTab title='Translate'/>
                <BottomNavigationTab title='Saved'/>
            </BottomNavigation>
        </SafeAreaView>
    );
};

const TabNavigator = createBottomTabNavigator({
    Translate: TranslateNavigator,
    Saved: SavedScreen,
}, {
    order: ['Saved', 'Translate'],
    tabBarComponent: TabBarComponent,
});

export const AppNavigator = createAppContainer(TabNavigator);
