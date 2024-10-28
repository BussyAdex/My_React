import React, {useEffect, useState} from 'react';
//import QuestionCard from  './components/QuestionCard';
import useFetchQuizQuestions  from './API';
import { Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const {
    data: quizQuestions,
    isFetching,
    isSuccess,
    isError,
  } = useFetchQuizQuestions({
    noOfQuestions: TOTAL_QUESTIONS,
    difficulty: Difficulty.EASY,
  });

  console.log(
    'data',
    quizQuestions,
    'isFetching',
    isFetching,
    'isSuccess',
    isSuccess,
    ' isError',
    isError
  );

  return (
    <div className="App">
      <h2>Quiz App</h2>
        {quizQuestions.map((item, index) => (
          <div key={index}>
            <p>{`Question ${index + 1}: ${item.question}`}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
