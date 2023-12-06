const SubSectionView = ({ array, DataComponent, title }) => {
  <>
    <h2>{title}</h2>
    {array.map((data) => {
      <DataComponent data={data} key={data.id} />;
    })}
  </>;
};
export default SubSectionView;
