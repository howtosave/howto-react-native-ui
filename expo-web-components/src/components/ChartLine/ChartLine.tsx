import React from 'react';
import { StyleSheet } from 'react-native';
import type { VictoryLineProps } from 'victory';
import {
  VictoryChart,
  VictoryLine,
  VictoryStack,
  VictoryTheme,
} from 'victory-native';

type ChartData = VictoryLineProps['data'][];
type LineStyle = VictoryLineProps['style'];

interface ChartLineProps {
  data: ChartData;
  style?: LineStyle;
}

export const ChartLine = ({ data, style }: ChartLineProps) => {
  const isStacked = data.length > 1;

  return (
    <VictoryChart theme={VictoryTheme.material}>
      {isStacked ? (
        <VictoryStack>
          {data.map((d, idx) => (
            <VictoryLine style={style} data={d} key={idx} />
          ))}
        </VictoryStack>
      ) : (
        <VictoryLine style={style} data={data[0]} />
      )}
    </VictoryChart>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'violet',
  },
  text: { color: 'blue' },
});
