import {
  HiViewGridAdd,
  HiSwitchVertical,
  HiSwitchHorizontal,
  HiTrendingUp,
  HiTrendingDown,
  HiUsers,
  HiDocumentText,
  HiScale,
} from "react-icons/hi";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiViewGridAdd size={20} />,
  },
  {
    key: "transaksi",
    label: "Transaksi",
    path: "/transaksi",
    icon: <HiSwitchVertical size={20} />,
  },
  {
    key: "piutang",
    label: "Piutang",
    path: "/piutang",
    icon: <HiSwitchHorizontal size={20} />,
    sidebarSubItem: [
      {
        key: "piutang",
        label: "Piutang",
        path: "/piutang",
      },
      {
        key: "utang",
        label: "Utang",
        path: "/utang",
      },
    ],
  },
  {
    key: "income",
    label: "Income",
    path: "/income",
    icon: <HiTrendingUp size={20} />,
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
    path: "/outcome",
    icon: <HiTrendingDown size={20} />,
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
    icon: <HiDocumentText size={20} />,
  },
  {
    key: "calculator",
    label: "Calculator",
    path: "/calculator",
    icon: <HiScale size={20} />,
  },
  {
    key: "client",
    label: "Client",
    path: "/client",
    icon: <HiUsers size={20} />,
  },
];
