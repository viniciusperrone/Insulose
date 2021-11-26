import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Calendar, CalendarList, Agenda, LocaleConfig } from 'react-native-calendars';
import { Ionicons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useMenu, useError } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Error from '../../../components/Error';
import Footer from '../../../components/Footer';

import { style } from './style';
import { fonts } from '../../../style/fonts';

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'],
    monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul.','Ago','Set','Out','Nov','Dez'],
    dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'],
    dayNamesShort: ['D','S','T','Q','Q','S','S'],
    today: 'Hoje\'hoj'
  };
  LocaleConfig.defaultLocale = 'pt-br';

type DateProps = {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
}

const RegisterSchedule: React.FC = () => {
    const navigation = useNavigation();
    const { openMenu } = useMenu();
    const { error } = useError();
    const [date, setDate] = useState<DateProps>();
    
    return (
        <Background>
            <Header />
            <View style={style.container}>
                <Text style={style.title}>Agenda</Text>
                <View style={style.calendar}>
                    <Calendar
                        theme={{
                            arrowColor: "black",
                            dayTextColor: "#505050C2",
                            selectedDayTextColor: "#680279CC",
                            agendaDayNumColor: "#680279CC",
                            todayBackgroundColor: "#680279CC",
                            todayTextColor: "white",
                            headerText: {
                                fontSize: 18,
                                fontFamily: fonts.roboto_400,
                                color: "#505050C2"
                            }
                        }}
                        style={{
                            width: 326,
                            height: 260,
                            borderRadius: 10,
                            borderWidth: 1,
                        }}
                        onDayPress={(day: DateProps) => setDate(day)}
                        onDayLongPress={(day: DateProps) => setDate(day)}

                    />

                </View>
                <View style={style.content}>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Evento</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Horário</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Especialidade</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Outro</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Profissional</Text>
                        <TextInput
                            style={[style.input, { width: 205 }]}
                        />
                    </View>

                    <View style={style.containerRegister}>
                        <Text style={style.text}>Outro</Text>
                        <TextInput
                            style={[style.input, { width: 105 }]}
                        />
                    </View>
                </View>
                <View style={style.footer}>
                    <TouchableOpacity style={style.button}>
                        <Text style={style.textButton}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Footer />
            {
                openMenu && <Menu />
            }
            {
                error && <Error noFunctionality />
            }
        </Background>
    );
};

export default RegisterSchedule;

{/* <Calendar
onChange={(range) => console.log(range)}
minDate={new Date(2018, 3, 20)}
startDate={new Date(2018, 3, 30)}
endDate={new Date(2018, 4, 5)}
theme={{
    activeDayColor: '#680279CC',
    monthTitleTextStyle: {
        color: '#6d95da',
        fontWeight: '300',
        fontSize: 16,
    },
    emptyMonthContainerStyle: {},
    emptyMonthTextStyle: {
        fontWeight: '200',
    },
    weekColumnsContainerStyle: {},
    weekColumnStyle: {
        paddingVertical: 10,
    },
    weekColumnTextStyle: {
        color: '#b6c1cd',
        fontSize: 13,
    },
    nonTouchableDayContainerStyle: {},
    nonTouchableDayTextStyle: {},
    startDateContainerStyle: {},
    endDateContainerStyle: {},
    dayContainerStyle: {},
    dayTextStyle: {
        color: '#2d4150',
        fontWeight: '200',
        fontSize: 15,
    },
    dayOutOfRangeContainerStyle: {},
    dayOutOfRangeTextStyle: {},
    todayContainerStyle: {},
    todayTextStyle: {
        color: '#6d95da',
    },
    activeDayContainerStyle: {
        backgroundColor: '#6d95da',
    },
    activeDayTextStyle: {
        color: 'white',
    },
    nonTouchableLastMonthDayTextStyle: {},
}}
/> */}