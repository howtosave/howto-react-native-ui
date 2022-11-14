import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { 
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  Layout,
} from '../components/Basic';

type Props = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen = ({ navigation }: Props) => (
  <Background source={require('./assets/background_dot.png')}>
    <Layout style={styles.container} navigation={navigation}>
      <Logo source={require('./assets/logo.png')}/>

      <Header>Let’s start</Header>
      
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
      </Paragraph>
      
      <Button mode="outlined" onPress={() => navigation.navigate('About')}>
        Logout
      </Button>
    
    </Layout>
  </Background>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: '70%',
  },
});

export default memo(DashboardScreen);
