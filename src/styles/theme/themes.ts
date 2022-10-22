import { IDefaultThemeProps, IBreakpoints, IThemeProps } from "./";

const breakpoints: IBreakpoints = {
  breakpoints: {
    extraSmall: "368px",
    small: "576px",
    medium: "768px",
    large: "998px",
    extraLarge: "1200px",
    big: "1400px",
  },
};

const globalColors: IDefaultThemeProps = {
  white: "#FFFFFF",
  light: "#F6F6F6",
  dark: "#161515",
  gray: "#747474",
  blue: "#040EFF",
  orange: "#FF6B00",
};

export const ligthTheme: IThemeProps = {
  ...breakpoints,
  ...globalColors,

  text: globalColors.dark,
  background: globalColors.white,
};

export const darkTheme: IThemeProps = {
  ...breakpoints,
  ...globalColors,

  text: globalColors.light,
  background: globalColors.dark,
};
