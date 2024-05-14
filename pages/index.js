import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';
import EducationSection from '@/components/education/educationSection';

const Home = () => {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-8" style={{ padding: '50px' }}>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
    </div>
  );
};

export default Home;
