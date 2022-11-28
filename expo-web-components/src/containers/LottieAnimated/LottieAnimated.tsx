import Slider from '@react-native-community/slider';
import LottieView from 'lottie-react-native';
import React, { RefObject } from 'react';
import {
  Animated,
  Easing,
  Image,
  Platform,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import { AntDesign } from '@expo/vector-icons';
// <AntDesign name="play" size={24} color="black" />
// <AntDesign name="pause" size={24} color="black" />
// <AntDesign name="retweet" size={24} color="black" />
// <AntDesign name="aliyun" size={24} color="black" />
import { Picker } from '../../components/Picker/Picker';

const AnimatedSlider = Animated.createAnimatedComponent(Slider);

const playIcon = require('../assets/play.png');
const pauseIcon = require('../assets/pause.png');
const loopIcon = require('../assets/loop.png');
const inverseIcon = require('../assets/inverse.png');

type Example = {
  value: string;
  getSource: any;
  width?: number;
};
type RenderModeValue = 'AUTOMATIC' | 'HARDWARE' | 'SOFTWARE' | '';
type RenderMode = {
  value: RenderModeValue;
  label: string;
};

const makeExample = (
  value: string,
  getJson: () => any,
  width?: number
): Example => ({
  value,
  getSource: Platform.select({
    windows: () => name, // Use codegen resources, which are referenced by name
    default: getJson,
  }),
  width,
});

const EXAMPLES: Example[] = [
  makeExample('9 squares', () =>
    require('../assets/animations/9squares-AlBoardman.json')
  ),
  makeExample('Hamburger Arrow', () =>
    require('../assets/animations/HamburgerArrow.json')
  ),
  makeExample(
    'Hamburger Arrow (200 px)',
    () => require('../assets/animations/HamburgerArrow.json'),
    200
  ),
  makeExample('Line Animation', () =>
    require('../assets/animations/LineAnimation.json')
  ),
  makeExample('Lottie Logo 1', () =>
    require('../assets/animations/LottieLogo1.json')
  ),
  makeExample('Lottie Logo 2', () =>
    require('../assets/animations/LottieLogo2.json')
  ),
  makeExample('Lottie Walkthrough', () =>
    require('../assets/animations/LottieWalkthrough.json')
  ),
  makeExample('Motion Corpse', () =>
    require('../assets/animations/MotionCorpse-Jrcanest.json')
  ),
  makeExample('Pin Jump', () => require('../assets/animations/PinJump.json')),
  makeExample('Twitter Heart', () =>
    require('../assets/animations/TwitterHeart.json')
  ),
  makeExample('Watermelon', () =>
    require('../assets/animations/Watermelon.json')
  ),
  makeExample('Motion Corpse', () =>
    require('../assets/animations/MotionCorpse-Jrcanest.json')
  ),
  makeExample('Remote load', () => ({
    uri: 'https://raw.githubusercontent.com/lottie-react-native/lottie-react-native/master/example/js/animations/Watermelon.json',
  })),
];

const renderModes: RenderMode[] = [
  {
    label: 'RenderMode: Automatic',
    value: 'AUTOMATIC',
  },
  {
    label: Platform.select({
      ios: 'RenderMode: Hardware (Core Animation)',
      default: 'RenderMode: Hardware',
    }),
    value: 'HARDWARE',
  },
  {
    label: Platform.select({
      ios: 'RenderMode: Software (Main Thread)',
      default: 'RenderMode: Software',
    }),
    value: 'SOFTWARE',
  },
];

interface Props {}

type State = {
  example: Example;
  duration: number;
  isPlaying: boolean;
  isInverse: boolean;
  isPaused: boolean;
  loop: boolean;
  progress: Animated.Value | undefined;
  renderMode: RenderMode;
};

interface Props {}

export class LottieAnimated extends React.Component<Props, State> {
  state = {
    example: EXAMPLES[0],
    duration: 3000,
    isPlaying: true,
    isInverse: false,
    isPaused: false,
    loop: true,
    // @ts-ignore
    progress: undefined as Animated.Value,
    renderMode: renderModes[0],
  };
  anim: RefObject<LottieView>;

  constructor(props: Props) {
    super(props);
    this.anim = React.createRef();
  }

  isImperativeMode = () => this.state.progress === undefined;

  stopAnimation = () => {
    if (this.isImperativeMode()) {
      this.anim.current?.reset();
    } else {
      (this.state.progress as Animated.Value)?.setValue(0);
    }
    this.setState({ isPlaying: false, isPaused: false });
  };

  onPlayPress = () => {
    let isPlaying = this.state.isPlaying;
    let isPaused = this.state.isPaused;

    if (this.isImperativeMode()) {
      if (isPlaying) {
        if (isPaused) {
          this.anim.current?.resume();
          isPaused = false;
        } else {
          this.anim.current?.pause();
          isPaused = true;
        }
      } else {
        this.anim.current?.reset();
        this.anim.current?.play();
        isPlaying = true;
        isPaused = false;
      }
      this.setState({ isPlaying, isPaused });
    } else {
      this.state.progress.setValue(0);

      if (!isPlaying) {
        this.setState({ isPlaying: true, isPaused: false });

        Animated.timing(this.state.progress, {
          toValue: 1,
          duration: this.state.duration,
          easing: Easing.linear,
          useNativeDriver: false,
        }).start(() => {
          this.setState({ isPlaying: false, isPaused: false });
        });
      }
    }
  };

  onLoopPress = () => {
    this.stopAnimation();
    this.setState({ loop: !this.state.loop });
  };

  onStopPress = () => {
    this.stopAnimation();
  };

  onInversePress = () =>
    this.setState((state) => ({ isInverse: !state.isInverse }));
  onProgressChange = (progress: number) =>
    this.state.progress?.setValue(progress);
  onDurationChange = (duration: number) => this.setState({ duration });
  onRenderModeChange = (renderMode: RenderMode, idx: number) =>
    this.setState({ renderMode });
  onAnimationFinish = () =>
    this.setState({ isPlaying: false, isPaused: false });
  onExampleSelectionChange = (e: Example, index: number) => {
    this.stopAnimation();
    this.setState((state) => ({
      example: EXAMPLES[index],
      isPlaying: this.isImperativeMode(),
    }));
  };
  onToggleImperative = (i: boolean) => {
    this.stopAnimation();
    this.setState({
      progress: !i ? new Animated.Value(0) : undefined,
    });
  };

  render() {
    const {
      duration,
      isPlaying,
      isPaused,
      isInverse,
      progress,
      loop,
      example,
      renderMode,
    } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <Picker
          selected={example}
          items={EXAMPLES}
          onChange={this.onExampleSelectionChange}
        />
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <LottieView
            ref={this.anim}
            autoPlay={!progress}
            style={[
              !!example.width && { width: example.width as number },
              isInverse && styles.lottieViewInvse,
            ]}
            source={example.getSource()}
            progress={progress}
            loop={loop}
            onAnimationFinish={this.onAnimationFinish}
            enableMergePathsAndroidForKitKatAndAbove
            renderMode={renderMode.value || undefined}
          />
        </View>
        <View style={{ paddingBottom: 20, paddingHorizontal: 10 }}>
          <View style={styles.controlsRow}>
            <TouchableOpacity onPress={this.onLoopPress} disabled={!!progress}>
              <Image
                style={[
                  styles.controlsIcon,
                  loop && styles.controlsIconEnabled,
                  !!progress && styles.controlsIconDisabled,
                ]}
                resizeMode="contain"
                source={loopIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.playButton}
              onPress={this.onPlayPress}
            >
              <Image
                style={styles.playButtonIcon}
                resizeMode="contain"
                source={isPlaying && !isPaused ? pauseIcon : playIcon}
              />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={this.onStopPress} disabled={!isPlaying}>
              <Image
                style={styles.controlsIcon}
                resizeMode="contain"
                source={stopIcon}
              />
            </TouchableOpacity> */}
            <TouchableOpacity onPress={this.onInversePress}>
              <Image
                style={styles.controlsIcon}
                resizeMode="contain"
                source={inverseIcon}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingBottom: 10,
            }}
          >
            <Text>Use Imperative API:</Text>
            <View />
            <Switch onValueChange={this.onToggleImperative} value={!progress} />
          </View>
          <View style={{ paddingBottom: 10 }}>
            <View>
              <Text>Progress:</Text>
            </View>
            <AnimatedSlider
              style={{ height: 30 }}
              minimumValue={0}
              maximumValue={1}
              step={0.001}
              value={progress || 0}
              onValueChange={this.onProgressChange}
              disabled={!progress}
            />
          </View>
          <View>
            <View>
              <Text>Render Mode:</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Duration: ({Math.round(duration)}ms)</Text>
            </View>
            <Slider
              style={{ height: 30 }}
              step={50}
              minimumValue={50}
              maximumValue={4000}
              value={duration}
              onValueChange={this.onDurationChange}
              disabled={!progress}
            />
          </View>
          <Picker
            isDropdown
            selected={renderMode}
            items={renderModes}
            onChange={this.onRenderModeChange}
          />
        </View>
      </View>
    );
  }
}

const PLAY_BUTTON_SIZE = 60;
const styles = StyleSheet.create({
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  playButton: {
    width: PLAY_BUTTON_SIZE,
    height: PLAY_BUTTON_SIZE,
    borderRadius: PLAY_BUTTON_SIZE / 2,
    backgroundColor: '#1d8bf1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playButtonIcon: {
    width: 16,
    height: 16,
  },
  controlsIcon: {
    width: 24,
    height: 24,
    padding: 8,
  },
  controlsIconEnabled: {
    tintColor: '#1d8bf1',
  },
  controlsIconDisabled: {
    tintColor: '#aaa',
  },
  lottieView: {
    flex: 1,
  },
  lottieViewInvse: {
    backgroundColor: 'black',
  },
});
