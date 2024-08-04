import React from 'react';
import { UserData } from '../types/types';

interface UserInfoProps {
  userData: UserData;
}

const UserInfo: React.FC<UserInfoProps> = ({ userData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-semibold mb-2">Account Info</h2>
      <p className="text-sm">Age: {userData.age} years</p>
      <p className="text-sm">Daily Streak: {userData.dailyStreak} days</p>
      <p className="text-sm">Telegram Premium: {userData.telegramPremium ? 'Yes' : 'No'}</p>
      <p className="text-sm">Points: {userData.points}</p>
    </div>
  );
};

export default UserInfo;