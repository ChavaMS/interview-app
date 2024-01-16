export const getSkillName = (skillId, skills) => {
  return skills.find((skill) => skill.id === (+skillId)).name;
};
