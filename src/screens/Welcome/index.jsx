import React, { useEffect, useRef, useState } from "react";
import { View, FlatList, useWindowDimensions, StyleSheet } from "react-native";
import OnBoardingItem from "../../components/onBoardingItem";
import Button from "../../shared/Button";
import Slides from "../../shared/Slides";
import { WELCOME_DATA } from "../../utils/WelcomData";
import { useNavigation } from "@react-navigation/native";
import { useCustomeThemne } from "../../theme";
// import Counter from "../../components/Counter";
const Welcome = () => {
  const { theme, ToggleTheme, themeVal } = useCustomeThemne();

  const scrollRef = useRef();
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleOnScroll = (event) => {
    const leftSpace = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(leftSpace / width);
    setActiveIndex(currentIndex);
  };

  const onSlideItemClickedHandler = (comeingIndex) => {
    scrollRef.current?.scrollToIndex({
      index: comeingIndex,
      animated: true,
    });
    setActiveIndex(comeingIndex);
  };

  useEffect(() => {
    console.log("theme", theme.background.default);
    console.log("themeVal", themeVal);
  }, [theme]);
  return (
    <View style={{ flex: 1, backgroundColor: theme.background.default }}>
      <FlatList
        onScroll={handleOnScroll}
        horizontal
        ref={scrollRef}
        pagingEnabled={true}
        data={WELCOME_DATA}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item: { imageUrl } }) => (
          <OnBoardingItem imageUrl={imageUrl} />
        )}
      />
      <View style={styles.container}>
        <Slides
          activeIndex={activeIndex}
          numOfSlideCircle={WELCOME_DATA.length}
          onSlideItemClickedHandler={onSlideItemClickedHandler}
        />
        {/* <Counter /> */}
        <Button
          title={"تخطي"}
          onPress={() => navigate("BottomTabs", { itemId: 1 })}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
