import React from 'react';
import { Modal, View, Text } from 'react-native';

import { style } from './style';

interface ModalProps {
  enter?: boolean;
  register?: boolean;
}

const Error: React.FC<ModalProps> = ({ enter, register }) => {
  return (
    <Modal style={style.background} transparent visible={true}>
      <View style={style.container}>
        <View style={style.header}>
          <Text style={style.textHeader}>Erro!</Text>
        </View>
        <View style={style.content}>
          <Text style={style.textContent}>
            {
              enter ? 'Login ou senha inválidos' : null
            }
            {
              register ? 'Campos inválidos' : null
            }
          </Text>
        </View>
      </View>
    </Modal>
  );
}

export default Error;