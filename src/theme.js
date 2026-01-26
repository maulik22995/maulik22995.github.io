// Theme Presets

const lightTheme = {
  name: "light",
  body: "#FFFFFF",
  text: "#2D3748",
  dark: "#000000",
  secondaryText: "#718096",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#F7FAFC",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#E2E8F0",
  imageClothes: "#E2E8F0",
  avatarMisc: "#EDF2F7",
  avatarShoes: "#E2E8F0",
  // Additional theme properties for better design
  surface: "#FFFFFF",
  surfaceElevated: "#F7FAFC",
  border: "#E2E8F0",
  shadow: "rgba(0, 0, 0, 0.1)",
  hover: "rgba(227, 64, 95, 0.1)",
};

const darkTheme = {
  name: "dark",
  body: "#0F172A",
  text: "#F1F5F9",
  dark: "#000000",
  secondaryText: "#94A3B8",
  accentColor: "#E3405F",
  accentBright: "#FC1056",
  projectCard: "#1E293B",
  skinColor: "#F7B799",
  skinColor2: "#FCB696",
  imageDark: "#1E293B",
  imageClothes: "#0F172A",
  avatarMisc: "#1E293B",
  avatarShoes: "#334155",
  // Additional theme properties for better design
  surface: "#1E293B",
  surfaceElevated: "#334155",
  border: "#334155",
  shadow: "rgba(0, 0, 0, 0.3)",
  hover: "rgba(227, 64, 95, 0.2)",
};

export const themes = { light: lightTheme, dark: darkTheme };
