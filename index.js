if (__DEV__) {
    require('react-devtools');
}
import Reactotron from 'reactotron-react-native'
console.tron = Reactotron
.configure()
.useReactNative()
.connect()

import { AppRegistry } from 'react-native';
import App from './src';

AppRegistry.registerComponent('mostPlayedSpotify', () => App);
