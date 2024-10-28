import useFetchWeather from "./API";

const App = () => {
   const {
    data,
    isFetching,
    isSuccess,
    isError,
   } = useFetchWeather();

   console.log(
    'data', data,
    'isFetching', isFetching,
    'isSuccess', isSuccess, 
    'isError', isError
   );

   return (
    <div className="App">
      <h1>MY Weather API</h1>
      <table>
      <thead>
              <tr style={{ display: 'flex', alignItems: 'center' }}>
                <th>Index</th>
                <th style={{ marginLeft: '50px' }}>Probability</th>
              </tr>
            </thead>
              {data.map((item, index) => (
                <div key={index}>
                  {/* <p>{`${item}`}</p> */}
                    <tbody>
                      <tr style={{ display: 'flex', alignItems: 'center' }}>
                        <td style={{ marginLeft: '10px' }}>{`${index + 1}`} </td>
                        <td style={{ marginLeft: '100px' }}>{`${item}`}</td>
                      </tr>
                    </tbody>
        </div>     
      ))}
      </table>
    </div>
    );
}


export default App;
