import { useCallback, useEffect, useState } from "react";

interface DataType {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    hourly_units: any;
    hourly: any;
}

interface ErrorType {
    status: boolean;
    message: string;
}

interface ReturnData {
    data: DataType[];
    isFetching: boolean;
    isSuccess: boolean;
    isError: ErrorType;
}

const useFetchWeather = (): ReturnData => {
    const [data, setData] = useState<DataType[]>([]);
    const [isFetching, setIsFetching] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState<ErrorType>({
        status: false,
        message: '',
    });

    const fetchWeather = useCallback(async () => {  

        try {
           setIsFetching(true);
           const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=precipitation_probability`
           );
           if (response.ok) {
             const dataResponse = await response.json();
             setIsSuccess(true);
             setData(dataResponse.hourly.precipitation_probability)
           }
           else { 
            setIsSuccess(false);
           }
        }
        catch (error : any){
            setIsError({
                status: true,
                message: error.message,
            })
        }
        finally {
            setIsFetching(false);
        }
    }, []);

    useEffect(() => {
        fetchWeather();
    }, [fetchWeather]);
    
    return { data, isFetching, isSuccess, isError};
};

export default useFetchWeather;