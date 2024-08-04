import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import HomeScreen from './pages/HomeScreen';
import TasksScreen from './pages/TasksScreen';
import FriendsScreen from './pages/FriendsScreen';
import { UserData } from './types/types';

// Define the userData variable
const userData: UserData = {
  age: 25,
  dailyStreak: 10,
  telegramPremium: true,
  points: 500, // Example value
};

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomeScreen userData={userData} />} />
        <Route path="/tasks" element={<TasksScreen />} />
        <Route path="/friends" element={<FriendsScreen />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
