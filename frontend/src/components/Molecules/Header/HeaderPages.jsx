import Button from "@/components/Atoms/Button/Button";

const HeaderPages = (props) => {
  const { openModal, children, title, textBtn } = props;
  return (
    <div className="lg:col-span-3">
      <div className="flex justify-between items-center">
        <h1 className="text-night_60 font-medium">{title}</h1>
        <div className="flex gap-5">
          <Button onClick={openModal} variant="primary" size="md">
            {textBtn}
          </Button>

          {children}
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;
