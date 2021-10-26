import React from 'react';
import { View, TouchableOpacity, Text} from 'react-native';

import { useAuth } from '../../../hooks/auth';

import HeaderApp from '../../../components/HeaderApp';
import Footer from '../../../components/Footer';

import { style } from './style';

const UpdateProfile: React.FC = () => {

  const { user } = useAuth();
  return(
    <View style={style.container}>
      <HeaderApp title="Dados pessoais" />
      <View style={style.content}>
        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Primeiro Nome</Text>
          <Text style={style.subtitle}>{user.first_name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Último Nome</Text>
          <Text style={style.subtitle}>{user.last_name}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Sexo</Text>
          <Text style={style.subtitle}>{user.sex_gender}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Data de nascimento</Text>
          <Text style={style.subtitle}>{`${user.birth_date.slice(8,10)}/${user.birth_date.slice(5,7)}/${user.birth_date.slice(0,4)}`}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Peso</Text>
          <Text style={style.subtitle}>{user.weight} kg</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button}>
          <Text style={style.title}>Altura</Text>
          <Text style={style.subtitle}>{user.height} cm</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  )
}

export default UpdateProfile;