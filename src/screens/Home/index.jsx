import { View, Text, FlatList } from "react-native";
import React, { useContext, useEffect } from "react";
import Card from "../../shared/Card";
import { DATA } from "../../utils/HomeCardsData";
import { styles } from "./styles";
import { useRoute, useNavigation } from "@react-navigation/native";
import { ThemeContext, useCustomeThemne } from "../../theme/index";

const Home = () => {
  const { navigate } = useNavigation();
  const { theme, ToggleTheme, themeVal } = useCustomeThemne();

  return (
    <View style={{ flex: 1, backgroundColor: theme.background.default }}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Card
            icon={item.icon}
            title1={item.title1}
            title2={item.title2}
            onPress={() =>
              navigate("ServiceDetailes", {
                serviceId: 1,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <Text style={{ fontSize: 30, marginRight: 25, color: theme.textColors.primary }}>الفهرس</Text>
        )}
        ListHeaderComponentStyle={{
          width: "100%",
        }}
      />
    </View>
  );
};

export default Home;
