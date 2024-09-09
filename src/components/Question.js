// src/components/Question.js
import React from 'react';

const Question = ({ question, onAnswerChange }) => {
  const handleAnswerChange = (option, score) => {
    onAnswerChange(question.id, option, score);
  };

  return (
    <div className="question">
      <p>{question.question_text}</p>
      {['option_1', 'option_2', 'option_3', 'option_4'].map((opt, index) => (
        <div key={index}>
          <input
            type="radio"
            name={question.id}
            value={question[opt]}
            onChange={() => handleAnswerChange(question[opt], question[`${opt}_score`])}
          />
          {question[opt]} (Score: {question[`${opt}_score`]})
        </div>
      ))}
    </div>
  );
};

export default Question;
