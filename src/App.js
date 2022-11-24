import React from "react";
import { routes } from "./routes";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getRGBColor, getAccessibleColor } from "./components/util/setColor";

function App() {
  //color variables
  const primaryBrandColor = useSelector(
    (state) => state.brandColors.value.primaryColor
  );
  const secondaryBrandColor = useSelector(
    (state) => state.brandColors.value.secondaryColor
  );
  const titleBrandColor = useSelector(
    (state) => state.brandColors.value.titleColor
  );
  const buttonPrimaryColor = useSelector(
    (state) => state.brandColors.value.buttonTextPrimaryColor
  );
  const buttonSecondaryColor = useSelector(
    (state) => state.brandColors.value.buttonTextSecondaryColor
  );
  const dashboardFirstColor = useSelector(
    (state) => state.brandColors.value.secondaryFirstColor
  );
  const dashboardSecondColor = useSelector(
    (state) => state.brandColors.value.secondarySecondColor
  );
  const dashboardThirdColor = useSelector(
    (state) => state.brandColors.value.secondaryThirdColor
  );
  const dashboardFourthColor = useSelector(
    (state) => state.brandColors.value.secondaryFourthColor
  );

  const primaryColor = getRGBColor(primaryBrandColor, "primary");
  const secondaryColor = getRGBColor(secondaryBrandColor, "secondary");
  const buttonPrimary = getRGBColor(buttonPrimaryColor, "buttonPrimary");
  const buttonSecondary = getRGBColor(buttonSecondaryColor, "buttonSecondary");
  const titleColor = getRGBColor(titleBrandColor, "title");
  const secondaryFirstColor = getRGBColor(
    dashboardFirstColor,
    "secondaryFirstColor"
  );
  const secondarySecondColor = getRGBColor(
    dashboardSecondColor,
    "secondarySecondColor"
  );
  const secondaryThirdColor = getRGBColor(
    dashboardThirdColor,
    "secondaryThirdColor"
  );
  const secondaryFourthColor = getRGBColor(
    dashboardFourthColor,
    "secondaryFourthColor"
  );
  const a11yColor = getRGBColor(getAccessibleColor(primaryBrandColor), "a11y");

  return (
    <React.Fragment>
      <style>
        :root{" "}
        {`{${primaryColor} ${a11yColor} ${secondaryColor} ${titleColor} ${secondaryFirstColor} 
        ${secondarySecondColor} ${secondaryThirdColor} ${secondaryFourthColor} ${buttonPrimary} ${buttonSecondary}}`}
      </style>
      <div className="App font-mainFont">
        <BrowserRouter>
          <Routes>
            {routes.map((routeConfig, id) => {
              return (
                <Route
                  key={id}
                  path={routeConfig.path}
                  exact={routeConfig.exact}
                  element={routeConfig.element}
                />
              );
            })}
          </Routes>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
