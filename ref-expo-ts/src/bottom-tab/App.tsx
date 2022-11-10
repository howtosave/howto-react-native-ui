import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
//import type { GLYPHS } from '@expo/vector-icons/Ionicons';

type RootStackParamList = {
  Home: undefined;
  About?: {};
};

//
// Screens
//

type HomeProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type AboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

const HomeScreen = (props: HomeProps) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home</Text>
    <Button title={'Go to About'} onPress={() => props.navigation.navigate('About')}/>
  </View>
);

const AboutScreen = (props: AboutProps) => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>About</Text>
    <Button title={'Go to Home'} onPress={() => props.navigation.navigate('Home')}/>
  </View>
);


//
// Navigation
//
const Tab = createBottomTabNavigator<RootStackParamList>();
const tabOptions: BottomTabNavigationOptions = { 
  tabBarBadge: 3 
};

function TabNavigation() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'ios-information-circle'
            : 'ios-information-circle-outline';
        } else if (route.name === 'About') {
          iconName = focused ? 'ios-list' : 'ios-list-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="About" component={AboutScreen} options={tabOptions}/>
    </Tab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}

export default App;
