import { useFetch} from './useFetch';

const baseUrl = 'https://jsonplaceholder.typicode.com';

const App = () => {
  const {data, fetchUrl}= useFetch(baseUrl, 'users')
  return (
    <div>
      <h1>useFectch</h1>
      <button onClick={()=>fetchUrl('users')}>Users</button>
      <button onClick={()=>fetchUrl('Todos')}>Todos</button>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
};

export default App;