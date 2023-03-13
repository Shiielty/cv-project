import { Component } from "react";

export default class Form extends Component {
  render() {
    const { basic, educations, experiences, skills } = this.props;
    const { onNameChange, onEmailChange, onPhoneChange } = this.props;

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
            <label>
              University
              <input
                type="text"
                defaultValue={educations[0].university}
                placeholder="Harvard University"
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                defaultValue={educations[0].city}
                placeholder="Cambridge, MA"
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                defaultValue={educations[0].from}
                placeholder="May 2015"
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                defaultValue={educations[0].to}
                placeholder="June 2019"
              ></input>
            </label>
            <label>
              Degree/Concentration:
              <input
                type="text"
                defaultValue={educations[0].degree}
                placeholder="Ex. Civil Engineering"
              ></input>
            </label>
            <label>
              GPA
              <input
                type="text"
                defaultValue={educations[0].gpa}
                placeholder="[Note: Optional. Ex. 3.5/4.0]"
              ></input>
            </label>
            <label>
              Thesis
              <input
                type="text"
                defaultValue={educations[0].thesis}
                placeholder="[Note: Optional]"
              ></input>
            </label>
            <label>
              Relevant Coursework
              <input
                type="text"
                defaultValue={educations[0].relevant}
                placeholder="[Note: Optional. Awards and honors can also be listed here.]"
              ></input>
            </label>
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
