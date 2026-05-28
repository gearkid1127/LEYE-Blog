import AppNavigator from "./src/navigation/AppNavigator";
import {
  SafeAreaFrameContext,
  SafeAreaProvider,
} from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}
