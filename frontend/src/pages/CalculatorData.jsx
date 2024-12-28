import Button from "@/components/Atoms/Button/Button";
import { Card } from "@/components/Organisms/Card/Card";
import { useEffect, useState } from "react";

// API
import { getCalculator } from "@/api/calculatorAPI";
import { Link } from "react-router-dom";
import { DataEmpty } from "@/components/Molecules/404/DataEmpty";
import { Bag } from "react-iconly";

const CalculatorData = () => {
  const [calculator, setCalculator] = useState([]);

  useEffect(() => {
    fetchDataCalculator();
  }, []);

  const fetchDataCalculator = () => {
    getCalculator().then((result) => {
      setCalculator(result);
    });
  };

  return (
    <div className="p-5">
      <Card>
        {calculator.length === 0 ? (
          <DataEmpty
            icon={<Bag set="bulk" size={60} primaryColor="#bec0ca" />}
          />
        ) : (
          <div className="grid gap-5 lg:grid-cols-4">
            {calculator.map((item) => (
              <div
                key={item._id}
                className="p-3 border-2 border-[#E1E2E9] rounded-lg"
              >
                <div className="flex justify-between">
                  <h1 className="text-night_40 font-medium">
                    {item.namaBarang}
                  </h1>
                  <Link to={`view/${item._id}`}>
                    <Button
                      type="button"
                      variant="primary_2"
                      // onClick={() => handleRemove(item.name)}
                    >
                      View
                    </Button>
                  </Link>
                </div>
                <p className="text-night_30 text-sm">{item.namaClient}</p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default CalculatorData;
