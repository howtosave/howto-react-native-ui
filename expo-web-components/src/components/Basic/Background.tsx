import React, { memo } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  children: React.ReactNode;
  source?: ImageSourcePropType;
};

const Background = ({ source, children }: Props) => (
  <ImageBackground
    source={source}
    resizeMode="repeat"
    style={styles.background}
  >
    {children}
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default memo(Background);
