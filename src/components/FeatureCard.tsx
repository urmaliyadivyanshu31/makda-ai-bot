import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => (
  <motion.div 
    className="bg-white bg-opacity-20 p-6 rounded-lg text-center"
    whileHover={{ scale: 1.05 }}
  >
    <h2 className="text-2xl font-semibold mb-2">{title}</h2>
    <p>{description}</p>
  </motion.div>
);

export default FeatureCard;