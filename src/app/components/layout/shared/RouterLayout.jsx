import { Navbar, NavigationButtons } from "../../";
import "../../../styles/layout/routerLayout.css";

export const RouterLayout = ({ children, enableNavigationButtons = true }) => {
  return (
    <>
      <Navbar />
      <div className="router-layout-content">{children}</div>
      {enableNavigationButtons ? <NavigationButtons /> : ""}
    </>
  );
};
