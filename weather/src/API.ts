import { useState, useEffect, useCallback } from 'react';

interface ErrorType {
  status: boolean;
  message: string;
}

interface DataType {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  queutc_offset_secondsstion: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: any;
  hourly: any;
}

interface ReturnType {
  data: DataType[];
  isFetching: boolean;
  isSuccess: boolean;
  isError: ErrorType;
}


const useFetchWeather = (): ReturnType => {
  const [data, setData] = useState<DataType[]>([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState<ErrorType>({
    status: false,
    message: '',
  });

  // Fetch the quiz questions from the backend
  const fetchWeather = useCallback(async () => {
    try {
      // Initiate loading state
      setIsFetching(true);

      // Fetch the quiz questions
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=precipitation_probability`
      );

      // Checking if data is available
      if (response.ok) {
        const dataReponse = await response.json();

        setIsSuccess(true);
        console.log('I got here', dataReponse)
        setData(dataReponse.hourly.precipitation_probability);
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
  }, []);

  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return { data, isFetching, isSuccess, isError };
};

export default useFetchWeather;