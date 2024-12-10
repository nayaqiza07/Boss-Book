import {
  DashboardSquare01Icon,
  TransactionIcon,
  AutoConversationsIcon,
  AlignBoxTopLeftIcon,
  ShoppingBag02Icon,
  Calculator01Icon,
  UserMultipleIcon,
} from "hugeicons-react";

export const SidebarItem = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <DashboardSquare01Icon size={20} />,
  },
  {
    key: "transaksi",
    label: "Transaksi",
    path: "/transaksi",
    icon: <TransactionIcon size={20} />,
  },
  {
    key: "piutang",
    label: "Piutang",
    path: "/piutang",
    icon: <AlignBoxTopLeftIcon size={20} />,
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
    icon: <AutoConversationsIcon size={20} />,
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
    icon: <AutoConversationsIcon size={20} />,
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
    icon: <ShoppingBag02Icon size={20} />,
  },
  {
    key: "calculator",
    label: "Calculator",
    path: "/calculator",
    icon: <Calculator01Icon size={20} />,
  },
  {
    key: "client",
    label: "Client",
    path: "/client",
    icon: <UserMultipleIcon size={20} />,
  },
];
