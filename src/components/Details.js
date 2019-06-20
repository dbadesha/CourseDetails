import React, { Component } from "react";
// Styles
import "../styles/details.css";

/**
 * Cousre details component is responsible for rendering the details of cousre
 * Department : CS
 * Course Number : 201
 * Semester : Winter
 * Year : 2019
 * @author dbadesha
 */
export default class Details extends Component {
  constructor(props) {
    super();
  }

  render() {
    if (this.props.list.length <= 1) {
      return (
        <div className="detailsText">
          To get course details, Please enter format as following. CS:201
          Winter:2019
        </div>
      );
    } else if (this.props.list.length === 2) {
      return (
        <ul className="detailItems">
          <li>Department : {this.props.list[0].match(/[A-Z]+/i)}</li>
          <li>Course Number : {this.props.list[0].match(/[0-9]+/)}</li>
          <li>
            Semester :{" "}
            {this.getSemesterDetails(this.props.list[1].match(/[A-Z]+/i))}
          </li>
          <li>
            Year : {this.getYearDetails(this.props.list[1].match(/[0-9]+/))}
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="detailItems">
          <li>Department : {this.props.list[0].match(/[A-Z]+/i)}</li>
          <li>Course Number : {this.props.list[1].match(/[0-9]+/)}</li>
          <li>
            Semester :{" "}
            {this.getSemesterDetails(this.props.list[2].match(/[A-Z]+/i))}
          </li>
          <li>
            Year : {this.getYearDetails(this.props.list[3].match(/[0-9]+/))}
          </li>
        </ul>
      );
    }
  }

  /**
   * Returns year details
   */
  getYearDetails(value) {
    if (value[0].length < 2) {
      return "200" + value;
    } else if (value[0].length < 3) {
      return "20" + value;
    } else {
      return value;
    }
  }

  /**
   * Returns semester details
   */
  getSemesterDetails(value) {
    if (
      ["WINTER", "SUMMER", "FALL", "SPRING"].includes(value[0].toUpperCase())
    ) {
      return value[0];
    }
    switch (value[0].toUpperCase()) {
      case "W":
        return "Winter";
      case "F":
        return "Fall";
      case "Su":
        return "Summer";
      case "S":
        return "Spring";
      default:
        return "In Valid Semster";
    }
  }
}
