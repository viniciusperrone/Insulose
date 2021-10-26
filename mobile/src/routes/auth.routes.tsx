import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Telas públicas
import Main from '../screens/public/Main';
import SignIn from '../screens/public/SignIn';
import SignUp from '../screens/public/SignUp';

// Telas privadas
import Dashboard from '../screens/private/Dashboard';
import Settings from '../screens/private/Settings';
import UpdateProfile from '../screens/private/Update';
import Units from '../screens/private/Units';
import Limits from '../screens/private/Limits';

const { Navigator, Screen } = createStackNavigator();

const AuthRoutes: React.FC = () => {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: 'transparent'
                },
                headerShown: false
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

            <Screen
                name="Settings"
                component={Settings}
            />

            <Screen
                name="UpdateUser"
                component={UpdateProfile}
            />

            <Screen
                name="Units"
                component={Units}
            />

            <Screen
                name="Limits"
                component={Limits}
            />

        </Navigator>
    )
}

export default AuthRoutes;