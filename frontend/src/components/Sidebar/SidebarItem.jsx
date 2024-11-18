import {
  Bag,
  Buy,
  Category,
  Document,
  PaperPlus,
  PaperNegative,
  User2,
} from "../Icon/Icon";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <Category colorStroke={"#53545c"} />,
  },
  {
    key: "transaksi",
    label: "Transaksi",
    path: "/transaksi",
    icon: <Buy colorStroke={"#53545c"} />,
  },
  {
    key: "piutang",
    label: "Piutang",
    path: "/piutang",
    icon: <Document colorStroke={"#53545c"} />,
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
    icon: <PaperPlus colorStroke={"#53545c"} />,
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
    icon: <PaperNegative colorStroke={"#53545c"} />,
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
  // {
  //   key: "invoice",
  //   label: "Invoice",
  //   path: "/invoice",
  //   icon: <HiDocumentText size={20} />,
  // },
  {
    key: "order",
    label: "Order",
    path: "/order",
    icon: <Bag colorStroke={"#53545c"} />,
  },
  {
    key: "calculator",
    label: "Calculator",
    path: "/calculator",
    icon: <Document colorStroke={"#53545c"} />,
  },
  {
    key: "client",
    label: "Client",
    path: "/client",
    icon: <User2 colorStroke={"#53545c"} />,
  },
];
