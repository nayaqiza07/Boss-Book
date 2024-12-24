import { useEffect, useState } from "react";
import {
  Activity,
  Buy,
  Category,
  Chart,
  Discount,
  Filter,
  Graph,
  MoreCircle,
  Paper,
  Send,
  Setting,
  TicketStar,
  Wallet,
} from "react-iconly";

// Components
import { getAllTransaksi } from "@/api/transaksiApi";
import { priceFormat } from "@/components/utils";
import { Card } from "@/components/Organisms/Card/Card";
import ContentReport from "@/components/Molecules/Report/ContentReport";
import { OrderStatusChart } from "@/components/Organisms/Chart/OrderStatusChart";

const Income = () => {
  const [totalPemasukan, setTotalPemasukan] = useState(0);
  const [totalModal, setTotalModal] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalCommision, setTotalCommision] = useState(0);
  const [totalServicesRevenue, setTotalServicesRevenue] = useState(0);

  const [totalPengeluaran, setTotalPengeluaran] = useState(0);
  const [totalAccomodation, setTotalAccomodation] = useState(0);
  const [totalAds, setTotalAds] = useState(0);
  const [totalEmployeeSalaries, setTotalEmployeeSalaries] = useState(0);
  const [totalElectricity, setTotalElectricity] = useState(0);
  const [totalTools, setTotalTools] = useState(0);
  const [totalRawMaterial, setTotalRawMaterial] = useState(0);
  const [totalAccessories, setTotalAccessories] = useState(0);
  const [totalFoamFabric, setTotalFoamFabric] = useState(0);
  const [totalPackaging, setTotalPackaging] = useState(0);
  const [totalOngkir, setTotalOngkir] = useState(0);

  useEffect(() => {
    fetchDataIncome();
  }, []);

  const fetchDataIncome = () => {
    getAllTransaksi().then(
      ({
        totalIn,
        totalModal,
        totalSales,
        totalCommision,
        totalServicesRevenue,

        totalOut,
        totalAccomodation,
        totalAds,
        totalEmployeeSalaries,
        totalElectricity,
        totalTools,
        totalRawMaterial,
        totalAccessories,
        totalFoamFabric,
        totalPackaging,
        totalOngkir,
      }) => {
        setTotalPemasukan(totalIn);
        setTotalModal(totalModal);
        setTotalSales(totalSales);
        setTotalCommision(totalCommision);
        setTotalServicesRevenue(totalServicesRevenue);

        setTotalPengeluaran(totalOut);
        setTotalAccomodation(totalAccomodation);
        setTotalAds(totalAds);
        setTotalEmployeeSalaries(totalEmployeeSalaries);
        setTotalElectricity(totalElectricity);
        setTotalTools(totalTools);
        setTotalRawMaterial(totalRawMaterial);
        setTotalAccessories(totalAccessories);
        setTotalFoamFabric(totalFoamFabric);
        setTotalPackaging(totalPackaging);
        setTotalOngkir(totalOngkir);
      }
    );
  };

  const dataPemasukan = [
    {
      kategori: "Modal",
      value: (totalModal / totalPemasukan) * 100,
    },
    {
      kategori: "Penjualan",
      value: (totalSales / totalPemasukan) * 100,
    },
    {
      kategori: "Komisi",
      value: (totalCommision / totalPemasukan) * 100,
    },
    {
      kategori: "Pendapatan Jasa",
      value: (totalServicesRevenue / totalPemasukan) * 100,
    },
  ];

  const dataPengeluaran = [
    {
      kategori: "Akomodasi",
      value: (totalAccomodation / totalPengeluaran) * 100,
    },
    {
      kategori: "Iklan",
      value: (totalAds / totalPengeluaran) * 100,
    },
    {
      kategori: "Gaji Pegawai",
      value: (totalEmployeeSalaries / totalPengeluaran) * 100,
    },
    {
      kategori: "Listrik",
      value: (totalElectricity / totalPengeluaran) * 100,
    },
    {
      kategori: "Peralatan",
      value: (totalTools / totalPengeluaran) * 100,
    },
    {
      kategori: "Bahan Baku",
      value: (totalRawMaterial / totalPengeluaran) * 100,
    },
    {
      kategori: "Aksesoris",
      value: (totalAccessories / totalPengeluaran) * 100,
    },
    {
      kategori: "Foam & Fabric",
      value: (totalFoamFabric / totalPengeluaran) * 100,
    },
    {
      kategori: "Packaging",
      value: (totalPackaging / totalPengeluaran) * 100,
    },
    {
      kategori: "Ongkos Kirim",
      value: (totalOngkir / totalPengeluaran) * 100,
    },
  ];

  return (
    <>
      <div>
        <div className="p-5 grid gap-5 lg:grid-cols-2">
          <Card>
            <div className="flex flex-col gap-5">
              <h1>Total Pemasukan {priceFormat(totalPemasukan)}</h1>
              <OrderStatusChart datas={dataPemasukan} />
              <h1>Detail Pemasukan</h1>
              <ContentReport
                icon={<Wallet primaryColor={"#130F26"} />}
                text="Modal"
                total={priceFormat(totalModal)}
              />
              <ContentReport
                icon={<Buy primaryColor={"#130F26"} />}
                text="Penjualan"
                total={priceFormat(totalSales)}
              />
              <ContentReport
                icon={<Chart primaryColor={"#130F26"} />}
                text="Komisi"
                total={priceFormat(totalCommision)}
              />
              <ContentReport
                icon={<Graph primaryColor={"#130F26"} />}
                text="Pendapatan Jasa"
                total={priceFormat(totalServicesRevenue)}
              />
            </div>
          </Card>

          <Card>
            <div className="flex flex-col gap-5">
              <h1>Total Pengeluaran {priceFormat(totalPengeluaran)}</h1>
              <OrderStatusChart datas={dataPengeluaran} />
              <h1>Detail Pengeluaran</h1>
              <ContentReport
                icon={<Wallet primaryColor={"#130F26"} />}
                text="Akomodasi"
                total={priceFormat(totalAccomodation)}
              />
              <ContentReport
                icon={<Discount primaryColor={"#130F26"} />}
                text="Iklan"
                total={priceFormat(totalAds)}
              />
              <ContentReport
                icon={<Paper primaryColor={"#130F26"} />}
                text="Gaji Pegawai"
                total={priceFormat(totalEmployeeSalaries)}
              />
              <ContentReport
                icon={<Activity primaryColor={"#130F26"} />}
                text="Listrik"
                total={priceFormat(totalElectricity)}
              />
              <ContentReport
                icon={<Setting primaryColor={"#130F26"} />}
                text="Peralatan"
                total={priceFormat(totalTools)}
              />
              <ContentReport
                icon={<Category primaryColor={"#130F26"} />}
                text="Bahan Baku"
                total={priceFormat(totalRawMaterial)}
              />
              <ContentReport
                icon={<MoreCircle primaryColor={"#130F26"} />}
                text="Aksesoris"
                total={priceFormat(totalAccessories)}
              />
              <ContentReport
                icon={<Filter primaryColor={"#130F26"} />}
                text="Foam & Fabric"
                total={priceFormat(totalFoamFabric)}
              />
              <ContentReport
                icon={<TicketStar primaryColor={"#130F26"} />}
                text="Packaging"
                total={priceFormat(totalPackaging)}
              />
              <ContentReport
                icon={<Send primaryColor={"#130F26"} />}
                text="Ongkos Kirim"
                total={priceFormat(totalOngkir)}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Income;
