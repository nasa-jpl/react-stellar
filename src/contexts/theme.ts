import React from "react";

type StellarTheme = "light" | "dark";

const ThemeContext = React.createContext<StellarTheme>("light");

export const ThemeContextProvider = ThemeContext.Provider;

export default ThemeContext;
