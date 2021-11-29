import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// Telas públicas
import Main from '../screens/public/Main';
import SignIn from '../screens/public/SignIn';
import SignUp from '../screens/public/SignUp';
import TermsServices from '../screens/public/TermsServices';

// Telas privadas
import Dashboard from '../screens/private/Dashboard';
import Settings from '../screens/private/Settings';
import UpdateProfile from '../screens/private/Update';
import Units from '../screens/private/Units';
import Limits from '../screens/private/Limits';
import Schedule from '../screens/private/Schedule';
import RegisterSchedule from '../screens/private/RegisterSchedule';
import Medicine from '../screens/private/Medicine';
import Alarm from '../screens/private/Alarm';
import Glucose from '../screens/private/Glucose';
import Exercise from '../screens/private/Exercise';
import Snacks from '../screens/private/Snacks';
import NextAlarm from '../screens/private/NextAlarm';
import NextGlucose from '../screens/private/NextGlucoses';
import NextMedicine from '../screens/private/NextMedicine';
import NextSchedule from '../screens/private/NextSchedule';
import Levels from '../screens/private/Levels';
import Contact from '../screens/private/Contact';
import ValuesGlucose from '../screens/private/ValuesGlucose';
import Tips from '../screens/private/Tips';

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
                name="TermsServices"
                component={TermsServices}
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
                name="RegisterSchedule"
                component={RegisterSchedule}
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

            <Screen
                name="NextGlucose"
                component={NextGlucose}
            />

            <Screen
                name="NextAlarm"
                component={NextAlarm}
            />

            <Screen
                name="NextMedicine"
                component={NextMedicine}
            />

            <Screen
                name="NextSchedule"
                component={NextSchedule}
            />

            <Screen
                name="Contact"
                component={Contact}
            />

            <Screen
                name="ValuesGlucose"
                component={ValuesGlucose}
            />

            <Screen
                name="Tips"
                component={Tips}
            />

            <Screen
                name="Levels"
                component={Levels}
            />

        </Navigator>
    )
}

export default AuthRoutes;