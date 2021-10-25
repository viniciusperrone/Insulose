import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
  Picker,
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import { useNavigation } from '@react-navigation/native';
import { useError } from '../../../hooks/app';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Error from '../../../components/Error';

import Background from '../../../assets/background-secondary.jpeg';

import api from '../../../server/api';

import { colors } from '../../../style/colors';
import { style } from './style';
import { fonts } from '../../../style/fonts';

type ModalProps = {
  default: boolean;
  weight: boolean;
  last: boolean;
};

interface UserData {
  first_name: string;
  last_name: string;
  birth_date: any;
  sex_gender: string;
  weight: number;
  height: number;
  email: string;
  password: string;
}


const SignUp: React.FC = () => {

  const navigation = useNavigation();

  const [modal, setModal] = useState<ModalProps>({
    default: true,
    weight: false,
    last: false
  });

  const [user, setUser] = useState<UserData>({
    first_name: "",
    last_name: "",
    birth_date: null,
    sex_gender: "",
    weight: 0,
    height: 0,
    email: "",
    password: ""
  });

  const [selected, setSelected] = useState('');
  const [validation, setValidation] = useState(false);
  const [security, setSecurity] = useState(true);
  const { error, setError } = useError();

  function HandleSignUpOfPartOne() {
  
    if (!user.birth_date || !user.first_name || user.first_name.trim().length < 6 || !user.last_name ||user.last_name.trim().length < 6 || !user.sex_gender || user.sex_gender === '') {
      setError(true);
      return;
    }
    setModal({
      default: false,
      weight: true,
      last: false
    });
  }

  function HandleSignUpOfPartSecond() {
    if (!user.weight || user.weight === 0 || !user.height || user.height === 0) {
      setError(true)
      return;
    }

    setModal({
      default: false,
      weight: false,
      last: true
    });
  }

  async function HandleSignUpOfPartThird() {
    if (!user.email || user.email.trim().length < 6 || !user.password || user.password.trim().length < 6 || !validation) {
      setError(true);
      return;
    }

    const response = await api.post('/signup', {
      first_name: user.first_name,
      last_name: user.last_name,
      birth_date: user.birth_date,
      sex_gender: user.sex_gender,
      weight: user.weight,
      height: user.height,
      email: user.email,
      password: user.password
    });

    if (!response) {
      setError(true);
      return;
    }
    setModal({
      default: false,
      weight: false,
      last: false
    });

    navigation.navigate('SignIn');
  }

  console.log(user);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={style.container}
      >
        {
          modal.default
            ?
            <Modal height={480}>
              <Text style={style.title}>Crie sua conta</Text>
              <View style={style.form}>

                <View style={{ width: 330, alignSelf: 'center', justifyContent: 'center' }}>
                  <Text style={style.subtitle}>Primeiro nome</Text>
                </View>
                <Input
                  width={330}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  defaultValue={user.first_name}
                  onChangeText={(e) => setUser({
                    first_name: e,
                    last_name: user.last_name,
                    birth_date: user.birth_date,
                    sex_gender: selected,
                    weight: user.weight,
                    height: user.height,
                    email: user.email,
                    password: user.password
                  })}
                />

                <View style={{ width: 330, alignSelf: 'center', justifyContent: 'center' }}>
                  <Text style={style.subtitle}>Último nome</Text>
                </View>
                <Input
                  width={330}
                  autoCorrect={false}
                  underlineColorAndroid="transparent"
                  defaultValue={user.last_name}
                  onChangeText={(e) => setUser({
                    first_name: user.first_name,
                    last_name: e,
                    birth_date: user.birth_date,
                    sex_gender: selected,
                    weight: user.weight,
                    height: user.height,
                    email: user.email,
                    password: user.password
                  })}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                  <View style={{ flex: 1, width: '50%' }}>
                    <View style={{ width: 150, alignSelf: 'center', justifyContent: 'center' }}>
                      <Text style={style.subtitle}>Data de Nascimento</Text>
                      <TextInputMask
                        style={style.input}
                        type={'datetime'}
                        value={user.birth_date}
                        onChangeText={(e) => setUser({
                          first_name: user.first_name,
                          last_name: user.last_name,
                          birth_date: e,
                          sex_gender: selected,
                          weight: user.weight,
                          height: user.height,
                          email: user.email,
                          password: user.password
                        })}
                        options={{
                          format: 'YYYY/MM/DD'
                        }}
                      />
                    </View>

                  </View>

                  <View style={{ flex: 1, width: '50%' }}>
                    <View style={{ width: 150, alignSelf: 'center', justifyContent: 'center' }}>
                      <Text style={style.subtitle}>Sexo</Text>
                    </View>
                    <View style={[style.input, { width: 100, marginTop: 21 }]}>
                      <Picker
                        selectedValue={user.sex_gender}
                        style={{
                          fontSize: 16,
                          fontFamily: fonts.poppins_700
                        }}

                        onValueChange={(itemValue, itemIndex) => {
                          setUser({
                            first_name: user.first_name,
                            last_name: user.last_name,
                            birth_date: user.birth_date,
                            sex_gender: itemValue,
                            weight: user.weight,
                            height: user.height,
                            email: user.email,
                            password: user.password
                          });
                          return setSelected(itemValue);
                        }}
                      >
                        <Picker.Item label="Masculino" value="Masculino" />
                        <Picker.Item label="Feminino" value="Feminino" />
                        <Picker.Item label="Outro" value="Outro" />
                      </Picker>
                    </View>
                  </View>
                </View>
              </View>

              <View style={[style.footer, { height: '30%' }]}>
                <Button
                  title="continuar"
                  width={290}
                  height={48}
                  onPress={HandleSignUpOfPartOne}
                />
              </View>
            </Modal>
            :
            null
        }
        {
          modal.weight
            ?
            <Modal height={320}>
              <Text style={style.title}>Crie sua conta</Text>
              <View style={{ flex: 1 }}>
                <View style={{ width: 120, alignSelf: 'center' }}>
                  <Text style={style.subtitle}>Peso</Text>
                </View>
                <TextInputMask
                  style={[style.input, { width: 120 }]}
                  value={String(user.weight)}
                  onChangeText={(e) => setUser({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    birth_date: user.birth_date,
                    sex_gender: user.sex_gender,
                    weight: Number(e),
                    height: user.height,
                    email: user.email,
                    password: user.password
                  })}
                  placeholder="kg"
                  type="only-numbers"
                />

                <View style={{ width: 120, alignSelf: 'center' }}>
                  <Text style={style.subtitle}>Altura</Text>
                </View>
                <TextInputMask
                  style={[style.input, { width: 120 }]}
                  value={String(user.height)}
                  onChangeText={(e) => setUser({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    birth_date: user.birth_date,
                    sex_gender: user.sex_gender,
                    weight: user.weight,
                    height: Number(e),
                    email: user.email,
                    password: user.password
                  })}
                  placeholder="cm"
                  type="only-numbers"
                />
              </View>
              <View style={[style.footer, { height: '30%' }]}>
                <Button
                  title="continuar"
                  width={290}
                  height={48}
                  onPress={HandleSignUpOfPartSecond}
                />
              </View>
            </Modal >
            : null
        }
        {
          modal.last
            ?
            <Modal height={440}>
              <Text style={style.title}>Crie sua conta</Text>
              <View style={style.form}>
                <View style={{ width: 300, alignSelf: 'center' }}>
                  <Text style={style.subtitle}>Email</Text>
                </View>
                <Input 
                  width={300} 
                  defaultValue={user.email}
                  onChangeText={(e) => setUser({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    birth_date: user.birth_date,
                    sex_gender: user.sex_gender,
                    weight: user.weight,
                    height: user.height,
                    email: e,
                    password: user.password
                  })}
                />

                <View style={{ width: 300, alignSelf: 'center' }}>
                  <Text style={style.subtitle}>Senha</Text>
                </View>
                <Input 
                  width={300} 
                  secureTextEntry={security}
                  defaultValue={user.password}
                  onChangeText={(e) => setUser({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    birth_date: user.birth_date,
                    sex_gender: user.sex_gender,
                    weight: user.weight,
                    height: user.height,
                    email: user.email,
                    password: e
                  })}
                >
                  <TouchableOpacity onPress={() => setSecurity(!security)}>
                    {
                      security
                        ?
                        <Ionicons name="eye-off" size={24} color={colors.gray} />
                        :
                        <Ionicons name="eye" size={24} color={colors.gray} />
                    }
                  </TouchableOpacity>
                </Input>
              </View>
              <View style={[style.footer, { height: '40%' }]}>
                <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                  <TouchableOpacity style={style.checkBox} onPress={() => setValidation(!validation)}>
                    {
                      validation
                        ?
                        <MaterialIcons name="check-box" size={26} color={colors.blue_oil} />
                        :
                        <MaterialIcons name="check-box-outline-blank" size={26} color={colors.blue_oil} />
                    }
                  </TouchableOpacity>
                  <Text style={[style.description, { color: colors.white }]}>Eu concordo com os </Text>
                  <TouchableOpacity>
                    <Text style={[style.description, { color: colors.blue_oil }]}>Termos e condições</Text>
                  </TouchableOpacity>
                </View>
                <Button
                  title="criar conta"
                  width={290}
                  height={48}
                  onPress={HandleSignUpOfPartThird}
                />
              </View>
            </Modal>
            : null
        }
        {
          error && <Error register />
        }
      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;