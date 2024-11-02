import { LuLayoutDashboard } from "react-icons/lu";
import { CiBadgeDollar, CiShoppingCart, CiCalculator1 } from "react-icons/ci";
import { TbFileInvoice } from "react-icons/tb";
// import { BiPurchaseTag } from "react-icons/bi";
// import { PiHandCoinsLight, PiCoin } from "react-icons/pi";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <LuLayoutDashboard size={20} />,
  },
  {
    key: "income",
    label: "Income",
    icon: <CiBadgeDollar size={20} />,
    sidebarSubItem: [
      {
        key: "sales",
        label: "Sales",
        // path: "/sales",
        // icon: <BiPurchaseTag size={20} />,
      },
      {
        key: "commission",
        label: "Commission",
        // path: "/sales",
        // icon: <PiHandCoinsLight size={20} />,
      },
      {
        key: "services revenue",
        label: "Services Revenue",
        // path: "/sales",
        // icon: <PiCoin size={20} />,
      },
    ],
  },
  {
    key: "outcome",
    label: "Outcome",
    // path: "/outcome",
    icon: <CiShoppingCart size={20} />,
    sidebarSubItem: [
      {
        key: "accommodation",
        label: "Accommodation",
        // path: "/sales",
        // icon: <BiPurchaseTag size={20} />,
      },
      {
        key: "ads",
        label: "Ads",
        // path: "/sales",
        // icon: <PiHandCoinsLight size={20} />,
      },
      {
        key: "employee salaries",
        label: "Employee Salaries",
        // path: "/sales",
        // icon: <PiCoin size={20} />,
      },
      {
        key: "electricity",
        label: "Electricity",
        // path: "/sales",
        // icon: <BiPurchaseTag size={20} />,
      },
      {
        key: "tools",
        label: "Tools",
        // path: "/sales",
        // icon: <PiHandCoinsLight size={20} />,
      },
      {
        key: "finishing",
        label: "Finishing",
        // path: "/sales",
        // icon: <PiCoin size={20} />,
      },
      {
        key: "raw material",
        label: "Raw Material",
        // path: "/sales",
        // icon: <BiPurchaseTag size={20} />,
      },
      {
        key: "accessories",
        label: "Accessories",
        // path: "/sales",
        // icon: <PiHandCoinsLight size={20} />,
      },
      {
        key: "foam & fabric",
        label: "Foam & Fabric",
        // path: "/sales",
        // icon: <PiCoin size={20} />,
      },
      {
        key: "packaging",
        label: "Packaging",
        // path: "/sales",
        // icon: <PiCoin size={20} />,
      },
    ],
  },
  {
    key: "invoice",
    label: "Invoice",
    path: "/invoice",
    icon: <TbFileInvoice size={20} />,
  },
  {
    key: "calculator",
    label: "Calculator",
    path: "/calculator",
    icon: <CiCalculator1 size={20} />,
  },
];
