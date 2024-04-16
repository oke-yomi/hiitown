# Hiitown

- [Android Demo Link](https://expo.dev/accounts/okeoluwayomi/projects/hiitown/builds/30efd323-1079-4a1d-8f8b-32dd96b755f3)

### Project Brief

**Objective**: Develop a single screen for a restaurant app that enhances user experience through dynamic interactions and visual animations.

**Key Features**:

1. **Persistent Header Navigation**:

   - Navigation buttons should be visible at all times for easy access.

2. **Dynamic Main Title**:

   - The main title should transition to a header title when scrolled out of view to maintain context visibility for the user.

3. **Interactive Elements (Non-functional)**:

   - Display a counter, heart icon, "Call Now," and "Navigate" buttons. These should be visible but do not need to be functional.

4. **Sticky Category Bar**:

   - A horizontal display of categories (e.g., Popular, Combo) should become fixed at the top of the screen when scrolled to that position, allowing the rest of the menu items to continue scrolling beneath it.

5. **Category Navigation**:

   - Tapping on a category should automatically scroll the user to that section of the menu.

6. **Undocking Behavior**:

   - Horizontal items should undock and hide after scrolling past a certain threshold to provide more screen space for menu items.

7. **Header Image Animation**:

   - Implement a visually appealing animation for the header image during scrolling to enhance user engagement.

8. **Platform Compatibility**:

   - The implementation should function seamlessly on both iOS and Android platforms.

9. **Data Integration**:
   - While not mandatory for this phase, integrating with an API service like RAPID API to fetch menu data would be a beneficial addition.

### Technologies Used

- [React Native](https://reactnative.dev/)
- [Expo CLI](https://docs.expo.dev/)
- [React Native Reanimated](https://docs.swmansion.com/react-native-reanimated/)

## Getting Started

First, run the development server:

```bash
npx expo start
# For Android
npx expo start --android
# For ios
npx expo start --ios
```
scan the QR code to get the expo app running