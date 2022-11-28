import { NavigationContainer } from '@react-navigation/native';
import type {
  NativeStackNavigationOptions,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { Button, Text, View } from 'react-native';

type RootStackParamList = {
  Home: undefined;
  About?: {
    param: string;
  };
};

//
// Screens
//

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', { param: 'hi' })}
      />
    </View>
  );
}

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

function AboutScreen({ navigation, route }: AboutProps) {
  const { param } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen: Param is {param || 'NULL'}</Text>
      <Button
        title="Go to About... again"
        onPress={() => navigation.navigate('About')}
      />
      <Button title="Go back" onPress={() => navigation.goBack()} />

      <Button title="Push" onPress={() => navigation.push('About')} />
      <Button title="Pop to Top" onPress={() => navigation.popToTop()} />
    </View>
  );
}

//
// Navigation
//

const Stack = createNativeStackNavigator<RootStackParamList>();
const naviOptions: NativeStackNavigationOptions = {
  title: 'Overview',
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={naviOptions}
        />
        <Stack.Screen
          name="About"
          component={AboutScreen}
          options={({ route }) => ({
            title: route?.params?.param,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
