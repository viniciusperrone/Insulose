import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Dialog from 'react-native-dialog';

import { useMenu, useError } from '../../../hooks/app';

import HeaderApp from '../../../components/HeaderApp';
import Menu from '../../../components/Menu';
import Footer from '../../../components/Footer';
import Error from '../../../components/Error';

import { style } from './style';

type LimitsData = {
  hyperglycemia: string;
  high_glucose: string;
  desired_glucose: string;
  low_glucose: string;
  hypoglycemia: string;
}

const Limits: React.FC = () => {

  const { openMenu, setOpenMenu } = useMenu();
  const { error, setError } = useError();
  const [modal, setModal] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [glucose, setGlucose] = useState({} as LimitsData);

  function FirstModal() {
    setVisible(true);
    setModal(1);
  }
  function SecondModal() {
    setVisible(true);
    setModal(2);
  }
  function ThreeModal() {
    setVisible(true);
    setModal(3);
  }
  function FourModal() {
    setVisible(true);
    setModal(4);
  }
  function FiveModal() {
    setVisible(true);
    setModal(5);
  }

  return (
    <View style={style.container}>
      <HeaderApp title="Limites de glicemia" />
      <View style={style.content}>
        <TouchableOpacity style={style.button} onPress={FirstModal}>
          <Text style={style.title}>Hiperglicemia</Text>
          <Text style={style.subtitle}>200 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={SecondModal}>
          <Text style={style.title}>Glicemia alta</Text>
          <Text style={style.subtitle}>145 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={ThreeModal}>
          <Text style={style.title}>Glicemia desejada</Text>
          <Text style={style.subtitle}>100 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={FourModal}>
          <Text style={style.title}>Glicemia baixa</Text>
          <Text style={style.subtitle}>80 mg/dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={FiveModal}>
          <Text style={style.title}>Hipoglicemia</Text>
          <Text style={style.subtitle}>50 mg/dL</Text>
        </TouchableOpacity>
      </View>
      {
        modal === 1 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={'200 mg/dL'}
            value={glucose.hyperglycemia}
            onChangeText={e => setGlucose({
              hyperglycemia: e,
              high_glucose: glucose.high_glucose,
              desired_glucose: glucose.desired_glucose,
              low_glucose: glucose.low_glucose,
              hypoglycemia: glucose.hypoglycemia
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal === 2 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={'145 mg/dL'}
            value={glucose.high_glucose}
            onChangeText={e => setGlucose({
              hyperglycemia: glucose.hyperglycemia,
              high_glucose: e,
              desired_glucose: glucose.desired_glucose,
              low_glucose: glucose.low_glucose,
              hypoglycemia: glucose.hypoglycemia
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal === 3 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={'100 mg/dL'}
            value={glucose.desired_glucose}
            onChangeText={e => setGlucose({
              hyperglycemia: glucose.hyperglycemia,
              high_glucose: glucose.high_glucose,
              desired_glucose: e,
              low_glucose: glucose.low_glucose,
              hypoglycemia: glucose.hypoglycemia
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal === 4 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={'80 mg/dL'}
            value={glucose.low_glucose}
            onChangeText={e => setGlucose({
              hyperglycemia: glucose.hyperglycemia,
              high_glucose: glucose.high_glucose,
              desired_glucose: glucose.desired_glucose,
              low_glucose: e,
              hypoglycemia: glucose.hypoglycemia
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal === 5 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={'50 mg/dL'}
            value={glucose.hyperglycemia}
            onChangeText={e => setGlucose({
              hyperglycemia: glucose.hyperglycemia,
              high_glucose: glucose.high_glucose,
              desired_glucose: glucose.desired_glucose,
              low_glucose: glucose.low_glucose,
              hypoglycemia: e
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      <View style={style.line} />
      <Text>Faixa após a refeição</Text>
      <TouchableOpacity style={style.button}>
        <Text style={style.title}>Hiperglicemia</Text>
        <Text style={style.subtitle}>200 mg/dL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Text style={style.title}>Glicemia alta</Text>
        <Text style={style.subtitle}>145 mg/dL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.button}>
        <Text style={style.title}>Glicemia desejada</Text>
        <Text style={style.subtitle}>100 mg/dL</Text>
      </TouchableOpacity>
      {
        openMenu && <Menu />
      }
      {
        error && <Error noFunctionality />
      }
      <Footer />
    </View>
  );
};

export default Limits;