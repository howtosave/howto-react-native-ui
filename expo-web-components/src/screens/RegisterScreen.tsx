import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { memo, useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  BackButton,
  Background,
  Button,
  Header,
  Layout,
  Logo,
  TextInput,
} from '../components/Basic';
import {
  emailValidator,
  nameValidator,
  passwordValidator,
} from '../libs/input-validator';
import { theme } from '../theme';

type Props = NativeStackScreenProps<MainStackParamList, 'Register'>;

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    navigation.navigate('Dashboard');
  };

  return (
    <Background source={require('./assets/background_dot.png')}>
      <Layout
        style={styles.container}
        navigation={navigation}
        withKeyboardAvoidingView
      >
        <Logo source={require('./assets/logo.png')} />

        <Header>Create Account</Header>

        <TextInput
          style={styles.textInput}
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={(text) => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />

        <TextInput
          style={styles.textInput}
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={(text) => setEmail({ value: text, error: '' })}
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
          onChangeText={(text) => setPassword({ value: text, error: '' })}
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />

        <Button
          mode="contained"
          onPress={_onSignUpPressed}
          style={styles.button}
        >
          Sign Up
        </Button>

        <View style={styles.row}>
          <Text style={styles.label}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.link}>Login</Text>
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
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
    width: '60%',
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});

export default memo(RegisterScreen);
