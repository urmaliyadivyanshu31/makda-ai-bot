import React from 'react';
import { Link } from 'react-router-dom';
import { useTonWallet, useTonConnectUI } from '@tonconnect/ui-react';

type UserData = {
  age: number;
  dailyStreak: number;
  telegramPremium: boolean;
  points: number;
};

const HomeScreen: React.FC<{ userData: UserData }> = ({ userData }) => {
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  const handleDisconnect = async () => {
    try {
      await tonConnectUI.disconnect();
      console.log('Wallet disconnected successfully');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  };

  return (
    <div className="p-4">
      <img src="/logo.png" alt="Makda AI Bot Logo" className="w-32 h-32 mx-auto mb-4" />
      <h1 className="text-2xl font-bold text-center mb-4">Makda AI Bot</h1>
      <p className="text-center mb-4">Our vision: Empower users through AI</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Account Info</h2>
        <p>Age: {userData.age} years</p>
        <p>Daily Streak: {userData.dailyStreak} days</p>
        <p>Telegram Premium: {userData.telegramPremium ? 'Yes' : 'No'}</p>
        <p>Points: {userData.points}</p>
      </div>
      <div className="flex justify-around mb-4">
        <Link to="/tasks" className="bg-blue-500 text-white px-4 py-2 rounded">Tasks</Link>
        <Link to="/friends" className="bg-green-500 text-white px-4 py-2 rounded">Friends</Link>
      </div>
      {/* Display wallet information if connected */}
      {wallet && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <h2 className="text-xl font-semibold mb-2">Wallet Info</h2>
          <p>Connected wallet: {(wallet as any).name}</p>
          <p>Device: {(wallet as any).device.appName}</p>
          <button
            onClick={handleDisconnect}
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
          >
            Disconnect Wallet
          </button>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
