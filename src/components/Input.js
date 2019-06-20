import React from "react";
// Components
import Details from "./Details";
// Styles
import "../styles/input.css";

/**
 * Cousre Input Component is responsible for rendering the input box
 * and processing the user entered value. Allows user to enter the course info and clean content.
 * e.g. CS:201 Winter:2019
 * @author dbadesha
 */
export default class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearDetails = this.clearDetails.bind(this);
  }

  render() {
    return (
      <div className="inputBox">
        <form onSubmit={e => this.handleSubmit(e)}>
          <input
            className="courseInput"
            type="text"
            ref="name"
            defaultValue=""
            placeholder={"Please Enter Course Details Here"}
          />
          <button className="submitButton">Submit</button>
          <button className="clearButton" onClick={() => this.clearDetails()}>
            Clear
          </button>
          <Details list={this.state.list} />
        </form>
      </div>
    );
  }

  /**
   * Handle submission called on click submit.
   */
  handleSubmit(e) {
    e.preventDefault();
    const inputValue = [];
    this.refs.name.value
      .trim()
      .split(" ")
      .forEach(element => {
        inputValue.push(element);
      });

    this.setState({
      list: inputValue
    });
  }

  /**
   * Handle clearing the content called on click submit.
   */
  clearDetails() {
    this.setState({ list: [] });
    this.refs.name.value = "";
  }
}
