import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import Dialog from 'react-native-dialog';

import { useAuth } from '../../../hooks/auth';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';
import { fonts } from '../../../style/fonts';
import { colors } from '../../../style/colors';

import api from '../../../server/api';

type ProfileUpdate = {
  first_name: string;
  last_name: string;
  date_birth: Date;
  sex_gender: string;
  weight: string,
  height: string,
}

const UpdateProfile: React.FC = () => {

  const { user, setUser } = useAuth();
  const [profile, setProfile] = useState({} as ProfileUpdate);
  const [visible, setVisible] = useState(false);
  const [modal, setModal] = useState<number>();

  function handleModalFirstName() {
    setVisible(true);
    setModal(1);
  }

  function handleModalLastName() {
    setVisible(true);
    setModal(2);
  }

  function handleModalSexGender() {
    setVisible(true);
    setModal(3);
  }

  function handleModalDateBirth() {
    setVisible(true);
    setModal(4);
  }

  function handleModalWeight() {
    setVisible(true);
    setModal(5);
  }

  function handleModalHeight() {
    setVisible(true);
    setModal(6);
  }

  async function handleUpdateProfile(){
    setVisible(false);
    const response = await api.put('/update', {
      first_name: profile.first_name,
      last_name: profile.last_name,
      sex_gender: profile.sex_gender,
      date_birth: profile.date_birth,
      weight: Number(profile.weight),
      height: Number(profile.height)
    });
    if(!response){
      console.log('Error');
      return;
    }
    setUser({
      id: user.id,
      first_name: response.data.user.first_name,
      last_name: response.data.user.last_name,
      birth_date: response.data.user.birth_date,
      sex_gender: response.data.user.sex_gender,
      weight: response.data.user.weight,
      height: response.data.user.height,
      email: user.email,
      password: user.password
    });
    return;
  }

  return (
    <View style={style.container}>
      <HeaderApp title="Dados pessoais" />
      <View style={style.content}>
        <TouchableOpacity style={style.button} onPress={handleModalFirstName}>
          <Text style={style.title}>Primeiro Nome</Text>
          <Text style={style.subtitle}>{user.first_name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleModalLastName}>
          <Text style={style.title}>Último Nome</Text>
          <Text style={style.subtitle}>{user.last_name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleModalSexGender}>
          <Text style={style.title}>Sexo</Text>
          <Text style={style.subtitle}>{user.sex_gender}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleModalDateBirth}>
          <Text style={style.title}>Data de nascimento</Text>
          <Text style={style.subtitle}>{`${user.birth_date.slice(8, 10)}/${user.birth_date.slice(5, 7)}/${user.birth_date.slice(0, 4)}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleModalWeight}>
          <Text style={style.title}>Peso</Text>
          <Text style={style.subtitle}>{user.weight} kg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={handleModalHeight}>
          <Text style={style.title}>Altura</Text>
          <Text style={style.subtitle}>{user.height} cm</Text>
        </TouchableOpacity>
      </View>
      {
        modal === 1 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title>Primeiro Nome</Dialog.Title>
          <Dialog.Input
            placeholder={user.first_name}
            value={profile.first_name}
            onChangeText={e => setProfile({
              first_name: e,
              last_name: profile.last_name,
              date_birth: profile.date_birth,
              sex_gender: profile.sex_gender,
              weight: profile.weight,
              height: profile.height
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={handleUpdateProfile} />
        </Dialog.Container>
      }
      {
        modal === 2 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title
            style={{
              fontSize: 20,
              fontFamily: fonts.poppins_600,
              color: colors.gray_light
            }}>
            Último Nome
          </Dialog.Title>
          <Dialog.Input
            placeholder={user.first_name}
            value={profile.first_name}
            onChangeText={e => setProfile({
              first_name: profile.first_name,
              last_name: e,
              date_birth: profile.date_birth,
              sex_gender: profile.sex_gender,
              weight: profile.weight,
              height: profile.height
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={handleUpdateProfile} />
        </Dialog.Container>
      }
      {
        modal === 3 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title style={style.titleModal}>
            Sexo
          </Dialog.Title>
          <Dialog.CodeInput></Dialog.CodeInput>
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={handleUpdateProfile} />
        </Dialog.Container>
      }
      {
        modal === 4 &&
        <Dialog.Container></Dialog.Container>
      }
      {
        modal === 5 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title style={style.titleModal}>
            Peso
          </Dialog.Title>
          <Dialog.Input
            placeholder={user.first_name}
            value={profile.first_name}
            onChangeText={e => setProfile({
              first_name: profile.first_name,
              last_name: profile.last_name,
              date_birth: profile.date_birth,
              sex_gender: profile.sex_gender,
              weight: e,
              height: profile.height
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={handleUpdateProfile} />
        </Dialog.Container>
      }
      {
        modal === 6 &&
        <Dialog.Container visible={visible}>
          <Dialog.Title style={style.titleModal}>
            Altura
          </Dialog.Title>
          <Dialog.Input
            placeholder={'cm'}
            keyboardType={'decimal-pad'}
            value={profile.sex_gender}
            onChangeText={e => setProfile({
              first_name: profile.first_name,
              last_name: profile.last_name,
              date_birth: profile.date_birth,
              sex_gender: profile.sex_gender,
              weight: profile.weight,
              height: e
            })}
          />
          <Dialog.Button label="cancelar" onPress={() => setVisible(false)} />
          <Dialog.Button label="ok" onPress={handleUpdateProfile} />
        </Dialog.Container>
      }
      <Footer />

    </View>
  )
}

export default UpdateProfile;