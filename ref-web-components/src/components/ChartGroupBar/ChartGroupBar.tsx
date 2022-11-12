import React from "react";
import { StyleSheet } from "react-native";
import {
  VictoryChart,
  VictoryBar,
  VictoryGroup,
} from "victory-native";

interface ChartGroupBarProps {
}

export const ChartGroupBar = ({}: ChartGroupBarProps) => {
  return (
    <VictoryChart domain={{ x: [0, 4] }}>
      <VictoryGroup
        labels={["a", "b", "c"]}
        offset={10}
        colorScale={"qualitative"}
      >
        <VictoryBar
          data={[
            { x: 1, y: 1 },
            { x: 2, y: 2 },
            { x: 3, y: 5 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 1 },
            { x: 3, y: 7 },
          ]}
        />
        <VictoryBar
          data={[
            { x: 1, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 9 },
          ]}
        />
      </VictoryGroup>
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
