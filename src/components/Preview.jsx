import { Component } from "react";

export default class Preview extends Component {
  render() {
    const { basic, educations, experiences, skills } = this.props;

    const allEducations = educations.map((education, i) => {
      return (
        <div key={i}>
          <div className="flex-space-between">
            <div className="university-name">
              {education.university ? education.university : "University Name"}
            </div>
            <div className="university-city">
              {education.city ? education.city : "City, State"}
            </div>
          </div>
          <div className="flex-space-between">
            <div>
              {(education.degree ? education.degree : "Degree/Concentration") +
                (education.gpa ? " • GPA: " + education.gpa : "")}
            </div>
            <div>
              {education.from ? education.from : "Month Year"} -{" "}
              {education.to ? education.to : "Month Year"}
            </div>
          </div>
          <div>Thesis: "{education.thesis ? education.thesis : "Title"}"</div>
          <div>
            Relevant Coursework:{" "}
            {education.relevant
              ? education.relevant
              : "(Awards and honors can also be listed here.)"}
          </div>
        </div>
      );
    });

    const allExperiences = experiences.map((experience, i) => {
      return (
        <div key={i}>
          <div className="flex-space-between">
            <div className="company-name">
              {experience.company ? experience.company : "Company/Organization"}
            </div>
            <div>{experience.city ? experience.city : "City, State"}</div>
          </div>
          <div className="flex-space-between">
            <div>{experience.position ? experience.position : "Position"}</div>
            <div>
              {experience.from ? experience.from : "Month Year"} -{" "}
              {experience.to ? experience.to : "Month Year"}
            </div>
          </div>
          <ul>
            <li>
              {experience.description
                ? experience.description
                : "Describe your experience, knowledge or achievement here."}
            </li>
          </ul>
        </div>
      );
    });

    const allSkills = skills.map((skill, i) => {
      return (
        <div key={i}>
          <strong>{skill.name ? skill.name : "Category"}: </strong>
          {skill.description
            ? skill.description
            : "Description (ex. Languange: List of fluent language)"}
        </div>
      );
    });

    const fullName = basic.name ? basic.name : "Full Name";

    return (
      <div className="preview">
        <h2>Preview</h2>
        <div className="basic-info">
          <div className="name">{basic.name ? basic.name : "Full Name"}</div>
          <div>
            {(basic.email ? basic.email : "youremail@example.com") +
              " • " +
              (basic.phone ? basic.phone : "(000)000-000")}
          </div>
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
