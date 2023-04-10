import React, { Component } from 'react';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addGood = () => {
    this.setState(previousState => ({
      good: previousState.good + 1,
    }));
  };

  addNeutral = () => {
    this.setState(previousState => ({
      neutral: previousState.neutral + 1,
    }));
  };

  addBad = () => {
    this.setState(previousState => ({
      bad: previousState.bad + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100) + '%';
  };

  render() {
    const  { good, neutral, bad } = this.state;

    return (
      <div className={s.container}>
        <p>Please leave feedback</p>
        <button onClick={this.addGood}>Good</button>
        <button onClick={this.addNeutral}>Neutral</button>
        <button onClick={this.addBad}>Bad</button>
        <p>Statistics</p>
        <ul>
          <li>Good: {good}</li>
          <li>Neutral: {neutral}</li>
          <li>Bad: {bad}</li>
          <li>Total: {this.countTotalFeedback()}</li>
          <li>Positive feedback: {this.countPositiveFeedbackPercentage()}</li>
        </ul>
      </div>
    );
  }
}

export default App;
