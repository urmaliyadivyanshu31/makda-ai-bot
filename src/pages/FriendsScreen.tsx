import React, { useState } from 'react';

const FriendsScreen: React.FC = () => {
  const [referralLink] = useState('https://makdaai.bot/ref/123456');
  const friends = [
    { id: 1, handle: '@friend1' },
    { id: 2, handle: '@friend2' },
    { id: 3, handle: '@friend3' },
  ];

  const copyReferralLink = () => {
    navigator.clipboard.writeText(referralLink);
    alert('Referral link copied to clipboard!');
  };

  const shareReferralLink = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Join Makda AI Bot',
        text: 'Check out this awesome AI bot!',
        url: referralLink,
      });
    } else {
      alert('Sharing is not supported on this device');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Friends</h1>
      <p>Total Friends: {friends.length}</p>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Friend Handles</h2>
        {friends.map(friend => (
          <p key={friend.id}>{friend.handle}</p>
        ))}
      </div>
      <div className="bg-gray-100 p-4 rounded-lg mb-4">
        <h2 className="text-xl font-semibold mb-2">Referral Link</h2>
        <p className="mb-2">{referralLink}</p>
        <button onClick={copyReferralLink} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">Copy</button>
        <button onClick={shareReferralLink} className="bg-green-500 text-white px-4 py-2 rounded">Share</button>
      </div>
    </div>
  );
};

export default FriendsScreen;