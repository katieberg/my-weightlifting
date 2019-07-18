import React, { Component } from "react";
import "../styles/Program.css";
import { connect } from "react-redux";
import { fetchWorkouts } from "../redux/actions";

// fetch days together
// when user clicks on program name, fetch all days and render them

class Program extends Component {
  componentDidMount = () => {
    fetchWorkouts(this.props.id);
  };
  render() {
    return (
      <div className="program-container">
        <div className="text-center">
          <img
            src={this.props.img}
            alt={`${this.props.name} program logo`}
            className="program-img"
          />
        </div>
        <h3 className="text-center">{this.props.name}</h3>
        <div>{this.props.workouts}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    fetchWorkouts: id => {
      dispatch(fetchWorkouts(id));
    }
  };
};

export default Program;
