import { Outlet } from "react-router-dom";
import { Navbar, NavigationButtons } from "../components";

export const CandidateRouter = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <NavigationButtons />
    </>
  );
};
