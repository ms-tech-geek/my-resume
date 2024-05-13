import styles from '@/components/styles.module.scss';

const ExperienceCard = ({ expDetails: { companyInfo, jobInfo } }) => {
  return (
    <div className={`row mt-2 ${styles.expCardBox}`}>
      <div className={`col-1 ${styles.companyLogoContainer}`}>
        <img
          src={`./images/${companyInfo.companyLogo}.png`}
          alt={`${companyInfo.companyName} logo`}
          className={styles.companyLogo}
        />
      </div>
      <div className={`col-7 ${styles.jobDetails}`}>
        <div className={styles.jobTitle}>{jobInfo.jobTitle}</div>
        <div className={styles.companyName}>{companyInfo.companyName}</div>
      </div>
      <div className={`col-4 ${styles.jobDurationLocation}`}>
        <div className={styles.jobDuration}>{jobInfo.jobDuration}</div>
        <div className={styles.companyLocation}>{companyInfo.companyLocation}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
