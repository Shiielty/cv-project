import { Component } from "react";

export default class Form extends Component {
  render() {
    const { basic, education, experience, skills } = this.props;

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
              ></input>
            </label>
            <label>
              Email
              <input
                type="email"
                value={basic.email}
                placeholder="youremail@example.com"
              ></input>
            </label>
            <label>
              Phone Number
              <input
                type="tel"
                value={basic.phone}
                placeholder="phone number"
              ></input>
            </label>
          </fieldset>

          <fieldset>
            <legend>Education</legend>
            <label>
              University
              <input
                type="text"
                value={education.university}
                placeholder="Harvard University"
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                value={education.city}
                placeholder="Cambridge, MA"
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                value={education.from}
                placeholder="May 2015"
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                value={education.to}
                placeholder="June 2019"
              ></input>
            </label>
            <label>
              Degree/Concentration:
              <input
                type="text"
                value={education.degree}
                placeholder="Ex. Civil Engineering"
              ></input>
            </label>
            <label>
              GPA
              <input
                type="text"
                value={education.gpa}
                placeholder="[Note: Optional. Ex. 3.5/4.0]"
              ></input>
            </label>
            <label>
              Thesis
              <input
                type="text"
                value={education.thesis}
                placeholder="[Note: Optional]"
              ></input>
            </label>
            <label>
              Relevant Coursework
              <input
                type="text"
                value={education.relevant}
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
                value={experience.company}
                placeholder="Company/Organization"
              ></input>
            </label>
            <label>
              Position
              <input
                type="text"
                value={experience.position}
                placeholder="Position"
              ></input>
            </label>
            <label>
              City
              <input
                type="text"
                value={experience.city}
                placeholder="City, State"
              ></input>
            </label>
            <label>
              From
              <input
                type="text"
                value={experience.from}
                placeholder="Month Year"
              ></input>
            </label>
            <label>
              To
              <input
                type="text"
                value={experience.to}
                placeholder="Month Year"
              ></input>
            </label>
            <label>
              Description
              <textarea
                value={experience.description}
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
                value={skills.skill}
                placeholder="Languange, Laboratory, Interests"
              ></input>
            </label>
            <label>
              Description
              <input
                type="text"
                value={skills.description}
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
