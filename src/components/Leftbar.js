const data = {
  databases: ["MySql", "MondoDB", "SQL"],
  languages: ["Python", "JavaScript", "C++"],
  frameworks: ["Django", "Flask", "Angular"],
  achievements: [
    "National Cadet Corps (NCC) A’ Certificate with SGT rank",
    "Secured silver medal in Open National Taekwondo Championship",
  ],
};

const education = [
  {
    course: "B.Tech",
    institute: "Aurora's Technological and Research Institute",
    duration: "2017-2021",
    grade: "7.0",
    branch: "CSE",
  },
  {
    course: "Intermediate",
    institute: "Narayana Junior College",
    duration: "2015-2017",
    grade: "9.2",
    branch: "MPC",
  },
  {
    course: "SSC",
    institute: "Z.P.H.S Nagole",
    duration: "2015",
    grade: "7.5",
    branch: "",
  },
];

const SubSection = ({ title, points }) => {
  return (
    <div className="subsection">
      <p className="title">{title}</p>
      <ul>
        {points.map((point) => (
          <li>{point}</li>
        ))}
      </ul>
    </div>
  );
};

const EducationCard = ({ eachEducation }) => {
  return (
    <div className="education-card">
      <h4>{eachEducation.institute}</h4>
      <p>{eachEducation.grade}</p>
      <p>{eachEducation.duration}</p>
      {eachEducation.branch && <p>{eachEducation.branch}</p>}

      <span className="course">{eachEducation.course}</span>
    </div>
  );
};

const Leftbar = () => {
  return (
    <div className="leftbar-container">
      <div className="education">
        <h1>Education</h1>
        {education.map((eachEducation) => (
          <EducationCard eachEducation={eachEducation} />
        ))}
      </div>
      <SubSection title="Databases" points={data.databases} />
      <SubSection title="Languages" points={data.languages} />
      <SubSection title="Frameworks" points={data.frameworks} />
      <SubSection title="Achievements" points={data.achievements} />
    </div>
  );
};
export default Leftbar;
