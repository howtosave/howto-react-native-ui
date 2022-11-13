import React from "react";
import { StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
  VictoryTooltip,
  VictoryTheme,
  Bar,
} from "victory-native";
import type { VictoryBarProps } from 'victory';

type ChartData = VictoryBarProps['data'][];
type BarStyle = VictoryBarProps['style'];

interface ChartBarProps {
  data: ChartData;
  style?: BarStyle;
}

export const ChartBar = ({ data, style }: ChartBarProps) => {
  const isGroup = data.length > 1;

  return (
    <VictoryChart 
      domainPadding={{ x: 40, y: 40 }} 
      theme={VictoryTheme.material}
      // style={{ background: { fill: 'lavender' }}}
    >
      {isGroup ? (
        <VictoryGroup
          offset={10}
          colorScale={"qualitative"}
        >
          {data.map((d, idx) => (
            <VictoryBar
              data={d}
              labelComponent={<VictoryTooltip />}
              labels={({ datum }) => datum.y}
              dataComponent={
                <Bar
                  tabIndex={0}
                />
              }
              key={idx}
            />
          ))}
        </VictoryGroup>
      ):(
        <VictoryBar
          data={data[0]}
          labels={({ datum }) => datum.y}
          labelComponent={<VictoryTooltip />}
          dataComponent={
            <Bar
              tabIndex={0}
              // ariaLabel={({ datum }) => `x: ${datum.x}`}
            />
          }
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
