import {Divider, Icon, Layout, Menu, Text, TopNavigation, TopNavigationAction} from "@ui-kitten/components";
import {SafeAreaView} from "react-navigation";
import React from "react";

const data = [
    { title: 'Item 1' },
    { title: 'Item 2' },
    { title: 'Item 3' },
    { title: 'Item 4' },
];

export const MenuSimpleUsageShowcase = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(null);

    return (
        <Menu
            data={data}
            selectedIndex={selectedIndex}
            onSelect={setSelectedIndex}
        />
    );
};

const BackIcon = (style) => (
    <Icon {...style} name='arrow-back'/>
);

const SwitchLanguageScreen = ({navigation}) => {

    const navigateBack = () => {
        navigation.goBack();
    };

    const BackAction = () => (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    );

    return (
        <SafeAreaView style={{flex: 1}}>
            <TopNavigation title='MyApp' alignment='center' leftControl={BackAction()}/>
            <Divider/>
            <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Text category='h1'>DETAILS</Text>
            </Layout>
        </SafeAreaView>
    );
};

export default SwitchLanguageScreen;
