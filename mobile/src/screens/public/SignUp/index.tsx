import React, { useState } from 'react';
import {
  SafeAreaView,
  ImageBackground,
  Text,
  View,
  TextInput
} from 'react-native';
import { TextInputMask } from 'react-native-masked-text';

import Modal from '../../../components/Modal';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

import Background from '../../../assets/background-secondary.jpeg';
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

          <View style={{ width: 380, alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={style.subtitle}>Primeiro nome</Text>
          </View>
          <Input width={380} />

          <View style={{ width: 380, alignSelf: 'center', justifyContent: 'center' }}>
            <Text style={style.subtitle}>Último nome</Text>
          </View>
          <Input width={380} />

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ flex: 1 }}>
              <View style={{ width: 170, alignSelf: 'center', justifyContent: 'center' }}>
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
              <View style={{ width: 170, alignSelf: 'center', justifyContent: 'center' }}>
                <Text style={style.subtitle}>Sexo</Text>
              </View>
              <TextInput
                style={style.input}
              />
            </View>
          </View>
        </View>

        <View style={style.footer}>
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
        <View style={style.footer}>
          <Button
            title="continuar"
            width={290}
            height={48}
            onPress={handleNext}
          />
        </View>
      </Modal>
    );
  };

  const Last: React.FC = () => {
    return (
      <Modal height={440}>
        <Text style={style.title}>Crie sua conta</Text>
        <Text>Primeiro nome</Text>
        <Text>Segundo nome</Text>
        <Text>Data de Nascimento</Text>
        <Text>Sexo</Text>
        <Button
          title="continuar"
          width={290}
          height={48}
        />
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