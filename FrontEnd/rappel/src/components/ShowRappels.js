import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import RappelCard from './RappelCard';

class ShowRappels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rappels: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8082/api/rappels')
      .then(res => {
        this.setState({
          rappels: res.data
        })
      })
      .catch(err =>{
        console.log('Error from ShowRappels');
      })
  };


  render() {
    const rappels = this.state.rappels;
    console.log("PrintRappel: " + rappels);
    let rappellist;

    if(!rappels) {
      rappellist = "there is no rappel recored!";
    } else {
      rappellist = rappels.map((rappel, k) =>
        <RappelCard rappel={rappel} key={k} />
      );
    }

    return (
      <div className="ShowRappels">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <h1 className="display-4 text-center">Rappel List</h1>
            </div>

            <div className="col-md-4">
              <Link to="/create" className="btn btn-outline-warning float-right">
                + Add New Rappel
              </Link>
            </div>

          </div>

          <div className="list">
                {rappellist}
          </div>
        </div>
      </div>
    );
  }
}

export default ShowRappels;