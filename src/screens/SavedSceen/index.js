import {Layout, Text} from "@ui-kitten/components";
import Checkbox from 'react-native-modest-checkbox'
import React from "react";
import {
    Icon,
    List,
    ListItem,
    CheckBox,
    Button
} from '@ui-kitten/components';

import {Icon as IconNat} from 'react-native-elements'

const data = new Array(8).fill({
    title: 'Title for Item',
    description: 'Description for Item',
});

const ListItemCustom = ({item, index}) => {

    // const [checked, setChecked] = React.useState(true);
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
            style={style}
            appearance='ghost'
            onPress={onBtnPress}
            icon={StarIcon}
        />
    );

    return (
        <ListItem
            title={`${item.title} ${index + 1}`}
            description={`${item.description} ${index + 1}`}
            accessory={renderItemAccessory}
        />
    );
};

const ListCompositeItemShowcase = () => {
    return (
        <List
            data={data}
            renderItem={ListItemCustom}
        />
    );
};

const SavedScreen = () => (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {/*<ListCompositeItemShowcase/>*/}
        <ListCompositeItemShowcase/>
    </Layout>
);

export default SavedScreen;
