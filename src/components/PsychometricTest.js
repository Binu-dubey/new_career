import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const PsychometricTest = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/psychometric')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching psychometric questions:', error));
  }, []);

  return (
    <div>
      <h2>Psychometric Test</h2>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default PsychometricTest;
