import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { TextInputMask } from 'react-native-masked-text';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import Background from '../../../assets/background-secondary.jpeg';

import { colors } from '../../../style/colors';
import { style } from './style';

type ModalProps = {
  default: boolean;
  weight: boolean;
  last: boolean;
};

const SignUp: React.FC = () => {
  const [modal, setModal] = useState<ModalProps>({
    default: true,
    weight: false,
    last: false,
  });

  const Default: React.FC = () => {

    function handleNext() {
      setModal({
        default: false,
        weight: true,
        last: false
      });
    }
    return (
      <Modal height={440}>
        <Text style={style.title}>Crie sua conta</Text>
        <View style={style.form}>

          <View style={{ width: 330, alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={style.subtitle}>Primeiro nome</Text>
          </View>
          <Input width={330} />

          <View style={{ width: 330, alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={style.subtitle}>Último nome</Text>
          </View>
          <Input width={330} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <View style={{ width: 150, alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={style.subtitle}>Data de Nascimento</Text>
              </View>
              <TextInputMask
                style={style.input}
                type={'datetime'}
                options={{
                  format: 'YYYY/MM/DD'
                }}
              />
            </View>

            <View style={{ flex: 1 }}>
              <View style={{ width: 150, alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={style.subtitle}>Sexo</Text>
              </View>
              <TextInput
                style={style.input}
              />
            </View>
          </View>
        </View>

        <View style={[style.footer, { height: '30%' }]}>
          <Button
            title="continuar"
            width={290}
            height={48}
            onPress={handleNext}
          />
        </View>
      </Modal>
    )
  }

  const Weight: React.FC = () => {
    function handleNext() {
      setModal({
        default: false,
        weight: false,
        last: true
      });
    }
    return (
      <Modal height={320}>
        <Text style={style.title}>Crie sua conta</Text>
        <View style={{ flex: 1 }}>
          <View style={{ width: 120, alignSelf: 'center' }}>
            <Text style={style.subtitle}>Peso</Text>
          </View>
          <Input width={120} />
          <View style={{ width: 120, alignSelf: 'center' }}>
            <Text style={style.subtitle}>Altura</Text>
          </View>
          <Input width={120} />
        </View>
        <View style={[style.footer, { height: '30%' }]}>
          <Button
            title="continuar"
            width={290}
            height={48}
            onPress={handleNext}
          />
        </View>
      </Modal >
    );
  };

  const Last: React.FC = () => {
    const [security, setSecurity] = useState(true);
    const [validation, setValidation] = useState(false);
    return (
      <Modal height={440}>
        <Text style={style.title}>Crie sua conta</Text>
        <View style={style.form}>
          <View style={{ width: 300, alignSelf: 'center' }}>
            <Text style={style.subtitle}>Email</Text>
          </View>
          <Input width={300} />

          <View style={{ width: 300, alignSelf: 'center' }}>
            <Text style={style.subtitle}>Senha</Text>
          </View>
          <Input width={300}>
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
          />
        </View>
      </Modal>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={Background}
        style={style.container}
      >
        {
          modal.default ? <Default /> : null
        }
        {
          modal.weight ? <Weight /> : null
        }
        {
          modal.last ? <Last /> : null
        }

      </ImageBackground>
    </SafeAreaView>
  );
};

export default SignUp;