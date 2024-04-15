import React, { useRef, useState } from "react";
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import { Colors } from "theme/colors";

import Details from "./Details";
import DisplayedItems from "./DisplayedItems";
import Header from "./Header";
import { DATA } from "./data";

const mainTitle = "The Food Cafe";

const Home = () => {
  const scrollY = useSharedValue(0);
  const isSticky = useSharedValue(false);

  const headerStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollY.value, [0, 250], [0, 1], {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    });

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

  const popularRef = useRef<View>(null);
  const stickyRef = useRef(false);

  console.log(stickyRef);

  const stickyStyle = useAnimatedStyle(() => ({
    // position: isSticky.value === true ? "absolute" : "relative",
    // top: isSticky.value === true ? 0 : undefined,
    backgroundColor: stickyRef.current ? "red" : "blue",
  }));

  return (
    <>
      <Header
        mainTitle={mainTitle}
        showTitleAnimatedStyle={headerStyle}
        showBackgroundAnimatedStyle={backgroundStyle}
      />

      <FlatList
        data={DATA}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <Animated.View
            style={[
              { backgroundColor: stickyRef.current ? "red" : "blue" },
              stickyStyle,
            ]}
          >
            {item.data.map((it, index) => (
              <Text key={index} style={{ color: "white" }}>
                {it}
              </Text>
            ))}
          </Animated.View>
        )}
        ListHeaderComponent={() => (
          <>
            <ImageBackground
              source={require("../assets/images/background.png")}
              resizeMode="cover"
              style={styles.image}
            >
              <View style={styles.bgOverlay} />
            </ImageBackground>
            <Details mainTitle={mainTitle} />

            <Animated.View
              ref={popularRef}
              style={[
                {
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                  // position: isSticky.value ? "absolute" : "relative",
                  // top: 90,
                },
              ]}
            >
              <Text style={{ color: Colors.blue }}>Popular</Text>
            </Animated.View>
          </>
        )}
        ListFooterComponent={DisplayedItems}
        onScroll={({ nativeEvent }) => {
          scrollY.value = nativeEvent.contentOffset.y;

          popularRef.current?.measure((x, y, width, height, pageX, pageY) => {
            isSticky.value = pageY <= 90;
            // stickyRef.current = pageY <= 90;
          });
        }}
        scrollEventThrottle={16}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    height: 321,
    width: "100%",
  },
  bgOverlay: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
  },
  categoryList: { backgroundColor: Colors.yellow },
});
