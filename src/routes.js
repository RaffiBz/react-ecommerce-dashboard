import Merchants from "./pages/Merchants";
import Sales from "./pages/Sales";
import Partners from "./pages/Partners";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Offers from "./pages/Offers";
import Profile from "./pages/settings/Profile";
import TierMeasurement from "./pages/settings/TierMeasurement";
import PaypalPayouts from "./pages/settings/PaypalPayouts";
import Payment from "./pages/Payment";
import Plans from "./pages/settings/Plans";
import GeneralSettings from "./pages/settings/GeneralSettings";
import PartnerBrandingColor from "./pages/settings/PartnerBrandingColor";
import EditSignUp from "./pages/EditSignUp";
import EditSignIn from "./pages/EditSignIn";
import CreateNewBrandedPage from "./pages/brandedPages/CreateNewBrandedPage";
import CustomBrandedPage from "./pages/brandedPages/CustomBrandedPage";
import Tiers from "./pages/Tiers";
import BrandedPages from "./pages/BrandedPages";
import ContentLibrary from "./pages/ContentLibrary";

export const routes = [
  {
    id: 1,
    path: "/",
    exact: true,
    element: <Dashboard />,
  },
  {
    id: 2,
    path: "/merchants",
    exact: true,
    element: <Merchants />,
  },
  {
    id: 3,
    path: "/offers",
    exact: true,
    element: <Offers />,
  },
  {
    id: 4,
    path: "/partners",
    exact: true,
    element: <Partners />,
  },
  {
    id: 5,
    path: "/sales",
    exact: true,
    element: <Sales />,
  },
  {
    id: 6,
    path: "/offers",
    exact: true,
    element: <Offers />,
  },
  {
    id: 7,
    path: "/content-library",
    exact: true,
    element: <ContentLibrary />,
  },
  {
    id: 8,
    path: "/payment",
    exact: true,
    element: <Payment />,
  },
  {
    id: 9,
    path: "/settings",
    exact: true,
    element: <Settings />,
  },
  {
    id: 10,
    path: "/settings/profile",
    exact: true,
    element: <Profile />,
  },
  {
    id: 11,
    path: "/settings/paypal-payouts",
    exact: true,
    element: <PaypalPayouts />,
  },
  {
    id: 12,
    path: "/settings/plans",
    exact: true,
    element: <Plans />,
  },
  {
    id: 13,
    path: "/settings/general",
    exact: true,
    element: <GeneralSettings />,
  },
  {
    id: 14,
    path: "/settings/branding-color",
    exact: true,
    element: <PartnerBrandingColor />,
  },
  {
    id: 15,
    path: "/settings/tier-measurement",
    exact: true,
    element: <TierMeasurement />,
  },
  {
    id: 16,
    path: "/edit-signup",
    exact: true,
    element: <EditSignUp />,
  },
  {
    id: 17,
    path: "/edit-signin",
    exact: true,
    element: <EditSignIn />,
  },
  {
    id: 18,
    path: "/branded-pages",
    exact: true,
    element: <BrandedPages />,
  },
  {
    id: 19,
    path: "/branded-pages/create-new-content",
    exact: true,
    element: <CreateNewBrandedPage />,
  },
  {
    id: 20,
    path: "/branded-pages/custom-branded-page",
    exact: true,
    element: <CustomBrandedPage />,
  },
  {
    id: 21,
    path: "/tiers",
    exact: true,
    element: <Tiers />,
  },
];
