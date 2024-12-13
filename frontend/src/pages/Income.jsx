import { useEffect, useState } from "react";
import { ArrowDown } from "react-iconly";

// Components
import CardSummary from "@/components/Organisms/Card/CardSummary";
import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import { getTransaksi } from "@/api/transaksiApi";
import { priceFormat } from "@/components/utils";

const Income = () => {
  const [income, setIncome] = useState([]);
  const [totalSales, setTotalSales] = useState(0);
  const [totalCommision, setTotalCommision] = useState(0);
  const [totalServicesRevenue, setTotalServicesRevenue] = useState(0);

  useEffect(() => {
    fetchDataIncome();
  }, []);

  const fetchDataIncome = () => {
    getTransaksi().then(
      ({ resIncome, totalSales, totalCommision, totalServicesRevenue }) => {
        setIncome(resIncome);
        setTotalSales(totalSales);
        setTotalCommision(totalCommision);
        setTotalServicesRevenue(totalServicesRevenue);
      }
    );
  };

  return (
    <>
      {/* Nav Link Start */}
      <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/income").map((sub) =>
          sub.sidebarSubItem.map((s) => <p key={s.key}>{s.label}</p>)
        )}
      </div>
      {/* Nav Link End */}

      <div>
        <div className="p-5 grid gap-5 lg:grid-cols-3">
          {/* Top */}
          <CardSummary>
            <CardSummary.Header icon={<ArrowDown primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Total Sales"
                data={priceFormat(totalSales)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowDown primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Total Commision"
                data={priceFormat(totalCommision)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowDown primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Total Services Revenue"
                data={priceFormat(totalServicesRevenue)}
              />
            </div>
          </CardSummary>
        </div>
      </div>
    </>
  );
};

export default Income;
