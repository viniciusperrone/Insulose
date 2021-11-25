import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import SelectInput from 'react-native-select-input-ios';
import { Feather } from '@expo/vector-icons';

import { useMenu, useError } from '../../../hooks/app';

import Background from '../../../components/Background';
import Header from '../../../components/Header';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import Error from '../../../components/Error';

import { style } from './style';

type MedicineData = {
  name: string;
  unit: string;
  dosage: string;
  quantity: string;
}

const Medicine: React.FC = () => {

  const { openMenu } = useMenu();
  const { error } = useError();
  const [add, setAdd] = useState(false);
  const [medicine, setMedicine] = useState({} as MedicineData);
  const options = [{ value: 'mg', label: 'mg' }, { value: 'g', label: 'g' }]

  // console.log(medicine);

  async function addMedicine() {
    return;
  }
  return (
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
      {
        openMenu && <Menu />
      }

      {
        error && <Error noFunctionality />
      }
      <Footer />
      {add &&
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
    </Background>
  );
}

export default Medicine;