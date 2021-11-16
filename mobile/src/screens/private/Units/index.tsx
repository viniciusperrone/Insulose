import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Dialog from 'react-native-dialog';
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';
import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

type UnitData = {
  measure: string;
  blood_glucose: string;
  ketones: string;
  cholesterol: string;
  hb1Ac: string; 
}

const Units: React.FC = () => {
  const [modal, setModal] = useState<number>();
  const [visible, setVisible] = useState(false);
  const [unit, setUnit] = useState({} as UnitData);

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
  return(
    <View style={style.container}>
      <HeaderApp title="Unidades" />
      <View style={style.content}>
        <TouchableOpacity style={style.button} onPress={FirstModal}>
          <Text style={style.title}>Unidades de medida</Text>
          <Text style={style.subtitle}>Métrico (kg, g, ml, cm)</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={SecondModal}>
          <Text style={style.title}>Unidade de glicemia</Text>
          <Text style={style.subtitle}>mg/ dL</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={ThreeModal}>
          <Text style={style.title}>Unidade de medida das cetonas</Text>
          <Text style={style.subtitle}>mmol/L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={FourModal}>
          <Text style={style.title}>Unidade de medida do colesterol</Text>
          <Text style={style.subtitle}>mmol/L</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.button} onPress={FiveModal}>
          <Text style={style.title}>Unidade Hb1Ac</Text>
          <Text style={style.subtitle}>DCCT (%)</Text>
        </TouchableOpacity>
      </View>
      {
        modal == 1 && 
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.black
            }}>
            Unidades de medida
          </Dialog.Title>
          <RadioButtonGroup
          >
            <RadioButtonItem value="Feminino" label="Métrico (kg, g, ml, cm)" />
            <RadioButtonItem value="Masculino" label="US (lbs, oz, fl, inch)" />
          </RadioButtonGroup>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal == 2 && 
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.black
            }}>
            Unidades de glicemia
          </Dialog.Title>
          <RadioButtonGroup
          >
            <RadioButtonItem value="Feminino" label="mmol/L" />
            <RadioButtonItem value="Masculino" label="mg/dL " />
          </RadioButtonGroup>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal == 3 && 
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.black
            }}>
            Unid. de medida das cetonas
          </Dialog.Title>
          <RadioButtonGroup
          >
            <RadioButtonItem value="Feminino" label="mmol/L" />
            <RadioButtonItem value="Masculino" label="mg/dL " />
          </RadioButtonGroup>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal == 4 && 
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.black
            }}>
            Unid. de medida das colesterol
          </Dialog.Title>
          <RadioButtonGroup
          >
            <RadioButtonItem value="Feminino" label="mmol/L" />
            <RadioButtonItem value="Masculino" label="mg/dL " />
          </RadioButtonGroup>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      {
        modal == 5 && 
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.black
            }}>
            Unidade Hb1Ac
          </Dialog.Title>
          <RadioButtonGroup
          >
            <RadioButtonItem value="Feminino" label="DCCT (%) "/>
            <RadioButtonItem value="Masculino" label="IFCC (mmol/mol)" />
          </RadioButtonGroup>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={() => null} />
        </Dialog.Container>
      }
      <Footer />
    </View>
  );
};

export default Units;