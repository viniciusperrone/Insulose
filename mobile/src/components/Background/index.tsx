import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { style } from './style';

type Props = {
  children: ReactNode;
}

const Background: React.FC<Props> = ({ children }) => {
  return(
    <LinearGradient
      style={style.container}
      colors={['#680279', '#53197A', '#38197A', '#082F7B', '#0400D7']}
    >
      {children}
    </LinearGradient>
  );
};

export default Background;