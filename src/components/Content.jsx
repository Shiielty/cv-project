import { Component } from "react";
import Form from "./Form";
import Preview from "./Preview";

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.test = {
      basic: {
        name: "Full Name",
        email: "youremail@example.com",
        phone: "(000)000-000",
      },
      educations: [
        {
          university: "Harvard University",
          city: "Cambridge, MA",
          from: "May 2015",
          to: "June 2019",
          degree: "Civil Engineering",
          gpa: "3.5/4.0",
          thesis: "Analysis Of The ... With ... Method",
          relevant: "Proficient with (app used in civil engineering)",
        },
        {
          university: "Harvard University",
          city: "Cambridge, MA",
          from: "May 2015",
          to: "June 2019",
          degree: "Civil Engineering",
          gpa: "3.5/4.0",
          thesis: "Analysis Of The ... With ... Method",
          relevant: "Proficient with (app used in civil engineering)",
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
  }

  render() {
    const { basic, educations, experiences, skills } = this.test;

    return (
      <main className="content">
        <Form
          basic={basic}
          educations={educations}
          experiences={experiences}
          skills={skills}
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
