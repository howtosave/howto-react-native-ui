import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';

import { RootStackNavigatorParams } from '../navigation-config';
import { AreaScreen } from './area-screen';
import { AxisScreen } from './axis-screen';
import { BarScreen } from './bar-screen';
import { BoxPlotScreen } from './box-plot-screen';
import { BrushLineScreen } from './brush-line-screen';
import { ChartScreen } from './chart-screen';
import { ComponentsScreen } from './components-screen';
import { ErrorBarScreen } from './error-bar-screen';
import { HistogramScreen } from './histogram-screen';
import { LegendsScreen } from './legends-screen';
import { LineScreen } from './line-screen';
import { PieScreen } from './pie-screen';
import { PolarAxisScreen } from './polar-axis-screen';
import { ScatterScreen } from './scatter-screen';
import { VoronoiScreen } from './voronoi-screen';

export const RootNavigator: React.FC = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen name="Components" component={ComponentsScreen} />
      <RootStack.Screen
        name="Pie"
        component={PieScreen}
        options={{ title: 'VictoryPie' }}
      />
      <RootStack.Screen
        name="Chart"
        component={ChartScreen}
        options={{ title: 'VictoryChart' }}
      />
      <RootStack.Screen
        name="Line"
        component={LineScreen}
        options={{ title: 'VictoryLine' }}
      />
      <RootStack.Screen
        name="Area"
        component={AreaScreen}
        options={{ title: 'VictoryArea' }}
      />
      <RootStack.Screen
        name="Bar"
        component={BarScreen}
        options={{ title: 'VictoryBar' }}
      />
      <RootStack.Screen
        name="Histogram"
        component={HistogramScreen}
        options={{ title: 'VictoryHistogram' }}
      />
      <RootStack.Screen
        name="Scatter"
        component={ScatterScreen}
        options={{ title: 'VictoryScatter' }}
      />
      <RootStack.Screen
        name="BoxPlot"
        component={BoxPlotScreen}
        options={{ title: 'VictoryBoxPlot' }}
      />
      <RootStack.Screen
        name="ErrorBar"
        component={ErrorBarScreen}
        options={{ title: 'VictoryErrorBar' }}
      />
      <RootStack.Screen
        name="Voronoi"
        component={VoronoiScreen}
        options={{ title: 'VictoryVoronoi' }}
      />
      <RootStack.Screen
        name="BrushLine"
        component={BrushLineScreen}
        options={{ title: 'VictoryBrushLine' }}
      />

      {/* Other */}
      <RootStack.Screen
        name="Legends"
        component={LegendsScreen}
        options={{ title: 'Legends' }}
      />
      <RootStack.Screen
        name="Axis"
        component={AxisScreen}
        options={{ title: 'Axis' }}
      />
      <RootStack.Screen
        name="PolarAxis"
        component={PolarAxisScreen}
        options={{ title: 'VictoryPolarAxis' }}
      />
    </RootStack.Navigator>
  );
};

const RootStack = createNativeStackNavigator<RootStackNavigatorParams>();
