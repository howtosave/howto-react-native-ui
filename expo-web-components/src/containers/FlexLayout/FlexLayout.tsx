import React from 'react';
import type { FlexStyle, ViewStyle } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
type SizeInPercent = `${number}%`;
type SizeInEm = `${number}em`;

/**
 * Flex Layout Demo
 *
 * See https://reactnative.dev/docs/layout-props
 */

interface FlexLayoutProps {
  // alignContent controls how rows align in the cross direction,
  // overriding the alignContent of the parent.
  // See https://reactnative.dev/docs/layout-props#aligncontent
  alignCotent:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'space-between'
    | 'space-around';

  // alignItems aligns children in the cross direction.
  // See https://reactnative.dev/docs/layout-props#aligncontent
  alignItems: 'flex-start' | 'center' | 'flex-end' | 'stretch' | 'baseline';

  // When flex is a positive number, it makes the component flexible,
  // and it will be sized proportional to its flex value.
  // flex=1 <==> flexGrow=1, flexShrink=1, flexBase=0
  // When flex is 0, the component is sized according to width and height, and it is inflexible.
  // When flex is -1, the component is normally sized according to width and height.
  // However, if there's not enough space, the component will shrink to its minWidth and minHeight.
  // See https://reactnative.dev/docs/layout-props#flex
  // flex: number;

  // flexBasis is an axis-independent way of providing the default size of an item along the main axis.
  // See https://reactnative.dev/docs/layout-props#flexbasis
  flexBasis:
    | 'auto'
    /* Intrinsic sizing keywords */
    | 'max-content'
    | 'min-content'
    | 'fit-content'
    /* Automatically size based on the flex item's content */
    | 'content'
    /* Specify <'width'> */
    | SizeInPercent
    | SizeInEm
    | number;

  // sets the flex grow factor of a flex item's main size
  // See https://reactnative.dev/docs/layout-props#flexgrow
  flexGrow: number;

  // sets the flex shrink factor of a flex item.
  // See https://reactnative.dev/docs/layout-props#flexshrink
  flexShrink: number;

  // See https://reactnative.dev/docs/layout-props#flexdirection
  flexDirection: 'row' | 'row-reverse' | 'column' | 'column-reverse';

  // See https://reactnative.dev/docs/layout-props#flexwrap
  flexWrap: 'nowrap' | 'wrap' | 'wrap-reverse';

  // justifyContent aligns children in the main direction.
  // See https://reactnative.dev/docs/layout-props#justifycontent
  justifyContent:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';

  direction: 'inherit' | 'ltr' | 'rtl';

  // alignSelf controls how a child aligns in the cross direction,
  // overriding the alignItems of the parent.
  // See https://reactnative.dev/docs/layout-props#alignself
  child_alignSelf:
    | 'auto'
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline';
}

export const FlexLayout = ({
  child_alignSelf = 'auto',
  ...flexProps
}: FlexLayoutProps) => {
  const style = [styles.container, { ...flexProps }];

  const childStyle = [styles.text, { alignSelf: child_alignSelf }];

  return (
    <View style={style}>
      <Text style={childStyle}>Item1</Text>
      <Text style={styles.text}>Item2</Text>
      <Text style={styles.text}>Item3</Text>
      <Text style={styles.text}>Item4</Text>
      <Text style={styles.text}>Item5</Text>
      <Text style={styles.text}>Item6</Text>
      <Text style={styles.text}>Item7</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 150,
    borderColor: 'red',
    borderWidth: 1,
  },
  text: {
    color: 'black',
    borderColor: 'blue',
    borderWidth: 1,
    textAlign: 'center',
  },
});
