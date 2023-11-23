import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions.jsx';
import Statistics from './Statistics/Statistics.jsx';
import Section from './Section/Section.jsx';
import Notification from './Notification/Notification.jsx';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedback = feedbackType => {
    if (feedbackType === 'good') {
      setGood(prevState => {
        return prevState + 1;
      });
    }
    if (feedbackType === 'neutral') {
      setNeutral(prevState => {
        return prevState + 1;
      });
    }
    if (feedbackType === 'bad') {
      setBad(prevState => {
        return prevState + 1;
      });
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return totalFeedback ? Math.round((good / totalFeedback) * 100) : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={countFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification />
        )}
      </Section>
    </>
  );
};

export default App;
