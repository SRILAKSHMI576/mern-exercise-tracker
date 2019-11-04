import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUsers from "./components/create-user.component";
import ClassCounter from "./ReactHooks/classCounter";
import HookCounter from "./ReactHooks/hookCounter";
import HookCounterTwo from "./ReactHooks/HookCounterTwo";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUsers} />
        <Route path="/class-counter" component={ClassCounter} />
        <Route path="/hook-counter" component={HookCounter} />
        <Route path="/hook-counter-two" component={HookCounterTwo} />
      </div>
    </Router>
  );
}

export default App;
