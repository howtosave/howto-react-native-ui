import React, { memo, useState } from 'react';
import { Text, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  BackButton,
  TextInput,
  Layout,
} from '../components/Basic';

import { emailValidator } from '../libs/input-validator';
import { theme } from '../theme';

type Props = NativeStackScreenProps<MainStackParamList, 'ForgotPassword'>;

const ForgotPasswordScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    navigation.navigate('Login');
  };

  return (
    <Background source={require('./assets/background_dot.png')}>
      <Layout style={styles.container} navigation={navigation}>
        <Logo source={require('./assets/logo.png')}/>

        <Header>Restore Password</Header>

        <TextInput
          style={styles.textInput}
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          // autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
          Send Reset Instructions
        </Button>

        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.label}>← Back to login</Text>
        </TouchableOpacity>
      </Layout>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: Platform.select({
      // N.B.
      // - react-navigation stack을 사용할, 때 이 값이 'center' 일 경우 웹 버전에서 화면이 짤리는 현상이 발생함
      // - Android에는는 정상 동작 확인됨
      // - 해당 원인은 native-stack의 웹 버전에서 flex layout 화면의 height 값이 0으로 계산됨으로써 발생된다고 추정됨
      // - Android에서 정상 동작되고 있기 때문에 native-stack의 웹 버전 변환 시 버그라고 판단됨
      web: 'flex-start',
      default: 'center',
    }),
  },
  textInput: {
    width: '70%',
  },
  button: {
    marginTop: 12,
    width: '60%',
  },
  label: {
    color: theme.colors.secondary,
    width: '60%',
  },
  back: {
    width: '60%',
    marginTop: 12,
  },
});

export default memo(ForgotPasswordScreen);
