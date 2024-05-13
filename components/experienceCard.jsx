import styles from '@/components/styles.module.scss';

const CompanyLogo = ({ logo, companyName }) => (
  <div className={`col-1 ${styles.companyLogoContainer}`}>
    <img src={`./images/${logo}.png`} alt={`${companyName} logo`} className={styles.companyLogo} />
  </div>
);

const JobDetails = ({ jobTitle, companyName }) => (
   <div className={`col-7 ${styles.jobDetails}`}>
    <div className={styles.jobTitle}>{jobTitle}</div>
    <div className={styles.companyName}>{companyName}</div>
  </div>
);

const JobDurationLocation = ({ jobDuration, companyLocation }) => (
  <div className={`col-4 ${styles.jobDurationLocation}`}>
    <div className={styles.jobDuration}>{jobDuration}</div>
    <div className={styles.companyLocation}>{companyLocation}</div>
  </div>
);

const ExperienceCard = ({ expDetails: { companyInfo, jobInfo } }) => {
  return (
    <div className={`row mt-2 ${styles.expCardBox}`}>
      <CompanyLogo logo={companyInfo.companyLogo} companyName={companyInfo.companyName} />
      <JobDetails jobTitle={jobInfo.jobTitle} companyName={companyInfo.companyName}/>
      <JobDurationLocation jobDuration={jobInfo.jobDuration} companyLocation={companyInfo.companyLocation}/>
    </div>
  );
};

export default ExperienceCard;
