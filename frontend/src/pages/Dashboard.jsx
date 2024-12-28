import { useEffect, useState } from "react";
import { ArrowDown, ArrowUp, Buy, Paper, TwoUsers, Wallet } from "react-iconly";

// API
import { getAllClients } from "@/api/clientApi";
import { getAllTransaksi } from "@/api/transaksiApi";

// Components
import { priceFormat } from "@/components/utils";

// Atoms
import { SelectMenuMonth } from "@components/Atoms/Select/SelectMenu";

// Organisms
import {
  Card,
  // CardPrimary,
  CardCol,
  // CardRow,
} from "@components/Organisms/Card/Card";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import { OrderStatusChart } from "@components/Organisms/Chart/OrderStatusChart";
import { SummaryChart } from "@components/Organisms/Chart/SummaryChart";

const Dashboard = () => {
  // From Client API
  const [contact, setContact] = useState(0);
  const [client, setClient] = useState(0);
  const [karyawan, setKaryawan] = useState(0);

  // From Transaksi API
  const [pemasukan, setPemasukan] = useState(0);
  const [pengeluaran, setPengeluaran] = useState(0);
  const [modal, setModal] = useState(0);
  const [penjualan, setPenjualan] = useState(0);
  const [gajiKaryawan, setGajiKaryawan] = useState(0);

  const fetchDataContact = () => {
    getAllClients().then(({ totalContact, totalClient, totalKaryawan }) => {
      setContact(totalContact);
      setClient(totalClient);
      setKaryawan(totalKaryawan);
    });
  };

  const fetchDataTransaksi = () => {
    getAllTransaksi().then(
      ({
        totalIn,
        totalOut,
        totalModal,
        totalPenjualan,
        totalGajiKaryawan,
      }) => {
        setPemasukan(totalIn);
        setPengeluaran(totalOut);
        setModal(totalModal);
        setPenjualan(totalPenjualan);
        setGajiKaryawan(totalGajiKaryawan);
      }
    );
  };

  useEffect(() => {
    fetchDataContact();
  }, []);

  useEffect(() => {
    fetchDataTransaksi();
  }, []);

  return (
    <div className="p-5 grid gap-5 lg:grid-cols-3">
      {/* 1st Start */}

      <CardSummary backgroundColor="bg-[#FFB26F]">
        <CardSummary.Header icon={<Wallet primaryColor={"#130F26"} />} />
        <div className="grid mt-8">
          <CardSummary.Body title="Modal" data={priceFormat(modal)} />
        </div>
      </CardSummary>

      <CardSummary backgroundColor="bg-[#91DDCF]">
        <CardSummary.Header icon={<ArrowDown primaryColor={"#130F26"} />} />
        <div className="grid mt-8">
          <CardSummary.Body title="Pemasukan" data={priceFormat(pemasukan)} />
        </div>
      </CardSummary>

      <CardSummary backgroundColor="bg-[#FF8080]">
        <CardSummary.Header icon={<ArrowUp primaryColor={"#130F26"} />} />
        <div className="grid mt-8">
          <CardSummary.Body
            title="Pengeluaran"
            data={priceFormat(pengeluaran)}
          />
        </div>
      </CardSummary>
      {/* 1st End */}

      <CardSummary backgroundColor="bg-white">
        <CardSummary.Header icon={<TwoUsers primaryColor={"#130F26"} />} />
        <div className="grid grid-cols-3 mt-8">
          <CardSummary.Body title="Contact" data={contact} />
          <CardSummary.Body title="Client" data={client} />
          <CardSummary.Body title="Karyawan" data={karyawan} />
        </div>
      </CardSummary>

      <div className="grid gap-5">
        <CardSummary backgroundColor="bg-white">
          <CardSummary.Header icon={<Buy primaryColor={"#130F26"} />} />
          <div className="grid mt-8">
            <CardSummary.Body title="Penjualan" data={priceFormat(penjualan)} />
          </div>
        </CardSummary>

        <CardSummary backgroundColor="bg-white">
          <CardSummary.Header icon={<Paper primaryColor={"#130F26"} />} />
          <div className="grid mt-8">
            <CardSummary.Body
              title="Gaji Karyawan"
              data={priceFormat(gajiKaryawan)}
            />
          </div>
        </CardSummary>
      </div>

      {/* 2nd Start */}
      <Card>
        <div className="py-[9px] px-[5px]">
          <div className="flex justify-between">
            <h3 className="text-night_60 font-medium">Order Status</h3>
            {/* <SelectMenuMonth /> */}
          </div>
          <div className="mt-3 flex flex-row justify-between items-center">
            <div className="flex gap-2">
              {/* <GoDotFill color="#5570f1" /> */}
              <span className="text-night_10 text-xs">Completed</span>
            </div>
            <div className="flex gap-2">
              {/* <GoDotFill color="#97a5eb" /> */}
              <span className="text-night_10 text-xs">In-Progress</span>
            </div>
            <div className="flex gap-2">
              {/* <GoDotFill color="#ffcc91" /> */}
              <span className="text-night_10 text-xs">Pending</span>
            </div>
          </div>
          <div className="mt-7">
            <OrderStatusChart />
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between">
          <h3 className="text-night_60 font-medium">Order Terbaru</h3>
        </div>
        <div className="flex flex-row justify-between mt-7">
          <div>
            <h5 className="text-night_30">All Clients 07</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">Active</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">In-Active</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
        </div>
      </Card>
      {/* 2nd End */}

      {/* 3rd Start */}
      <CardCol>
        <div className="flex justify-between">
          <h3 className="text-night_60 font-medium">Grafik</h3>
          <SelectMenuMonth />
        </div>
        <div className="mt-7">
          <SummaryChart />
        </div>
      </CardCol>
      {/* 3rd End */}
    </div>
  );
};

export default Dashboard;
