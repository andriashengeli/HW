import { useState } from 'react'
import { createRoot } from 'react-dom/client'



function App() {
  const students = ["John", "Emma", "Michael", "Sophia"];

  return (
    <div>
      <h1>Students</h1>

      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
