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
import HookCounterThree from "./ReactHooks/HookCounterThree";
import HookCounterFour from "./ReactHooks/HookCounterFour";
import IncrementByFive from "./ReactHooks/incrementByFIve";
import MethodProps from "./ReactHooks/MethodProps";
import UserGreeting from "./ReactHooks/UserGreeting";

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
        <Route path="/hook-counter-three" component={HookCounterThree} />
        <Route path="/hook-counter-four" component={HookCounterFour} />
        <Route path="/increment" component={IncrementByFive} />
        <Route path="/parent-child" component={MethodProps} />
        <Route path="/user-greeting" component={UserGreeting} />
      </div>
    </Router>
  );
}

export default App;
