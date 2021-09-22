import { Link } from "react-router-dom";
import "./Pages.css";
import Card from "../components/ui/Card";
import React from "react";
import Select from "react-select";

const options = [
  { value: "3", label: "3 years old" },
  { value: "4", label: "4 years old" },
  { value: "5", label: "5 years old" },
  { value: "6", label: "6 years old" },
  { value: "7", label: "7 years old" },
  { value: "8", label: "8 years old" },
  { value: "9", label: "9 years old" },
  { value: "etc", label: "etc" },
];

class ChildAge extends React.Component {
  state = {
    selectedOption: null,
  };
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Option selected:`, selectedOption);
  };
  render() {
    const { selectedOption } = this.state;

    return (
      <div>
        <h1>La Trobe Sport Learn To Swim Interactive Levelling Guide</h1>
        <Card>
          <div className="content">
            <h3>How old are you?</h3>
            <Select
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />
            <h3> </h3>
            <Link
              to="/childOne"
              className="btn"
              style={{ textDecoration: "none" }}
            >
              Submit
            </Link>
          </div>
        </Card>
      </div>
    );
  }
}

export default ChildAge;
