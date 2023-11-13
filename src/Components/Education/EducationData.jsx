import "../../Styles/education-data.css";
function EducationData({ institution, degree, location, start, end }) {
  // const {} = props;
  return (
    <div className="education-data">
      <div className="data-group">
        <p className="date-info">
          {start} <span> - </span> {end}
        </p>
        <p className="location">{location}</p>

        <div className="institution-degree">
          <p className="institution">{institution}</p>
          <p className="degree">{degree}</p>
        </div>
      </div>
    </div>
  );
}
export default EducationData;
