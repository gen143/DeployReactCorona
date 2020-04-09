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


class IndiaData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      StatePatients : [],
      patient: [
          {
          StateCode:'AP',
          ConfirmedCases: 348,
          Deaths: 4,
          RecoveredCases: 6,
          ActiveCases: 338
        },
          {
          StateCode: 'AS',
          ConfirmedCases: 28,
          Deaths: 0,
          RecoveredCases: 0,
          ActiveCases: 28
        }
      ],
      inputText:''
    }
  }

  componentDidMount() {
    this.setState({
      StatePatients: this.state.patient[0]
    });
}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.patient.StateCode !== this.state.inputText) {
      for (var i = 0; i < this.state.patient.length; i++) {
        if(this.state.inputText === this.state.patient[i].StateCode) {
          this.setState({
            StatePatients: this.state.patient[i]
          });
        }
      }
    }
}

  render() {
    let covidData={};
    const lengths = this.state.StatePatients.length;
covidData= {
  labels: ['Active', 'Recovered', 'Death'],
  datasets: [{
    data: [
            this.state.StatePatients.ActiveCases,
            this.state.StatePatients.RecoveredCases,
            this.state.StatePatients.Deaths
          ],
    backgroundColor: ['orange', 'green', 'red']
  }]
}

  return (
    <>
    <div className="App-first">

    <div className="myBar-first">
    <Navbar bg="light" expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
    <Form inline>
    <FormControl type="text" placeholder="Search" className="mr-sm-2" value={this.state.inputText} onChange={e=>this.setState({inputText:e.target.value})}/>
    <Button variant="outline-success" onClick={(e) => {this.setState({inputText:e.target.value })}}>Search</Button>
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
      text: `${this.state.StatePatients.StateCode} - ${this.state.StatePatients.ConfirmedCases}`,
      fontSize: 30,
      fontFamily: 'Arial',
      fontStyle: 'bold'
    }
  }}
/>)}
</div>
</div>
</div>
    </>

  );
}
}

export default IndiaData;
