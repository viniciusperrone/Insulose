import React from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native';

type Props = TouchableOpacityProps & {
  height: number;
  width: number;
  title: string;
}

import { style } from './style';

const Button: React.FC<Props> = ({ title, width, height }) => {
  return(
    <TouchableOpacity style={[style.container, { width: width, height: height }]}>
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Button;