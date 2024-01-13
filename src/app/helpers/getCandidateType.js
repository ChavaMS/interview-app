import { CandidateType } from "../enums";

export const getCandidateType = (candidateType) => {
  return CandidateType[candidateType];
};
