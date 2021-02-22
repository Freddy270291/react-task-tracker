import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Appointment with Doctor",
      day: "Feb 23rd at 3:00pm",
      reminder: "true",
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 24th at 4:00pm",
      reminder: "true",
    },
    {
      id: 3,
      text: "Shopping",
      day: "Feb 24th at 5:30pm",
      reminder: "false",
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
