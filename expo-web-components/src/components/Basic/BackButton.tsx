import React, { memo } from 'react';
import { TouchableOpacity, Image, StyleSheet, StatusBar, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

type Props = {
  goBack: () => void;
};

const BackButton = ({ goBack }: Props) => (
  <TouchableOpacity onPress={goBack} style={styles.container}>
    <AntDesign name="arrowleft" size={24} color="black" />
  </TouchableOpacity>
);

const getStatusBarHeight = () => Platform.select({
  android: StatusBar.currentHeight || 0,
  default: 0,
});

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 10,
  },
});

export default memo(BackButton);
