import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { NativeStackScreenProps, NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

type RootStackParamList = {
  Main: undefined;
  HomeTab: undefined;
  AboutTab: undefined;
};

type HomeTabParamList = {
  Home: undefined;
  HomeDetails: undefined;
};

type AboutTabParamList = {
  About: undefined;
  AboutDetails: undefined;
};


//
// Screens
//

type MainProps = NativeStackScreenProps<RootStackParamList, 'Main'>;
const MainScreen = ({ navigation }: MainProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Main</Text>
    <View style={{ height: 100, justifyContent: 'space-between' }}>
      <Button title={'Home'} onPress={() => navigation.navigate('HomeTab')}/>
      <Button title={'About'} onPress={() => navigation.navigate('AboutTab')}/>
    </View>
  </View>
);

type HomeProps = NativeStackScreenProps<HomeTabParamList, 'Home'>;
type HomeDetailsProps = NativeStackScreenProps<HomeTabParamList, 'HomeDetails'>;

const HomeScreen = ({ navigation }: HomeProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home</Text>
  </View>
);

const HomeDetailsScreen = ({ navigation }: HomeDetailsProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Details</Text>
  </View>
);

type AboutProps = NativeStackScreenProps<AboutTabParamList, 'About'>;
type AboutDetailsProps = NativeStackScreenProps<AboutTabParamList, 'AboutDetails'>;

const AboutScreen = ({ navigation }: AboutProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>About</Text>
  </View>
);

const AboutDetailsScreen = ({ navigation }: AboutDetailsProps) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>About Details</Text>
  </View>
);

//
// Navigation Screens
//

const HomeTab = createBottomTabNavigator<HomeTabParamList>();
const HomeTabScreen = () => (
  <HomeTab.Navigator>
    <HomeTab.Screen name="Home" component={HomeScreen}/>
    <HomeTab.Screen name="HomeDetails" component={HomeDetailsScreen}/>
  </HomeTab.Navigator>
)

const AboutTab = createBottomTabNavigator<AboutTabParamList>();
const AboutTabScreen = () => (
  <AboutTab.Navigator>
    <AboutTab.Screen name="About" component={AboutScreen}/>
    <AboutTab.Screen name="AboutDetails" component={AboutDetailsScreen}/>
  </AboutTab.Navigator>
)

//
// Navigation
//

const RootStack = createNativeStackNavigator<RootStackParamList>();
const naviOptions: NativeStackNavigationOptions = { 
  title: 'Overview' 
};

function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen 
          name="Main" 
          component={MainScreen} 
          options={naviOptions}
        />
        <RootStack.Screen 
          name="HomeTab" 
          component={HomeTabScreen}
        />
        <RootStack.Screen 
          name="AboutTab" 
          component={AboutTabScreen}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
