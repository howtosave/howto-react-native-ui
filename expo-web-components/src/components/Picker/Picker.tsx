import { Picker as PickerA } from '@react-native-picker/picker';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

interface ItemType {
  label?: string;
  value: string | number;
}

interface Props<T> {
  selected: T;
  items: T[];
  onChange: (e: T, idx: number) => void;
  isDropdown?: boolean;
}

export const Picker = <T extends ItemType>({
  selected,
  items,
  onChange,
  isDropdown = false,
}: Props<T>) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(selected.value);
  React.useEffect(() => {
    if (selected.value === value) return;
    const idx = items.findIndex((e) => e.value === value);
    onChange(items[idx], idx);
  }, [value]);

  if (isDropdown)
    return (
      <DropDownPicker
        items={items}
        value={value}
        setValue={setValue}
        open={open}
        setOpen={setOpen}
        zIndex={2}
      />
    );
  else
    return (
      <PickerA
        selectedValue={selected}
        onValueChange={onChange}
        style={styles.picker}
      >
        {items.map((ex) => (
          <PickerA.Item
            key={ex.value}
            label={ex.label || `${ex.value}`}
            value={ex.value}
          />
        ))}
      </PickerA>
    );
};

const styles = StyleSheet.create({
  picker: {
    marginBottom: Platform.select({
      ios: -30,
      android: 0,
    }),
  },
});
