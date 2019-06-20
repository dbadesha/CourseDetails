import React, { Component } from "react";
// Components
import Input from "./Input";
// Styles
import "../styles/course.css";

/**
 * Cousre App Component
 * Course is presentational component to the main application.
 * @author dbadesha
 */
export default class Course extends Component {
  render() {
    return (
      <div className="courseDetails">
        <h1 className="courseTitle">Course Display App</h1>
        <Input />
      </div>
    );
  }
}
