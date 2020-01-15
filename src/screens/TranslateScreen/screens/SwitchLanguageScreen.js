import {Divider, Icon, Input, Layout, Menu, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
// import {SafeAreaView} from "react-navigation";
import SafeAreaView from "react-native-safe-area-view";
import React from "react";

const data = [
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
    {title: 'Item 1'},
    {title: 'Item 2'},
    {title: 'Item 3'},
    {title: 'Item 4'},
];

// const data = new Array(10).fill({
//     title: 'Language',
// });

const LanguageList = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    return (
        <Menu
            style={{
                paddingHorizontal: 16,
                paddingVertical: 6,
            }}
            data={data}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
        />
    );
};

const SearchInput = () => {

    const [value, setValue] = React.useState('');

    return (
        <Input
            style={{
                paddingHorizontal: 16,
                paddingVertical: 6,
            }}
            placeholder='Search'
            value={value}
            onChangeText={setValue}
        />
    );
};

const BackIcon = (style) => (
    <Icon {...style} name='arrow-back' fill='#777777'/>
);

const SwitchLanguageScreen = ({navigation}) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title='Translate from' alignment='center' leftControl={BackAction()}/>
            <Divider/>
            <Layout style={{flex: 1, justifyContent: 'center'}}>
                <LanguageList/>
                <SearchInput/>
            </Layout>
        </SafeAreaView>
    );
};

export default SwitchLanguageScreen;
