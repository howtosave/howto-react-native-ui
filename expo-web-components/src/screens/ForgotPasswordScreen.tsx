import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
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

type Props = NativeStackScreenProps<RootStackParamList, 'ForgotPassword'>;

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
    justifyContent: "center",
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
