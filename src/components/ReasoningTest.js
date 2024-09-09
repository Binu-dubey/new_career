import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const ReasoningTest = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/reasoning')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching reasoning questions:', error));
  }, []);

  return (
    <div>
      <h2>Reasoning Test</h2>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default ReasoningTest;
