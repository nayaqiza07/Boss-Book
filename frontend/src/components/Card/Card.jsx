export const Card = ({ children, rowSpan, colSpan }) => {
  return (
    <div
      className={`bg-white rounded-xl px-[15px] py-[11px] ${rowSpan} ${colSpan}`}
    >
      {children}
    </div>
  );
};

export const CardPrimary = ({ children }) => {
  return (
    <div className={`bg-primary_100 rounded-xl px-[15px] py-[11px] `}>
      {children}
    </div>
  );
};

export const CardCol = ({ children }) => {
  return (
    <div className={`bg-white rounded-xl p-5 lg:col-span-2`}>{children}</div>
  );
};

export const CardRow = ({ children }) => {
  return (
    <div className={`bg-white rounded-xl p-5 lg:row-span-2`}>{children}</div>
  );
};
