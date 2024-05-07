const ExperienceCard = ({ expDetails: { companyInfo, jobInfo } }) => {
  return (
    <div
      className="row mt-2"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        border: '2px solid whitesmoke',
        borderRadius: '5px',
        backgroundColor: 'whitesmoke',
      }}
    >
      <div className="col-1" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={`./images/${companyInfo.companyLogo}.png`}
          style={{
            width: '100%',
            maxWidth: 'initial',
            minWidth: '50px',
          }}
        />
      </div>
      <div className="col-7 row" style={{ alignItems: 'center' }}>
        <div style={{ fontSize: '16px' }}>{jobInfo.jobTitle}</div>
        <div style={{ fontSize: '14px', fontWeight: 'bold' }}>
          {companyInfo.companyName}
        </div>
      </div>
      <div className="col-4" style={{ textAlign: 'right' }}>
        <div style={{ fontSize: '16px' }}>{jobInfo.jobDuration}</div>
        <div style={{ fontSize: '14px' }}>{companyInfo.companyLocation}</div>
      </div>
    </div>
  );
};

export default ExperienceCard;
