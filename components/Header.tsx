import { Entypo, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "theme/colors";

interface HeaderProps {
  mainTitle: string;
  showTitle: boolean;
}

const Header = ({ mainTitle, showTitle }: HeaderProps) => {
  return (
    <View style={styles(showTitle).container}>
      <View style={styles().btnsDisplay}>
        <Pressable style={styles().btn}>
          <Entypo name="chevron-small-left" size={24} color={Colors.blue} />
        </Pressable>

        {showTitle && <Text style={styles().headerTitle}>{mainTitle}</Text>}

        <Pressable style={styles().btn}>
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color={Colors.blue}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default Header;

const styles = (showTitle?: boolean) =>
  StyleSheet.create({
    container: {
      backgroundColor: showTitle ? Colors.primary : "rgba(0,0,0,0)",
      top: 0,
      left: 0,
      zIndex: 10,
      position: "absolute",
      width: "100%",
      paddingHorizontal: 24,
    },
    btnsDisplay: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      paddingTop: 40,
      paddingBottom: 10,
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
