import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Auto register chart.js components

const ResultReport = ({ results }) => {
  // Prepare data for the pie chart
  const chartData = {
    labels: Object.keys(results.scores),
    datasets: [
      {
        data: Object.values(results.scores),
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#F7464A'], // Customize colors as needed
      }
    ]
  };

  return (
    <div className="result-report">
      <h3>Test Summary</h3>
      <div>
        <h4>Psychometric Test Score: {results.scores.psychometric}</h4>
        <h4>Aptitude Test Score: {results.scores.aptitude}</h4>
        <h4>Reasoning Test Score: {results.scores.reasoning}</h4>
      </div>
      <div>
        <h4>Career Suggestion:</h4>
        <p>{results.careerSuggestion}</p>
      </div>
      <div>
        <h4>Score Distribution</h4>
        <Pie data={chartData} />
      </div>
    </div>
  );
};

export default ResultReport;
