import React, { useState } from 'react';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions'
import { Notification } from './Notification'
import { Section } from './Section';

export function App() {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const handleAddDataStatictics = (event) => {
    const option = event.target.textContent.toString().toLowerCase();
    setState((prev) => ({
      ...state,
      [option]: prev[option] + 1
    }))
  }

  const countTotalFeedback = () => {
    return state.bad + state.good + state.neutral;
  }
  const countPositiveFeedbackPercentage = () => {
    return Math.round(state.good / countTotalFeedback() * 100, 0);
  }

  return (
    <>
      <Section title="Please leave feedback"  >
        <FeedbackOptions options={Object.keys(state)} onLeaveFeedback={handleAddDataStatictics} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0
          ?
          (<Statistics good={state.good} bad={state.bad}
            neutral={state.neutral} total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()} />)
          :
          (<Notification message={"There is no feedback"}></Notification>)
        }
      </Section>
    </>
  );
}







