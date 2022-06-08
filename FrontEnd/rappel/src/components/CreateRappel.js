import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
class CreateRappel extends Component {
 constructor() {
 super();
 this.state = {

 texte:'',
 Date:''
};
}
onChange = e => {
this.setState({ [e.target.name]: e.target.value });
};
onSubmit = e => {
e.preventDefault();
const data = {
texte: this.state.texte,
Date: this.state.Date
};
axios
.post('http://localhost:8082/api/rappels', data)
.then(res => {
this.setState({
texte:'',
Date:''
})
this.props.history.push('/');
})
.catch(err => {
console.log("Error in CreateRappel!");
})
};
render() {
return (
<div className="CreateRappel">
<div className="container">
<div className="row">
<div className="col-md-8 m-auto">
<br />
<Link to="/" className="btn btn-outline-warning floatleft">
 Show Rappel List
 </Link>
 </div>
 <div className="col-md-8 m-auto">
 <h1 className="display-4 text-center">Add Rappel</h1>
 <p className="lead text-center">
 Create new rappel
 </p>
 <form noValidate onSubmit={this.onSubmit}>
 
 <br />
 <div className='form-group'>
 <input
 type='text'
placeholder='taper le texte'
name='texte'
className='form-control'
 value={this.state.texte}
 onChange={this.onChange}
 />
 </div>
 <br />
 <div className='form-group'>
 <input
 type='text'
 placeholder='choisir la date'
name='Date'
className='form-control'
 value={this.state.Date}
 onChange={this.onChange}
 />
 </div>
 <br />
  <input
 type="submit"
 className="btn btn-outline-warning btn-block mt-4"
 />
 </form>
 </div>
 </div>
 </div>
 </div>
 );
 }
}
export default CreateRappel;
