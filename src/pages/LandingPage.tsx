import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FeatureCard from '../components/FeatureCard';
import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const userFriendlyAddress = useTonAddress(); // Fetches the user-friendly TON address
  const rawAddress = useTonAddress(false); // Fetches the raw TON address

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 to-blue-500 text-white flex flex-col justify-center items-center p-4 relative">
      <header className="absolute top-4 right-4">
        <TonConnectButton className="my-button-class" style={{ float: "right" }} />
      </header>
      <motion.h1 
        className="text-6xl font-bold mb-4"
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        Makda AI Bot
      </motion.h1>
      <motion.p 
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Empowering users through AI
      </motion.p>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        {['Tasks', 'Friends', 'Rewards'].map((feature) => (
          <FeatureCard 
            key={feature}
            title={feature}
            description={`Experience the power of AI with our amazing ${feature.toLowerCase()} feature.`}
          />
        ))}
      </motion.div>
      <Button onClick={() => navigate('/home')}>
        Get Started
      </Button>
      {userFriendlyAddress && (
        <div className="mt-4">
          <p>User-friendly address: {userFriendlyAddress}</p>
          <p>Raw address: {rawAddress}</p>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
