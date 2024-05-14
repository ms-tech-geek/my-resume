import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';

const Home = () => {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-8" style={{ padding: '50px' }}>
        <ExperienceSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Home;
