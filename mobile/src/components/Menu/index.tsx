import React, { useState } from 'react';
import {
  Animated,
  View
} from 'react-native';

import { style } from './style';

const Menu: React.FC = () => {
  const [width, setWidth] = useState<any>(new Animated.Value(0));

  Animated.timing(
    width,
    {
      toValue: 400,
      duration: 600
    }
  ).start()
  return (
    <Animated.View style={[style.container, { width: width }]}>
      <View style={{ flex: 1 }}></View>
    </Animated.View>
  );
};

export default Menu;