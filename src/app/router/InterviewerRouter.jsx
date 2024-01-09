import { Navbar, NavigationButtons } from "../components";
import { Outlet } from "react-router-dom";

export const InterviewerRouter = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <NavigationButtons />
    </>
  );
};
