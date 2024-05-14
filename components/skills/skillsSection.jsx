import SkillCard from '@/components/skills/skillCard';
import styles from '@/components/skills/styles.module.scss';

const skillsInfo = [
  'React',
  'Node',
  'Javascript',
  'Typescript',
  'Express',
  'Gatsby',
  'Angular CLI',
  'Java',
  'Spring MVC',
  'Graphql',
  'PHP',
  'Netlify',
  'Prisma',
  'Hasura',
  'MySql',
  'PostgresSql',
  'MongoDB',
  'Cassandra',
  'Redis',
  'AWS',
  'Azure',
  'Cypress',
  'Selenium',
  'Mocha',
  'Docker',
  'Bootstrap',
  'Contentful',
  'Wordpress',
  'Shopify',
  'Figma',
  'Github',
  'Continuous Integration',
  'Continuous Development',
  'Single Page Applications',
  'Progressive Web Applications',
];

const SkillsSection = () => {
  return (
    <>
      <h2>Skills</h2>
      <div className={styles.skillsSection}>
        {skillsInfo && skillsInfo.map((skill) => <SkillCard skill={skill} />)}
      </div>
    </>
  );
};

export default SkillsSection;
