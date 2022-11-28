import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  type ScaledSize,
  ScrollView,
} from 'react-native';
import {
  createDrawerNavigator,
  type DrawerScreenProps,
} from '@react-navigation/drawer';
import type { CompositeScreenProps } from '@react-navigation/native';
import type { StackScreenProps } from '@react-navigation/stack';
import { List, useTheme } from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { type RootStackParamList, PAGES, PAGE_NAMES } from '../pages';

export type HomeDrawerParamList = {
  HomeDrawer: undefined;
};

const Drawer = createDrawerNavigator<HomeDrawerParamList>();

export default function HomePage() {
  const [dimensions, setDimensions] = React.useState(Dimensions.get('window'));
  const theme = useTheme();

  React.useEffect(() => {
    const onDimensionsChange = ({ window }: { window: ScaledSize }) => {
      setDimensions(window);
    };

    const dimSub = Dimensions.addEventListener('change', onDimensionsChange);

    return () => dimSub.remove();
  }, []);

  const isLargeScreen = dimensions.width >= 1024;

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerType: isLargeScreen ? 'permanent' : undefined,
      }}
    >
      <Drawer.Screen
        name="HomeDrawer"
        options={{
          title: 'Home',
          drawerIcon: ({ size, color }) => (
            <MaterialIcons size={size} color={color} name="folder" />
          ),
        }}
      >
        {({
          navigation,
        }: CompositeScreenProps<
          DrawerScreenProps<HomeDrawerParamList, 'HomeDrawer'>,
          StackScreenProps<RootStackParamList>
        >) => (
          <ScrollView
            style={{ backgroundColor: theme.colors.background }}
          >
            <SafeAreaView>
              {PAGE_NAMES.map((name) => (
                <List.Item
                  key={name}
                  testID={name}
                  title={PAGES[name].title}
                  onPress={() => {
                    navigation.navigate(name);
                  }}
                />
              ))}
            </SafeAreaView>
          </ScrollView>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>

  );
}