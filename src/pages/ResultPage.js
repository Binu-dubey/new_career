import React, { useState, useEffect } from 'react';

const ResultPage = () => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch('/api/get-report')
      .then(res => res.json())
      .then(data => setReport(data));
  }, []);

  if (!report) return <p>Loading...</p>;

  return (
    <div>
      <h1>Test Results</h1>
      <div>
        <h3>Test Summary</h3>
        <p>Psychometric Test Score: {report.scores.psychometric}</p>
        <p>Aptitude Test Score: {report.scores.aptitude}</p>
        <p>Reasoning Test Score: {report.scores.reasoning}</p>
        <h3>Career Suggestion</h3>
        <p>{report.career_suggestion}</p>
      </div>
    </div>
  );
};
export default ResultPage;
