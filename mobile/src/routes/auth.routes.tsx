import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Main from '../screens/public/Main';
import SignIn from '../screens/public/SignIn';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
  return(
    <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="Main"
                component={Main}
            />
            <Screen
                name="SignIn"
                component={SignIn}
            />
            
        </Navigator>
  )
}

export default AuthRoutes;