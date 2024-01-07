import { useSelector } from "react-redux";

export const useContentStore = () => {
  const { interviewers, candidates } = useSelector((state) => state.content);

    

  return {
    interviewers,
    candidates,

  };
};
