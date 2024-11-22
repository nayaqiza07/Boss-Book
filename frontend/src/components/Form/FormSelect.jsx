const FormSelect = ({ name, list, defaultValue }) => {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="select select-bordered select-sm w-full max-w-xs"
    >
      {list.map((item) => {
        return (
          <option key={item} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
