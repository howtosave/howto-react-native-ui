import React from 'react';
import { StyleSheet } from 'react-native';
import type { VictoryScatterProps } from 'victory';
import {
  VictoryChart,
  VictoryScatter,
  VictoryStack,
  VictoryTheme,
} from 'victory-native';

type ChartData = VictoryScatterProps['data'][];
type ScatterStyle = VictoryScatterProps['style'];

interface ChartScatterProps {
  data: ChartData;
  style?: ScatterStyle;
}

export const ChartScatter = ({ data, style }: ChartScatterProps) => {
  const isStacked = data.length > 1;

  return (
    <VictoryChart theme={VictoryTheme.material}>
      {isStacked ? (
        <VictoryStack>
          {data.map((d, idx) => (
            <VictoryScatter style={style} data={d} key={idx} />
          ))}
        </VictoryStack>
      ) : (
        <VictoryScatter style={style} data={data[0]} />
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
