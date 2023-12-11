import "../../Styles/SubSection-data.css";
function WorkExperienceDisplay(obj) {
  const { employer, position, job_description, start, end, location } = obj;

  return (
    <div className="work-experience-display subsection-data">
      <div className="dates-location">
        <p className="date-info">
          {start} <span className="dash"> - </span> {end}
        </p>
        <p className="location">{location}</p>
      </div>
      <div className="info">
        <p className="employer">{employer}</p>
        <p className="position">{position}</p>
        <p className="job-description">{job_description}</p>
      </div>
    </div>
  );
}
export default WorkExperienceDisplay;
