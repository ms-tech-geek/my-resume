import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '@/components/contact/styles.module.scss';

const MainContact = ({ contactInfo }) => {
  return (
    <>
      {contactInfo &&
        contactInfo.map((contact) => (
          <div className={styles.contactCardBox}>
            <div className={styles.contactIconWrapper}>
              <FontAwesomeIcon
                icon={contact.icon}
                className={styles.contactIcon}
              />
            </div>
            <div className={`row ${styles.contactDetails}`}>
              <span className={styles.contactLabel}>{contact.label}</span>
              <span className={styles.contactValue}>{contact.value}</span>
            </div>
          </div>
        ))}
    </>
  );
};

export default MainContact;
