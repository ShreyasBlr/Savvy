import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const useTheme = () => {
  const { theme } = resolveConfig(tailwindConfig);
  return theme;
};

export default useTheme;
