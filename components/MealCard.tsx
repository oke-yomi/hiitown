import { Meal } from "data/mealData";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "theme/colors";

interface Props {
  item: Meal;
}

const MealCard = ({ item }: Props) => {
  return (
    <View style={{ marginTop: 16, paddingHorizontal: 24 }}>
      <View style={styles.container}>
        <View
          style={{
            height: 78,
            width: 78,
            backgroundColor: Colors.gray,
          }}
        >
          <Image
            source={item.imgUrl}
            style={{ height: 78, width: 78 }}
            resizeMode="cover"
          />
        </View>

        <View style={styles.detailsWrapper}>
          <View style={{ maxWidth: 116 }}>
            <Text style={styles.meal}>{item.meal}</Text>
            <Text style={styles.subTitle}>Spicy</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>

          <View style={styles.count}>
            <TouchableOpacity style={styles.mathsign}>
              <Text style={styles.sign}>-</Text>
            </TouchableOpacity>

            <Text style={styles.quantity}>3</Text>

            <TouchableOpacity style={styles.mathsign}>
              <Text style={styles.sign}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.dark,
    borderRadius: 14,
    padding: 16,
    flexDirection: "row",
    gap: 16,
    alignItems: "center",
  },
  detailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
    gap: 5,
  },
  meal: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: 14,
    flexShrink: 1,
  },
  subTitle: {
    color: "#DACFDB",
    fontSize: 13,
    marginVertical: 4,
  },
  price: {
    color: "#E4E4E4",
    fontWeight: "700",
    fontSize: 16,
  },
  count: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  mathsign: {
    width: 25,
    height: 25,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.gray,
  },
  sign: {
    fontWeight: "600",
    color: Colors.white,
    fontSize: 14,
  },
  quantity: {
    fontWeight: "700",
    color: Colors.white,
    fontSize: 16,
  },
});
