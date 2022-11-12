import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import {
  Text,
  TextProps,
} from 'react-native-paper';
import { useInterval } from '../../hooks/useInterval';

interface TextNumberProps extends TextProps {
  start?: number;
  value: number;
  duration?: number; // in ms
  comma?: boolean;
  format?: string;
}
const INTERVAL = 50;

export const TextNumber: React.FC<TextNumberProps> = ({
  start=0, value, duration=1000, comma=true, format, children, ...rest
}) => {
  const [_value, setValue] = React.useState(start);

  const incVal = Math.ceil((value - start) / (duration / INTERVAL));
  useInterval(() => {
    const newVal = _value + incVal;
    //console.log('>>> newVal:', newVal);
    if (incVal === 0 || (incVal > 0 && newVal >= value) || (incVal < 0 && newVal <= value)) {
      setValue(value);
      return false; // stop interval
    }
    else {
      setValue(newVal);
      return true; // keep interval alive
    }
  }, INTERVAL);

  // React.useEffect(() => {
  //   const incVal = Math.ceil((value - start) / (duration / INTERVAL));
  //   //console.log('>>> incVal:', incVal);
  //   const htimer = setInterval(() => {
  //     setValue((prevVal) => {
  //       const newVal = prevVal + incVal;
  //       //console.log('>>> newVal:', newVal);
  //       if (incVal === 0 || (incVal > 0 && newVal >= value) || (incVal < 0 && newVal <= value)) {
  //         clearInterval(htimer);
  //         return value;
  //       }
  //       else {
  //         return newVal;
  //       }
  //     });
  //   }, INTERVAL);

  //   return () => {
  //     clearInterval(htimer);
  //   }
  // }, [value]);

  return (
    <Text {...rest}>
      {comma ? numberWithCommas(_value) : _value}{children}
    </Text>
  );
};

function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "blue" },
});
