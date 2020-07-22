import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import Home from '../screens/home';
import Header from '../shared/header';
import { APP_NAME } from '../shared/appConstants';
import { headerBgColor } from '../styles/globalStyles';

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ( {navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={APP_NAME} />
            }
        },
    },
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: headerBgColor,
            height: 80,
        },
    }
});

export default HomeStack;