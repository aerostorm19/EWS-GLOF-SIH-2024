"use client";

import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";
import { ReactNode } from "react";

interface Props extends ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({
  children,
  attribute = "class",
  defaultTheme = "light",
  enableSystem = true,
  disableTransitionOnChange = true,
}: Props) => {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      enableSystem={enableSystem}
      disableTransitionOnChange={disableTransitionOnChange}
    >
      {children}
    </NextThemesProvider>
  );
};
