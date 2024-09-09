import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Question from './Question';

const AptitudeTest = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios.get('/api/aptitude')
      .then(response => setQuestions(response.data))
      .catch(error => console.error('Error fetching aptitude questions:', error));
  }, []);

  return (
    <div>
      <h2>Aptitude Test</h2>
      {questions.map(question => (
        <Question key={question.id} question={question} />
      ))}
    </div>
  );
};

export default AptitudeTest;
