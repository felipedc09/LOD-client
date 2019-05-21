import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about';
import Datasets from './components/datasets';
import Visualization from './components/visualization';
import Header from './components/header';
import Analitycs from './components/analitycs/container/analitycs';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }

  componentDidMount() {
    this.getDatasets();
  }

  async getDatasets() {
    try {
      const res = await fetch('http://localhost:8080/api/getData');
      const data = await res.json();
      this.setState({ data: data.datasets });
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    const { data } = this.state;
    return (
      <React.Fragment>
        <Router>
        <Header />
          <Switch>
            <Route exact path="/" component={About} />
            <Route path="/about" component={About} />
            <Route path="/datasets" component={(props)=><Datasets {...props} data={data} />} />
            <Route path="/visualization" component={Visualization} />
            <Route path="/analitycs" component={Analitycs} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}