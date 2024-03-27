import { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrMap } from "react-icons/gr";
import "./index.css";

class header extends Component {
  state = { active: "" };

  setActive = (props) => {
    this.setState({ active: props });
    console.log(props);
  };

  render() {
    const { active } = this.state;
    return (
      <div className="header-format">
        <h2>O</h2>
        <div className="header-items">
          <NavLink
            to="/"
            onClick={() => this.setActive("Home")}
            className={`nav-link ${active === "Home" ? "active" : ""}`}
          >
            <FaHome />
          </NavLink>
          <NavLink
            to="/project"
            onClick={() => this.setActive("Project")}
            className={`nav-link ${active === "Project" ? "active" : ""}`}
          >
            <GrMap />
          </NavLink>
        </div>
        <div className="header-us-name">
          <h3 className="circle-name-violet">RR</h3>
          <h3 className="circle-name-green">AS</h3>
          <h3 className="circle-name-pink">AB</h3>
        </div>
      </div>
    );
  }
}

export default header;
