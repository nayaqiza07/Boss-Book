export const DataEmpty = ({ setOpen, icon, title, subTitle }) => {
  return (
    <div className="flex flex-col justify-center items-center py-10 border-2 border-[#E1E2E9] rounded-lg">
      <div className="w-fit border border-[#E1E2E9] bg-main_background rounded-full p-10">
        {icon}
      </div>
      <div className="text-center mt-10">
        <h5 className="font-medium text-xl">{title}</h5>
        <p className="text-night_30 text-sm">{subTitle}</p>
        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-3 mx-auto bg-primary_100 text-white rounded-lg px-3 py-2 mt-6 transition-all hover:scale-105"
        >
          {/* <HiOutlinePlus size={20} /> */}
          Add Products
        </button>
      </div>
    </div>
  );
};
