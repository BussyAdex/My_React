//import { shuffleArray } from './utils';
import { useState, useEffect, useCallback } from 'react';

interface ErrorType {
  status: boolean;
  message: string;
}

interface DataType {
  type: string;
  difficulty: string;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

interface ReturnType {
  data: DataType[];
  isFetching: boolean;
  isSuccess: boolean;
  isError: ErrorType;
}

interface PropType {
  noOfQuestions: number;
  difficulty: Difficulty;
}

export enum Difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

const useFetchQuizQuestions = ({
  noOfQuestions,
  difficulty,
}: PropType): ReturnType => {
  const [data, setData] = useState<DataType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<ErrorType>({
    status: false,
    message: '',
  });

  // Fetch the quiz questions from the backend
  const fetchQuizQuestions = useCallback(async () => {
    try {
      // Initiate loading state
      setIsFetching(true);

      // Fetch the quiz questions
      const response = await fetch(
        `https://opentdb.com/api.php?amount=${noOfQuestions}&difficulty=${difficulty}&type=multiple`
      );

      // Checking if data is available
      if (response.ok) {
        const dataReponse = await response.json();

        setIsSuccess(true);
        setData(dataReponse.results);
      } else {
        setIsSuccess(false);
      }
    } catch (error: any) {
      setIsError({
        status: true,
        message: error.message,
      });
    } finally {
      setIsFetching(false);
    }
  }, [noOfQuestions, difficulty]);

  useEffect(() => {
    fetchQuizQuestions();
  }, [fetchQuizQuestions]);

  return { data, isFetching, isSuccess, isError };
};

export default useFetchQuizQuestions;