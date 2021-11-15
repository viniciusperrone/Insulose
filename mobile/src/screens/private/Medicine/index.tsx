import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Feather } from '@expo/vector-icons';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

import { style } from './style';

const Medicine: React.FC = () => {

  const [add, setAdd] = useState(false);

  async function addMedicine(){
    return;
  }
  return(
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Remédios</Text>
        <Text style={style.text}>
          Você naõ possui registro de medicamentos.{'\n'} 
          Clique em (+) para adicionar sua primeira{'\n'} 
          medicação
        </Text>
        <View></View>
        <TouchableOpacity style={style.plusButton} onPress={() => setAdd(true)}>
          <Feather name="plus" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <Footer />
      { add && 
        <Modal transparent visible={add}>
          <View style={style.backgroundModal}>
          <View style={style.containerModal}>
            <LinearGradient
              colors={['#02005F', '#02007A']}
              style={style.header}
            >
              <Text style={style.textModal}>ADICIONAR UM MEDICAMENTO</Text>
            </LinearGradient>
            <View
              style={style.content}
            >
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Nome</Text>
                <TextInput 
                  style={style.input}
                  placeholder={'Digite o nome'}
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Unidade</Text>
                <TextInput 
                  style={style.input}
                  placeholder={'Digite o nome'}
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Dosagem</Text>
                <TextInput 
                  style={style.input}
                  placeholder={'Dosagem, unidades'}
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Vezes por dia</Text>
                <TextInput 
                  style={[style.input, { width: 150 }]}
                  placeholder={'O valor'}
                />
              </View>
            </View>
            <LinearGradient
              colors={['#02005F', '#02007A']}
              style={style.footer}
            >
              <TouchableOpacity
                style={{
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={() => setAdd(false)}
              >
                <Text style={style.textModal}>SALVAR</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          </View>
        </Modal>      
      }
    </Background>
  );
}

export default Medicine;