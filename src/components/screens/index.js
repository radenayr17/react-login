import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import LoginScreen from './login';

const AppNavigator = createStackNavigator({
    login: LoginScreen,
},{
    headerMode: "none",
    navigationOptions: {
        headerVisible: false
    }
});

const AppScreen = createAppContainer(AppNavigator);

export default AppScreen;