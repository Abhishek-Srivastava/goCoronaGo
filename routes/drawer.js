import { createDrawerNavigator, DrawerActions } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import HomeStack from './homeStack';
import StateStack from './stateStack';
import { myStates } from '../shared/statesObj';


function createScreens() {
    let screens = {
        Home: {
            screen: HomeStack,
        },
    }
    myStates.forEach((item, index) => {
        screens[item.name] = {
            screen: StateStack[item.name],
        }
    }); 
    return screens
}

const RootDrawerNavigator = createDrawerNavigator({...createScreens()},{
    drawerBackgroundColor: '#f4d2f3', drawerWidth: 160,
})


export default createAppContainer(RootDrawerNavigator);