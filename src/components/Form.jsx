import { Component } from "react";

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
    } = this.props;

    const allEducationsForm = educations.map((education, i) => {
      if (i + 1 === educations.length && education.edited === true) {
        return (
          <div key={education}>
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
          <>
            <div key={education} className="education-list">
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
          </>
        );
      }
    });

    return (
      <div className="form">
        <h2>Form</h2>
        <form>
          <fieldset>
            <legend>Basic Info</legend>
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
          </fieldset>

          <fieldset>
            <legend>Education</legend>
            {allEducationsForm}
            <button className="add-edu-btn" onClick={onAddEduClick}>
              Add More
            </button>
          </fieldset>

          <fieldset>
            <legend>Experience</legend>
            <label>
              Company
              <input
                type="text"
                defaultValue={experiences[0].company}
                placeholder="Company/Organization"
              ></input>
            </label>
            <label>
              Position
              <input
                type="text"
                defaultValue={experiences[0].position}
                placeholder="Position"
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                defaultValue={experiences[0].city}
                placeholder="City, State"
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                defaultValue={experiences[0].from}
                placeholder="Month Year"
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                defaultValue={experiences[0].to}
                placeholder="Month Year"
              ></input>
            </label>
            <label>
              Description
              <textarea
                defaultValue={experiences[0].description}
                placeholder="Describe your experience, skills, accomplishment or achievements"
              ></textarea>
              <button type="button">Add</button>
            </label>
          </fieldset>

          <fieldset>
            <label>Skills & Interest</label>
            <label>
              Skills/Interest
              <input
                type="text"
                defaultValue={skills[0].name}
                placeholder="Languange, Laboratory, Interests"
              ></input>
            </label>
            <label>
              Description
              <input
                type="text"
                defaultValue={skills[0].description}
                placholder="List of languange/research/activities you interested"
              ></input>
            </label>
            <button type="button">Add</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
