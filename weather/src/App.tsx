import React, {useEffect, useState} from 'react';
import useFetchWeather  from './API';


const TOTAL_QUESTIONS = 10;

const App = () => {
  const {
    data,
    isFetching,
    isSuccess,
    isError,
  } = useFetchWeather();
 
  console.log(
    'data',
    data,
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
      {data.map((item, index) => (
          <div key={index}>
            <p>{`Question ${index + 1}: ${item}`}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
