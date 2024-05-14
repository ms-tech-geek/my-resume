import ExperienceSection from '@/components/experience/experienceSection';
import SkillsSection from '@/components/skills/skillsSection';
import EducationSection from '@/components/education/educationSection';
import ProjectSection from '@/components/projects/projectSection';
import ProfileSection from '@/components/profile/profileSection';
import MainContact from '@/components/contact/mainContact';
import {
  faEnvelope,
  faLink,
  faPhone,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/styles.module.scss';

const contactInfo = [
  {
    label: 'Email',
    value: 'thecorporator@gmail.com',
    url: 'mailto:thecorporator@gmail.com',
    icon: faEnvelope,
  },
  {
    label: 'Website',
    value: 'mayanksethi.com',
    url: 'http://www.mayanksethi.com',
    icon: faLink,
  },
  {
    label: 'Phone',
    value: '(+91) 9999 460 317',
    url: 'tel:+919999460317',
    icon: faPhone,
  },
  {
    label: 'Address',
    value: 'New Delhi, India',
    url: 'https://maps.app.goo.gl/7f1fXGmb8z5dgkBP7',
    icon: faLocationDot,
  },
];

const socialInfo = [
  {
    label: 'Linkedin',
    value: 'in/mayank-sethi',
    url: 'https://www.linkedin.com/in/mayank-sethi/',
    icon: faLinkedin,
  },
  {
    label: 'Github',
    value: 'ms-tech-geek',
    url: 'https://github.com/ms-tech-geek',
    icon: faGithub,
  },
  {
    label: 'StackOverflow',
    value: '8047806/mayank-sethi',
    url: 'https://stackoverflow.com/users/8047806/mayank-sethi',
    icon: faStackOverflow,
  },
];

const Home = () => {
  return (
    <div className="row">
      <div className={`col-3 ${styles.mainProfileContainerBox}`}>
        <ProfileSection />
        <MainContact contactInfo={contactInfo} />
        <MainContact contactInfo={socialInfo} />
      </div>
      <div className={`col-9 ${styles.mainContentContainerBox}`}>
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
        <ProjectSection />
      </div>
    </div>
  );
};

export default Home;
