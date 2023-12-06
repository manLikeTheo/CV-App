import "../../Styles/education-data.css";
function EducationDataView({ institution, degree, location, start, end }) {
  return (
    <div className="education-data">
      <p className="date-info">
        {start} <span className="dash"> - </span> {end}
      </p>
      <p className="location">{location}</p>

      <div className="institution-degree">
        {/* <p>
          <strong className="institution">{institution}</strong>
        </p> */}
        <strong className="institution">{institution}</strong>
        <p className="degree">{degree}</p>
      </div>
    </div>
  );
}
export default EducationDataView;
