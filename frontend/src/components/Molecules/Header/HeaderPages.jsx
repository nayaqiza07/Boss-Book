import Button from "@/components/Atoms/Button/Button";

const HeaderPages = (props) => {
  const { openModal, title, text } = props;
  return (
    <div className="lg:col-span-3">
      <div className="flex justify-between items-center">
        <h1 className="text-night_60 font-medium">{title}</h1>
        <Button onClick={openModal} variant="primary" size="md">
          {text}
        </Button>
      </div>
    </div>
  );
};

export default HeaderPages;
