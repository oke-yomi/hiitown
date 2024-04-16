import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  Extrapolation,
  interpolate,
  interpolateColor,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Colors } from "theme/colors";

import Details from "./Details";
import DisplayedItems from "./DisplayedItems";
import Header from "./Header";
import { DATA } from "./data";

const mainTitle = "The Food Cafe";
const imageHeight = 321;

const Home = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const scrollAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 320],
      [0, -imageHeight],
      Extrapolation.CLAMP,
    );

    return { transform: [{ translateY }] };
  });

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

  const stickyTop = useAnimatedStyle(() => {
    const top = interpolate(
      scrollY.value,
      [imageHeight - 140, imageHeight + 50],
      [-140, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [imageHeight - 140, imageHeight + 50],
      [0, 1],
      Extrapolation.CLAMP,
    );

    return {
      top,
      opacity,
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
    <View>
      <>
        <Header
          mainTitle={mainTitle}
          showTitleAnimatedStyle={headerStyle}
          showBackgroundAnimatedStyle={backgroundStyle}
        />

        <Animated.View style={[styles.image, animatedImageStyles]}>
          <ImageBackground
            source={require("../assets/images/background.png")}
            resizeMode="contain"
            style={styles.image}
          />

          <LinearGradient
            colors={["transparent", "transparent", "#ab335b"]}
            style={styles.linearGradient}
          />
        </Animated.View>
      </>

      <Animated.View
        style={[scrollAnimatedStyle, { backgroundColor: Colors.primary }]}
      >
        <Animated.FlatList
          data={DATA}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <Animated.View style={[{ backgroundColor: "red" }]}>
              {item.data.map((it: any, index: any) => (
                <Text key={index} style={{ color: "white" }}>
                  {it}
                </Text>
              ))}
            </Animated.View>
          )}
          ListHeaderComponent={() => (
            <>
              <Details mainTitle={mainTitle} />

              <Animated.View
                style={[
                  {
                    marginRight: 16,
                    padding: 12,
                    borderRadius: 12,
                    backgroundColor: Colors.offWhite,
                  },
                ]}
              >
                <Text style={{ color: Colors.blue }}>Popularly</Text>
              </Animated.View>
            </>
          )}
          ListFooterComponent={() => (
            <>
              <DisplayedItems />
            </>
          )}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 500, marginBottom: 500 }}
        />
      </Animated.View>

      <Animated.View style={[styles.horizontalScroll, stickyTop]}>
        <View
          style={[
            {
              marginRight: 16,
              padding: 12,
              borderRadius: 12,
              backgroundColor: Colors.offWhite,
            },
          ]}
        >
          <Text style={{ color: Colors.blue }}>Popular</Text>
        </View>
      </Animated.View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: imageHeight,
    width: "100%",
  },
  linearGradient: {
    height: imageHeight + 50,
    ...StyleSheet.absoluteFillObject,
  },
  horizontalScroll: {
    height: 140,
    backgroundColor: Colors.primary,
    position: "absolute",
    top: -140,
    right: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    justifyContent: "flex-end",
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: "pink",
        shadowOpacity: 1,
        shadowRadius: 16,
        shadowOffset: {
          width: 4,
          height: 3,
        },
      },
    }),
  },
});
