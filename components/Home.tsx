import { ICategory, Meal, MealsData, categories } from "data/mealData";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
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

import CategoriesComponent from "./CategoriesComponent";
import Details from "./Details";
import Header from "./Header";
import MealCard from "./MealCard";

const mainTitle = "The Food Cafe";
const imageHeight = 321;

const Home = () => {
  const scrollY = useSharedValue(0);

  const [selectedCategory, setSelectedCategory] =
    useState<ICategory>("Popular");

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
      [imageHeight - 150, imageHeight + 50],
      [-150, 0],
      Extrapolation.CLAMP,
    );
    const opacity = interpolate(
      scrollY.value,
      [imageHeight - 150, imageHeight + 50],
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

  const filteredMeals = selectedCategory
    ? MealsData.filter((meal) => meal.category.includes(selectedCategory))
    : [];

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
            colors={["transparent", "transparent", "#242021"]}
            style={styles.linearGradient}
          />
        </Animated.View>
      </>

      <Animated.View
        style={[scrollAnimatedStyle, { backgroundColor: Colors.primary }]}
      >
        <Animated.FlatList
          data={filteredMeals}
          keyExtractor={(item: Meal, index) => ` ${item.meal + index}`}
          renderItem={({ item }: { item: Meal }) => <MealCard item={item} />}
          ListHeaderComponent={() => (
            <>
              <Details mainTitle={mainTitle} />

              <CategoriesComponent
                categories={categories}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
              />

              <View style={{ marginTop: 32, paddingHorizontal: 24 }}>
                <Text style={styles.categoryHeading}>
                  {selectedCategory} ({filteredMeals.length})
                </Text>
              </View>
            </>
          )}
          onScroll={scrollHandler}
          scrollEventThrottle={16}
          contentContainerStyle={{ paddingBottom: 1000, marginBottom: 500 }}
        />
      </Animated.View>

      <Animated.View style={[styles.horizontalScroll, stickyTop]}>
        <CategoriesComponent
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
    height: 150,
    backgroundColor: Colors.primary,
    position: "absolute",
    top: -150,
    right: 0,
    left: 0,
    opacity: 0,
    width: "100%",
    justifyContent: "flex-end",
    paddingBottom: 5,
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowColor: Colors.blue,
        shadowOpacity: 0.7,
        shadowRadius: 10,
        shadowOffset: {
          width: 4,
          height: 3,
        },
      },
    }),
  },
  categoryHeading: {
    fontSize: 20,
    fontWeight: "500",
    color: Colors.white,
  },
});
