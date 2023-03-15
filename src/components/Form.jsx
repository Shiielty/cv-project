import { Component } from "react";
import Header from "./Header";

export default class Form extends Component {
  render() {
    const { basic, educations, experiences, skills } = this.props;
    const {
      onNameChange,
      onEmailChange,
      onPhoneChange,
      onEduUniChange,
      onEduCityChange,
      onEduFromChange,
      onEduToChange,
      onEduDegreeChange,
      onEduGPAChange,
      onEduThesisChange,
      onEduRelevantChange,
      onAddEduClick,
      onDeleteEduClick,
      onEditEduClick,
      onExpCompanyChange,
      onExpPositionChange,
      onExpCityChange,
      onExpFromChange,
      onExpToChange,
      onExpDescChange,
      onAddExpClick,
      onEditExpClick,
      onDeleteExpClick,
      onSkillChange,
      onSkillDescChange,
      onAddSkillClick,
      onEditSkillClick,
      onDeleteSkillClick,
    } = this.props;

    const allEducationsForm = educations.map((education, i) => {
      if (i + 1 === educations.length && education.edited === true) {
        return (
          <div key={i}>
            <label>
              University
              <input
                type="text"
                value={education.university}
                placeholder="Harvard University"
                data-key={i}
                onChange={onEduUniChange}
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                value={education.city}
                data-key={i}
                placeholder="Cambridge, MA"
                onChange={onEduCityChange}
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                value={education.from}
                placeholder="May 2015"
                data-key={i}
                onChange={onEduFromChange}
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                value={education.to}
                placeholder="June 2019"
                data-key={i}
                onChange={onEduToChange}
              ></input>
            </label>
            <label>
              Degree/Concentration:
              <input
                type="text"
                value={education.degree}
                placeholder="Ex. Civil Engineering"
                data-key={i}
                onChange={onEduDegreeChange}
              ></input>
            </label>
            <label>
              GPA
              <input
                type="text"
                value={education.gpa}
                placeholder="[Note: Optional. Ex. 3.5/4.0]"
                data-key={i}
                onChange={onEduGPAChange}
              ></input>
            </label>
            <label>
              Thesis
              <input
                type="text"
                value={education.thesis}
                placeholder="[Note: Optional]"
                data-key={i}
                onChange={onEduThesisChange}
              ></input>
            </label>
            <label>
              Relevant Coursework
              <input
                type="text"
                value={education.relevant}
                placeholder="[Note: Optional. Awards and honors can also be listed here.]"
                data-key={i}
                onChange={onEduRelevantChange}
              ></input>
            </label>
          </div>
        );
      } else {
        return (
          <div key={i} className="education-list">
            {education.university}
            <button
              type="button"
              className="edit-btn"
              data-key={i}
              onClick={onEditEduClick}
            >
              edit
            </button>
            <button
              type="button"
              className="delete-btn"
              data-key={i}
              onClick={onDeleteEduClick}
            >
              x
            </button>
          </div>
        );
      }
    });

    const allExperiencesForm = experiences.map((experience, i) => {
      if (i + 1 === experiences.length && experience.edited === true) {
        return (
          <div key={i}>
            <label>
              Company
              <input
                type="text"
                value={experience.company}
                placeholder="Company/Organization"
                data-key={i}
                onChange={onExpCompanyChange}
              ></input>
            </label>
            <label>
              Position
              <input
                type="text"
                value={experience.position}
                placeholder="Position"
                data-key={i}
                onChange={onExpPositionChange}
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                value={experience.city}
                placeholder="City, State"
                data-key={i}
                onChange={onExpCityChange}
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                value={experience.from}
                placeholder="Month Year"
                data-key={i}
                onChange={onExpFromChange}
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                value={experience.to}
                placeholder="Month Year"
                data-key={i}
                onChange={onExpToChange}
              ></input>
            </label>
            <label>
              Description
              <textarea
                value={experience.description}
                placeholder="Describe your experience, skills, accomplishment or achievements"
                data-key={i}
                onChange={onExpDescChange}
              ></textarea>
            </label>
          </div>
        );
      } else {
        return (
          <div key={i} className="education-list">
            {experience.company}
            <button
              type="button"
              className="edit-btn"
              data-key={i}
              onClick={onEditExpClick}
            >
              edit
            </button>
            <button
              type="button"
              className="delete-btn"
              data-key={i}
              onClick={onDeleteExpClick}
            >
              x
            </button>
          </div>
        );
      }
    });

    const allSkillsForm = skills.map((skill, i) => {
      if (i + 1 === skills.length && skill.edited === true) {
        return (
          <div key={i}>
            <label>
              Category
              <input
                type="text"
                value={skill.name}
                placeholder="Languange, Laboratory, Interests"
                data-key={i}
                onChange={onSkillChange}
              ></input>
            </label>
            <label>
              Description
              <input
                type="text"
                value={skill.description}
                placeholder="List of languange/research/activities you interested"
                data-key={i}
                onChange={onSkillDescChange}
              ></input>
            </label>
          </div>
        );
      } else {
        return (
          <div key={i} className="skill-list">
            {skill.name}
            <button
              type="button"
              className="edit-btn"
              data-key={i}
              onClick={onEditSkillClick}
            >
              edit
            </button>
            <button
              type="button"
              className="delete-btn"
              data-key={i}
              onClick={onDeleteSkillClick}
            >
              x
            </button>
          </div>
        );
      }
    });

    return (
      <div className="form">
        <Header />
        <form>
          <div className="form-category">
            <div className="form-header">Basic Info</div>
            <label>
              Name
              <input
                type="text"
                value={basic.name}
                placeholder="Full Name"
                onChange={onNameChange}
              ></input>
            </label>
            <label>
              Email
              <input
                type="email"
                value={basic.email}
                placeholder="youremail@example.com"
                onChange={onEmailChange}
              ></input>
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                value={basic.phone}
                placeholder="phone number"
                onChange={onPhoneChange}
              ></input>
            </label>
          </div>

          <div className="form-category">
            <div className="form-header">Education</div>
            {allEducationsForm}
            <button className="add-btn" onClick={onAddEduClick}>
              Add More
            </button>
          </div>

          <div className="form-category">
            <div className="form-header">Experience</div>
            {allExperiencesForm}
            <button type="button" className="add-btn" onClick={onAddExpClick}>
              Add More
            </button>
          </div>

          <div className="form-category">
            <div className="form-header">Skills & Interest</div>
            {allSkillsForm}
            <button type="button" className="add-btn" onClick={onAddSkillClick}>
              Add More
            </button>
          </div>
        </form>
      </div>
    );
  }
}
