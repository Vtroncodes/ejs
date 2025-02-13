import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log('API Response:', response.data);  // Debug log
        if (Array.isArray(response.data)) {
          setJokes(response.data);
        } else {
          setError('Invalid data format received');
        }
      })
      .catch((error) => {
        console.error('API Error:', error);  // Debug log
        setError(error.message);
      });
  }, []);

  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <p>my app in js</p>
      <p>Jokes: {jokes.length}</p>
      {Array.isArray(jokes) && jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </div>
  )
}

export default App