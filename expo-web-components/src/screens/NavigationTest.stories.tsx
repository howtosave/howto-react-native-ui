import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackHeaderProps, NativeStackScreenProps } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';
import { Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

type NavigationTestProps = {
  screen?: ScreenName;
};
type Story = ComponentStory<typeof NavigationTest>;

const NavigationTest: React.FC<NavigationTestProps> = (props) => {
  return <></>
}

const NavigationTestMeta: ComponentMeta<typeof NavigationTest> = {
  title: "Navi/NavigationTest",
  component: NavigationTest,
  argTypes: {
  },
  args: {
  },
};
export default NavigationTestMeta;

const screens = {
  Screen1: () => <Text>screen1</Text>,
  Screen2: () => <Text>screen2</Text>,
  Screen3: () => <Text>screen3</Text>,
};
type ScreenName = keyof typeof screens;
type ScreenParamList = {
  [name in ScreenName]: undefined;
};

const BasicStack = createNativeStackNavigator<ScreenParamList>();
const BasicStackNavi = (props: NavigationTestProps) => (
  <NavigationContainer>
    <BasicStack.Navigator initialRouteName={props.screen}>
      {(Object.keys(screens) as ScreenName[]).map((e) => (
        <BasicStack.Screen name={e} component={screens[e] as any} key={e} />
      ))}
    </BasicStack.Navigator>
  </NavigationContainer>
);

export const BasicStackStory: Story = (args) => <BasicStackNavi {...args} />;
BasicStackStory.args = {
  screen: 'Screen2',
};

const DrawerStack = createDrawerNavigator<ScreenParamList>();
const DrawerStackNavi = (props: NavigationTestProps) => (
  <NavigationContainer>
    <DrawerStack.Navigator initialRouteName={props.screen}>
      {(Object.keys(screens) as ScreenName[]).map((e) => (
        <DrawerStack.Screen name={e} component={screens[e] as any} key={e} />
      ))}
    </DrawerStack.Navigator>
  </NavigationContainer>
)
export const DrawerStackStory: Story = (args) => <DrawerStackNavi {...args} />;
DrawerStackStory.args = {
  screen: 'Screen1',
};
