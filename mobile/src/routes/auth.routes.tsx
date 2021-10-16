import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Telas públicas
import Main from '../screens/public/Main';
import SignIn from '../screens/public/SignIn';
import SignUp from '../screens/public/SignUp';

// Telas privadas
import Dashboard from '../screens/private/Dashboard';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
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
            <Screen
                name="SignUp"
                component={SignUp}
            />

            <Screen
                name="Dashboard"
                component={Dashboard}
            />

        </Navigator>
    )
}

export default AuthRoutes;