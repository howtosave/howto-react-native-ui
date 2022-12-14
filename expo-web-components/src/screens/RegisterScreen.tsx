/* eslint-disable import/no-commonjs */
import type { NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';

import {
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

type Props = {
  onSignUpPressed: (name: string, email: string, password: string) => void;
  navigation: NavigationProp<any>;
};

const backgroundDot = require('./assets/background_dot.png');
const logo = require('./assets/logo.png');

export default ({ navigation, onSignUpPressed }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const theme = useTheme();

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

    onSignUpPressed(name.value, email.value, password.value);
  };

  return (
    <Background source={backgroundDot}>
      <Layout
        style={styles.container}
        navigation={navigation}
        withKeyboardAvoidingView
      >
        <Logo source={logo} />

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
          <Text style={[styles.label, { color: theme.colors.secondary }]}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.link, { color: theme.colors.secondary }]}>
              Login
            </Text>
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
      // - react-navigation stack??? ?????????, ??? ??? ?????? 'center' ??? ?????? ??? ???????????? ????????? ????????? ????????? ?????????
      // - Android????????? ?????? ?????? ?????????
      // - ?????? ????????? native-stack??? ??? ???????????? flex layout ????????? height ?????? 0?????? ?????????????????? ??????????????? ?????????
      // - Android?????? ?????? ???????????? ?????? ????????? native-stack??? ??? ?????? ?????? ??? ???????????? ?????????
      web: 'flex-start',
      default: 'center',
    }),
  },
  textInput: {
    width: '70%',
  },
  label: {
    fontSize: 20,
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
  },
});
