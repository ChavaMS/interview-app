import { Navbar, NavigationButtons } from "../components";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <NavigationButtons />
    </>
  );
};
