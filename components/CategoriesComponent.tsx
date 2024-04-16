import { ICategory } from "data/mealData";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "theme/colors";

interface Props {
  categories: ICategory[];
  setSelectedCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  selectedCategory: ICategory;
}

const CategoriesComponent = ({
  categories,
  setSelectedCategory,
  selectedCategory,
}: Props) => {
  const handlePress = (category: ICategory) => {
    setSelectedCategory(category);
  };

  return (
    <View style={{ paddingHorizontal: 20 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handlePress(category)}
            style={[
              styles.categoryStyle,
              {
                borderColor:
                  category === selectedCategory ? Colors.yellow : Colors.dark,
              },
            ]}
          >
            <Text
              style={{
                color:
                  category === selectedCategory ? Colors.yellow : Colors.white,
                fontWeight: category === selectedCategory ? "600" : "400",
              }}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategoriesComponent;

const styles = StyleSheet.create({
  categoryStyle: {
    borderRadius: 12,
    backgroundColor: Colors.dark,
    paddingVertical: 14,
    paddingHorizontal: 18,
    borderWidth: 1,
    marginHorizontal: 4,
  },
});
