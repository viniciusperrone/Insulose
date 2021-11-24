import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather } from '@expo/vector-icons';

import { useMenu } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';

import { style } from './style';

const Alarm: React.FC = () => {
  const { openMenu } = useMenu();
  const [add, setAdd] = useState(false);

  return (
    <Background>
      <Header />
      <View style={style.container}>
        <Text style={style.title}>Alarme</Text>
        <Text style={style.text}>
          Você naõ possui alarme. Clique em (+) para{'\n'}
          adicionar seu primeiro alarme{'\n'}
        </Text>
        <TouchableOpacity style={style.plusButton} onPress={() => setAdd(true)}>
          <Feather name="plus" size={50} color="black" />
        </TouchableOpacity>
      </View>
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
                  value={medicine.name}
                  onChangeText={e => setMedicine({
                    name: e,
                    unit: medicine.unit,
                    dosage: medicine.dosage,
                    quantity: medicine.quantity
                  })}
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Unidade</Text>
                <SelectInput 
                  style={[style.input, { fontSize: 10 }]} 
                  value={medicine.unit}
                  onChangeText={(e: string) => setMedicine({
                    name: medicine.name,
                    unit: e,
                    dosage: medicine.dosage,
                    quantity: medicine.quantity
                  })}
                  options={options} 
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Dosagem</Text>
                <TextInput 
                  style={style.input}
                  placeholder={'Dosagem, unidades'}
                  value={medicine.dosage}
                  onChangeText={e => setMedicine({
                    name: medicine.name,
                    unit: medicine.unit,
                    dosage: e,
                    quantity: medicine.quantity
                  })}
                />
              </View>
              <View style={style.containerInput}>
                <Text style={style.titleModal}>Vezes por dia</Text>
                <TextInput 
                  style={[style.input, { width: 150 }]}
                  placeholder={'O valor'}
                  keyboardType={'decimal-pad'}
                  value={medicine.quantity}
                  onChangeText={e => setMedicine({
                    name: medicine.name,
                    unit: medicine.unit,
                    dosage: medicine.dosage,
                    quantity: e
                  })}
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
      {
        openMenu && <Menu />
      }
      <Footer />
    </Background>
  );
};

export default Alarm;