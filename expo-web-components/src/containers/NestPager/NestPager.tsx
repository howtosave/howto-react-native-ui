import React from 'react';
import { StyleSheet, View, SafeAreaView, Animated, Text } from 'react-native';
import PagerView from 'react-native-pager-view';

import { LikeCount } from '../../components/LikeCount/LikeCount';

const BGCOLOR = ['#fdc08e', '#fff6b9', '#99d1b7', '#dde5fe', '#f79273'];

const AnimatedPagerView = Animated.createAnimatedComponent(PagerView);

interface NestPagerProps {
}

export const NestPager = ({}: NestPagerProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedPagerView
        style={styles.PagerView}
        initialPage={0}
        layoutDirection="ltr"
        pageMargin={10}
        orientation="horizontal"
      >
        <View
          key="1"
          style={{ backgroundColor: BGCOLOR[0] }}
          collapsable={false}
        >
          <LikeCount />
        </View>
        <View key="2" collapsable={false}>
          <Text style={styles.title}>
            There has two Nest PagerView with horizontal and vertical.
          </Text>
          <AnimatedPagerView
            style={styles.PagerView}
            initialPage={0}
            layoutDirection="ltr"
            pageMargin={10}
            // Lib does not support dynamically orientation change
            orientation="horizontal"
          >
            <View
              key="1"
              style={{ backgroundColor: BGCOLOR[1] }}
              collapsable={false}
            >
              <LikeCount />
              <Text>Horizontal</Text>
            </View>
            <View
              key="2"
              style={{ backgroundColor: BGCOLOR[2] }}
              collapsable={false}
            >
              <LikeCount />
              <Text>Horizontal</Text>
            </View>
          </AnimatedPagerView>
          <AnimatedPagerView
            style={styles.PagerView}
            initialPage={0}
            layoutDirection="ltr"
            pageMargin={10}
            // Lib does not support dynamically orientation change
            orientation="vertical"
          >
            <View
              key="1"
              style={{ backgroundColor: BGCOLOR[3] }}
              collapsable={false}
            >
              <LikeCount />
              <Text>Vertical</Text>
            </View>
            <View
              key="2"
              style={{ backgroundColor: BGCOLOR[4] }}
              collapsable={false}
            >
              <LikeCount />
              <Text>Vertical</Text>
            </View>
          </AnimatedPagerView>
        </View>
        <View
          key="3"
          style={{ backgroundColor: BGCOLOR[3] }}
          collapsable={false}
        >
          <LikeCount />
        </View>
      </AnimatedPagerView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: 300,
    height: 200,
    padding: 20,
  },
  PagerView: {
    flex: 1,
  },
  title: { fontSize: 22, paddingVertical: 10 },
});
