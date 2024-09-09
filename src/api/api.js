// src/api/api.js
import axios from 'axios';

// Create an instance of axios with default settings
const api = axios.create({
  baseURL: 'http://localhost:8000/api/', // Replace with your Django backend URL
  timeout: 10000, // Optional: set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to get questions for a specific test type
export const getQuestions = async (testType, subcategory) => {
  try {
    const response = await api.get(`/tests/${testType}/${subcategory}/`);
    return response.data;
  } catch (error) {
    console.error('Error fetching questions:', error);
    throw error;
  }
};

// Function to submit test answers
export const submitTestAnswers = async (testType, answers) => {
  try {
    const response = await api.post(`/tests/${testType}/submit/`, answers);
    return response.data;
  } catch (error) {
    console.error('Error submitting answers:', error);
    throw error;
  }
};

// api/api.js

export const fetchResult = async () => {
  try {
    const response = await api.get(`/results/${userId}/`); // Adjust the URL according to your backend endpoint
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching result:', error);
    throw error;
  }
};


export default api;
