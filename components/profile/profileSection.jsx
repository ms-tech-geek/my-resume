import styles from '@/components/profile/styles.module.scss';

const profileInfo = {
  fullName: 'Mayank Sethi',
  jobRole: 'React Developer',
};

const ProfileSection = () => {
  const profilePhotoPath = `./images/profile-photo.png`;
  return (
    <div className={styles.headerContainerBox}>
      <img
        src={profilePhotoPath}
        alt={`profile-photo`}
        className={styles.profilePhoto}
      />
      <div className={`row ${styles.profileHeaderBox}`}>
        <div className={styles.profileName}>{profileInfo.fullName}</div>
        <div className={styles.profileJobRole}>{profileInfo.jobRole}</div>
      </div>
    </div>
  );
};

export default ProfileSection;
