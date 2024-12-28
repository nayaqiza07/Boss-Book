const optionItems = [
  {
    value: 10,
    label: "10",
  },
  {
    value: 15,
    label: "15",
  },
  {
    value: 20,
    label: "20",
  },
];

const optionPages = [
  {
    value: 1,
    label: "1",
  },
  {
    value: 2,
    label: "2",
  },
  {
    value: 3,
    label: "3",
  },
  {
    value: 4,
    label: "4",
  },
  {
    value: 5,
    label: "5",
  },
];

const optionMonths = [
  {
    value: "This Day",
    label: "This Day",
  },
  {
    value: "This Week",
    label: "This Week",
  },
  {
    value: "This Month",
    label: "This Month",
  },
];

const optionActions = [
  {
    value: "Complete",
    label: "Complete",
  },
  {
    value: "In-Progress",
    label: "In-Progress",
  },
  {
    value: "Pending",
    label: "Pending",
  },
];

export const SelectMenuItems = () => {
  return (
    <>
      <select className="rounded-lg bg-[#5E6366]/10 text-night_30 px-[11px] py-1 focus:outline-none">
        {optionItems.map((item, index) => (
          <option key={index + 1} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const SelectMenuPages = () => {
  return (
    <>
      <select className="rounded-lg bg-[#5E6366]/10 text-night_30 px-[11px] py-1 focus:outline-none">
        {optionPages.map((item, index) => (
          <option key={index + 1} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const SelectMenuMonth = () => {
  return (
    <>
      <select className="rounded-lg text-black px-[11px] py-1 focus:outline-none text-xs text-right">
        {optionMonths.map((item, index) => (
          <option key={index + 1} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const SelectMenuActions = () => {
  return (
    <>
      <select className="rounded-lg bg-[#5E6366]/10 text-xs text-night_30 px-[11px] py-1 focus:outline-none">
        {optionActions.map((item, index) => (
          <option key={index + 1} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};

export const SelectClientOrder = () => {
  return (
    <>
      <select className="w-full px-4 py-[16.5px] rounded-lg bg-[#EFF1F9]/60 text-[#ABAFB1]  focus:outline-none focus:bg-[#E9ECF8]/90">
        {optionItems.map((item, index) => (
          <option
            key={index + 1}
            value={item.value}
            className="hover:bg-primary_100"
          >
            {item.label}
          </option>
        ))}
      </select>
    </>
  );
};
