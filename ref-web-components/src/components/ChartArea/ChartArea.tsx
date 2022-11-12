import React from "react";
import { StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryArea,
  VictoryStack,
  VictoryLegend,
  VictoryTheme,
} from "victory-native";
import type { VictoryAreaProps, VictoryLegendProps } from 'victory';

type ChartData = VictoryAreaProps['data'][];
type AreaStyle = VictoryAreaProps['style'];
type LegendData = VictoryLegendProps['data'];

interface ChartAreaProps {
  data: ChartData;
  style?: AreaStyle;
  title?: string;
  legend?: LegendData;
  legendPos?: {
    x?: number;
    y?: number;
  }
}

export const ChartArea = ({ data, style, title, legend, legendPos }: ChartAreaProps) => {
  const isStacked = data.length > 1;

  return (
    <VictoryChart theme={VictoryTheme.material}>
      {isStacked ? (
        <VictoryStack
        >
          {data.map((d, idx) => (
            <VictoryArea
              style={style}
              data={d}
              key={idx}
            />
          ))}
        </VictoryStack>
      ) : (
        <VictoryArea
          data={data[0]}
        />
      )}
      {(title || legend) && (
        <VictoryLegend {...(legendPos || {})}
          title={title}
          centerTitle
          data={legend ? legend : []}
        />
      )}
    </VictoryChart>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "violet",
  },
  text: { color: "blue" },
});
