import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';  // Updated import
import Question from '../components/Question'; // Import the Question component

const Test = () => {
  const { testType } = useParams();  // This will be 'psychometric', 'aptitude', or 'reasoning'
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetch(`/api/generate-test/${testType}`)
      .then(res => res.json())
      .then(data => setQuestions(data.questions));
  }, [testType]);

  const handleAnswerChange = (questionId, option, score) => {
    setAnswers(prev => ({ ...prev, [questionId]: { option, score } }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  };

  const handleSubmit = () => {
    fetch('/api/submit-test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ responses: answers })
    })
      .then(res => res.json())
      .then(data => {
        console.log('Test submitted:', data);
        // Redirect to results page or display results
        navigate('/results'); // Use navigate for redirection
      });
  };

  // Define currentQuestion based on currentQuestionIndex and questions
  const currentQuestion = questions.length > 0 ? questions[currentQuestionIndex] : null;

  return (
    <div>
      <h1>{testType.charAt(0).toUpperCase() + testType.slice(1)} Test</h1>
      {currentQuestion && (
        <Question
          question={currentQuestion}
          onAnswerChange={handleAnswerChange}
        />
      )}
      <div>
        {currentQuestionIndex > 0 && <button onClick={handlePreviousQuestion}>Previous</button>}
        {currentQuestionIndex < questions.length - 1 ? (
          <button onClick={handleNextQuestion}>Next</button>
        ) : (
          <button onClick={handleSubmit}>Submit</button>
        )}
      </div>
    </div>
  );
};

export default Test;

