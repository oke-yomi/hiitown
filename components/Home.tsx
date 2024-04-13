import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Colors } from "theme/colors";

import Details from "./Details";
import DisplayedItems from "./DisplayedItems";
import Header from "./Header";

const mainTitle = "The Food Cafe";

const Home = () => {
  const scrollY = useRef(new Animated.Value(0)).current;
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const listener = scrollY.addListener(({ value }) => {
      if (value > 250) {
        setShowTitle(true);
      } else {
        setShowTitle(false);
      }
    });
    return () => {
      scrollY.removeListener(listener);
    };
  }, [scrollY]);

  return (
    <>
      <Header mainTitle={mainTitle} showTitle={showTitle} />

      <Animated.ScrollView
        style={{ flex: 1 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false },
        )}
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

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
});