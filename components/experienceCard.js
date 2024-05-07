const ExperienceCard = ({ expDetails: { companyInfo, jobInfo } }) => {
  return (
    <div
      className="row mt-2"
      style={{
        backgroundColor: 'whitesmoke',
        border: '2px solid black',
        borderRadius: '10px',
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
        <div>{jobInfo.jobTitle}</div>
        <div>{companyInfo.companyName}</div>
      </div>
      <div className="col-4" style={{ textAlign: 'right' }}>
        <h5>{jobInfo.jobDuration}</h5>
        <h6>{companyInfo.companyLocation}</h6>
      </div>
    </div>
  );
};

export default ExperienceCard;
