import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {
    BottomNavigation,
    BottomNavigationTab, Text
} from '@ui-kitten/components';

import SavedScreen from "./screens/SavedSceen";
import TranslateNavigator from "./screens/TranslateScreen";
import {Icon as IconNat} from "react-native-elements";

const TabBarComponent = ({navigation}) => {

    const onSelect = (index) => {
        const selectedTabRoute = navigation.state.routes[index];
        navigation.navigate(selectedTabRoute.routeName);
    };

    const StarIcon = () => (
        <IconNat
            name='star'
            type='material'
            color='#517fa4'
        />
    );

    const LanguageIcon = () => (
        <IconNat
            name='language'
            type='material'
            color='#517fa4'
        />
    );

    return (
        <SafeAreaView>
            <BottomNavigation selectedIndex={navigation.state.index} onSelect={onSelect}>
                <BottomNavigationTab title='Translate' icon={LanguageIcon}/>
                <BottomNavigationTab title='Saved' icon={StarIcon}/>
            </BottomNavigation>
        </SafeAreaView>
    );
};

const TabNavigator = createBottomTabNavigator({
    Translate: TranslateNavigator,
    Saved: SavedScreen,
}, {
    // order: ['Saved', 'Translate'],
    tabBarComponent: TabBarComponent,
});

export const AppNavigator = createAppContainer(TabNavigator);



