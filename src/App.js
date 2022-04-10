import './App.css';
import { useEffect, useState } from 'react';
import initialData from './movies.json';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function App() {
   const [movies, setMovies] = useState([]);

   useEffect(() => {
      setMovies(initialData);
   }, []);

   const handleOnDragEnd = (result) => {
      if (!result.destination) return;
      const items = Array.from(movies);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
      setMovies(items);
   };

   const renderMovies = (list) => {
      return list.map((movie, index) => {
         return (
            <Draggable key={movie.title} draggableId={movie.title} index={index}>
               {(provided) => {
                  return (
                     <li
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                     >
                        <p>{movie.title}</p>
                        <p>{movie.year}</p>
                        <img src={movie.imgURL} alt={movie.title} style={{ width: '20px' }} />
                     </li>
                  );
               }}
            </Draggable>
         );
      });
   };

   return (
      <div className="App" style={{ display: 'flex', justifyContent: 'center' }}>
         <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="movies">
               {(provided) => {
                  return (
                     <ul className="movies" {...provided.droppableProps} ref={provided.innerRef}>
                        {renderMovies(movies)};{provided.placeholder}
                     </ul>
                  );
               }}
            </Droppable>
         </DragDropContext>
      </div>
   );
}

export default App;
