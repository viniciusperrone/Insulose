import React, { ReactNode, useState } from 'react';
import { Animated } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { style } from './style';

type Props = {
  height: any;
  children: ReactNode;
}

const Modal: React.FC<Props> = ({ children, height }) => {

  const [heightAnimated, setHeightAnimated] = useState<any>(new Animated.Value(0));

  Animated.timing(
    heightAnimated,
    {
      toValue: height,
      duration: 800
    }
  ).start();

  return (
    <Animated.View style={[style.container, { height: heightAnimated}]}>
      <LinearGradient
        colors={['#4448E6', '#562ED9']}
        style={[style.content, { height: heightAnimated }]}
      >
        {children}
      </LinearGradient>
    </Animated.View>
  );
};

export default Modal;