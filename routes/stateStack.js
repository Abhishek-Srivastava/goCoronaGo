import React from 'react'
import { createStackNavigator } from 'react-navigation-stack';

import StateDetails from '../screens/stateDetails';
import Header from '../shared/header';
import { myStates } from '../shared/statesObj';
import { APP_NAME } from '../shared/appConstants';
import { headerBgColor } from '../styles/globalStyles';


function createStackNav() {
    stackNavigators = {}

    myStates.forEach((item, index) => {
        let stateName = item["name"]
        let screen = {}
        screen[stateName] = {
            screen: StateDetails,
            navigationOptions: (props) => {
                return {
                    headerTitle: () => <Header navigation={props.navigation} title={APP_NAME} />
                }
            },
        }
        let newStackNav = createStackNavigator(screen, {
            defaultNavigationOptions: {
                headerStyle: {
                    backgroundColor: headerBgColor,
                    height: 80,
                },
            },
        });
        stackNavigators[stateName] = newStackNav
    });
    return stackNavigators
}

export default createStackNav();