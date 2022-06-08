import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import CreateRappel from "./components/CreateRappel";
import ShowRappels from "./components/ShowRappels";
import UpdateRappel from "./components/UpdateRappel";
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<ShowRappels />} />
            <Route path="/create" element={<CreateRappel />} />
            <Route path="/update/:id" element={<UpdateRappel />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
