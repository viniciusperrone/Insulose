import React, { ReactNode } from 'react';
import { View, TextInput, TextInputProps } from 'react-native';

type Props = TextInputProps & {
  width: number;
  children?: ReactNode;
}

import { style } from './style';

const Input: React.FC<Props> = ({
  width,
  children,
  ...rest }) =>
  <View style={[style.container, { width: width }]}>
    <TextInput style={style.input} {...rest} />
    {children}
  </View>

export default Input;
