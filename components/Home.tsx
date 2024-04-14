import React from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Animated, {
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

const mainTitle = "The Food Cafe";

const Home = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

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

  return (
    <>
      <Header
        mainTitle={mainTitle}
        showTitleAnimatedStyle={headerStyle}
        showBackgroundAnimatedStyle={backgroundStyle}
      />

      <Animated.ScrollView
        style={{ flex: 1 }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <View style={[styles.image, { position: "relative" }]}>
          <ImageBackground
            source={require("../assets/images/background.png")}
            resizeMode="cover"
            style={styles.image}
          />

          <View style={styles.bgOverlay} />
        </View>

        <View>
          <Details mainTitle={mainTitle} />

          <ScrollView
            style={styles.categoryList}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Popular</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Combo</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Pizza</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Burger</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Cocktails</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Smoothies</Text>
              </View>
              <View
                style={{
                  marginRight: 16,
                  padding: 12,
                  borderRadius: 12,
                  backgroundColor: Colors.offWhite,
                }}
              >
                <Text style={{ color: Colors.blue }}>Extras</Text>
              </View>
            </>
          </ScrollView>

          <DisplayedItems />
        </View>
      </Animated.ScrollView>
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
  categoryList: {},
});
