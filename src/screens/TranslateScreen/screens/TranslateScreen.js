import {Button, Layout, Text} from "@ui-kitten/components";
import React from "react";


const TranslateScreen = (props) => {
    const [abc, setAbc] = React.useState('abs');

    return(
        <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <>
                <Text category='h1'>Translation {abc}</Text>
                <Button onPress={() => {
                    console.log('fghjk');
                    alert("fghjk");
                    props.navigation.navigate('SwitchLanguage');
                }}>
                    Go to SwitchLanguage
                </Button>
            </>
        </Layout>
    );
};

export default TranslateScreen;
