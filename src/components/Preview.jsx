import { Component } from "react";

export default class Preview extends Component {
  render() {
    const { basic, education, experience, skills } = this.props;

    return (
      <div className="preview">
        <h2>Preview</h2>
        <div className="basic-info">
          <div className="name">{basic.name}</div>
          <div>{basic.email + " • " + basic.phone}</div>
        </div>
        <div className="education-info">
          <h3>Education</h3>
          <div className="flex-space-between">
            <div className="university-name">{education.university}</div>
            <div className="university-city">{education.city}</div>
          </div>
          <div className="flex-space-between">
            <div>{education.degree + " • " + education.gpa}</div>
            <div>
              {education.from} - {education.to}{" "}
            </div>
          </div>
          <div>Thesis: "{education.thesis}"</div>
          <div>
            Relevant Coursework:
            <ul>
              <li>{education.relevant}</li>
            </ul>
          </div>
        </div>
        <div className="experience-info">
          <h3>Experience</h3>
          <div className="flex-space-between">
            <div>{experience.company}</div>
            <div>{experience.city}</div>
          </div>
          <div className="flex-space-between">
            <div>{experience.position}</div>
            <div>
              {experience.from} - {experience.to}
            </div>
          </div>
          <ul>
            <li>{experience.description}</li>
          </ul>
        </div>
        <div className="skill-interest-info">
          <h3>Skills & Interests</h3>
          <div>
            <strong>{skills.skill}: </strong>
            {skills.description}
          </div>
        </div>
      </div>
    );
  }
}
