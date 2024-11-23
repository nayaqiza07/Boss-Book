const FormSelect = ({ list, name, defaultValue }) => {
  return (
    <select
      name={name}
      defaultValue={defaultValue}
      className="w-full mb-7 px-4 py-[16.5px] rounded-lg focus:outline-none text-[#ABAFB1] bg-[#EFF1F9]/60 focus:bg-[#E9ECF8]/90 transition-colors"
    >
      {list.map((item) => {
        return (
          <option key={item._id} value={item._id}>
            {item._id}
          </option>
        );
      })}
    </select>
  );
};

export default FormSelect;
