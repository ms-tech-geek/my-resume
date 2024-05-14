import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';
import EducationSection from '@/components/education/educationSection';
import ProjectSection from '@/components/projects/projectSection';

const Home = () => {
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-8" style={{ padding: '50px' }}>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
