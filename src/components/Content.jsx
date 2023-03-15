import { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      basic: {
        name: "",
        email: "",
        phone: "",
      },
      educations: [
        {
          university: "",
          city: "",
          from: "",
          to: "",
          degree: "",
          gpa: "",
          thesis: "",
          relevant: "",
          edited: true,
        },
      ],
      experiences: [
        {
          company: "",
          position: "",
          city: "",
          from: "",
          to: "",
          description: "",
          edited: true,
        },
      ],
      skills: [
        {
          name: "",
          description: "",
          edited: true,
        },
      ],
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleEduUniChange = this.handleEduUniChange.bind(this);
    this.handleEduCityChange = this.handleEduCityChange.bind(this);
    this.handleEduFromChange = this.handleEduFromChange.bind(this);
    this.handleEduToChange = this.handleEduToChange.bind(this);
    this.handleEduDegreeChange = this.handleEduDegreeChange.bind(this);
    this.handleEduGPAChange = this.handleEduGPAChange.bind(this);
    this.handleEduThesisChange = this.handleEduThesisChange.bind(this);
    this.handleEduRelevantChange = this.handleEduRelevantChange.bind(this);
    this.handleAddEduClick = this.handleAddEduClick.bind(this);
    this.handleDeleteEduClick = this.handleDeleteEduClick.bind(this);
    this.handleEditEduClick = this.handleEditEduClick.bind(this);
    this.handleExpCompanyChange = this.handleExpCompanyChange.bind(this);
    this.handleExpPositionChange = this.handleExpPositionChange.bind(this);
    this.handleExpCityChange = this.handleExpCityChange.bind(this);
    this.handleExpFromChange = this.handleExpFromChange.bind(this);
    this.handleExpToChange = this.handleExpToChange.bind(this);
    this.handleExpDescChange = this.handleExpDescChange.bind(this);
    this.handleAddExpClick = this.handleAddExpClick.bind(this);
    this.handleEditExpClick = this.handleEditExpClick.bind(this);
    this.handleDeleteExpClick = this.handleDeleteExpClick.bind(this);
    this.handleSkillChange = this.handleSkillChange.bind(this);
    this.handleSkillDescChange = this.handleSkillDescChange.bind(this);
    this.handleAddSkillClick = this.handleAddSkillClick.bind(this);
    this.handleEditSkillClick = this.handleEditSkillClick.bind(this);
    this.handleDeleteSkillClick = this.handleDeleteSkillClick.bind(this);
  }

  handleNameChange(e) {
    const newState = this.state;
    newState.basic.name = e.target.value;
    this.setState(newState);
  }

  handleEmailChange(e) {
    const newState = this.state;
    newState.basic.email = e.target.value;
    this.setState(newState);
  }

  handlePhoneChange(e) {
    const newState = this.state;
    newState.basic.phone = e.target.value;
    this.setState(newState);
  }

  handleEduUniChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].university = e.target.value;
    this.setState(newState);
  }

  handleEduCityChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].city = e.target.value;
    this.setState(newState);
  }

  handleEduFromChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].from = e.target.value;
    this.setState(newState);
  }

  handleEduToChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].to = e.target.value;
    this.setState(newState);
  }

  handleEduDegreeChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].degree = e.target.value;
    this.setState(newState);
  }

  handleEduGPAChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].gpa = e.target.value;
    this.setState(newState);
  }

  handleEduThesisChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].thesis = e.target.value;
    this.setState(newState);
  }

  handleEduRelevantChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].relevant = e.target.value;
    this.setState(newState);
  }

  handleAddEduClick(e) {
    e.preventDefault();
    const newEdu = {
      university: "",
      city: "",
      from: "",
      to: "",
      degree: "",
      gpa: "",
      thesis: "",
      relevant: "",
      edited: true,
    };
    const newState = this.state;
    newState.educations[newState.educations.length - 1].edited = false;
    newState.educations.push(newEdu);
    this.setState(newState);
  }

  handleDeleteEduClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations.splice(key, 1);
    this.setState(newState);
  }

  handleEditEduClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.educations[key].edited = true;
    const arr = newState.educations.splice(key, 1);
    newState.educations.pop();
    newState.educations.push(...arr);
    this.setState(newState);
  }

  handleExpCompanyChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].company = e.target.value;
    this.setState(newState);
  }

  handleExpPositionChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].position = e.target.value;
    this.setState(newState);
  }

  handleExpCityChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].city = e.target.value;
    this.setState(newState);
  }

  handleExpFromChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].from = e.target.value;
    this.setState(newState);
  }

  handleExpToChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].to = e.target.value;
    this.setState(newState);
  }

  handleExpDescChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].description = e.target.value;
    this.setState(newState);
  }

  handleAddExpClick(e) {
    e.preventDefault();
    const newExp = {
      company: "",
      position: "",
      city: "",
      from: "",
      to: "",
      description: "",
      edited: true,
    };
    const newState = this.state;
    newState.experiences[newState.experiences.length - 1].edited = false;
    newState.experiences.push(newExp);
    this.setState(newState);
  }

  handleDeleteExpClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences.splice(key, 1);
    this.setState(newState);
  }

  handleEditExpClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.experiences[key].edited = true;
    const arr = newState.experiences.splice(key, 1);
    newState.experiences.pop();
    newState.experiences.push(...arr);
    this.setState(newState);
  }

  handleSkillChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.skills[key].name = e.target.value;
    this.setState(newState);
  }

  handleSkillDescChange(e) {
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.skills[key].description = e.target.value;
    this.setState(newState);
  }

  handleAddSkillClick(e) {
    e.preventDefault();
    const newExp = {
      name: "",
      description: "",
      edited: true,
    };
    const newState = this.state;
    newState.skills[newState.skills.length - 1].edited = false;
    newState.skills.push(newExp);
    this.setState(newState);
  }

  handleEditSkillClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.skills[key].edited = true;
    const arr = newState.skills.splice(key, 1);
    newState.skills.pop();
    newState.skills.push(...arr);
    this.setState(newState);
  }

  handleDeleteSkillClick(e) {
    e.preventDefault();
    const key = parseInt(e.target.dataset.key);
    const newState = this.state;
    newState.skills.splice(key, 1);
    this.setState(newState);
  }

  render() {
    const { basic, educations, experiences, skills } = this.state;
    const {
      handleNameChange,
      handleEmailChange,
      handlePhoneChange,
      handleEduUniChange,
      handleEduCityChange,
      handleEduFromChange,
      handleEduToChange,
      handleEduDegreeChange,
      handleEduGPAChange,
      handleEduThesisChange,
      handleEduRelevantChange,
      handleAddEduClick,
      handleDeleteEduClick,
      handleEditEduClick,
      handleExpCompanyChange,
      handleExpPositionChange,
      handleExpCityChange,
      handleExpFromChange,
      handleExpToChange,
      handleExpDescChange,
      handleAddExpClick,
      handleEditExpClick,
      handleDeleteExpClick,
      handleSkillChange,
      handleSkillDescChange,
      handleAddSkillClick,
      handleEditSkillClick,
      handleDeleteSkillClick,
    } = this;

    return (
      <main className="content">
        <Form
          basic={basic}
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
          onAddEduClick={handleAddEduClick}
          onDeleteEduClick={handleDeleteEduClick}
          onEditEduClick={handleEditEduClick}
          onExpCompanyChange={handleExpCompanyChange}
          onExpPositionChange={handleExpPositionChange}
          onExpCityChange={handleExpCityChange}
          onExpFromChange={handleExpFromChange}
          onExpToChange={handleExpToChange}
          onExpDescChange={handleExpDescChange}
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
          basic={basic}
          educations={educations}
          experiences={experiences}
          skills={skills}
        />
      </main>
    );
  }
}
