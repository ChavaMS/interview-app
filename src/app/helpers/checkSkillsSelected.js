export const checkSkillsSelected = (skillsForm) => {
  return skillsForm.some((skill) => skill.isChecked);
};
