import React from 'react';

const TasksScreen: React.FC = () => {
  const tasks = [
    { id: 1, name: 'Follow on Twitter', points: 2000 },
    { id: 2, name: 'Follow on Instagram', points: 2000 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tasks</h1>
      {tasks.map(task => (
        <div key={task.id} className="bg-gray-100 p-4 rounded-lg mb-2">
          <h2 className="text-lg font-semibold">{task.name}</h2>
          <p>Points: {task.points}</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2">Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TasksScreen;