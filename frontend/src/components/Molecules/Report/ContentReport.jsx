const ContentReport = (props) => {
  const { icon, text, total } = props;
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-5 items-center">
        <span className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
          {icon}
        </span>
        <h1>{text}</h1>
      </div>
      <p>{total}</p>
    </div>
  );
};

export default ContentReport;
