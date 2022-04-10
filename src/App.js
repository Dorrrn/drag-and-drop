import './App.css';
import { useEffect, useState } from 'react';
import initialData from './movies.json';

function App() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      setMovies(initialData);
   }, []);

   const renderMovies = (list) => {
      return list.map((movie) => {
         return (
            <li key={movie.id}>
               <p>{movie.title}</p>
               <p>{movie.year}</p>
               <img src={movie.imgURL} alt={movie.title} />
            </li>
         );
      });
   };

   return (
      <div className="App">
         <h1>Hello</h1>
         <ul>{renderMovies(initialData)};</ul>
      </div>
   );
}

export default App;
