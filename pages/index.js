import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';

const Home = () => {
  return (
    <div className="row">
      <div className="col-3"></div>
      <div className="col-9" style={{ padding: '50px' }}>
        <ExperienceSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Home;
