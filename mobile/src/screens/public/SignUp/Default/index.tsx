import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Animated,
  View,
  Text,
  TextInput,
  Picker
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { TextInputMask } from 'react-native-masked-text';

import { useAuth } from '../../../../hooks/auth';
import { useMenu } from '../../../../hooks/app';

import Modal from '../../../../components/Modal';
import Input from '../../../../components/Input';
import Button from '../../../../components/Button';

import Background from '../../../../assets/background-secondary.jpeg';

import { style } from './style';
import { fonts } from '../../../../style/fonts';


const Default: React.FC = () => {

  const [heightAnimated, setHeightAnimated] = useState<any>(new Animated.Value(0));

  Animated.timing(
    heightAnimated,
    {
      toValue: 440,
      duration: 800,
      useNativeDriver: false
    }
  ).start();

  const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={style.container}
      >
        <Animated.View style={[style.containerContent, { opacity: 1, height: heightAnimated }]}>
          <View 
            style={{
              backgroundColor: '#4448E6',
              flex: 1,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            }}>

            <Text style={style.title}>Crie sua conta Vin</Text>
            <TextInput
              style={[style.input, { width: 330, height: 50 }]}
              autoCorrect={false}
              underlineColorAndroid="transparent"
              defaultValue={name}
              onChangeText={e => setName(e)}
            />
          </View>
        </Animated.View>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Default;