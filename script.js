import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ExperienceItem = ({ logo, position, company, duration, description }) => {
  const { scrollY } = useViewportScroll();
  const y = useTransform(scrollY, [0, 1], [0, -50]);

  return (
    <motion.div style={{ y }} className="experience-item">
      <div className="experience-content">
        <img src={logo} alt={`${company} Logo`} className="company-logo" />
        <h3>{position}</h3>
        <span>{company}</span>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    </motion.div>
  );
};
