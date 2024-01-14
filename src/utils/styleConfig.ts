// utils/styleConfig.ts
import { useEffect, useState } from "react";

const useStyleConfig = () => {
  const [styles, setStyles] = useState<any>({});

  useEffect(() => {
    if (styles?.fontStyle) {
      document.documentElement.style.setProperty(
        "--fontStyle",
        styles?.fontStyle
      );
      document.documentElement.style.setProperty("--primaryColor", "#dc3434");
    }
  }, [styles]);

  const updateStyles = (newStyles: any): void => {
    setStyles((prevStyles: any) => ({ ...prevStyles, ...newStyles }));
  };

  return { styles, updateStyles };
};

export default useStyleConfig;
