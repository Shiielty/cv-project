import { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    this.props = {
      basic: {
        name: "Full Name",
        email: "youremail@example.com",
        phone: "(000)000-000",
      },
      education: {
        university: "Harvard University",
        city: "Cambridge, MA",
        from: "May 2015",
        to: "June 2019",
        degree: "Civil Engineering",
        gpa: "3.5/4.0",
        thesis: "Analysis Of The ... With ... Method",
        relevant: "Proficient with (app used in civil engineering)",
      },
      experience: {
        company: "Company/Organization",
        position: "Position",
        city: "City, State",
        from: "Month Year",
        to: "Month Year",
        description:
          "Describe your experience, knowledge, skills or achievement here",
      },
      skills: {
        skill: "Languange",
        description: "Fluent in English, French, and Japanese.",
      },
    };
    const { basic, education, experience, skills } = this.props;

    return (
      <main className="content">
        <Form
          basic={basic}
          education={education}
          experience={experience}
          skills={skills}
        />
        <Preview
          basic={basic}
          education={education}
          experience={experience}
          skills={skills}
        />
      </main>
    );
  }
}
