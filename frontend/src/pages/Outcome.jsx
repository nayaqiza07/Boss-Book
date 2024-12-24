import { getAllTransaksi } from "@/api/transaksiApi";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import { priceFormat } from "@/components/utils";
// import { SidebarItem } from "@components/Organisms/Sidebar/SidebarItem";
import { useEffect, useState } from "react";
import { ArrowUp } from "react-iconly";

const Outcome = () => {
  const [outcome, setOutcome] = useState([]);
  const [totalAccomodation, setTotalAccomodation] = useState(0);
  const [totalAds, setTotalAds] = useState(0);
  const [totalEmployeeSalaries, setTotalEmployeeSalaries] = useState(0);
  const [totalElectricity, setTotalElectricity] = useState(0);
  const [totalTools, setTotalTools] = useState(0);
  const [totalRawMaterial, setTotalRawMaterial] = useState(0);
  const [totalAccessories, setTotalAccessories] = useState(0);
  const [totalFoamFabric, setTotalFoamFabric] = useState(0);
  const [totalPackaging, setTotalPackaging] = useState(0);

  useEffect(() => {
    fetchDataOutcome();
  }, []);

  const fetchDataOutcome = () => {
    getAllTransaksi().then(
      ({
        resOutcome,
        totalAccomodation,
        totalAds,
        totalEmployeeSalaries,
        totalElectricity,
        totalTools,
        totalRawMaterial,
        totalAccessories,
        totalFoamFabric,
        totalPackaging,
      }) => {
        setOutcome(resOutcome);
        setTotalAccomodation(totalAccomodation);
        setTotalAds(totalAds);
        setTotalEmployeeSalaries(totalEmployeeSalaries);
        setTotalElectricity(totalElectricity);
        setTotalTools(totalTools);
        setTotalRawMaterial(totalRawMaterial);
        setTotalAccessories(totalAccessories);
        setTotalFoamFabric(totalFoamFabric);
        setTotalPackaging(totalPackaging);
      }
    );
  };

  return (
    <>
      {/* Nav Link Start */}
      {/* <div className="border-b bg-white px-5 flex gap-3 overflow-auto">
        {SidebarItem.filter((item) => item.path === "/outcome").map((sub) =>
          sub.sidebarSubItem.map((s) => <p key={s.key}>{s.label}</p>)
        )}
      </div> */}
      {/* Nav Link End */}

      <div>
        <div className="p-5 grid gap-5 lg:grid-cols-3">
          {/* Top */}
          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Akomodasi"
                data={priceFormat(totalAccomodation)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body title="Iklan" data={priceFormat(totalAds)} />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Gaji Karyawan"
                data={priceFormat(totalEmployeeSalaries)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Listrik"
                data={priceFormat(totalElectricity)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body title="Alat" data={priceFormat(totalTools)} />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Bahan Baku"
                data={priceFormat(totalRawMaterial)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Aksesoris"
                data={priceFormat(totalAccessories)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Foam & Fabric"
                data={priceFormat(totalFoamFabric)}
              />
            </div>
          </CardSummary>

          <CardSummary>
            <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
            <div className="grid grid-cols-2 mt-8">
              <CardSummary.Body
                title="Packaging"
                data={priceFormat(totalPackaging)}
              />
            </div>
          </CardSummary>
        </div>
      </div>
    </>
  );
};

export default Outcome;
