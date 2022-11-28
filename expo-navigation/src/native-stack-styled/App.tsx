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
    setCount: React.Dispatch<React.SetStateAction<number>>;
  };
};

//
// Screens
//

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

function HomeScreen({ navigation }: HomeProps) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count" />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen: {count}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate('About', { param: 'hi', setCount })}
      />
    </View>
  );
}

type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

function AboutScreen({ navigation, route }: AboutProps) {
  React.useEffect(() => {
    // Override back button(headerLeft)
    navigation.setOptions({
      headerLeft: () => (
        <Button onPress={() => navigation.goBack()} title="Back" />
      ),
    });
  }, [navigation]);

  const { param, setCount } = route.params || {};
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About Screen: Param is {param || 'NULL'}</Text>
      {setCount && (
        <Button title="Set Cound" onPress={() => setCount((c) => c + 1)} />
      )}
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

type LogoTitleProps = {};
function LogoTitle(props: LogoTitleProps) {
  return <Text>Logo</Text>;
}
//
// Navigation
//

const Stack = createNativeStackNavigator<RootStackParamList>();

const naviOptions: NativeStackNavigationOptions = {
  headerTitle: (props: LogoTitleProps) => <LogoTitle {...props} />,
  // Add a placeholder button without the `onPress` to avoid flicker
  headerRight: () => <Button title="Update count" color="#00f" />,
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  // props for back button
  // headerBackTitleStyle:
  // headerBackTitle:
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Overview', ...naviOptions }}
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
