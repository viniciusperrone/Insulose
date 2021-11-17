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
import Schedule from '../screens/private/Schedule';
import Medicine from '../screens/private/Medicine';
import Alarm from '../screens/private/Alarm';
import Glucose from '../screens/private/Glucose';
import Exercise from '../screens/private/Exercise';
import Snacks from '../screens/private/Snacks';

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

            <Screen
                name="Schedule"
                component={Schedule}
            />

            <Screen
                name="Medicine"
                component={Medicine}
            />

            <Screen
                name="Alarm"
                component={Alarm}
            />

            <Screen
                name="Glucose"
                component={Glucose}
            />

            <Screen
                name="Exercise"
                component={Exercise}
            />

            <Screen
                name="Snacks"
                component={Snacks}
            />

        </Navigator>
    )
}

export default AuthRoutes;