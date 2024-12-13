import { SelectMenuMonth } from "@/components/Atoms/Select/SelectMenu";

const CardSummary = (props) => {
  const { children } = props;
  return (
    <div className="flex flex-col justify-between bg-white rounded-xl px-[15px] py-[11px]">
      {children}
    </div>
  );
};

const Header = (props) => {
  const { icon } = props;
  return (
    <div className="flex justify-between">
      <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
        {icon}
      </div>
      <SelectMenuMonth />
    </div>
  );
};

const Body = (props) => {
  const { title, data } = props;
  return (
    <div>
      <h5 className="text-night_30 text-sm">{title}</h5>
      <p className="mt-2 text-night_60 font-medium">{data}</p>
    </div>
  );
};

CardSummary.Header = Header;
CardSummary.Body = Body;

export default CardSummary;
