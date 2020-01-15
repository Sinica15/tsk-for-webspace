import {Button, Layout, Text, Icon, Input, Card, List, ListItem} from "@ui-kitten/components";
import React from "react";

import {Icon as IconNat} from 'react-native-elements'
import {ScrollView, TextInput, View} from "react-native";

import {KeyboardAvoidingView} from 'react-native'

const SwitchLanguageBtn = ({language, navigation}) => {

    const DownIcon = () => (
        <IconNat
            name='keyboard-arrow-down'
            type='material'
            color='#517fa4'
        />
    );

    return (
        <Button
            onPress={() => navigation.navigate('SwitchLanguage')}
            style={{flexDirection: 'row-reverse'}}
            icon={DownIcon}
            appearance='ghost'
        >
            {language}
        </Button>
    );
};

const SwapLanguageBtn = () => {

    const SwapLanguage = () => {
        console.log('swapping');
    };

    const SwapIcon = () => (
        <IconNat
            name='swap-horiz'
            type='material'
            color='#517fa4'
        />
    );

    return (
        <Button
            appearance='ghost'
            onPress={SwapLanguage}
            icon={SwapIcon}
        />
    );
};

const TranslateInput = ({language}) => {

    const MainWord = () => {

        const ClearBtn = () => {
            const ClearIcon = () => (
                <IconNat
                    name='clear'
                    type='material'
                    color='#517fa4'
                />
            );
            return (
                <Button
                    style={{
                        paddingHorizontal: 0,
                    }}
                    appearance='ghost'
                    onPress={() => console.log('clear')}
                    icon={ClearIcon}
                />
            );
        };

        return (
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <TextInput
                    editable
                    maxLength={40}
                    placeholder='Enter text'
                    multiline
                    numberOfLines={4}
                />
                <ClearBtn/>
            </Layout>
        );
    };

    const Footer = () => {

        const SpeakerBtn = () => {
            const SpeakerIcon = () => (
                <IconNat
                    name='volume-up'
                    type='material'
                    color='#517fa4'
                />
            );

            return (
                <Button
                    style={{
                        paddingHorizontal: 0,
                    }}
                    appearance='ghost'
                    onPress={() => console.log('speak!')}
                    icon={SpeakerIcon}
                />
            );
        };

        return (
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                }}
            >
                <SpeakerBtn/>
            </Layout>
        )
    };

    return (
        <View
            style={{
                margin: 15,
                marginTop: 10,
            }}
        >
            <Text
                appearance='hint'
                style={{
                    paddingBottom: 15,
                    fontWeight: 'bold'
                }}
            >
                {language}
            </Text>
            <Layout
                style={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    paddingTop: 10,
                    paddingLeft: 15
                }}
            >
                <MainWord/>
                <Footer/>
            </Layout>
        </View>
    );
};

const TranslateOutput = ({language, mainWord}) => {

    const MainWord = () => {

        const StarBtn = () => {
            const StarIcon = () => (
                <IconNat
                    name='star'
                    type='material'
                    color='#517fa4'
                />
            );
            return (
                <Button
                    style={{
                        paddingHorizontal: 0,
                    }}
                    appearance='ghost'
                    onPress={() => console.log('stared')}
                    icon={StarIcon}
                />
            );
        };

        return (
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text>{mainWord}</Text>
                <StarBtn/>
            </Layout>
        );
    };

    const Footer = () => {

        const SpeakerBtn = () => {
            const SpeakerIcon = () => (
                <IconNat
                    name='volume-up'
                    type='material'
                    color='#517fa4'
                />
            );

            return (
                <Button
                    style={{
                        paddingHorizontal: 0,
                    }}
                    appearance='ghost'
                    onPress={() => console.log('speak!')}
                    icon={SpeakerIcon}
                />
            );
        };

        return (
            <Layout
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-end'
                }}
            >
                <SpeakerBtn/>
            </Layout>
        )
    };

    return (
        <View
            style={{
                margin: 15,
                marginTop: 10,
            }}
        >
            <Text
                appearance='hint'
                style={{
                    paddingBottom: 15,
                    fontWeight: 'bold',
                }}
            >
                {language}
            </Text>
            <Layout
                style={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    paddingTop: 10,
                    paddingLeft: 15
                }}
            >
                <MainWord />
                <Footer/>
            </Layout>
        </View>
    );
};

const TranslateAccessoryOutput = ({partOfSpeech, wordsArr}) => {

    const ListItemCustom = ({item}) => (
        <ListItem
            style={{
                paddingLeft: 0
            }}
            title={item.mainWord}
            description={item.accessoryWords}

        />
    );

    return (
        <Layout
            style={{
                margin: 15,
                marginTop: 10,
                padding: 10,
                borderRadius: 5,
                overflow: 'hidden',
            }}

        >
            <Text
                appearance='hint'
                category='c2'
                style={{
                    fontWeight: 'bold'
                }}
            >
                {partOfSpeech} </Text>
            <List
                contentContainerStyle={{
                    paddingLeft: 0,
                    marginLeft: 0,
                }}
                data={wordsArr}
                renderItem={ListItemCustom}
            />
        </Layout>
    );
};

const wordsArr = [
    {
        mainWord: 'Lalala',
        accessoryWords: 'lalala1, lalala2, lalala3, lalala4, lalala5'
    },
    {
        mainWord: 'Lalala',
        accessoryWords: 'lalala1, lalala2, lalala3, lalala4, lalala5'
    },
];

const TranslateScreen = (props) => {
    const [abc, setAbc] = React.useState('abs');

    return (
        <ScrollView style={{flex: 1, flexDirection: 'column'}}>
            <KeyboardAvoidingView>
                <TranslateAccessoryOutput partOfSpeech={'Noun'} wordsArr={wordsArr}/>
                <TranslateAccessoryOutput partOfSpeech={'Verb'} wordsArr={wordsArr}/>
                <TranslateOutput language={'someOtherLanguage'} mainWord={'someMainWord'}/>
                <TranslateInput language={'someLanguage'}/>
                <Layout
                    level='1'
                    style={{
                        margin: 15,
                        marginTop: 10,
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}
                >
                    <SwitchLanguageBtn language={'Russian'} navigation={props.navigation}/>
                    <SwapLanguageBtn />
                    <SwitchLanguageBtn language={'English'} navigation={props.navigation}/>
                </Layout>
            </KeyboardAvoidingView>
        </ScrollView>
    );
};

export default TranslateScreen;
