import React, {useState} from "react";
import {
    Icon,
    List,
    ListItem,
    CheckBox,
    Button,
    Layout,
    Text
} from '@ui-kitten/components';

import {Icon as IconNat} from 'react-native-elements'
import {ScrollView} from "react-native";

const data = new Array(16).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});


const ListItemCustom = ({item, index}) => {

    // const [checked, setChecked] = useState();
    // React.useState(true);

    const StarIcon = () => (
        <IconNat
            name='star'
            type='material'
            color='#517fa4'
        />
    );

    const StarBorderIcon = () => (
        <IconNat
            name='star-border'
            type='material'
            color='#00aced'
        />
    );

    const onBtnPress = () => {
        // this.setState({
        //     checked: false
        // });
        console.log('press');
    };

    const renderItemAccessory = (style) => (
        <Button
            style={{
                paddingHorizontal: 0,
            }}
            appearance='ghost'
            onPress={onBtnPress}
            icon={StarIcon}
        />
    );

    return (
        <ListItem
            style={{
                marginVertical: 6
            }}
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessory={renderItemAccessory}
        />
    );
};

const SavedScreen = () => (
    <Layout
        style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
            <List
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingVertical: 6,
                }}
                data={data}
                renderItem={ListItemCustom}
                style={{flex: 1, flexDirection: 'column-reverse'}}
            />
        </ScrollView>
    </Layout>

);

export default SavedScreen;
