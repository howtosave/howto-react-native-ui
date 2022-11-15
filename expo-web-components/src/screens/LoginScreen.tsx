import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Platform } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  Background,
  Logo,
  Header,
  Paragraph,
  Button,
  TextInput,
  Layout,
} from '../components/Basic';
import { theme } from '../theme';
import { emailValidator, passwordValidator } from '../libs/input-validator';

type Props = NativeStackScreenProps<MainStackParamList, 'Login'>;

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background source={require('./assets/background_dot.png')}>
      <Layout style={styles.container} navigation={navigation} withKeyboardAvoidingView>
        <Logo source={require('./assets/logo.png')}/>

        <Header>Welcome back.</Header>

        <TextInput
          style={styles.textInput}
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          // autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />

        <TextInput
          style={styles.textInput}
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
          >
            <Text style={styles.label}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>

        <Button mode="contained" onPress={_onLoginPressed} style={styles.button}>
          Login
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.link}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </Layout>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
  forgotPassword: {
    width: '70%',
    alignItems: 'flex-end',
  },
  button: {
    marginTop: 24,
    width: '60%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(LoginScreen);
