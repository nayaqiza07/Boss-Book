import { LuLayoutDashboard } from "react-icons/lu";
import { CiBadgeDollar, CiShoppingCart, CiCalculator1 } from "react-icons/ci";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    // path:'/',
    icon: <LuLayoutDashboard size={20} />,
    active: true,
  },
  {
    key: "pemasukan",
    label: "Pemasukan",
    // path:'/pemasukan',
    icon: <CiBadgeDollar size={20} />,
  },
  {
    key: "pengeluaran",
    label: "Pengeluaran",
    // path:'/pengeluaran',
    icon: <CiShoppingCart size={20} />,
  },
  {
    key: "penghitungan",
    label: "Penghitungan",
    // path:'/penghitungan',
    icon: <CiCalculator1 size={20} />,
  },
];
