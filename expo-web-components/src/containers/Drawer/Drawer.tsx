import React from "react";
import { StyleSheet } from "react-native";
import { Drawer as DrawerA } from 'react-native-paper';

type ItemType = {
  icon: string;
  label: string;
  name: string;
}

interface Props {
  items: ItemType[];
  onSelect?: (selected: ItemType) => void;
  title?: string;
  isCollapsed?: boolean;
}

export const Drawer = ({
  items,
  onSelect,
  title,
  isCollapsed=false,
}: Props) => {
  const [active, setActive] = React.useState('');

  function _onPress(item: ItemType) {
    setActive(item.name);
    onSelect && onSelect(item);
  }  
  return (
    <DrawerA.Section title={title}>
      {items.map((e) => {
        if (isCollapsed)
          return <DrawerA.CollapsedItem
            icon={e.icon}
            label={e.label}
            active={active === e.name}
            onPress={() => _onPress(e)}
            key={e.name}
          />;
        else
          return <DrawerA.Item
            icon={e.icon}
            label={e.label}
            active={active === e.name}
            onPress={() => _onPress(e)}
            key={e.name}
          />;
      })}
    </DrawerA.Section>
  );
};

const styles = StyleSheet.create({
});
