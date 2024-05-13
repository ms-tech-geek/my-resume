import ExperienceCard from '@/components/experienceCard';
import styles from '@/components/styles.module.scss';

const experienceInfo = [
  {
    companyLogo: 'meta-logo',
    companyName: 'Meta',
    companyLocation: 'Menlo Park, California',
    jobTitle: 'VR designer',
    jobDuration: 'Present',
  },
  {
    companyLogo: 'apple-logo',
    companyName: 'Apple',
    companyLocation: 'Cupertino, California',
    jobTitle: 'Product designer',
    jobDuration: 'Jul 20 - Jan 2022',
  },
  {
    companyLogo: 'tesla-logo',
    companyName: 'Tesla',
    companyLocation: 'Austin, Texas',
    jobTitle: 'UX Designer',
    jobDuration: 'Oct 2015 - Mar 2020',
  },
  {
    companyLogo: 'google-logo',
    companyName: 'Google',
    companyLocation: 'Mountain View, California',
    jobTitle: 'Design system architect',
    jobDuration: 'Sep 2014 - Aug 2015',
  },
  {
    companyLogo: 'vectornator-logo',
    companyName: 'Vectornator',
    companyLocation: 'Berlin, Germany',
    jobTitle: 'Senior product design',
    jobDuration: 'Sep 2010 - Jul 2013',
  },
];

const ExperienceSection = () => {
  return (
    <>
      <h2>Experience</h2>
      <div className={styles.experienceSection}>
        {experienceInfo &&
          experienceInfo.map((exp) => <ExperienceCard {...exp} />)}
      </div>
    </>
  );
};

export default ExperienceSection;
