import styles from '@/components/skills/styles.module.scss';

const SkillCard = ({ skill }) => (
  <div className={styles.skillCardBox} key={skill}>
    <span>{skill}</span>
  </div>
);

export default SkillCard;
