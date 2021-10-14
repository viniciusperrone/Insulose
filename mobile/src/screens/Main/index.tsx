import React from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

import Background from '../../assets/background-main.jpeg';
import Logo from '../../assets/icone.png';

import { style } from './style';

const Main: React.FC = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={style.container}
      >
        <View>
          <Image
            source={Logo}
            style={style.logo}
          />
          <Text style={style.title}>
            Insulose
          </Text>
        </View>

        <View>
          <TouchableOpacity style={style.button}>
            <Text style={style.text}>login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={style.button}>
            <Text style={style.text}>criar conta</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Main;