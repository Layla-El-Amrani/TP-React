import React, { useState } from 'react';
import './style/TodoDragDrop.css';

// Liste initiale de tâches
const initialTasks = [
  { id: '1', content: 'Apprendre React' },
  { id: '2', content: 'Étudier Redux' },
  { id: '3', content: 'Explorer les API native du DOM' },
  { id: '4', content: 'Créer un projet complet' },
];

function TodoDragDrop() {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('draggedItemIndex', index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, targetIndex) => {
    e.preventDefault();
    const draggedItemIndex = e.dataTransfer.getData('draggedItemIndex');
    const newTasks = [...tasks];
    const draggedTask = newTasks.splice(draggedItemIndex, 1)[0];
    newTasks.splice(targetIndex, 0, draggedTask);
    setTasks(newTasks);
  };

  return (
    <div className="App">
      <h1>Ma Liste de Tâches (Drag-and-Drop)</h1>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className="task-item"
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, index)}
          >
            {task.content}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoDragDrop;
