import React from 'react';
import { StyleSheet } from 'react-native';
import { Appbar as AppbarA, FAB, useTheme } from 'react-native-paper';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BOTTOM_APPBAR_HEIGHT = 80;
const MEDIUM_FAB_HEIGHT = 56;

export type ItemType = {
  name: string;
  icon: string;
  label?: string;
  display?: 'show' | 'disabled' | 'hidden';
};

interface Props {
  items?: ItemType[];
  onSelect?: (selected: ItemType) => void;
  topTitle?: string;
  isBottom?: boolean;
  // TODO:
  //size?: "small" | "medium" | "large";
}

export const Appbar = ({
  items = [],
  onSelect,
  topTitle,
  isBottom = false,
}: Props) => {
  const { bottom } = useSafeAreaInsets();
  const theme = useTheme();
  const [active, setActive] = React.useState('');

  const backItem = items.find((e) => e.name === 'back');
  const fabItem = items.find((e) => e.name === 'fab');
  const actionItems = items.filter(
    (e) => e.name !== 'back' && e.name !== 'fab'
  );

  function _onPress(item: ItemType) {
    setActive(item.name);
    onSelect && onSelect(item);
  }

  // TODO:
  // const actionSize = size === 'small' ? 20
  //   : size === 'medium' ? 24
  //   : size === 'large' ? 26 : 24;
  // const bottomAppbarHeight = size === 'small' ? MEDIUM_BOTTOM_APPBAR_HEIGHT - 10
  //   : size === 'medium' ? MEDIUM_BOTTOM_APPBAR_HEIGHT
  //   : size === 'large' ? MEDIUM_BOTTOM_APPBAR_HEIGHT + 5 : MEDIUM_BOTTOM_APPBAR_HEIGHT;
  // const fabSize = size === 'small' ? MEDIUM_FAB_HEIGHT - 2
  //   : size === 'medium' ? MEDIUM_FAB_HEIGHT
  //   : size === 'large' ? MEDIUM_FAB_HEIGHT + 2: MEDIUM_FAB_HEIGHT;

  if (isBottom) {
    return (
      <AppbarA
        style={[
          styles.bottom,
          {
            height: BOTTOM_APPBAR_HEIGHT + bottom,
            backgroundColor: theme.colors.elevation.level2,
          },
        ]}
        safeAreaInsets={{ bottom }}
      >
        {actionItems.map((e) => (
          <AppbarA.Action
            icon={e.icon}
            disabled={e.display === 'disabled'}
            onPress={() => _onPress(e)}
            key={e.name}
          />
        ))}
        {fabItem && (
          <FAB
            mode="flat"
            icon={fabItem.icon}
            onPress={() => _onPress(fabItem)}
            style={[
              styles.fab,
              { top: (BOTTOM_APPBAR_HEIGHT - MEDIUM_FAB_HEIGHT) / 2 },
            ]}
          />
        )}
      </AppbarA>
    );
  } else {
    return (
      <AppbarA.Header>
        {backItem && <AppbarA.BackAction onPress={() => _onPress(backItem)} />}
        <AppbarA.Content title={topTitle || ''} />
        {actionItems.map((e) => (
          <AppbarA.Action
            icon={e.icon}
            disabled={e.display === 'disabled'}
            onPress={() => _onPress(e)}
            key={e.name}
          />
        ))}
      </AppbarA.Header>
    );
  }
};

const styles = StyleSheet.create({
  bottom: {
    backgroundColor: 'aquamarine',
    // position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  fab: {
    position: 'absolute',
    right: 16,
  },
});

/*
        <AppbarA.Action icon="archive" onPress={() => {}} />
        <AppbarA.Action icon="email" onPress={() => {}} />
        <AppbarA.Action icon="label" onPress={() => {}} />
        <AppbarA.Action icon="delete" onPress={() => {}} />
 */
