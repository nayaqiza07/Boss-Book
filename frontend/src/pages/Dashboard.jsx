import { SelectMenuMonth } from "@components/Atoms/Select/SelectMenu";
import {
  Card,
  CardPrimary,
  CardCol,
  CardRow,
} from "@components/Organisms/Card/Card";
import { SummaryChart } from "@components/Organisms/Chart/SummaryChart";
import { OrderStatusChart } from "@components/Organisms/Chart/OrderStatusChart";
import CardSummary from "@/components/Organisms/Card/CardSummary";
import { User } from "react-iconly";

const Dashboard = () => {
  return (
    <div className="p-5 grid gap-5 lg:grid-cols-3">
      {/* 1st Start */}
      <CardSummary>
        <CardSummary.Header icon={<User colorStroke={"#130F26"} />} />
        <div className="grid grid-cols-3 mt-8">
          <CardSummary.Body title="Semua Contact" data={0} />
          <CardSummary.Body title="Client" data={0} />
          <CardSummary.Body title="Karyawan" data={0} />
        </div>
      </CardSummary>

      <Card>
        <div className="flex justify-between">
          <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
            {/* <HiOutlineUsers size={20} color="#130F26" /> */}
          </div>
          <SelectMenuMonth />
        </div>
        <div className="flex flex-row justify-between mt-7">
          <div>
            <h5 className="text-night_30">All Contact</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">Client</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">Karyawan</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex justify-between">
          <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
            {/* <HiOutlineShoppingBag size={20} color="#130F26" /> */}
          </div>
          <SelectMenuMonth />
        </div>

        <div className="grid grid-cols-2 justify-between mt-7 lg:flex lg:flex-row">
          <div>
            <h5 className="text-night_30">All Orders</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">Pending</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">In-Progress</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
          <div>
            <h5 className="text-night_30">Completed</h5>
            <p className="text-night_60 font-medium">0</p>
          </div>
        </div>
      </Card>
      {/* 1st End */}

      {/* 2nd Start */}
      <Card>
        <div className="py-[9px] px-[5px]">
          <div className="flex justify-between">
            <h3 className="text-night_60 font-medium">Order Status</h3>
            <SelectMenuMonth />
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

      <div className="grid gap-5">
        <CardPrimary>
          <div className="flex justify-between">
            <div className="bg-white/15 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              {/* <HiOutlineUsers size={20} color="white" /> */}
            </div>
          </div>
          <div className="grid grid-cols-2 mt-7">
            <div>
              <h5 className="text-white">All Clients 05</h5>
              <p className="text-white font-medium">0</p>
            </div>
            <div>
              <h5 className="text-white">Active</h5>
              <p className="text-white font-medium">0</p>
            </div>
          </div>
        </CardPrimary>

        <Card>
          <div className="flex justify-between">
            <div className="bg-secondary_30 rounded-lg w-[36px] h-[36px] flex justify-center items-center">
              {/* <HiOutlineUsers size={20} color="#130F26" /> */}
            </div>
            <SelectMenuMonth />
          </div>
          <div className="flex flex-row justify-between mt-7">
            <div>
              <h5 className="text-night_30">All Clients 06</h5>
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
      </div>

      <CardRow>
        <div className="flex justify-between">
          <h3 className="text-night_60 font-medium">Recent Orders</h3>
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
      </CardRow>
      {/* 2nd End */}

      {/* 3rd Start */}
      <CardCol>
        <div className="flex justify-between">
          <h3 className="text-night_60 font-medium">Summary</h3>
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
