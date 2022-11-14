import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Layout,
} from '../components/Basic';

type Props = NativeStackScreenProps<RootStackParamList, 'Landing'>;

const LandingScreen = ({ navigation }: Props) => (
  <Background source={require('./assets/background_dot.png')}>
    <Layout style={styles.container} navigation={navigation}>
        <Logo source={require('./assets/logo.png')}/>

        <Header>Landing Template</Header>

        <Paragraph>
          The easiest way to start with your amazing application.
        </Paragraph>

    </Layout>
  </Background>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
});

export default memo(LandingScreen);
