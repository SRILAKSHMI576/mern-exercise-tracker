import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this);

    this.state = { Exercises: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/exercises/")
      .then(response => {
        this.setState({ exercises: response.date });
      })
      .catch(error => {
        console.log(error);
      });
  }

  deleteExercise(id) {
    axios
      .delete("http://localhost:8080/exercises/" + id)
      .then(res => console.log(res.data));

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    });
  }

  render() {
    return (
      <div>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.ExercisesList}</tbody>
        </table>
      </div>
    );
  }
}

export default ExercisesList;
