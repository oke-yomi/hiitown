import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ImageBackground, StyleSheet } from "react-native";
import Animated, {
  Extrapolation,
  SharedValue,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
} from "react-native-reanimated";
import { Colors } from "theme/colors";

import Header from "./Header";

interface Props {
  mainTitle: string;
  scrollY: SharedValue<number>;
  imageHeight: number;
}

const BackgroundImage = ({ mainTitle, scrollY, imageHeight }: Props) => {
  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollY.value,
      [0, 320],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      opacity,
    };
  });

  const backgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      scrollY.value,
      [0, 250],
      ["transparent", Colors.primary],
    );

    return {
      backgroundColor,
    };
  });

  const animatedImageStyles = useAnimatedStyle(() => {
    const scale = interpolate(scrollY.value, [0, 320], [1.3, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

    return { transform: [{ scale }] };
  });

  return (
    <>
      <Header
        mainTitle={mainTitle}
        showTitleAnimatedStyle={headerStyle}
        showBackgroundAnimatedStyle={backgroundStyle}
      />

      <Animated.View style={[styles(imageHeight).image, animatedImageStyles]}>
        <ImageBackground
          source={require("../assets/images/background.png")}
          resizeMode="contain"
          style={styles(imageHeight).image}
        />

        <LinearGradient
          colors={["transparent", "transparent", "#242021"]}
          style={styles(imageHeight).linearGradient}
        />
      </Animated.View>
    </>
  );
};

export default BackgroundImage;

const styles = (imageHeight: number) =>
  StyleSheet.create({
    image: {
      height: imageHeight,
      width: "100%",
    },
    linearGradient: {
      height: imageHeight + 50,
      ...StyleSheet.absoluteFillObject,
    },
  });
