import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';
import EducationSection from '@/components/education/educationSection';
import ProjectSection from '@/components/projects/projectSection';
import ProfileSection from '@/components/profile/profileSection';
import styles from '@/styles/styles.module.scss';

const Home = () => {
  return (
    <div className="row">
      <div className={`col-4 ${styles.mainProfileContainerBox}`}>
        <ProfileSection />
      </div>
      <div className={`col-8 ${styles.mainContentContainerBox}`}>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
