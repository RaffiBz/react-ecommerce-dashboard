import { useSelector } from "react-redux";

import { getRGBColor } from "./setColor";

export const PrimaryBrandColor = () => {
  const primaryBrandColor = useSelector(
    (state) => state.brandColors.value.primaryColor
  );

  const primaryColor = getRGBColor(primaryBrandColor, "primary");

  return primaryColor;
};
