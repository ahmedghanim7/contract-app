import { createContext, useState, useContext } from "react";
import { darkTheme, lightTheme } from "../utils/Theme";

export const CustomeThemeContext = createContext();

const CustomeThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);
  const [themeVal, setThemeVal] = useState("light");

  const ToggleTheme = () => {
    console.log("ToggleTheme")
    setThemeVal(themeVal === "dark" ? "light" : "dark");
    setTheme(themeVal === "dark" ? lightTheme : darkTheme);
  };

  return (
    <CustomeThemeContext.Provider value={{ theme, ToggleTheme, themeVal }}>
      {children}
    </CustomeThemeContext.Provider>
  );
};

export default CustomeThemeProvider;

export const useCustomeThemne = () => useContext(CustomeThemeContext);
