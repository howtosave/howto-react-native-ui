import React, { memo } from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

type Props = {
  source?: ImageSourcePropType;
};

const Logo = ({ source }: Props) => (
  <Image source={source} style={styles.image} />
);

const styles = StyleSheet.create({
  image: {
    width: 128,
    height: 128,
    marginBottom: 12,
  },
});

export default memo(Logo);
