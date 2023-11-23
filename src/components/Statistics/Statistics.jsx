import React from 'react';
import css from './Statistics.module.css';

const Statistics = props => {
  return (
    <div>
      <p className={css.good}>Good: {props.good}</p>
      <p className={css.neutral}>Neutral: {props.neutral}</p>
      <p className={css.bad}>Bad: {props.bad}</p>

      <p className={css.positiveFeedback}>
        Positive feedback: {props.positivePercentage}%
      </p>
    </div>
  );
};

export default Statistics;
