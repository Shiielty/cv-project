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
          company: "Company/Organization",
          position: "Position",
          city: "City, State",
          from: "Month Year",
          to: "Month Year",
          description:
            "Describe your experience, knowledge, skills or achievement here",
        },
        {
          company: "Company/Organization",
          position: "Position",
          city: "City, State",
          from: "Month Year",
          to: "Month Year",
          description:
            "Describe your experience, knowledge, skills or achievement here",
        },
      ],
      skills: [
        {
          name: "Languange",
          description: "Fluent in English, French, and Japanese.",
        },
        {
          name: "Languange",
          description: "Fluent in English, French, and Japanese.",
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
