import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import BlogDetailsScreen from '../screens/BlogDetailsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Newsfeed"
          component={HomeScreen}
        />
        <Stack.Screen
          name="BlogDetail"
          component={BlogDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}