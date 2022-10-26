import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NavigationStack from "./src/navigation/routes";
import CounterProvider from "./src/context/counter";
import CustomeThemeProvider from "./src/theme";
import { QueryClientProvider, QueryClient } from "react-query";
export default function App() {

  const AppClient= new QueryClient()

  return (
    <CustomeThemeProvider>
      <QueryClientProvider client={AppClient}>
        <NavigationContainer>
          <View style={{ marginTop: 35, backgroundColor: "red" }} />
          <NavigationStack />
        </NavigationContainer>
      </QueryClientProvider>
    </CustomeThemeProvider>
  );
}
