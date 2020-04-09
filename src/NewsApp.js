import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';
import './NewsApp.css';


class NewsApp extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      articles: [],
      showItems: 4,
      save: []
    }
  }

  componentDidMount() {
    let newDate = new Date();
    let year = newDate.getFullYear();
    let month = newDate.getMonth() + 1;
    let date = newDate.getDate();
    let prevDate = newDate.getDate() - 1;
    fetch(`http://newsapi.org/v2/everything?q=covid-19&from=${year}-${month}-${prevDate}&to=${year}-${month}-${date}&sortBy=popularity&apiKey=26310c95099c49d28ab3d15e38d155d8`)
    .then(response => {
      return response.json();
    })
    .then(myJson => {
      this.setState({
        articles: myJson.articles
      });
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.articles.slice(0, this.state.showItems).map((item, index) => {
          return (

    <span className="card-hover">
    <Card style={{ width: '18rem', height: '24rem' }}>
    <div className="overflow">
    <Card.Img className="img-size" variant="top" src={item.urlToImage} />
    </div>
    <Card.Body>
    <Card.Title></Card.Title>
    <Card.Text>
    {item.title}
    </Card.Text>
    <Button variant="secondary-outline" className="btn-down"><a href={item.url} target="_blank">Read More </a></Button>
    </Card.Body>
    </Card>
    </span>

          );
        })}
      </div>
    );
  }
}

export default NewsApp;
