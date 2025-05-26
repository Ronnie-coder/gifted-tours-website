import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Headline, Sub, CTA, BackgroundOverlay, FeatureWrapper } from './Hero.styles';

export default function Hero() {
  const nav = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <Wrapper
      as={motion.div}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <BackgroundOverlay />
      
      <motion.div variants={itemVariants}>
        <Headline>
          Feel the Pulse of Cape Town—One Extraordinary Tour at a Time.
        </Headline>
      </motion.div>

      <motion.div variants={itemVariants}>
        <Sub>
          Unlock hidden beaches, world-class wine farms, and mountain vistas with
          our passionate local guides. Experience the best of Cape Town with Gifted Tours.
        </Sub>
      </motion.div>

      <motion.div variants={itemVariants}>
        <CTA 
          onClick={() => nav('/book')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Adventure
          <span className="arrow">→</span>
        </CTA>
      </motion.div>

      <FeatureWrapper
        as={motion.div}
        variants={itemVariants}
      >
        <div className="feature">
          <span className="icon">🌟</span>
          <span>Expert Local Guides</span>
        </div>
        <div className="feature">
          <span className="icon">🚐</span>
          <span>Luxury Fleet</span>
        </div>
        <div className="feature">
          <span className="icon">🍷</span>
          <span>Wine Tours</span>
        </div>
      </FeatureWrapper>
    </Wrapper>
  );
}