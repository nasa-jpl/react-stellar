import React from "react";

type StellarTheme = "light" | "dark";

export const ThemeContext = React.createContext<StellarTheme>("light");
export const ThemeContextProvider = ThemeContext.Provider;
