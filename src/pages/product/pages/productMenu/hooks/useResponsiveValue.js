import { useState, useEffect } from "react";

const useResponsiveValue = (breakpoints, values) => {
  const [value, setValue] = useState(null);

  useEffect(() => {
    const updateValue = () => {
      const width = window.innerWidth;
      let matchedValue = values.default || null;

      // Iterate over breakpoints to find the matching range
      Object.keys(breakpoints).forEach((bp) => {
        if (width >= bp) {
          matchedValue = values[bp] || matchedValue;
        }
      });

      setValue(matchedValue);
    };

    updateValue(); // Set initial value
    window.addEventListener("resize", updateValue);
    return () => window.removeEventListener("resize", updateValue);
  }, [breakpoints, values]);

  return value;
};

export default useResponsiveValue;
