import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import About from "../../screens/About";
import Contact from "../../screens/Contact";
import Home from "../../screens/Home";
import Header from "../../shared/Header";
import {
  MaterialIcons,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons'; 


import { StyleSheet } from "react-native";
import RegisterScreen from "../../screens/Register";
import LoginScreen from "../../screens/Login";

const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: styles.tabBarStyles,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          header: () => <Header title="المقاولات" />,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="home"
              size={focused ? 24 : 20}
              color={!focused ? "gray" : "#7380a1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          header: () => <Header title="تواصل معنا" />,
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="contacts"
              size={focused ? 24 : 20}
              color={!focused ? "gray" : "#7380a1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={About}
        options={{
          header: () => <Header title="من نحن" />,
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
              name="contact-support"
              size={focused ? 24 : 20}
              color={!focused ? "gray" : "#7380a1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{
          header: () => <Header title="انشاء حساب" />,
          tabBarIcon: ({ focused }) => (
            <FontAwesome
              name="sign-in"
              size={focused ? 24 : 20}
              color={!focused ? "gray" : "#7380a1"}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          header: () => <Header title="تسجيل الدخول" />,
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="login"
              size={focused ? 24 : 20}
              color={!focused ? "gray" : "#7380a1"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabs;

const styles = StyleSheet.create({
  tabBarStyles: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 25,
    left: 30,
    right: 30,
    height: 60,
    borderRadius: 12,
  },
});
