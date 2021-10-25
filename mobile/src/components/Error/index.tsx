import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

import { useError } from '../../hooks/app';
import { style } from './style';

interface ModalProps {
  enter?: boolean;
  register?: boolean;
}

const Error: React.FC<ModalProps> = ({ enter, register }) => {
  const { error, setError } = useError();

  function handleError(){
    setError(!error);
  }
  return (
    <Modal transparent visible={true}>
      <View style={style.background}>
      <TouchableOpacity style={style.container} onPress={handleError}>
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
      </TouchableOpacity>
      </View>
    </Modal>
  );
}

export default Error;