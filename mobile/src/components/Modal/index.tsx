import React, { ReactNode, useState } from 'react';
import { Animated, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { style } from './style';

type Props = {
  height: number;
  children: ReactNode;
}

const Modal = ({ children, height }: Props) => {

  const [heightAnimated, setHeightAnimated] = useState<any>(new Animated.Value(0));

  Animated.timing(
    heightAnimated,
    {
      toValue: height,
      duration: 800,
      useNativeDriver: false
    }
  ).start();

  const AnimatedGradient = Animated.createAnimatedComponent(LinearGradient);
  return (
    <Animated.View style={[style.container, { opacity: 1, height: heightAnimated }]}>
      <View
        style={{
          backgroundColor: '#4448E6',
          flex: 1,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30
        }}
      >
  
        {children}
      </View>
    </Animated.View>
  );
};

export default React.memo(Modal);