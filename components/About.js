//------About.js------------

import React from "react";
import { User } from "./User";
export const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to About page!</p>
      <p>
        Hello! I’m Karnesh Singh, a passionate front-end developer and designer
        dedicated to crafting engaging web applications. I recently designed and
        developed a Products page using React
      </p>
      <p>
        This project features an intuitive user interface that enhances the user
        experience, robust search functionality for easy discovery. I also
        implemented seamless navigation with React Router and utilized
        conditional rendering to create an interactive application. and I am
        actively working on improving this aspect. I thrive on challenges and am
        always looking to expand my skill set. I’m excited to connect with
        fellow developers, designers, and food enthusiasts to share insights and
        explore collaboration opportunities. Let’s connect and cook up some
        innovative ideas together!
      </p>
      <h2>Goals</h2>
      <ul>
        <li>Integrity</li>
        <li>Innovation</li>
        <li>Teamwork</li>
        <li>Sustainability</li>
      </ul>
    </div>
  );
};

// class About extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }
//   render() {
//     return (
//       <>
//         <h1>Welcome to About</h1>
//         <User name={"Karnesh"}></User>
//         <p>{this.state.count}</p>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count + 2,
//             });
//           }}
//         >
//           Click
//         </button>
//       </>
//     );
//   }
// }
export default About;
