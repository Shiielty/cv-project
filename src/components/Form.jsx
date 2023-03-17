import Header from "./Header";
import EditLogo from "../assets/pen-to-square-solid.svg";
import TrashLogo from "../assets/trash-solid.svg";
import PlusLogo from "../assets/circle-plus-solid.svg";

function Form(props) {
  const { name, email, phone, educations, experiences, skills } = props;
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
    onAddRelevantClick,
    onAddEduClick,
    onDeleteEduClick,
    onEditEduClick,
    onExpCompanyChange,
    onExpPositionChange,
    onExpCityChange,
    onExpFromChange,
    onExpToChange,
    onExpDescChange,
    onAddDescClick,
    onAddExpClick,
    onEditExpClick,
    onDeleteExpClick,
    onSkillChange,
    onSkillDescChange,
    onAddSkillClick,
    onEditSkillClick,
    onDeleteSkillClick,
  } = props;

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
              value={education.relevantForm}
              placeholder="[Note: Optional. Awards and honors can also be listed here.]"
              data-key={i}
              onChange={onEduRelevantChange}
            ></input>
            <button
              className="plus-btn"
              type="button"
              onClick={onAddRelevantClick}
              data-key={i}
            >
              <img src={PlusLogo} alt="add" />
              Add Relevant Coursework
            </button>
          </label>
        </div>
      );
    } else {
      return (
        <div key={i} className="education-list">
          <span className="list-name">{education.university}</span>
          <button
            type="button"
            className="edit-btn"
            data-key={i}
            onClick={onEditEduClick}
          >
            <img src={EditLogo} alt="Edit" />
          </button>
          <button
            type="button"
            className="delete-btn"
            data-key={i}
            onClick={onDeleteEduClick}
          >
            <img src={TrashLogo} alt="Delete" />
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
              value={experience.descriptionForm}
              placeholder="Describe your experience, skills, accomplishment or achievements"
              data-key={i}
              onChange={onExpDescChange}
            ></textarea>
            <button
              className="plus-btn"
              type="button"
              onClick={onAddDescClick}
              data-key={i}
            >
              <img src={PlusLogo} alt="add" />
              Add Description
            </button>
          </label>
        </div>
      );
    } else {
      return (
        <div key={i} className="experience-list">
          <span className="list-name">{experience.company}</span>
          <button
            type="button"
            className="edit-btn"
            data-key={i}
            onClick={onEditExpClick}
          >
            <img src={EditLogo} alt="Edit" />
          </button>
          <button
            type="button"
            className="delete-btn"
            data-key={i}
            onClick={onDeleteExpClick}
          >
            <img src={TrashLogo} alt="Delete" />
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
          <span className="list-name">{skill.name}</span>
          <button
            type="button"
            className="edit-btn"
            data-key={i}
            onClick={onEditSkillClick}
          >
            <img src={EditLogo} alt="Delete" />
          </button>
          <button
            type="button"
            className="delete-btn"
            data-key={i}
            onClick={onDeleteSkillClick}
          >
            <img src={TrashLogo} alt="Delete" />
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
              value={name}
              placeholder="Full Name"
              onChange={onNameChange}
            ></input>
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              placeholder="youremail@example.com"
              onChange={onEmailChange}
            ></input>
          </label>
          <label>
            Phone Number
            <input
              type="tel"
              value={phone}
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

export default Form;
