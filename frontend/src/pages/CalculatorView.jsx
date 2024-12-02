import Accordion from "../components/Accordion/Accordion";
import { Card } from "../components/Card/Card";

const CalculatorView = () => {
  return (
    <div className="p-5">
      <Card>
        <div className="px-[5px] py-[9px]">
          <Accordion />
        </div>
      </Card>
    </div>
  );
};

export default CalculatorView;
