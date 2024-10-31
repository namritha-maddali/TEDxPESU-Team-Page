import React from "react";
import "./Team.css"; // Import the CSS for styling
import ch1 from "../assets/Divyansh Sharma.jpg";
import ch2 from "../assets/Deepthi_Karani.jpeg";
import ch3 from "../assets/Kriti_Sujeeth.jpg";
import cc1 from "../assets/Smruthi S Varier_C&C.jpg";
import cc2 from "../assets/Chetana_Mital_CNC.jpg";
import cc3 from "../assets/Diya_Arya_CNC.jpeg";
import m1 from "../assets/Mariam k - marketing .jpg";
import m2 from "../assets/Nandini Ramachandra_Marketing.png";
import ep1 from "../assets/Shreya_EventProduction.jpg";
import ep2 from "../assets/Ansh-Event Production.jpg";
import d1 from "../assets/batman.jpg";
import d2 from "../assets/spiderman.jpg";
import wd from "../assets/Hemashree_M S_WebDevelopment.jpg";
import ve from "../assets/Jayant Anand_VE.jpg";
import sp from "../assets/Adith_Reddy_Sponsorship_Head.jpeg";

const teamData = [
  {
    domain: "STUDENT LEADS",
    members: [
      { name: "Deepthi", lastname: "Karani", image: ch2 },
      { name: "Divyansh", lastname: "Sharma", image: ch1 }, 
      { name: "Kriti", lastname: "Sujeeth", image: ch3 },
    ],
  },
  {
    domain: "CONTENT & CURATION LEADS",
    members: [
      { name: "Smruthi", lastname: "S Varier", image: cc1 },
      { name: "Chetana", lastname: "Mital", image: cc2 },
      { name: "Diya", lastname: "Arya", image: cc3 },
    ],
  },
  {
    domain: "MARKETING LEADS",
    members: [
      { name: "Mariam", lastname: "K", image: m1 },
      { name: "Nandini", lastname: "Ramachandra", image: m2 },
    ],
  },
  {
    domain: "EVENT PRODUCTION LEADS",
    members: [
      { name: "Shreya", lastname: "", image: ep1 },
      { name: "Ansh", lastname: "", image: ep2 },
    ],
  },
  {
    domain: "DESIGN LEADS",
    members: [
      { name: "Bruce", lastname: "Wayne", image: d1 },
      { name: "Peter", lastname: "Parker", image: d2 },
    ],
  },
  {
    domain: "WEB DEVELOPMENT LEAD",
    members: [
      { name: "Hemashree", lastname: "M S", image: wd },
    ],
  },
  {
    domain: "VIDEO EDITING LEAD",
    members: [
      { name: "Jayant", lastname: "Anand", image: ve },
    ],
  },
  {
    domain: "SPONSORSHIP LEAD",
    members: [
      { name: "Adith", lastname: "Reddy", image: sp },
    ],
  },
  // Add more domains and members as needed
];

function Team() {
  return (
    <div className="team-section">
      {teamData.map((domain, index) => (
        <div key={index} className="domain-group">
          <h2 className="domain-name">{domain.domain}</h2>
          <div className="members-list">
            {domain.members.map((member, index) => (
              <div key={index} className="team-member">
                <img src={member.image} alt={member.name} className="profile-pic" />
                <div className="member-info">
                  <p className="member-name">{member.name}</p>
                  <p className="member-lastname">{member.lastname}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Team;
