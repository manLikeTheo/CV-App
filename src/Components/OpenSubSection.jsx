function OpenSubSection({ isOpen, setOpen, subSectionName, icon }) {
  return (
    <button
      className="expand-subsection"
      onClick={() => setOpen(isOpen ? "" : subSectionName)}
    >
      <h2 className="subsection-header">
        <i className={icon}></i>
        {subSectionName}
      </h2>
      <i>/\</i>
    </button>
  );
}

export default OpenSubSection;
