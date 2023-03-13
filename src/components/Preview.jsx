import { Component } from "react";

export default class Preview extends Component {
  render() {
    const { basic, educations, experiences, skills } = this.props;

    const allEducations = educations.map((education, i) => {
      return (
        <div key={i}>
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
      );
    });

    const allExperiences = experiences.map((experience, i) => {
      return (
        <div key={i}>
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
      );
    });

    const allSkills = skills.map((skill, i) => {
      return (
        <div key={i}>
          <strong>{skill.name}: </strong>
          {skill.description}
        </div>
      );
    });

    return (
      <div className="preview">
        <h2>Preview</h2>
        <div className="basic-info">
          <div className="name">{basic.name}</div>
          <div>{basic.email + " • " + basic.phone}</div>
        </div>
        <div className="educations-info">
          <h3>Education</h3>
          <div className="educations-wrapper">{allEducations}</div>
        </div>
        <div className="experiences-info">
          <h3>Experience</h3>
          <div className="experiences-wrapper">{allExperiences}</div>
        </div>
        <div className="skill-interest-info">
          <h3>Skills & Interests</h3>
          <div className="skills-wrapper">{allSkills}</div>
        </div>
      </div>
    );
  }
}
