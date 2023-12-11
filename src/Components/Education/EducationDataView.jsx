import "../../Styles/SubSection-data.css";
function EducationDataView(obj) {
  const { institution, degree, location, start, end } = obj;
  return (
    <div className="subsection-data">
      <div className="dates-location">
        <p className="date-info">
          {start} <span className="dash"> - </span> {end}
        </p>
        <p className="location">{location}</p>
      </div>
      <div className="info">
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
