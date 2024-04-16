export type ICategory =
  | "Popular"
  | "Combo"
  | "Wine"
  | "Pizza"
  | "Rice"
  | "Burger";

export const categories: ICategory[] = [
  "Popular",
  "Combo",
  "Wine",
  "Pizza",
  "Rice",
  "Burger",
];

export interface Meal {
  meal: string;
  imgUrl: number;
  price: number;
  category: ICategory[];
  subheader?: string;
}

export const MealsData: Meal[] = [
  {
    meal: "Margherita Pizza",
    imgUrl: require("../assets/images/meals/pizza.webp"),
    price: 12,
    category: ["Popular", "Pizza"],
  },
  {
    meal: "Pepperoni Pizza",
    imgUrl: require("../assets/images/meals/meat-pizza.webp"),
    price: 14,
    category: ["Pizza"],
  },
  {
    meal: "Veggie Pizza",
    imgUrl: require("../assets/images/meals/pizza.webp"),
    price: 12,
    category: ["Pizza"],
  },
  {
    meal: "Wine & Cheese Combo",
    imgUrl: require("../assets/images/meals/wine2.webp"),
    price: 25,
    category: ["Combo", "Wine"],
    subheader: "",
  },
  {
    meal: "Spicy Burger",
    imgUrl: require("../assets/images/meals/spicy-burger.webp"),
    price: 10,
    category: ["Combo", "Burger"],
  },
  {
    meal: "Fried Rice",
    imgUrl: require("../assets/images/meals/fried-rice.webp"),
    price: 10,
    category: ["Popular", "Rice"],
  },
  {
    meal: "Sushi Platter",
    imgUrl: require("../assets/images/meals/fried-rice.webp"),
    price: 20,
    category: ["Popular"],
  },
  {
    meal: "Chicken Burger",
    imgUrl: require("../assets/images/meals/chicken-burger.webp"),
    price: 8,
    category: ["Burger", "Popular"],
  },
  {
    meal: "Vegan Burger",
    imgUrl: require("../assets/images/meals/chicken-burger.webp"),
    price: 9,
    category: ["Burger"],
  },
  {
    meal: "Chicken Biryani",
    imgUrl: require("../assets/images/meals/jollof-rice.webp"),
    price: 12,
    category: ["Rice", "Popular"],
  },
  {
    meal: "Cabernet Sauvignon",
    imgUrl: require("../assets/images/meals/wine1.webp"),
    price: 18,
    category: ["Wine"],
  },
  {
    meal: "Chardonnay",
    imgUrl: require("../assets/images/meals/wine2.webp"),
    price: 15,
    category: ["Wine"],
  },
  {
    meal: "BBQ Pizza",
    imgUrl: require("../assets/images/meals/meat-pizza.webp"),
    price: 16,
    category: ["Pizza", "Popular"],
  },
  {
    meal: "Seafood Pizza",
    imgUrl: require("../assets/images/meals/pizza.webp"),
    price: 18,
    category: ["Pizza"],
  },
  {
    meal: "Spaghetti & Meatballs",
    imgUrl: require("../assets/images/meals/spag.webp"),
    price: 14,
    category: ["Popular"],
  },
  {
    meal: "Lamb Burger",
    imgUrl: require("../assets/images/meals/chicken-burger.webp"),
    price: 11,
    category: ["Burger"],
  },
  {
    meal: "Nasi Goreng",
    imgUrl: require("../assets/images/meals/white-rice.webp"),
    price: 12,
    category: ["Rice"],
  },
  {
    meal: "Pinot Noir",
    imgUrl: require("../assets/images/meals/wine1.webp"),
    price: 22,
    category: ["Wine"],
  },
  {
    meal: "Jollof Rice",
    imgUrl: require("../assets/images/meals/jollof-rice.webp"),
    price: 13,
    category: ["Rice", "Popular"],
  },
  {
    meal: "Bacon Cheeseburger",
    imgUrl: require("../assets/images/meals/spicy-burger.webp"),
    price: 9,
    category: ["Burger", "Popular"],
  },
];
