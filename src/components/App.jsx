import React from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions'
import { Notification } from './Notification'
import { Section } from './Section';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }
  handleAddDataStatictics = (event) => {
    const option = event.target.textContent.toString().toLowerCase();
    this.setState((prev) => ({
      [option]: prev[option] + 1
    }))
  }

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  }
  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100, 0);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback"  >
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.handleAddDataStatictics} />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() !== 0
            ?
            (<Statistics good={this.state.good} bad={this.state.bad}
              neutral={this.state.neutral} total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()} />)
            :
            (<Notification message={"There is no feedback"}></Notification>)
          }
        </Section>
      </>
    );
  }
}







