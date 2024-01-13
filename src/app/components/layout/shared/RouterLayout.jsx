import { Navbar, NavigationButtons } from "../../";
import "../../../styles/layout/routerLayout.css";

export const RouterLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="router-layout-content">{children}</div>
      <NavigationButtons />
    </>
  );
};
