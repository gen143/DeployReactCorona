import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button, Card, ListGroup } from 'react-bootstrap';
import myphoto from './img/me.jpg';
import washhands from './img/washhands.png';
import wearmask from './img/wearmask.png';
import noshakehand from './img/nohandshake.png';
import namaste from './img/namaste.jpg';
import namast from './img/namast.jpg';
import axios from 'axios';
import {Pie} from 'react-chartjs-2';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      patient: [],
      inputText:'',
      country: 'India',
      confirm: 0
    }
  }

  handleKeyPress(target) {
  if(target.charCode==13){
    alert('Hit search Button')
  }
}

  componentDidMount() {
      const query = this.state.country;
      axios.get(`https://api.covid19api.com/live/country/${query}/status/confirmed`)
        .then(response => {
          return response.data;
        })
        .then(myFile => {
          const a = myFile.length
          this.setState({
            patient: myFile,
            country: myFile[0].Country,
            confirm: myFile[a-1].Confirmed
          });
          console.log(this.state.patient,'state');
        });
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.country !== this.state.country) {
      const query = this.state.country;
      axios.get(`https://api.covid19api.com/live/country/${query}/status/confirmed`)
        .then(response => {
          return response.data;
        })
        .then(myFile => {
          console.log('myFile',myFile);
          if(myFile){
            const a = myFile.length
          this.setState({
            patient: myFile,
            country: myFile[0].Country,
            confirm: myFile[a-1].Confirmed,
            inputText:''
          });
        }
          console.log(this.state.patient,'state');
        });
    }
}

  render() {
    let covidData={};
    const length=this.state.patient.length;
    if(this.state.patient.length){
covidData= {
  labels: ['Active', 'Recovered', 'Death'],
  datasets: [{
    data: [
            this.state.patient[length-1].Active,
            this.state.patient[length-1].Recovered,
            this.state.patient[length-1].Deaths
          ],
    backgroundColor: ['orange', 'green', 'red']
  }]
}
}
  return (
    <>
    <div className="App-first">
    <div className="myBar-first">
    <Navbar bg="light" expand="lg">
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
  <Form inline>
    <FormControl type="text" placeholder="Enter Country" className="mr-sm-2" value={this.state.inputText} onKeyPress={this.handleKeyPress} onChange={e=>this.setState({inputText:e.target.value})} />
    <Button variant="outline-success" onClick={(e) => {e.preventDefault(); if(this.state.inputText !== ''){this.setState({country:this.state.inputText })}}}>Search</Button>
  </Form>
  <img className="corner-first corner-r-first" src={myphoto} alt="Photo" />
</Navbar.Collapse>
</Navbar>
</div>

<div className="corona">
<div className="column-first left-first">
<h1>  </h1>
{this.state.patient.length && (<Pie
  data = {{
    labels: covidData.labels,
    datasets: covidData.datasets
  }}
  options ={{
    title: {
      display: true,
      text: `${this.state.country} - ${this.state.confirm}`,
      fontSize: 30,
      fontFamily: 'Arial',
      fontStyle: 'bold'
    }
  }}
/>)}
</div>


<div className="column-first right-first">
<Card className="card-first" style={{ width: '25rem' }}>
<Card.Header className="card-header-first">Precautions</Card.Header>
<ListGroup variant="flush">
<ListGroup.Item className="text-left"><img className="img-first wash" src={washhands} alt="Wash Hands" /> Wash Hands With Sanitizer/Soap</ListGroup.Item>
<ListGroup.Item className="text-left"><img className="img-first" src={wearmask} alt="Wear Masks" />Wear Mask Outside</ListGroup.Item>
<ListGroup.Item className="text-left"><img className="img-first" src={noshakehand} alt="No Hand Shake" />No Shake hand Only <img className="namaste" src={namast} alt="Namaste" /></ListGroup.Item>
</ListGroup>
</Card>
</div>
</div>

    </div>

    </>

  );
}
}

export default App;
