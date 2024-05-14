import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import styles from '@/components/experience/styles.module.scss';

const CompanyLogo = ({ logo, companyName }) => {
  const logoPath = `./images/${logo}.png`;
  const logoText = `${companyName} logo`;
  return (
    <div className={`col-1 ${styles.companyLogoContainer}`}>
      <img src={logoPath} alt={logoText} className={styles.companyLogo} />
    </div>
  );
};

const JobDetails = ({ jobTitle, companyName }) => (
  <div className={`col-6 ${styles.jobDetails}`}>
    <div className={styles.jobTitle}>{jobTitle}</div>
    <div className={styles.companyName}>{companyName}</div>
  </div>
);

const JobDurationLocation = ({ jobDuration, companyLocation }) => (
  <div className={`col-5 ${styles.jobDurationLocation}`}>
    <div
      className={`${styles.jobDuration} ${
        jobDuration === 'Present' ? styles.activeJob : ''
      }`}
    >
      {jobDuration}
    </div>
    <div className={styles.companyLocation}>
      <FontAwesomeIcon icon={faLocationDot} className={styles.locationIcon} />{' '}
      {companyLocation}
    </div>
  </div>
);

const ExperienceCard = ({
  companyLogo,
  companyName,
  companyLocation,
  jobTitle,
  jobDuration,
}) => {
  return (
    <div className={`row mt-2 ${styles.expCardBox}`}>
      <CompanyLogo logo={companyLogo} companyName={companyName} />
      <JobDetails jobTitle={jobTitle} companyName={companyName} />
      <JobDurationLocation
        jobDuration={jobDuration}
        companyLocation={companyLocation}
      />
    </div>
  );
};

export default ExperienceCard;
