import ExperienceCard from './experienceCard';

const experienceInfo = [
  {
    companyInfo: {
      companyLogo: 'meta-logo',
      companyName: 'Meta',
      companyLocation: 'Menlo Park, California',
    },
    jobInfo: {
      jobTitle: 'VR designer',
      jobDuration: 'Present',
    },
  },
  {
    companyInfo: {
      companyLogo: 'apple-logo',
      companyName: 'Apple',
      companyLocation: 'Cupertino, California',
    },
    jobInfo: {
      jobTitle: 'Product designer',
      jobDuration: 'Jul 20 - Jan 2022',
    },
  },
  {
    companyInfo: {
      companyLogo: 'tesla-logo',
      companyName: 'Tesla',
      companyLocation: 'Austin, Texas',
    },
    jobInfo: {
      jobTitle: 'UX Designer',
      jobDuration: 'Oct 2015 - Mar 2020',
    },
  },
  {
    companyInfo: {
      companyLogo: 'google-logo',
      companyName: 'Google',
      companyLocation: 'Mountain View, California',
    },
    jobInfo: {
      jobTitle: 'Design system architect',
      jobDuration: 'Sep 2014 - Aug 2015',
    },
  },
  {
    companyInfo: {
      companyLogo: 'vectornator-logo',
      companyName: 'Vectornator',
      companyLocation: 'Berlin, Germany',
    },
    jobInfo: {
      jobTitle: 'Senior product design',
      jobDuration: 'Sep 2010 - Jul 2013',
    },
  },
];

const ExperienceSection = () => {
  return (
    <>
      <h2>Experience</h2>
      <ul>
        {experienceInfo &&
          experienceInfo.map((exp) => <ExperienceCard expDetails={exp} />)}
      </ul>
    </>
  );
};

export default ExperienceSection;
