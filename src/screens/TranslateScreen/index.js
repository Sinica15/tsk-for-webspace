import {createStackNavigator} from "react-navigation-stack";

import TranslateScreen from './screens/TranslateScreen';
import SwitchLanguageScreen from "./screens/SwitchLanguageScreen";

const TranslateNavigator = createStackNavigator({
    Home: TranslateScreen,
    SwitchLanguage: SwitchLanguageScreen,
}, {
    headerMode: 'none',
});

export default TranslateNavigator;
