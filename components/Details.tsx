import {
  EvilIcons,
  AntDesign,
  Feather,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Colors } from "theme/colors";

interface DetailsProps {
  mainTitle: string;
}

const Details = ({ mainTitle }: DetailsProps) => {
  return (
    <View style={styles.container}>
      <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
        <View style={[styles.flexRow, { gap: 14 }]}>
          <Image
            source={require("../assets/images/logo.png")}
            style={{ height: 62, width: 62, borderRadius: 31 }}
          />

          <Text style={styles.mainTitle}>{mainTitle}</Text>
        </View>

        <Pressable style={styles.btn}>
          <EvilIcons name="heart" size={20} color={Colors.gray} />
        </Pressable>
      </View>

      <View style={styles.detailsWrapper}>
        <View style={[styles.flexRow, { gap: 4 }]}>
          <AntDesign name="star" size={20} color={Colors.yellow} />
          <Text style={styles.detailsText}>Ratings: 4.5 ( 502 reviews )</Text>
        </View>
        <View style={[styles.flexRow, { gap: 4 }]}>
          <Feather name="clock" size={20} color={Colors.yellow} />
          <Text style={styles.detailsText}>Delivers in 15-20 min</Text>
        </View>
        <View style={[styles.flexRow, { gap: 4 }]}>
          <MaterialCommunityIcons
            name="truck-fast-outline"
            size={20}
            color={Colors.yellow}
          />
          <Text style={styles.detailsText}>Free delivery</Text>
        </View>
      </View>

      <View style={[styles.flexRow, { justifyContent: "space-between" }]}>
        <TouchableOpacity style={[styles.flexRow, styles.cta]}>
          <FontAwesome5 name="phone-alt" size={18} color={Colors.gray} />
          <Text style={styles.ctaText}>Call Now</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.flexRow, styles.cta]}>
          <Ionicons name="navigate" size={18} color={Colors.gray} />
          <Text style={styles.ctaText}>Navigate</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: { padding: 24, marginBottom: 32 },
  mainTitle: { color: Colors.white, fontSize: 24, fontWeight: "600" },
  btn: {
    backgroundColor: Colors.dark,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  detailsWrapper: {
    marginVertical: 24,
    backgroundColor: Colors.dark,
    padding: 16,
    borderRadius: 10,
    gap: 16,
  },
  detailsText: { color: Colors.white, fontSize: 14 },
  cta: {
    gap: 12,
    paddingVertical: 16,
    paddingHorizontal: 24,
    backgroundColor: Colors.dark,
    borderRadius: 10,
  },
  ctaText: { fontWeight: "500", fontSize: 14, color: Colors.white },
  flexRow: {
    flexDirection: "row",
    alignItems: "center",
  },
});
