import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Pressable,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Animated, { AnimatedStyle } from "react-native-reanimated";
import { Colors } from "theme/colors";

interface HeaderProps {
  mainTitle: string;
  showTitleAnimatedStyle: AnimatedStyle<TextStyle>;
  showBackgroundAnimatedStyle: AnimatedStyle<ViewStyle>;
}

const Header = ({
  mainTitle,
  showTitleAnimatedStyle,
  showBackgroundAnimatedStyle,
}: HeaderProps) => {
  return (
    <Animated.View style={[styles.container, showBackgroundAnimatedStyle]}>
      <View style={styles.btnsDisplay}>
        <Pressable style={styles.btn}>
          <Entypo name="chevron-small-left" size={24} color={Colors.blue} />
        </Pressable>

        <Animated.Text style={[styles.headerTitle, showTitleAnimatedStyle]}>
          {mainTitle}
        </Animated.Text>

        <Pressable style={styles.btn}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={Colors.blue}
          />
        </Pressable>
      </View>
    </Animated.View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
    zIndex: 10,
    position: "absolute",
    width: "100%",
    height: 90,
    paddingHorizontal: 24,
  },
  btnsDisplay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    paddingTop: 40,
    paddingBottom: 5,
  },
  btn: {
    backgroundColor: Colors.white,
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    color: Colors.yellow,
    fontSize: 18,
    flex: 1,
    fontWeight: "600",
    textAlign: "center",
  },
});
