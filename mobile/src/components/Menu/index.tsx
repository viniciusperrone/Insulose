import React, { useState } from 'react';
import {
  Animated,
  View
} from 'react-native';

import { useMenu } from '../../hooks/app';

import { style } from './style';

const Menu: React.FC = () => {
  const [width, setWidth] = useState<any>(new Animated.Value(0));
  const { openMenu, setOpenMenu} = useMenu();
  Animated.timing(
    width,
    {
      toValue: 250,
      duration: 600
    }
  ).start()
  return (
    <Animated.View style={[style.container, { opacity: openMenu ? 1 : 0, width: width }]}>
      <View style={{ flex: 1 }}></View>
    </Animated.View>
  );
};

export default Menu;