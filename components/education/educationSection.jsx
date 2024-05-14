import styles from '@/components/education/styles.module.scss';

const educationInfo = [
  {
    school: 'Birla Institute of Technology and Science, Pilani',
    course: 'Postgraduation, MTech, Computer Science',
    duration: '2014 - 2019',
  },
  {
    school: 'Guru Gobind Singh Indraprastha University',
    course: 'Graduation, BCA',
    duration: '2011 - 2014',
  },
  {
    school: 'DAV Senior Secondary School',
    course: 'Undergraduation, Business/Commerce',
    duration: '2010 - 2011',
  },
  {
    school: 'Rukmini Devi Public School',
    course: 'Undergraduation, General',
    duration: '1997 - 2010',
  },
];

const EducationSection = () => {
  return (
    <>
      <h2>Education</h2>
      <div className={`row ${styles.educationSection}`}>
        {educationInfo &&
          educationInfo.map((education) => (
            <div className={`col-6 ${styles.educationCardBox}`}>
              <span>{education.school}</span>
              <h5>{education.course}</h5>
              <span>{education.duration}</span>
            </div>
          ))}
      </div>
    </>
  );
};

export default EducationSection;
