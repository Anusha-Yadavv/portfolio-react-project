import "./Rightbar.css";

const experiences = [
  {
    companyName: "Infosys",
    duration: "2 years",
    points: [
      "Implement user interfaces using HTML, CSS, and JavaScript.",
      "Create responsive designs to ensure compatibility across various devices and screen sizes.",
      "Add interactivity to web applications through the implementation of buttons, forms, and animations.",
      "Optimize the performance of frontend code for fast page load times and smooth user experience.",
      "Ensure cross-browser compatibility to support different web browsers.",
      "Collaborate closely with UX/UI designers to translate design mockups into code.",
      "Conduct testing and debugging to identify and fix issues in the user interface.",
      "Integrate frontend code with backend APIs to fetch and display dynamic data.",
    ],
    role: "Frontend Developer",
    skills: ["JavaScript", "Python", "React", "Redux"],
  },
  {
    companyName: "Google",
    duration: "2 years",
    points: [
      "Develop server-side logic using programming languages such as Python, Node.js, Java, or Ruby.",
      "Design and manage database schemas, optimizing queries, and ensuring data integrity.",
      "Create APIs (Application Programming Interfaces) to facilitate communication between frontend and backend systems.",
      "Implement authentication and authorization mechanisms to secure access to backend resources and APIs.",
      "Optimize server-side code for efficient handling of requests and scaling applications.",
      "Implement security measures such as encryption and data validation to protect sensitive data.",
      "Set up logging and monitoring systems to track application performance and troubleshoot issues.",
      "Use version control systems like Git to manage and collaborate on code with other developers.",
    ],
    role: "Backend Developer",

    skills: ["Java", "SQL", "Node JS"],
  },
];
const ExperienceCard = ({ details }) => {
  return (
    <div className="experience-card">
      <div className="company-container">
        <p className="company-name">
          {details.companyName + " - " + details.role}
        </p>
        <span>{details.duration}</span>
      </div>
      <ul>
        {details.points.map((point) => {
          return <li>{point}</li>;
        })}
      </ul>
      <div className="skills">
        {details.skills.map((skill) => (
          <span>{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Rightbar = () => {
  return (
    <div className="rightbar-container">
      <h1>Experience</h1>

      <ExperienceCard details={experiences[0]} />
      <ExperienceCard details={experiences[1]} />
    </div>
  );
};
export default Rightbar;
