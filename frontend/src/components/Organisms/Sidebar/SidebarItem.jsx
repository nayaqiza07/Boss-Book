import {
  ArrowDown,
  ArrowUp,
  Bag,
  Category,
  Document,
  Swap,
  Ticket,
  TwoUsers,
} from "react-iconly";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <Category primaryColor="#53545c" size={20} />,
    iconActive: <Category set="bulk" primaryColor="white" size={20} />,
  },
  {
    key: "transaksi",
    label: "Transaksi",
    path: "/transaksi",
    icon: <Swap set="bold" primaryColor="#53545c" size={20} />,
    iconActive: <Swap set="bulk" primaryColor="white" size={20} />,
  },
  {
    key: "income",
    label: "Income",
    path: "/income",
    icon: <ArrowDown set="bold" primaryColor="#53545c" size={20} />,
    iconActive: <ArrowDown set="bulk" primaryColor="white" size={20} />,
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
    icon: <ArrowUp set="bold" primaryColor="#53545c" size={20} />,
    iconActive: <ArrowUp set="bulk" primaryColor="white" size={20} />,
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
    key: "preorder",
    label: "Pre Order",
    path: "/piutang",
    icon: <Ticket primaryColor="#53545c" size={20} />,
    iconActive: <Ticket set="bulk" primaryColor="white" size={20} />,
    sidebarSubItem: [
      {
        key: "penjualan",
        label: "Penjualan",
        path: "/piutang",
      },
      {
        key: "gajiKaryawan",
        label: "Gaji Karyawan",
        path: "/utang",
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
    icon: <Bag primaryColor="#53545c" size={20} />,
    iconActive: <Bag set="bulk" primaryColor="white" size={20} />,
  },
  {
    key: "calculator",
    label: "Calculator",
    path: "/calculator",
    icon: <Document primaryColor="#53545c" size={20} />,
    iconActive: <Document set="bulk" primaryColor="white" size={20} />,
  },
  {
    key: "client",
    label: "Client",
    path: "/client",
    icon: <TwoUsers primaryColor="#53545c" size={20} />,
    iconActive: <TwoUsers set="bulk" primaryColor="white" size={20} />,
  },
];
