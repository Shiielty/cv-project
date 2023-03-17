import { useState } from "react";
import { cloneDeep } from "lodash";
import Form from "./Form";
import Preview from "./Preview";

function Content() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [educations, setEducations] = useState([
    {
      university: "",
      city: "",
      from: "",
      to: "",
      degree: "",
      gpa: "",
      thesis: "",
      relevant: [],
      relevantForm: "",
      edited: true,
    },
  ]);

  const [experiences, setExperiences] = useState([
    {
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      description: [],
      descriptionForm: "",
      edited: true,
    },
  ]);

  const [skills, setSkills] = useState([
    {
      name: "",
      description: "",
      edited: true,
    },
  ]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleEduUniChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].university = e.target.value;
    setEducations(newState);
  }

  function handleEduCityChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].city = e.target.value;
    setEducations(newState);
  }

  function handleEduFromChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].from = e.target.value;
    setEducations(newState);
  }

  function handleEduToChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].to = e.target.value;
    setEducations(newState);
  }

  function handleEduDegreeChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].degree = e.target.value;
    setEducations(newState);
  }

  function handleEduGPAChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].gpa = e.target.value;
    setEducations(newState);
  }

  function handleEduThesisChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].thesis = e.target.value;
    setEducations(newState);
  }

  function handleEduRelevantChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].relevantForm = e.target.value;
    setEducations(newState);
  }

  function handleAddRelevantClick(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    const val = educations[key].relevantForm;
    newState[key].relevant.push(val);
    newState[key].relevantForm = "";
    setEducations(newState);
  }

  function handleAddEduClick(e) {
    e.preventDefault();
    const newEdu = {
      university: "",
      city: "",
      from: "",
      to: "",
      degree: "",
      gpa: "",
      thesis: "",
      relevant: [],
      edited: true,
    };
    const newState = cloneDeep(educations);
    newState[newState.length - 1].edited = false;
    newState.push(newEdu);
    setEducations(newState);
  }

  function handleDeleteEduClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState.splice(key, 1);
    setEducations(newState);
  }

  function handleEditEduClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(educations);
    newState[key].edited = true;
    const arr = newState.splice(key, 1);
    newState.pop();
    newState.push(...arr);
    setEducations(newState);
  }

  function handleExpCompanyChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].company = e.target.value;
    setExperiences(newState);
  }

  function handleExpPositionChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].position = e.target.value;
    setExperiences(newState);
  }

  function handleExpCityChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].city = e.target.value;
    setExperiences(newState);
  }

  function handleExpFromChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].from = e.target.value;
    setExperiences(newState);
  }

  function handleExpToChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].to = e.target.value;
    setExperiences(newState);
  }

  function handleExpDescChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].descriptionForm = e.target.value;
    setExperiences(newState);
  }

  function handleAddDescClick(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    const val = experiences[key].descriptionForm;
    newState[key].description.push(val);
    newState[key].descriptionForm = "";
    setExperiences(newState);
  }

  function handleAddExpClick(e) {
    e.preventDefault();
    const newExp = {
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      description: [],
      descriptionForm: "",
      edited: true,
    };
    const newState = cloneDeep(experiences);
    newState[newState.length - 1].edited = false;
    newState.push(newExp);
    setExperiences(newState);
  }

  function handleDeleteExpClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState.splice(key, 1);
    setExperiences(newState);
  }

  function handleEditExpClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(experiences);
    newState[key].edited = true;
    const arr = newState.splice(key, 1);
    newState.pop();
    newState.push(...arr);
    setExperiences(newState);
  }

  function handleSkillChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(skills);
    newState[key].name = e.target.value;
    setSkills(newState);
  }

  function handleSkillDescChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(skills);
    newState[key].description = e.target.value;
    setSkills(newState);
  }

  function handleAddSkillClick(e) {
    e.preventDefault();
    const newExp = {
      name: "",
      description: "",
      edited: true,
    };
    const newState = cloneDeep(skills);
    newState[newState.length - 1].edited = false;
    newState.push(newExp);
    setSkills(newState);
  }

  function handleEditSkillClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(skills);
    newState[key].edited = true;
    const arr = newState.splice(key, 1);
    newState.pop();
    newState.push(...arr);
    setSkills(newState);
  }

  function handleDeleteSkillClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = cloneDeep(skills);
    newState.splice(key, 1);
    setSkills(newState);
  }

  return (
    <main className="content">
      <Form
        name={name}
        email={email}
        phone={phone}
        educations={educations}
        experiences={experiences}
        skills={skills}
        onNameChange={handleNameChange}
        onEmailChange={handleEmailChange}
        onPhoneChange={handlePhoneChange}
        onEduUniChange={handleEduUniChange}
        onEduCityChange={handleEduCityChange}
        onEduFromChange={handleEduFromChange}
        onEduToChange={handleEduToChange}
        onEduDegreeChange={handleEduDegreeChange}
        onEduGPAChange={handleEduGPAChange}
        onEduThesisChange={handleEduThesisChange}
        onEduRelevantChange={handleEduRelevantChange}
        onAddRelevantClick={handleAddRelevantClick}
        onAddEduClick={handleAddEduClick}
        onDeleteEduClick={handleDeleteEduClick}
        onEditEduClick={handleEditEduClick}
        onExpCompanyChange={handleExpCompanyChange}
        onExpPositionChange={handleExpPositionChange}
        onExpCityChange={handleExpCityChange}
        onExpFromChange={handleExpFromChange}
        onExpToChange={handleExpToChange}
        onExpDescChange={handleExpDescChange}
        onAddDescClick={handleAddDescClick}
        onAddExpClick={handleAddExpClick}
        onEditExpClick={handleEditExpClick}
        onDeleteExpClick={handleDeleteExpClick}
        onSkillChange={handleSkillChange}
        onSkillDescChange={handleSkillDescChange}
        onAddSkillClick={handleAddSkillClick}
        onEditSkillClick={handleEditSkillClick}
        onDeleteSkillClick={handleDeleteSkillClick}
      />
      <Preview
        name={name}
        email={email}
        phone={phone}
        educations={educations}
        experiences={experiences}
        skills={skills}
      />
    </main>
  );
}

export default Content;
